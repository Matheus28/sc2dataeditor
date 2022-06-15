import assert from "assert";
import * as fs from "fs/promises";
import * as xmlparser from "fast-xml-parser";
import { possiblyBigNumberToString } from "./utils";
import { CatalogTypes, CatalogTypesInstance, CatalogName } from "./game_data";

export type XMLNode = ({
	tagname:string;
} | {
	tagname:"#text"|"#comment";
	text:string;
}) & {
	children:XMLNode[];
	attr:Record<string, string>;
	childrenByTagname:Record<string,XMLNode[]>;
	doNotEncode?:boolean;
};

type XMLParseResult = Record<string, XMLNode>;

export function getGameDataFilenameBase(rootMapDir:string){
	return rootMapDir + "/Base.SC2Data/GameData/";
}

export type GameDataIndex = {
	rootMapDir:string;
	includes:XMLNode;
	
	implicitDataspaces:Record<CatalogName, Dataspace>;
	dataspaces:Dataspace[];
};

export async function loadGameDataIndex(rootMapDir:string):Promise<GameDataIndex> {
	let v = await parseXML(await fs.readFile(getGameDataIndexFilename(rootMapDir), "utf8"));
	let index:GameDataIndex = {
		rootMapDir,
		includes: v["Includes"],
		implicitDataspaces: {} as any,
		dataspaces: [],
	};
	
	const base = getGameDataFilenameBase(rootMapDir);
	
	await Promise.all([
		(async function(){
			let implicits = await Promise.all((Object.keys(CatalogTypesInstance) as CatalogName[]).map(async function(catalog){
				const filename = base + catalog + "Data.xml";
				let v = await loadDataspace(rootMapDir, filename);
				if(!v){
					v = newDataspace(dataspaceFilenameToName(rootMapDir, filename));
				}
				
				return { dataspace: v, catalog };
			}));
			
			for(let {dataspace, catalog} of implicits){
				index.implicitDataspaces[catalog] = dataspace;
			}
		})(),
		
		(async function(){
			index.dataspaces = await loadIndexIncludes(index);
		})(),
	]);
	
	
	return index;
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
	assert(arr);
	
	let filenames:string[] = arr.map(v => {
		assert(v.attr);
		assert(v.attr["path"]);
		assert(v.attr["path"].startsWith(prefixToRemove));
		return base + v.attr["path"].slice(prefixToRemove.length)
	});
	
	return await Promise.all(filenames.map(async filename => {
		let v = await loadDataspace(index.rootMapDir, filename);
		if(!v) throw new Error(`Couldn't open file for dataspace ${filename}`);
		return v;
	}));
}

export interface Dataspace {
	name:string;
	
	data_:XMLNode;
	
	catalogs:{
		[Catalog in CatalogName]:{
			entries:XMLNode[];
			entryByID:Record<string, XMLNode & {tagname:keyof CatalogTypes[Catalog]}>;
		}
	};
};

const tagnameToCatalog:Record<string, CatalogName> = {};
for(let catalog of Object.keys(CatalogTypesInstance) as CatalogName[]){
	for(let type of Object.keys(CatalogTypesInstance[catalog])){
		if(type in tagnameToCatalog){
			throw new Error(`Duplicate entry for ${type} found. In ${catalog} and ${tagnameToCatalog[type]}`);
		}
		tagnameToCatalog[type] = catalog;
	}
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


async function loadDataspace(rootMapDir:string, filename:string):Promise<Dataspace|null>{
	let str:string;
	
	try {
		str = await fs.readFile(filename, "utf8");
	}catch(e){
		return null;
	}
	
	let data = (await parseXML(str))["Catalog"];
	let catalogs = createEmptyDataspaceCatalogs();
	
	{
		// Special handling for editor comments (any xml comment node before a catalog entry)
		// the way they're handled is by putting them in a fake <EditorComment> field inside the entry
		// this way they're carried around with it, like the editor does, and we can edit it like any other field
		const comments:string[] = [];
		for(let i = 0; i < data.children.length; ++i){
			let v = data.children[i];
			
			if(v.tagname == "#text"){
				assert("text" in v);
				console.error("Text node found in xml, this isn't okay: " + v.text + "\nEditor will delete it when it open this, I'm ignoring it");
				continue;
			}
			
			if(v.tagname == "#comment"){
				assert("text" in v);
				comments.push(v.text);
				data.children.splice(i, 1);
				--i;
				continue;
			}
			
			// All comments before this get attached to the node
			if(comments.length == 0) continue;
			
			let editorComment = comments.join("\n");
			comments.length = 0;
			let node = newNode("EditorComment", { value: editorComment });
			node.doNotEncode = true; // Prevent this from ever getting encoded
			appendChildToEnd(v, node);
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
		
		if(!(v.tagname in tagnameToCatalog)){
			console.log("Unknown catalog entry tagname: " + v.tagname);
			continue;
		}
		
		let catalogName = getCatalogNameByTagname(v.tagname);
		let catalog = catalogs[catalogName];
		
		let id = v.attr["id"];
		if(id !== undefined){
			if(id in catalog.entryByID){
				throw new Error("Duplicate ID found: " + id + " in " + catalogName + " catalog");
			}
			
			catalog.entryByID[id] = v as any;
		}
		
		catalog.entries.push(v);
	}
	
	return {
		name: dataspaceFilenameToName(rootMapDir, filename),
		data_: data,
		catalogs,
	};
}

export function addDataspaceEntry(dataspace:Dataspace, child:XMLNode){
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

export function newDataspace(name:string):Dataspace {
	return {
		name,
		catalogs: createEmptyDataspaceCatalogs(),
		data_: newNode("Catalog"),
	};
}

export function addDataspaceToIndex(index:GameDataIndex, dataspace:Dataspace){
	const base = getGameDataFilenameBase(index.rootMapDir);
	let filename = dataspaceNameToFilename(index.rootMapDir, dataspace.name);
	
	index.dataspaces.push(dataspace);
	const includesFilename = "GameData/" + filename.slice(base.length);
	addChild(index.includes, newNode("Catalog", { path: includesFilename }));
}

type RawNode = {
	// tagname => ParsedNode[] 
	":@"?:Record<string,string>;
} | {"#text":string} | {"$comment":[{"#text":string}]};

async function parseXML(str:string):Promise<XMLParseResult> {
	function normalizeNode(node:RawNode):XMLNode|undefined {
		if("$comment" in node){
			return {
				tagname: "#comment",
				children: [],
				childrenByTagname: {},
				text: node.$comment[0]["#text"],
				attr: {},
			};
		}
		
		if("#text" in node){
			if(node["#text"].trim().length == 0){
				return undefined;
			}
			
			return {
				tagname: "#text",
				children: [],
				childrenByTagname: {},
				text: node["#text"],
				attr: {},
			};
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
		
		if(node.tagname == "#comment"){
			assert('text' in node);
			return { $comment: [{"#text": node.text}] };
		}
		
		if(node.tagname == "#text"){
			assert('text' in node);
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
		let xml:XMLNode = shallowCopyNode(null, data.data_);
		
		// We need to make some changes to pull <EditorComment> out to an actual xml comment
		xml.childrenByTagname["#comment"] = xml.childrenByTagname["#comment"] || [];
		
		for(let i = 0; i < xml.children.length; ++i){
			let v = xml.children[i];
			let subnodes = v.childrenByTagname["EditorComment"];
			
			if(!subnodes || subnodes.length == 0) continue;
			assert(subnodes.length == 1);
			
			// Create comment nodes
			let editorComment = subnodes[0].attr["value"];
			if(editorComment){
				let nodes = editorComment.split(/\r?\n/).map(function(line){
					return newCommentNode(line);
				});
				
				xml.children.splice(i, 0, ...nodes);
				xml.childrenByTagname["#comment"] = xml.childrenByTagname["#comment"].concat(nodes);
				i += nodes.length;
			}
			
			// <EditorComment> must have doNotEncode set to true, so we don't need to clone this entry and remove it
			// It's okay to modify the original node anyway
			subnodes[0].doNotEncode = true;
		}
		
		await fs.writeFile(dataspaceNameToFilename(index.rootMapDir, data.name), encodeXML(xml), "utf8");
	}));
}

// Some arrays can be accessed through constants, which map simply to a number (Research3 -> 2, Minerals -> 0)
// Not sure if those constants are per-array or global
// Editor will prefer constants for the ones that have it (such as Research<N>), but we can write integers and it'll convert it
// next time it saves that data space
export function accessArray(node:XMLNode, name:string, index:string|number|null, createIfNotExists:true):XMLNode;
export function accessArray(node:XMLNode, name:string, index:string|number|null, createIfNotExists:boolean):XMLNode|undefined;
export function accessArray(node:XMLNode, name:string, index:string|number|null, createIfNotExists:boolean = false):XMLNode|undefined {
	if(index == null){
		if(createIfNotExists){
			let c = newNode(name);
			addChild(node, c);
			return c;
		}else{
			throw new Error("null index means we want to create");
		}
	}
	
	let subnodes = getChildrenByTagName(node, name);
	if(!subnodes || subnodes.length == 0){
		if(createIfNotExists){
			let c = newNode(name, { index: index.toString() });
			addChild(node, c);
			return c;
		}else{
			return undefined;
		}
	}
	
	for(let sub of subnodes){
		if(!sub.attr || sub.attr["index"] != index) continue;
		if(sub.attr["removed"]){
			if(createIfNotExists){
				delete sub.attr["removed"];
				return sub;
			}else{
				return undefined;
			}
		}
		
		return sub;
	}
	
	const bailWithIndex = function(){
		assert(index != null);
		if(createIfNotExists){
			let c = newNode(name, { index: index.toString() });
			addChild(node, c);
			return c;
		}else{
			return undefined;
		}
	};
	
	if(typeof index == 'string'){
		if(!/^[0-9]+$/.test(index)){
			return bailWithIndex();
		}
		
		index = parseInt(index, 10);
		assert(!isNaN(index)); // Regex should've prevented this
	}
	
	let hasUnnamedIndexes = false;
	for(let sub of subnodes){
		if(!sub.attr || typeof sub.attr["index"] == 'undefined'){
			hasUnnamedIndexes = true;
			break;
		}
	}
	
	if(!hasUnnamedIndexes){
		return bailWithIndex();
	}
	
	// Ideally... we'd also look into the parents to count the indexes they're taking up too...
	let indexesTaken = new Set<number>();
	
	for(let sub of subnodes){
		if(!sub.attr || typeof sub.attr["index"] == 'undefined') continue;
		if(!/^[0-9]+$/.test(sub.attr["index"])) continue;
		let v = parseInt(sub.attr["index"], 10);
		assert(!isNaN(index)); // Regex should've prevented this
		indexesTaken.add(v);
	}
	
	// Now we loop knowing the implied index of the unnamed array elements
	let i = 0;
	for(let sub of subnodes){
		if(sub.attr && typeof sub.attr["index"] != 'undefined') continue;
		
		if(i == index){
			return sub;
		}
		
		++i;
	}
	
	return bailWithIndex();
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

// If parent is not null, also change the parent to point to this new node
function shallowCopyNode(parent:XMLNode|null, node:XMLNode, childIndexHint?:number, childIndexInTagnamesHint?:number):XMLNode {
	let copy:XMLNode = {
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
		let arr:XMLNode[];
		
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

function newCommentNode(value:string):XMLNode {
	return {
		tagname: "#comment",
		children: [],
		childrenByTagname: {},
		attr: {},
		text: value,
	};
}

export function getChildrenByTagName(x:XMLNode, tag:string):XMLNode[]|undefined{
	return x.childrenByTagname ? x.childrenByTagname[tag] : undefined;
}

export function clearChildrenByTagName(x:XMLNode, tag:string){
	x.children = x.children.filter(v => v["tagname"] != tag);
	delete x.childrenByTagname[tag];
}

export function clearChildren(x:XMLNode){
	x.children.length = 0;
	x.childrenByTagname = {};
}
