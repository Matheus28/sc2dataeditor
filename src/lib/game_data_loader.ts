import assert from "assert";
import * as fs from "fs/promises";
import { CatalogTypes, CatalogName, CatalogNameArray, CatalogTypesInstance, structNames, DataFieldSimpleTypes, isSimpleType, EnumType } from "./game_data";
import { getTxtFileName, importStringsFile } from "./game_strings_loader";
import { importHotkeysFile } from "./game_hotkeys_loader";
import { runInWorker } from "./game_data_loader_worker_manager";
import fxml from "./fxml";

type XMLParseResult = fxml.Document;

export interface XMLNodeEntry extends fxml.ElementNode {
	editorComment?:string;
	declaredTokens?:Record<string, {
		value?:string;
		type?:DataFieldSimpleTypes;
	}>;
};

export function getGameDataFilenameBase(rootMapDir:string){
	return rootMapDir + "/Base.SC2Data/GameData/";
}

export type GameDataIndex = {
	name:string|null; // null for the main file
	rootMapDir:string;
	includes:XMLParseResult;
	
	strings:Record<string, string>;
	hotkeys:Record<string, string>;
	objectStrings:Record<string, string>;
	
	dependencies:GameDataIndex[];
	
	implicitDataspaces:Record<CatalogName, Dataspace>;
	dataspaces:Dataspace[];
	
	catalogDefaults:{
		[Catalog in CatalogName]:{
			[K in keyof CatalogTypes[Catalog]]?:{
				node:XMLNodeEntry;
				dataspace:Dataspace;
			}
		}
	};
};

export async function loadDependency(rootMapDir:string):Promise<GameDataIndex>{
	return await loadGameDataIndex(rootMapDir);
}

export async function loadGameDataIndex(rootMapDir:string):Promise<GameDataIndex> {
	let includes:XMLParseResult;
	
	console.log(getGameDataIndexFilename(rootMapDir));
	
	{
		let str:string|undefined;
		try {
			str = await fs.readFile(getGameDataIndexFilename(rootMapDir), "utf8")
		}catch{}
		
		if(str !== undefined){
			includes = fxml.Document.fromString(str);
			assert(includes && includes.root.tagname == "Includes");
		}else{
			includes = fxml.Document.fromScratch("Includes");
		}
	}
	
	{ // StarCoop.SC2Mod has this extra thingie with more things to load :(
		let str:string|undefined;
		try {
			str = await fs.readFile(rootMapDir + "/Base.SC2Data/Includes.xml", "utf8")
		}catch{}
		
		if(str !== undefined){
			let moreIncludes = fxml.Document.fromString(str);
			assert(moreIncludes && moreIncludes.root.tagname == "Includes");
			
			includes.root.appendChildrenFrom(moreIncludes.root);
		}
	}
	
	let index:GameDataIndex = {
		name: null,
		rootMapDir,
		strings: {},
		hotkeys: {},
		objectStrings: {},
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
		// Dependencies
		(async function(){
			//FIXME: disabled
			
			/*
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
				let docInfo = fxml.Document.fromString(docInfoStr);
				assert(docInfo && docInfo.root.tagname == "DocInfo");
				
				let depsRoot = docInfo.root.getChildrenByTagName("Dependencies");
				if(depsRoot && depsRoot.length > 0){
					assert(depsRoot.length == 1);
					
					let depsArr = depsRoot[0].getChildrenByTagName("Value");
					if(depsArr){
						for(let node of depsArr){
							if(node.children.length == 0) continue; // Empty <Value />... skip
							assert(node.children.length == 1);
							
							let textNode = node.children[0];
							assert(textNode instanceof fxml.TextNode);
							deps.push(textNode.text);
						}
					}
				}
			}
			
			function processDepLine(dep:string):{ name:string; filename:string; } {
				let m = dep.match(/,file:([a-z0-9_\.]+(?:\/[a-z0-9_\.]+)*)$/i);
				if(m == null) throw new Error("Invalid dep line: " + dep);
				
				let m2 = m[1].match(/\/([a-z0-9_\.]+)$/i);
				if(!m2) throw new Error("Invalid dep line: " + dep);
				let name = m2[1]; // Core.SC2Mod, note: this value is used in a LOT of places... think carefully about changing the format
				let filename = "deps/SC2GameData/" + m[1].toLowerCase();
				
				return {name, filename};
			}
			
			// Some dependencies imply other dependencies... but this isn't written anywhere...
			// Note: we declare the with just the last part of the name, and we'll unsimplify them very soon
			const transitiveDependencies:Record<string, string[]> = {
				"LibertyMulti.SC2Mod": ["Liberty.SC2Mod"],
				"Liberty.SC2Campaign": ["Liberty.SC2Mod"],
				"LibertyStory.SC2Campaign": ["Liberty.SC2Campaign"],
				
				"Swarm.SC2Mod": ["Liberty.SC2Mod"],
				"SwarmMulti.SC2Mod": ["Swarm.SC2Mod"],
				"Swarm.SC2Campaign": ["Liberty.SC2Campaign", "Swarm.SC2Mod"],
				"SwarmStory.SC2Campaign": ["Liberty.SC2Campaign", "Swarm.SC2Campaign"],
				
				"Void.SC2Mod": ["Swarm.SC2Mod"],
				"VoidMulti.SC2Mod": ["Void.SC2Mod"],
				"Void.SC2Campaign": ["Swarm.SC2Campaign", "Void.SC2Mod"],
				"VoidStory.SC2Campaign": ["Swarm.SC2Campaign", "Void.SC2Campaign"],
				
				"NovaStoryAssets.SC2Mod": ["Void.SC2Campaign"],
				
				"StarCoop.SC2Mod": ["Void.SC2Campaign"],
				
				"BalanceMulti.SC2Mod": ["Void.SC2Mod"],
				
				"WarClassic.SC2Mod": ["Liberty.SC2Mod", "War3.SC2Mod"],
				"WarClassicSystem.SC2Mod": ["WarClassic.SC2Mod"],
				"WarCoopData.SC2Mod": ["WarClassicSystem.SC2Mod"],
			};
			
			
			{ // Process lines from above to unsimplify them into full dep lines
				const fullnames:string[] = [
					"bnet:Glue/0.0/999,file:Mods/Glue.SC2Mod",
					
					"bnet:Liberty (Mod)/0.0/999,file:Mods/Liberty.SC2Mod",
					"bnet:Liberty Multi (Mod)/0.0/999,file:Mods/LibertyMulti.SC2Mod",
					"bnet:Liberty (Campaign)/0.0/999,file:Campaigns/Liberty.SC2Campaign",
					"bnet:Liberty Story (Campaign)/0.0/999,file:Campaigns/LibertyStory.SC2Campaign",
					
					"bnet:Swarm (Mod)/0.0/999,file:Mods/Swarm.SC2Mod",
					"bnet:Swarm Multi (Mod)/0.0/999,file:Mods/SwarmMulti.SC2Mod",
					"bnet:Swarm (Campaign)/0.0/999,file:Campaigns/Swarm.SC2Campaign",
					"bnet:Swarm Story (Campaign)/0.0/999,file:Campaigns/SwarmStory.SC2Campaign",
					
					"bnet:Void (Mod)/0.0/999,file:Mods/Void.SC2Mod",
					"bnet:Void Multi (Mod)/0.0/999,file:Mods/VoidMulti.SC2Mod",
					"bnet:Void (Campaign)/0.0/999,file:Campaigns/Void.SC2Campaign",
					"bnet:Void Story (Campaign)/0.0/999,file:Campaigns/VoidStory.SC2Campaign",
					
					"bnet:Balance Multi (Mod)/0.0/999,file:Mods/BalanceMulti.SC2Mod",
					
					"bnet:Nova Covert Ops (Art Mod)/0.0/999,file:Mods/NovaStoryAssets.SC2Mod",
					
					"bnet:Co-op Mission/0.0/999,file:Mods/StarCoop/StarCoop.SC2Mod",
					
					"bnet:Warcraft III (Art Mod)/0.0/999,file:Mods/War3.SC2Mod",
					"bnet:Warcraft Coop (Art Mod)/0.0/999,file:Mods/WarCoop.SC2Mod",
					"bnet:Warcraft Classic/0.0/999,file:Mods/WarCoop/WarClassic.SC2Mod",
					"bnet:Warcraft Classic System/0.0/999,file:Mods/WarCoop/WarClassicSystem.SC2Mod",
					"bnet:Warcraft Coop (Data Mod)/0.0/999,file:Mods/WarCoop/WarCoopData.SC2Mod",
				];
				
				for(let dep of fullnames){
					let {name} = processDepLine(dep);
					
					for(let i in transitiveDependencies){
						let arr = transitiveDependencies[i];
						
						if(i === name){
							// We need to change the key
							transitiveDependencies[dep] = arr;
							delete transitiveDependencies[i];
						}
						
						for(let j = 0; j < arr.length; ++j){
							if(arr[j] == name) arr[j] = dep;
						}
					}
				}
				
				for(let i in transitiveDependencies){
					assert(i.indexOf("file:") !== -1, `Simplified dep line did not get resolved: ${i}`);
					for(let line of transitiveDependencies[i]){
						assert(line.indexOf("file:") !== -1, `Simplified dep line did not get resolved: ${line}`);
					}
				}
			}
			
			
			let depsSet = new Set(deps);
			
			for(let i = 0; i < deps.length; ++i){
				let line = deps[i];
				if(line in transitiveDependencies){
					let depsAdded = 0;
					for(let newDep of transitiveDependencies[line]){
						if(depsSet.has(newDep)) continue;
						depsSet.add(newDep);
						
						deps.splice(i, 0, newDep);
						depsAdded += 1;
					}
					
					// Loop again through these deps to find more transitive dependencies
					if(depsAdded > 0) i -= depsAdded - 1;
				}
			}
			
			for(let dep of deps){
				if(!dep.startsWith("bnet:")) throw new Error("No idea how to handle this");
			}
			
			index.dependencies = await Promise.all(deps.map(async (dep:string) => {
				let {name, filename} = processDepLine(dep);
				
				console.time(filename);
				let v = await runInWorker("loadDependency", filename);
				v.name = name;
				console.timeEnd(filename);
				return v;
			}));
			*/
		})(),
		
		// Our implicit includes
		(async function(){
			let implicits = await Promise.all((Object.keys(CatalogTypesInstance) as CatalogName[]).map(async function(catalog){
				const filename = base + catalog + "Data.xml";
				let v = await loadDataspace(rootMapDir, filename, true, index);
				if(!v){
					v = newDataspace(dataspaceFilenameToName(rootMapDir, filename), true);
					v.index = index;
				}
				
				return { dataspace: v, catalog };
			}));
			
			for(let {dataspace, catalog} of implicits){
				index.implicitDataspaces[catalog] = dataspace;
			}
		})(),
		
		// Our dataspaces
		(async function(){
			index.dataspaces = await loadIndexIncludes(index);
		})(),
		
		(async function(){
			try {
				index.strings = await importStringsFile(getTxtFileName(rootMapDir, "enUS"));
			}catch(e){
				// Some don't have strings... so it's empty :D
			}
		})(),
		
		(async function(){
			try {
				index.hotkeys = await importHotkeysFile(rootMapDir);
			}catch(e){
				// Some don't have strings... so it's empty :D
			}
		})(),
		
		
		(async function(){
			try {
				index.objectStrings = await importStringsFile(getTxtFileName(rootMapDir, "enUS", "ObjectStrings.txt"));
			}catch(e){
				// Some don't have strings... so it's empty :D
			}
		})(),
		
	]);
	
	{ // Find default field values
		function findDefaults(dataspace:Dataspace){
			for(let catalogName in dataspace.catalogs){
				let catalog = dataspace.catalogs[catalogName as CatalogName];
				for(let entry of catalog.entries){
					if(entry.hasAttribute("id")) continue;
					if(entry.tagname in index.catalogDefaults[catalogName as CatalogName]) continue;
					
					if(entry.getAttribute("default") !== "1"){
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
	const arr = index.includes.root.getChildrenByTagName("Catalog");
	if(!arr || arr.length == 0) return [];
	
	let filenames:string[] = arr.map(v => {
		let path = v.getAttribute("path");
		assert(path);
		assert(path.startsWith(prefixToRemove));
		return base + path.slice(prefixToRemove.length)
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
	
	data_:fxml.Document;
	structDefaults:StructDefaults;
	
	catalogs:{
		[Catalog in CatalogName]:{
			entries:XMLNodeEntry[];
			entryByID:Record<string, XMLNodeEntry>;
		}
	};
};

type StructDefaults = Record<string, fxml.ElementNode>;

const tagnameToCatalog:Record<string, CatalogName> = {};
for(let catalogName of CatalogNameArray){
	for(let type of Object.keys(CatalogTypesInstance[catalogName])){
		if(type in tagnameToCatalog){
			throw new Error(`Duplicate entry for ${type} found. In ${catalogName} and ${tagnameToCatalog[type]}`);
		}
		tagnameToCatalog[type] = catalogName;
	}
}

export function isValidCatalogName(v:string):v is CatalogName {
	return (CatalogNameArray as readonly string[]).indexOf(v) !== -1;
}

export function isValidTagname(tagname:string):boolean {
	return tagname in tagnameToCatalog;
}

export function getCatalogNameByTagname(tagname:string):CatalogName {
	assert(tagname in tagnameToCatalog, `Tagname ${tagname} not in catalog`);
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


export async function loadDataspace(rootMapDir:string, filename:string, isImplicit:boolean, index:GameDataIndex):Promise<Dataspace|null>{
	let str:string;
	
	try {
		str = await fs.readFile(filename, "utf8");
	}catch(e){
		return null;
	}
	
	return loadDataspaceFromString(rootMapDir, filename, str, isImplicit, index);
}

export function loadDataspaceFromString(rootMapDir:string, filename:string, str:string, isImplicit:boolean, index:GameDataIndex):Dataspace {
	let data = fxml.Document.fromString(str);
	
	assert(data && data.root.tagname == "Catalog");
	let catalogs = createEmptyDataspaceCatalogs();
	
	let structDefaults:Dataspace["structDefaults"] = {};
	
	{
		// Special handling for editor comments (any xml comment node before a catalog entry)
		// the way they're handled is attaching them to the node for that entry
		const comments:string[] = [];
		for(let i = 0; i < data.root.children.length; ++i){
			let v = data.root.children[i];
			
			if(v instanceof fxml.TextNode){
				console.error("Text node found in xml, this isn't okay: " + v.text + "\nEditor will delete it when it open this, I'm ignoring it");
				continue;
			}
			
			if(v instanceof fxml.CommentNode){
				comments.push(v.text);
				data.root.removeChild(v, i);
				--i;
				continue;
			}
			
			if(!(v instanceof fxml.ElementNode)){
				console.error("Unknown node found in xml: " + v.encode());
				continue;
			}
			
			if(v.tagname == "const"){
				//FIXME: handle this
				continue;
			}
			
			let vv:XMLNodeEntry = v;
			
			// All comments before this get attached to the node
			if(comments.length == 0) continue;
			vv.editorComment = comments.join("\n");
			comments.length = 0;
		}
		
		if(comments.length > 0){
			console.error("Comment node found at the end of catalog, this isn't okay: \"" + comments.join("\n") + "\"\nEditor will delete it when it open this, I'm ignoring it");
			
			for(let line of comments){
				data.root.appendChild(new fxml.CommentNode(undefined, line));
			}
		}
	}
	
	for(let v of data.root.children){
		// Ideally these should be attached to the closest child, so we can stop using data_
		if(!(v instanceof fxml.ElementNode)) continue;
		
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
		
		let id = v.getAttribute("id")
		if(id !== undefined){
			if(id in catalog.entryByID){
				throw new Error(`Duplicate ID found: ${id} in ${catalogName} catalog in ${filename}`);
			}
			
			catalog.entryByID[id] = v as any;
		}
		
		parseEntryXMLNode(v, filename);
		
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

function parseEntryXMLNode(v:XMLNodeEntry, filename:string){
	const isDefault = v.getAttribute("default") === "1";
	
	// Check for token declarations
	// Random note: the editor allows them anywhere, but moves them to the top when saving
	for(let i = 0; i < v.children.length; ++i){
		let child = v.children[i];
		if(!(child instanceof fxml.InstructionNode)) continue;
		if(child.tagname != "token") continue;
		
		let id = child.getAttribute("id");
		if(id === undefined){
			console.warn(`Token with no id in ${filename}`);
			continue;
		}
		
		if(!isDefault){
			console.warn(`Token ${id} declared in a non-default class in ${filename}, deleting it. The editor was gonna do that anyway.`);
			// Deleting it keeps the record consistent with children. Makes things easier
			v.removeChild(child, i);
			--i;
			continue;
		}
		
		v.declaredTokens = v.declaredTokens || {};
		
		if(id in v.declaredTokens){
			console.warn(`Duplicate token ${id} in ${filename}`);
			continue;
		}
		
		let obj:(typeof v.declaredTokens)[string] = {};
		
		let value = child.getAttribute("value");
		if(value !== undefined) obj.value = value;
		
		let type = child.getAttribute("type");
		if(type !== undefined){
			if(isSimpleType(type)){
				obj.type = type;
			}else{
				console.warn(`Token ${id} has invalid type ${type} in ${filename}`);
			}
		}
		
		v.declaredTokens[id] = obj;
	}
}

export function addDataspaceEntry(dataspace:Dataspace, child:XMLNodeEntry){
	assert(dataspace.data_ != null);
	assert(child.hasAttribute("id"));
	
	let catalogName = getCatalogNameByTagname(child.tagname);
	let catalog = dataspace.catalogs[catalogName];
	catalog.entries.push(child);
	
	let id = child.getAttribute("id");
	if(id !== undefined){
		if(id in catalog.entryByID){
			throw new Error("Duplicate ID found: " + id + " in " + catalogName + " catalog");
		}
		
		catalog.entryByID[id] = child as any;
	}
	
	//FIXME: append in the right place... it depends on what catalog the child is in
	dataspace.data_.root.appendChild(child);
}

export function changeDataspaceEntryType(_dataspace:Dataspace, child:XMLNodeEntry, newType:string){
	let catalogName = getCatalogNameByTagname(child.tagname);
	
	// Make sure we're not changing the catalog with the type
	assert(catalogName == getCatalogNameByTagname(newType));
	
	child.tagname = newType;
}

export function dataspaceFilenameToName(rootMapDir:string, filename:string):string {
	const base = getGameDataFilenameBase(rootMapDir);
	assert(filename.startsWith(base));
	return filename.slice(base.length, -4).replace(/\\/g, '/');
}

export function dataspaceNameToFilename(rootMapDir:string, name:string):string {
	const base = getGameDataFilenameBase(rootMapDir);
	
	return base + name + ".xml";
}

export function newDataspace(name:string, isImplicit:boolean):Dataspace {
	return {
		name,
		catalogs: createEmptyDataspaceCatalogs(),
		data_: fxml.Document.fromScratch("Catalog"),
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
	index.includes.root.appendChild(new fxml.ElementNode(undefined, "Catalog", undefined, undefined, {
		"path": {
			value: includesFilename,
		}
	}, []));
}

function encodeXML(doc:fxml.Document|fxml.Node|fxml.Node[]){
	if(Array.isArray(doc)){
		let str = `<?xml version="1.0" encoding="utf-8"?>\r\n`;
		
		for(let v of doc){
			str += v.encode({
				pretty: true,
				indent: "    ",
				eol: "\r\n",
			});
		}
		
		return str;
	}else{
		return doc.encode({
			pretty: true,
			indent: "    ",
			eol: "\r\n",
		});
	}
}

export function encodeEntryXML(entry:XMLNodeEntry){
	return encodeXML((createCommentNodesForEntry(entry) as fxml.Node[]).concat(entry));
}

function hasAnyTextNodes(x:fxml.ElementNode){
	for(let v of x.children){
		if(v instanceof fxml.TextNode) return true;
		if(v instanceof fxml.ElementNode && hasAnyTextNodes(v)) return true;
	}
	
	return false;
}

export function setEntryXML(oldEntry:XMLNodeEntry, xml:string):boolean {
	let parsed:readonly fxml.Node[];
	try {
		// We wrap it so parseXML will preserve text & comment nodes...
		let root = fxml.Document.fromString(`<BurritoWrap>${xml}</BurritoWrap>`).root;
		parsed = root.children;
	}catch(e){
		return false;
	}
	
	if(parsed.some(v => v instanceof fxml.TextNode)) return false;
	
	let entryXMLs = parsed.filter((v) => !(v instanceof fxml.CommentNode));
	if(entryXMLs.length != 1) return false;
	if(!(entryXMLs[0] instanceof fxml.ElementNode)) return false;
	let entry:XMLNodeEntry = entryXMLs[0] as XMLNodeEntry;
	if(hasAnyTextNodes(entry)) return false;
	
	let catalogName = getCatalogNameByTagname(oldEntry.tagname);
	if(!(entry.tagname in CatalogTypesInstance[catalogName])) return false;
	
	parseEntryXMLNode(entry, "stdin");
	
	if(entry.getAttribute("id") !== oldEntry.getAttribute("id")) return false;
	if(entry.tagname !== oldEntry.tagname) return false; // We'd need to fixup the parent & catalog stuff...
	
	let comments = parsed.filter(v => v instanceof fxml.CommentNode).map(v => (v as fxml.CommentNode).text);
	if(comments.length > 0) entry.editorComment = comments.join("\n");
	
	Object.assign(oldEntry, entry);
	
	return true;
}

export function reloadDataspaceFromString(dataspace:Dataspace, str:string){
	assert(dataspace.index);
	let rootMapDir = dataspace.index.rootMapDir;
	
	Object.assign(dataspace, loadDataspaceFromString(rootMapDir, dataspaceNameToFilename(rootMapDir, dataspace.name), str, !dataspace.index.dataspaces.includes(dataspace), dataspace.index));
}

export function dataspaceToString(dataspace:Dataspace):string {
	assert(dataspace.data_ != null);
	let nodes = dataspace.data_.root.children;
	
	let fakeNodes:fxml.Node[] = [];
	
	// We need to make some changes to pull editorComment out to an actual xml comment
	for(let i = 0; i < nodes.length; ++i){
		let v = nodes[i] as unknown as XMLNodeEntry;
		if(!v.editorComment) continue;
		
		let comments = createCommentNodesForEntry(v);
		
		// Insert comment nodes
		fakeNodes = fakeNodes.concat(comments);
		dataspace.data_.root.addChildren(comments, i);
		i += comments.length;
	}
	
	fakeNodes.reverse();
	for(let v of fakeNodes){
		dataspace.data_.root.removeChild(v);
	}
	
	return encodeXML(dataspace.data_);
}

export async function saveDataspaces(index:GameDataIndex, datas:Dataspace[]){
	await Promise.all(datas.map(async function(dataspace){
		let str = dataspaceToString(dataspace);
		
		await fs.writeFile(dataspaceNameToFilename(index.rootMapDir, dataspace.name), str, "utf8");
	}));
}

function createCommentNodesForEntry(v:XMLNodeEntry):fxml.CommentNode[] {
	if(!v.editorComment) return [];
			
	return v.editorComment.split(/\r?\n/).map(function(line){
		return new fxml.CommentNode(undefined, line);
	});
}
