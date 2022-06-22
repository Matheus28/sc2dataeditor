import assert from "assert";
import * as fs from "fs/promises";
import * as xmlparser from "fast-xml-parser";
import { possiblyBigNumberToString } from "./utils";
import { CatalogTypes, CatalogName, CatalogNameArray, CatalogTypesInstance, structNames, DataFieldSimpleTypes, isSimpleType, EnumType } from "./game_data";


interface XMLNodeBase<ChildType> {
	tagname:string;
	children:ChildType[];
	attr:Record<string, string>;
	childrenByTagname:Record<string,ChildType[]>;
	doNotEncode?:boolean;
}

interface XMLNodeComment<ChildType> extends XMLNodeBase<ChildType> {
	tagname:"#comment";
	text:string;
}

interface XMLNodeText<ChildType> extends XMLNodeBase<ChildType> {
	tagname:"#text";
	text:string;
}

export interface XMLNode extends XMLNodeBase<XMLNode> {
	
}

export interface XMLNodeCatalog extends XMLNodeBase<XMLNodeEntry> {};
export interface XMLNodeEntry extends XMLNodeBase<XMLNode> {
	editorComment?:string;
	declaredTokens?:Record<string, {
		value?:string;
		type?:DataFieldSimpleTypes;
	}>;
	attr:{
		id?:string;
		parent?:string;
		default?:string;
		[x:string]:string;
	};
}

type XMLParseResult = Record<string, XMLNode>;

export function getGameDataFilenameBase(rootMapDir:string){
	return rootMapDir + "/Base.SC2Data/GameData/";
}

export type GameDataIndex = {
	name:string|null; // null for the main file
	rootMapDir:string;
	includes:XMLNode;
	
	dependencies:GameDataIndex[];
	
	implicitDataspaces:Record<CatalogName, Dataspace>;
	dataspaces:Dataspace[];
	
	catalogDefaults:{
		[Catalog in CatalogName]:{
			[K in keyof CatalogTypes[Catalog]]?:{
				node: XMLNode & { tagname: K };
				dataspace:Dataspace;
			}
		}
	};
};

export async function loadDependency(rootMapDir:string):Promise<GameDataIndex>{
	return await loadGameDataIndex(rootMapDir);
}

function loadDependencyInWorker(rootMapDir:string):Promise<GameDataIndex> {
	return new Promise((resolve) => {
		let worker = new Worker(__dirname + "/game_data_loader_worker_wrapper.js");
		worker.postMessage([rootMapDir]);
		worker.onmessage = function(e){
			resolve(e.data);
			worker.terminate();
		}
	});
}

export async function loadGameDataIndex(rootMapDir:string):Promise<GameDataIndex> {
	let includes:XMLNode;
	
	{
		let str:string|undefined;
		try {
			str = await fs.readFile(getGameDataIndexFilename(rootMapDir), "utf8")
		}catch{}
		
		if(str !== undefined){
			includes = (await parseXML(str))["Includes"];
		}else{
			includes = newNode("Includes");
		}
	}
	
	{ // StarCoop.SC2Mod has this extra thingie with more things to load :(
		let str:string|undefined;
		try {
			str = await fs.readFile(rootMapDir + "/Base.SC2Data/Includes.xml", "utf8")
		}catch{}
		
		if(str !== undefined){
			let moreIncludes = (await parseXML(str))["Includes"];
			for(let node of moreIncludes.children){
				appendChildToEnd(includes, node);
			}
		}
	}
	
	let index:GameDataIndex = {
		name: null,
		rootMapDir,
		includes: includes,
		implicitDataspaces: {} as any,
		dependencies: [],
		dataspaces: [],
		catalogDefaults: {
			...(() => {
				let v = {} as GameDataIndex["catalogDefaults"];
				
				for(let catalogName of CatalogNameArray){
					v[catalogName] = {};
				}
				
				return v;
			})()
		},
	};
	
	const base = getGameDataFilenameBase(rootMapDir);
	
	await Promise.all([
		(async function(){
			let implicits = await Promise.all((Object.keys(CatalogTypesInstance) as CatalogName[]).map(async function(catalog){
				const filename = base + catalog + "Data.xml";
				let v = await loadDataspace(rootMapDir, filename, true, null);
				if(!v){
					v = newDataspace(dataspaceFilenameToName(rootMapDir, filename), true);
				}
				
				return { dataspace: v, catalog };
			}));
			
			for(let {dataspace, catalog} of implicits){
				dataspace.index = index;
				index.implicitDataspaces[catalog] = dataspace;
			}
		})(),
		
		(async function(){
			index.dataspaces = await loadIndexIncludes(index);
		})(),
		
		// Dependencies
		(async function(){
			let docInfoStr:string;
			
			try {
				docInfoStr = await fs.readFile(rootMapDir + "/DocumentInfo", "utf8");
			}catch(e){
				return; // No dependencies
			}
			
			let deps:string[] = [
				"bnet:Core (Mod)/0.0/999,file:Mods/Core.SC2Mod",
			];
			
			{
				let docInfo = (await parseXML(docInfoStr))["DocInfo"];
				let depsRoot = docInfo.childrenByTagname["Dependencies"];
				if(depsRoot && depsRoot.length > 0){
					assert(depsRoot.length == 1);
					
					let depsArr = depsRoot[0].childrenByTagname["Value"];
					if(depsArr){
						for(let node of depsArr){
							if(node.children.length == 0) continue; // Empty <Value />... skip
							assert(node.children.length == 1);
							
							let textNode = node.children[0];
							assert(isTextNode(textNode));
							
							deps.push(textNode.text);
						}
					}
				}
			}
			
			for(let dep of deps){
				if(!dep.startsWith("bnet:")) throw new Error("No idea how to handle this");
			}
			
			index.dependencies = await Promise.all(deps.map(async (dep:string) => {
				let r = /,file:([a-z0-9_\.]+(?:\/[a-z0-9_\.]+)*)$/i;
				let m = dep.match(r);
				if(m == null) throw new Error("Invalid dep line: " + dep);
				
				let m2 = m[1].match(/\/([a-z0-9_\.]+)$/i);
				if(!m2) throw new Error("Invalid dep line: " + dep);
				let name = m2[1]; // Core.SC2Mod
				
				let filename = "deps/SC2GameData/" + m[1].toLowerCase();
				console.time(filename);
				let v = await loadDependencyInWorker(filename);
				v.name = name;
				console.timeEnd(filename);
				return v;
			}));
		})(),
	]);
	
	{ // Find default field values
		function findDefaults(dataspace:Dataspace){
			for(let catalogName in dataspace.catalogs){
				let catalog = dataspace.catalogs[catalogName as CatalogName];
				for(let entry of catalog.entries){
					if('id' in entry.attr) continue;
					if(entry.tagname in index.catalogDefaults[catalogName as CatalogName]) continue;
					
					if(entry.attr["default"] !== "1"){
						console.warn(`Default entry for ${entry.tagname} in ${dataspace.name} is lacking default="1"`);
					}
					
					index.catalogDefaults[catalogName as CatalogName][entry.tagname] = {
						node: entry,
						dataspace: dataspace,
					};
				}
			}
		}
		
		forEachDataspace(index, true, true, findDefaults);
	}
	
	return index;
}

// If any callback returns false, stops iterating and returns false
// If all callbacks return true or undefined, returns true
export function forEachDataspace(index:GameDataIndex, self:boolean, dependencies:boolean, fn:(v:Dataspace)=>boolean|void):boolean {
	if(self){
		for(let catalog in index.implicitDataspaces){
			if(fn(index.implicitDataspaces[catalog as CatalogName]) === false) return false;
		}
		
		for(let dataspace of index.dataspaces){
			if(fn(dataspace) === false) return false;
		}
	}
	
	if(dependencies){
		for(let i = index.dependencies.length - 1; i >= 0; --i){
			if(forEachDataspace(index.dependencies[i], true, dependencies, fn) === false) return false;
		}
	}
	
	return true;
}

// If any callback returns false, stops iterating and returns false
// If all callbacks return true or undefined, returns true
export function forEachIndex(index:GameDataIndex, self:boolean, dependencies:boolean, fn:(v:GameDataIndex)=>boolean|void):boolean {
	if(self){
		if(fn(index) === false) return false;
	}
	
	if(dependencies){
		for(let i = index.dependencies.length - 1; i >= 0; --i){
			if(forEachIndex(index.dependencies[i], true, dependencies, fn) === false) return false;
		}
	}
	
	return true;
}

function getGameDataIndexFilename(rootMapDir:string):string {
	return rootMapDir + "/Base.SC2Data/GameData.xml";
}

export async function saveGameDataIndex(v:GameDataIndex):Promise<void> {
	await fs.writeFile(getGameDataIndexFilename(v.rootMapDir), await encodeXML(v.includes), "utf8");
}

async function loadIndexIncludes(index:GameDataIndex):Promise<Dataspace[]>{
	const prefixToRemove = "GameData/";
	
	const base = getGameDataFilenameBase(index.rootMapDir);
	const arr = getChildrenByTagName(index.includes, "Catalog");
	if(!arr || arr.length == 0) return [];
	
	let filenames:string[] = arr.map(v => {
		assert(v.attr);
		assert(v.attr["path"]);
		assert(v.attr["path"].startsWith(prefixToRemove));
		return base + v.attr["path"].slice(prefixToRemove.length)
	});
	
	return await Promise.all(filenames.map(async filename => {
		let v = await loadDataspace(index.rootMapDir, filename, false, index);
		if(!v) throw new Error(`Couldn't open file for dataspace ${filename}`);
		return v;
	}));
}

export interface Dataspace {
	name:string;
	isImplicit:boolean; // Or from a dependency
	index:GameDataIndex|null;
	
	data_:XMLNodeCatalog|null;
	structDefaults:StructDefaults;
	
	catalogs:{
		[Catalog in CatalogName]:{
			entries:XMLNode[];
			entryByID:Record<string, XMLNode & {tagname:keyof CatalogTypes[Catalog]}>;
		}
	};
};

type StructDefaults = Record<string,XMLNode>;

const tagnameToCatalog:Record<string, CatalogName> = {};
for(let catalog of Object.keys(CatalogTypesInstance) as CatalogName[]){
	for(let type of Object.keys(CatalogTypesInstance[catalog])){
		if(type in tagnameToCatalog){
			throw new Error(`Duplicate entry for ${type} found. In ${catalog} and ${tagnameToCatalog[type]}`);
		}
		tagnameToCatalog[type] = catalog;
	}
}

export function isValidCatalogName(v:string):v is CatalogName {
	return (CatalogNameArray as readonly string[]).indexOf(v) !== -1;
}

export function isValidTagname(tagname:string):boolean {
	return tagname in tagnameToCatalog;
}

export function getCatalogNameByTagname(tagname:string):CatalogName {
	assert(tagname in tagnameToCatalog);
	return tagnameToCatalog[tagname];
}

function createEmptyDataspaceCatalogs():Dataspace["catalogs"]{
	let catalogs:Partial<Dataspace["catalogs"]> = {};
		
	for(let catalog of Object.keys(CatalogTypesInstance) as CatalogName[]){
		catalogs[catalog] = {
			entries: [],
			entryByID: {},
		}
	}
	
	return catalogs as Dataspace["catalogs"];
}


async function loadDataspace(rootMapDir:string, filename:string, isImplicit:boolean, index:GameDataIndex|null):Promise<Dataspace|null>{
	let str:string;
	
	try {
		str = await fs.readFile(filename, "utf8");
	}catch(e){
		return null;
	}
	
	let data:XMLNodeCatalog = (await parseXML(str))["Catalog"];
	let catalogs = createEmptyDataspaceCatalogs();
	
	let structDefaults:Dataspace["structDefaults"] = {};
	
	{
		// Special handling for editor comments (any xml comment node before a catalog entry)
		// the way they're handled is attaching them to the node for that entry
		const comments:string[] = [];
		for(let i = 0; i < data.children.length; ++i){
			let v = data.children[i];
			
			if(isTextNode(v)){
				console.error("Text node found in xml, this isn't okay: " + v.text + "\nEditor will delete it when it open this, I'm ignoring it");
				continue;
			}
			
			if(isCommentNode(v)){
				comments.push(v.text);
				data.children.splice(i, 1);
				--i;
				continue;
			}
			
			if(v.tagname == "const"){
				//FIXME: handle this
				continue;
			}
			
			// All comments before this get attached to the node
			if(comments.length == 0) continue;
			v.editorComment = comments.join("\n");
			comments.length = 0;
		}
		
		delete data.childrenByTagname["#comment"];
		
		if(comments.length > 0){
			console.error("Comment node found at the end of catalog, this isn't okay: \"" + comments.join("\n") + "\"\nEditor will delete it when it open this, I'm ignoring it");
			
			for(let line of comments){
				appendChildToEnd(data, newCommentNode(line));
			}
		}
	}
	
	for(let v of data.children){
		// Ideally these should be attached to the closest child, so we can stop using data_
		if(v.tagname == "#text") continue;
		if(v.tagname == "#comment") continue;
		
		if(v.tagname == "const"){
			//FIXME: handle this
			continue;
		}
		
		if(!(v.tagname in tagnameToCatalog)){
			if(structNames.has(v.tagname)){
				structDefaults[v.tagname] = v;
			}else{
				console.warn(`Unknown catalog entry tagname: ${v.tagname} in ${filename}`);
			}
			continue;
		}
		
		let catalogName = getCatalogNameByTagname(v.tagname);
		let catalog = catalogs[catalogName];
		
		let id = v.attr["id"];
		if(id !== undefined){
			if(id in catalog.entryByID){
				throw new Error(`Duplicate ID found: ${id} in ${catalogName} catalog in ${filename}`);
			}
			
			catalog.entryByID[id] = v as any;
		}
		
		const isDefault = v.attr.default === "1";
		
		// Check for token declarations
		// Random note: the editor allows them anywhere, but moves them to the top when saving
		for(let i = 0; i < v.children.length; ++i){
			let child = v.children[i];
			if(child.tagname != "?token") continue;
			
			let id = child.attr["id"];
			if(id === undefined){
				console.warn(`Token with no id in ${filename}`);
				continue;
			}
			
			if(!isDefault){
				console.warn(`Token ${id} declared in a non-default class in ${filename}, deleting it. The editor was gonna do that anyway.`);
				// Deleting it keeps the record consistent with children. Makes things easier
				removeChild(v, child);
				--i;
				continue;
			}
			
			v.declaredTokens = v.declaredTokens || {};
			
			if(id in v.declaredTokens){
				console.warn(`Duplicate token ${id} in ${filename}`);
				continue;
			}
			
			let obj:(typeof v.declaredTokens)[string] = {};
			
			let value:string|undefined = child.attr["value"];
			if(value !== undefined) obj.value = value;
			
			let type:string|undefined = child.attr["type"];
			if(type !== undefined){
				if(isSimpleType(type)){
					obj.type = type;
				}else{
					console.warn(`Token ${id} has invalid type ${type} in ${filename}`);
				}
			}
			
			v.declaredTokens[id] = obj;
		}
		
		catalog.entries.push(v);
	}
	
	return {
		name: dataspaceFilenameToName(rootMapDir, filename),
		data_: data,
		catalogs,
		isImplicit,
		index,
		structDefaults,
	};
}

export function addDataspaceEntry(dataspace:Dataspace, child:XMLNode){
	assert(dataspace.data_ != null);
	assert("id" in child.attr);
	
	let catalogName = getCatalogNameByTagname(child.tagname);
	let catalog = dataspace.catalogs[catalogName];
	catalog.entries.push(child);
	
	let id = child.attr["id"];
	if(id !== undefined){
		if(id in catalog.entryByID){
			throw new Error("Duplicate ID found: " + id + " in " + catalogName + " catalog");
		}
		
		catalog.entryByID[id] = child as any;
	}
	
	addChild(dataspace.data_, child);
}

export function changeDataspaceEntryType(_dataspace:Dataspace, child:XMLNode, newType:string){
	assert("id" in child.attr);
	
	let catalogName = getCatalogNameByTagname(child.tagname);
	
	// Make sure we're not changing the catalog with the type
	assert(catalogName == getCatalogNameByTagname(newType));
	
	child.tagname = newType;
}

// DO NOT USE THIS ON DATASPACE datas_
export function addChild(parent:XMLNode, child:XMLNode){
	assert(child);
	
	parent.childrenByTagname[child.tagname] = parent.childrenByTagname[child.tagname] || [];
	parent.childrenByTagname[child.tagname].push(child);
	
	// Prefer putting child right after something of its own type...
	for(let i = parent.children.length-1; i >= 0; --i){
		if(parent.children[i]["tagname"] != child["tagname"]) continue;
		
		// Found one, add right after i
		parent.children.splice(i+1, 0, child);
		return;
	}
	
	// Couldn't find one, so just add it at the bottom
	parent.children.push(child);
}

function appendChildToEnd(parent:XMLNode, child:XMLNode){
	assert(child);
	
	parent.childrenByTagname[child.tagname] = parent.childrenByTagname[child.tagname] || [];
	parent.childrenByTagname[child.tagname].push(child);
	parent.children.push(child);
}

function dataspaceFilenameToName(rootMapDir:string, filename:string):string {
	const base = getGameDataFilenameBase(rootMapDir);
	assert(filename.startsWith(base));
	return filename.slice(base.length, -4).replace(/\\/g, '/');
}

function dataspaceNameToFilename(rootMapDir:string, name:string):string {
	const base = getGameDataFilenameBase(rootMapDir);
	
	return base + name + ".xml";
}

export function newDataspace(name:string, isImplicit:boolean):Dataspace {
	return {
		name,
		catalogs: createEmptyDataspaceCatalogs(),
		data_: newNode("Catalog"),
		isImplicit,
		index: null,
		structDefaults: {},
	};
}

export function addDataspaceToIndex(index:GameDataIndex, dataspace:Dataspace){
	const base = getGameDataFilenameBase(index.rootMapDir);
	let filename = dataspaceNameToFilename(index.rootMapDir, dataspace.name);
	
	dataspace.index = index;
	index.dataspaces.push(dataspace);
	const includesFilename = "GameData/" + filename.slice(base.length);
	addChild(index.includes, newNode("Catalog", { path: includesFilename }));
}

type RawNode = {
	// tagname => ParsedNode[] 
	":@"?:Record<string,string>;
} | {"#text":string|number} | {"$comment":[{"#text":string|number}]};

export function parseXML(str:string):XMLParseResult {
	function normalizeNode(node:RawNode):XMLNode|undefined {
		if("$comment" in node){
			return newCommentNode(node.$comment[0]["#text"].toString());
		}
		
		if("#text" in node){
			node["#text"] = node["#text"].toString();
			if(node["#text"].trim().length == 0){
				return undefined;
			}
			
			return newTextNode(node["#text"]);
		}
		
		let tagname:string|undefined;
		let unparsedChildren:RawNode[]|undefined;
		
		// Stupid library...
		const tmp = node as Record<string,RawNode[]>;
		for(let i in tmp){
			if(i == "#text") continue;
			if(i == "$comment") continue;
			if(i == ":@") continue;
			tagname = i;
			unparsedChildren = tmp[i];
			break;
		}
		
		if(typeof tagname == 'undefined') throw new Error("Failed to parse xml wtf");
		if(!unparsedChildren) throw new Error("Failed to parse xml wtf");
		
		let children:XMLNode[] = [];
		let childrenByTagname:Record<string, XMLNode[]> = {};
		for(let v of unparsedChildren){
			let vv = normalizeNode(v);
			if(!vv) continue;
			
			children.push(vv)
			childrenByTagname[vv.tagname] = childrenByTagname[vv.tagname] || [];
			childrenByTagname[vv.tagname].push(vv);
		}
		
		let res:XMLNode = {
			tagname,
			children,
			childrenByTagname,
			attr: node[":@"] || {},
		};
		
		return res;
	}
	
	let parser = new xmlparser.XMLParser({
		preserveOrder: true,
		ignoreAttributes: false,
		attributeNamePrefix: "",
		commentPropName: "$comment",
		textNodeName: "#text",
		processEntities: true,
		trimValues: false, // we unfortunately need this since it can't differentiate trimming text values and attribute values...
		
		htmlEntities: true,
		ignorePiTags: false,
		ignoreDeclaration: true,
		isArray: (_name, _jpath, _isLeafNode, isAttribute) => !isAttribute,
	});
	
	let res:RawNode[] = parser.parse(str);
	let ret:XMLParseResult = {};
	for(let v of res.map(normalizeNode)){
		if(!v) continue;
		ret[v.tagname] = v;
	}
	
	return ret;
}

function encodeXML(root:XMLNode){
	let builder = new xmlparser.XMLBuilder({
		preserveOrder: true,
		ignoreAttributes: false,
		attributeNamePrefix: "",
		commentPropName: "$comment",
		textNodeName: "#text",
		processEntities: true,
		
		format: true,
		indentBy: '    ',
		suppressEmptyNode: true,
	});
	
	function encodeNode(node:XMLNode):RawNode|undefined {
		if(node.doNotEncode) return undefined;
		
		if(isCommentNode(node)){
			return { $comment: [{"#text": node.text}] };
		}
		
		if(isTextNode(node)){
			return { "#text": node.text };
		}
		
		let r:RawNode = {};
		
		if(node.attr){
			r[":@"] = node.attr;
		}
		
		let tmp = r as Record<string, RawNode[]>;
		tmp[node.tagname] = node.children.map(v => encodeNode(v)).filter(notUndefined);
		
		// Shitty library needs me to fill this in
		if(node.tagname[0] == '?'){
			assert(node.children.length == 0);
			tmp[node.tagname] = [{"#text":""}];
		}
		
		return r;
	}
	
	return '<?xml version="1.0" encoding="utf-8"?>' + builder.build([encodeNode(root)]).replace(/\r?\n/g, '\r\n') + '\r\n';
}

function notUndefined<T>(v:T|undefined): v is T {
	return v !== undefined;
}

export async function saveDataspaces(index:GameDataIndex, datas:Dataspace[]){
	await Promise.all(datas.map(async function(data){
		assert(data.data_ != null);
		let xml = shallowCopyNode(null, data.data_);
		
		// We need to make some changes to pull editorComment out to an actual xml comment
		xml.childrenByTagname["#comment"] = xml.childrenByTagname["#comment"] || [];
		
		for(let i = 0; i < xml.children.length; ++i){
			let v = xml.children[i];
			
			if(!v.editorComment) continue;
			
			let nodes = v.editorComment.split(/\r?\n/).map(function(line){
				return newCommentNode(line);
			});
			
			// Insert comment nodes
			xml.children.splice(i, 0, ...nodes);
			xml.childrenByTagname["#comment"] = xml.childrenByTagname["#comment"].concat(nodes);
			i += nodes.length;
		}
		
		await fs.writeFile(dataspaceNameToFilename(index.rootMapDir, data.name), encodeXML(xml), "utf8");
	}));
}

export interface CatalogEntry {
	id:string;
	catalog:CatalogName;
}

export type CatalogFieldName = (string|[string, string|number])[];
export function catalogFieldNameToRef(v:CatalogFieldName):string {
	return v.map(vv => {
		if(typeof vv == "string") return vv;
		return `${vv[0]}[${vv[1]}]`;
	}).join(".");
}

function refToCatalogFieldName(v:string):CatalogFieldName {
	let arr = v.split(".");
	
	return arr.map(v => {
		let m = v.match(/^([^\[]+)\[([^\]]+)\]$/);
		if(!m) return v;
		
		return [m[1], m[2]];
	});
}

export interface CatalogField {
	entry:CatalogEntry;
	
	// For example, for:
	//
	//  <CAbilResearch id="EnergizerSightUpgrade" parent="CommonUpgrade">
    //  <InfoArray index="Research1" Time="15">
    //      <Resource index="Minerals" value="50"/>
    //      <Resource index="Vespene" value="15"/>
    //      <Vital index="Energy" value="50"/>
    //  </InfoArray>
	//
	// To access Minerals there, you'd have:
	//   name = [["InfoArray", "Research1"], ["Resource", "Minerals"]]
	// Because InfoArray is an array, and Resource is an array inside an item in that array
	//
	// To access Time there, you'd have:
	//   name = [["InfoArray", "Research1"], "Time"]
	// Because InfoArray is an array, but Time is just a value inside an item in that array
	// 
	// Note that in both cases, string indexes are just aliases for a number. Research1 is 0. Minerals is 0.
	
	name:CatalogFieldName;
}

export function catalogFieldToRef(v:CatalogField):string {
	return `${v.entry.catalog},${v.entry.id},${catalogFieldNameToRef(v.name)}`;
}

export function refToCatalogField(v:string):CatalogField|undefined {
	let arr = v.split(',');
	if(arr.length != 3) return undefined;
	if(!isValidCatalogName(arr[0])) return undefined;
	
	let name = refToCatalogFieldName(arr[2]);
	
	return {
		entry: {
			id: arr[1],
			catalog: arr[0],
		},
		
		name,
	}
}

// Does not look into parents!
export function getFieldArrayLength(container:XMLNode, name:string, nextIndex:number, enumType:null|EnumType):number {
	let subnodes = getChildrenByTagName(container, name);
	if(subnodes){
		for(let sub of subnodes){
			let nodeIndex:string|number|undefined = sub.attr["index"];
			if(nodeIndex === undefined){
				nodeIndex = nextIndex;
			}else if(/^[0-9]+$/.test(nodeIndex)){
				nodeIndex = parseInt(nodeIndex, 10);
			}else if(enumType != null && (nodeIndex in enumType.values)){
				nodeIndex = enumType.values[nodeIndex];
			}else{
				if(enumType != null){
					console.error(`Invalid index ${nodeIndex}, mapping only allows for: [${Object.keys(enumType.values).join(", ")}]`);
				}else{
					console.error(`Invalid index ${nodeIndex}, this array only accepts numeric indexes`);
				}
				
				continue;
			}
			
			nextIndex = Math.max(nodeIndex + 1, nextIndex);
		}
	}
	
	return nextIndex;
}

// Some arrays can be accessed through constants, which map simply to a number (Research3 -> 2, Minerals -> 0)
// Editor will prefer constants for the ones that have it (such as Research<N>), but we can write integers and it'll convert it
// next time it saves that data space
export type ArrayAccessReturnIndex = { num:number; str:string; };
export function accessArray(container:XMLNode, name:string, index:string|number|null, nextIndex:number, enumType:null|EnumType, createIfNotExists:true):{node:XMLNode, index?:ArrayAccessReturnIndex};
export function accessArray(container:XMLNode, name:string, index:string|number|null, nextIndex:number, enumType:null|EnumType, createIfNotExists:false):{node:XMLNode, index:ArrayAccessReturnIndex}|undefined;
export function accessArray(container:XMLNode, name:string, index:string|number|null, nextIndex:number, enumType:null|EnumType, createIfNotExists:boolean):{node:XMLNode, index?:ArrayAccessReturnIndex}|undefined;
export function accessArray(container:XMLNode, name:string, index:string|number|null, nextIndex:number, enumType:null|EnumType, createIfNotExists:boolean = false):{node:XMLNode, index?:ArrayAccessReturnIndex}|undefined {
	if(index == null){
		if(createIfNotExists){
			let c = newNode(name); // No index means next available one
			addChild(container, c);
			return {node: c};
		}else{
			throw new Error("null index means we want to create");
		}
	}
	
	if(typeof index == "string"){
		if(/^[0-9]+$/.test(index)){
			index = parseInt(index, 10);
		}else{
			assert(enumType != null);
			assert(index in enumType.values);
			index = enumType.values[index];
		}
	}
	
	let subnodes = getChildrenByTagName(container, name);
	if(subnodes){
		for(let sub of subnodes){
			let nodeIndex:string|number|undefined = sub.attr["index"];
			if(nodeIndex === undefined){
				nodeIndex = nextIndex;
			}else if(/^[0-9]+$/.test(nodeIndex)){
				nodeIndex = parseInt(nodeIndex, 10);
			}else if(enumType != null && (nodeIndex in enumType.values)){
				nodeIndex = enumType.values[nodeIndex];
			}else{
				if(enumType != null){
					console.error(`Invalid index ${nodeIndex}, mapping only allows for: [${Object.keys(enumType.values).join(", ")}]`);
				}else{
					console.error(`Invalid index ${nodeIndex}, this array only accepts numeric indexes`);
				}
				
				continue;
			}
			
			nextIndex = Math.max(nodeIndex + 1, nextIndex);
			
			if(nodeIndex === index){
				if(sub.attr["removed"]){
					if(createIfNotExists){
						delete sub.attr["removed"];
						return {node: sub, index: arrayIndexToObject(nodeIndex, enumType) };
					}else{
						return undefined;
					}
				}
				
				return {node: sub, index: arrayIndexToObject(nodeIndex, enumType) };
			}
		}
	}
	
	if(createIfNotExists){
		let c = newNode(name, { index: arrayIndexToString(index, enumType) });
		addChild(container, c);
		return {node: c};
	}else{
		return undefined;
	}
}

function arrayIndexToObject(index:number, enumType:EnumType|null):ArrayAccessReturnIndex {
	return { num: index, str: arrayIndexToString(index, enumType) };
}

function arrayIndexToString(index:number, enumType:EnumType|null):string {
	if(enumType != null){
		if(index in enumType.reverseValues){
			return enumType.reverseValues[index];
		}else{
			console.warn(`Enum doesn't have a value for ${index}. Falling back to numeric index`);
			return index.toString();
		}
	}else{
		return index.toString();
	}
}

export function accessStruct(node:XMLNode, name:string, createIfNotExists:true):XMLNode;
export function accessStruct(node:XMLNode, name:string, createIfNotExists:boolean):XMLNode|undefined;
export function accessStruct(node:XMLNode, name:string, createIfNotExists:boolean = false):XMLNode|undefined {
	let subnodes = getChildrenByTagName(node, name);
	if(!subnodes || subnodes.length == 0){
		if(createIfNotExists){
			let c = newNode(name);
			addChild(node, c);
			return c;
		}else{
			return undefined;
		}
	}
	
	return subnodes[0];
}

export function newNode<Tag extends string>(tag:Tag, attrs?:Record<string, string>):XMLNode & { tagname:Tag; } {
	return {
		tagname: tag,
		children: [],
		childrenByTagname: {},
		attr: attrs || {},
	};
}


function isCommentNode<T>(x:XMLNodeBase<T>):x is XMLNodeComment<T> {
	return x.tagname == "#comment";
}

function isTextNode<T>(x:XMLNodeBase<T>):x is XMLNodeComment<T> {
	return x.tagname == "#text";
}

// If parent is not null, also change the parent to point to this new node
function shallowCopyNode<T extends XMLNodeBase<U>, U extends XMLNodeBase<V>, V>(parent:XMLNodeBase<T>|null, node:T, childIndexHint?:number, childIndexInTagnamesHint?:number):T {
	let copy:T = {
		...node,
		tagname: node.tagname,
		children: node.children.concat(),
		childrenByTagname: {}, // done below
		attr: Object.assign({}, node.attr),
	};
	
	// clone childrenByTagname
	for(let child of copy.children){
		copy.childrenByTagname[child.tagname] = copy.childrenByTagname[child.tagname] || [];
		copy.childrenByTagname[child.tagname].push(child);
	}
	
	if(parent != null){
		let arr:T[];
		
		arr = parent.children;
		if(childIndexHint !== undefined && parent.children[childIndexHint] === node){
			arr[childIndexHint] = copy;
		}else{
			let i = parent.children.indexOf(node);
			assert(i != -1);
			arr[i] = copy;
		}
		
		assert(node.tagname in parent.childrenByTagname);
		arr = parent.childrenByTagname[node.tagname];
		
		if(childIndexInTagnamesHint !== undefined && arr[childIndexInTagnamesHint] === node){
			arr[childIndexInTagnamesHint] = copy;
		}else{
			let i = arr.indexOf(node);
			assert(i != -1);
			arr[i] = copy;
		}
	}
	
	return copy;
}

function newCommentNode(value:string):XMLNodeComment<XMLNode> {
	return {
		tagname: "#comment",
		children: [],
		childrenByTagname: {},
		attr: {},
		text: value,
	};
}

function newTextNode(value:string):XMLNodeText<XMLNode> {
	return {
		tagname: "#text",
		children: [],
		childrenByTagname: {},
		attr: {},
		text: value,
	};
}

export function getChildrenByTagName(x:XMLNode, tag:string):XMLNode[]|undefined{
	return x.childrenByTagname ? x.childrenByTagname[tag] : undefined;
}

export function removeChild(parent:XMLNode, child:XMLNode){
	let i = parent.children.indexOf(child);
	if(i === -1) return;
	
	parent.children.splice(i, 1);
	
	let arr = parent.childrenByTagname[child.tagname];
	assert(arr); // if it had this child, it must've had this array
	i = arr.indexOf(child);
	assert(i !== -1); // if it had this child, it must be here
	arr.splice(i, 1);
	
	if(arr.length == 0) delete parent.childrenByTagname[child.tagname];
}

export function removeChildrenByTagName(x:XMLNode, tag:string){
	x.children = x.children.filter(v => v["tagname"] != tag);
	delete x.childrenByTagname[tag];
}

export function clearChildren(x:XMLNode){
	x.children.length = 0;
	x.childrenByTagname = {};
}
