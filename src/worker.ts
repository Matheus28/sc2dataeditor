import assert from "assert";
import { CatalogName, CatalogTypesInstance, CatalogTypesInstanceGeneric } from "./lib/game_data";
import { CatalogEntry, CatalogField, accessArray, accessStruct, addChild, addDataspaceEntry, addDataspaceToIndex, changeDataspaceEntryType, Dataspace, GameDataIndex, getCatalogNameByTagname, getChildrenByTagName, loadGameDataIndex, newDataspace, newNode, saveDataspaces, saveGameDataIndex, XMLNode, parseXML } from './lib/game_data_loader';
import { exportHotkeysFile, importHotkeysFile } from "./lib/game_hotkeys_loader";
import { exportTxtFile, importTxtFile } from "./lib/game_strings_loader";
import * as worker_client from "./worker_client";

type WorkerClient = typeof worker_client;

//FIXME: remove this and make stuff import it from there instead
export { CatalogEntry, CatalogField };

export interface Message {
	id:number;
	data:{
		[Key in keyof WorkerClient]:Parameters<WorkerClient[Key]>;
	};
}

export type MessageResponse = {
	id:number;
	value:any;
} | {
	id:number;
	error:string;
}

let map:{
	rootMapDir:string;
	
	index:GameDataIndex;
	hasIndexChanges:boolean;
	modifiedDataspaces:Set<Dataspace>;
	destinationDataspace:number;
	
	stringsModified:boolean;
	strings:Map<string,string>;
	
	hotkeysModified:boolean;
	hotkeys:Map<string,string>;
};

function getDefaultTypeForCatalog(catalog:CatalogName):string {
	return `C${catalog}`;
}

function accessDataspaceEntry(dataspace:Dataspace, entry:CatalogEntry, createIfNotExists:true):XMLNode;
function accessDataspaceEntry(dataspace:Dataspace, entry:CatalogEntry, createIfNotExists:boolean):XMLNode|undefined;
function accessDataspaceEntry(dataspace:Dataspace, entry:CatalogEntry, createIfNotExists:boolean):XMLNode|undefined {
	let catalog = dataspace.catalogs[entry.catalog];
	
	if(entry.id in catalog.entryByID){
		return catalog.entryByID[entry.id];
	}
	
	if(createIfNotExists){
		let attrs:Record<string,string> = {
			"id": entry.id,
		};
		
		let node = newNode(getDefaultTypeForCatalog(entry.catalog), attrs);
		addDataspaceEntry(dataspace, node);
		modifiedDataspace(dataspace);
		return node;
	}else{
		return undefined;
	}
}

type NodeWithDataspace = { node:XMLNode, dataspace:Dataspace };

function accessEntry(entry:CatalogEntry, createIfNotExists:true):NodeWithDataspace;
function accessEntry(entry:CatalogEntry, createIfNotExists:boolean):NodeWithDataspace|undefined;
function accessEntry(entry:CatalogEntry, createIfNotExists:boolean):NodeWithDataspace|undefined {
	{
		let dataspace = map.index.implicitDataspaces[entry.catalog];
		let cur = accessDataspaceEntry(dataspace, entry, false);
		if(cur) return {node: cur, dataspace};
	}
	
	for(let dataspace of map.index.dataspaces){
		let cur = accessDataspaceEntry(dataspace, entry, false);
		if(cur) return {node: cur, dataspace};
	}
	
	if(!createIfNotExists) return undefined;
	
	let dataspace = getDestinationDataspace(entry.catalog);
	return {node:accessDataspaceEntry(dataspace, entry, true), dataspace};
}

function getEntryToken(entry:CatalogEntry, key:string):string|undefined {
	let cur = accessEntry(entry, false);
	if(!cur) return undefined;
	if(!cur.node.attr) return undefined;
	return cur.node.attr[key];
}

function setEntryToken(entry:CatalogEntry, key:string, value:string) {
	let cur = accessEntry(entry, true);
	
	if(cur.node.attr[key] === value) return;
	
	modifiedDataspace(cur.dataspace);
	cur.node.attr[key] = value;
}

function getFieldContainer(field:CatalogField, entry:XMLNode, createIfNotExists:true):XMLNode;
function getFieldContainer(field:CatalogField, entry:XMLNode, createIfNotExists:boolean):XMLNode|undefined;
function getFieldContainer(field:CatalogField, entry:XMLNode, createIfNotExists:boolean):XMLNode|undefined {
	for(let i = 0; i < field.name.length-1; ++i){
		let name = field.name[i];
		if(typeof name == 'string'){
			let tmp = accessStruct(entry, name, createIfNotExists);
			if(!tmp) return undefined;
			
			entry = tmp;
		}else{
			let [arrayName, arrayIndex] = name;
			
			let tmp = accessArray(entry, arrayName, arrayIndex, createIfNotExists);
			if(!tmp) return undefined;
			
			entry = tmp;
		}
	}
	
	return entry;
}

function getFieldValue(field:CatalogField):string|undefined {
	assert(field.name.length >= 1);
	
	let vv = accessEntry(field.entry, false);
	if(!vv) return undefined;
	
	let cur = getFieldContainer(field, vv.node, false);
	if(!cur) return undefined;
	
	let name = field.name[field.name.length - 1];
	if(typeof name == 'string'){
		// There are two ways this could be defined, say we're accessing "Row"
		// 1. <DefaultButtonLayout Row="1"/>
		// 2. <DefaultButtonLayout><Row value="1"/></DefaultButtonLayout>
		
		// Check the first form
		if(name in cur.attr){
			return cur.attr[name];
		}
		
		// Then check the second form
		let subnodes = getChildrenByTagName(cur, name);
		if(!subnodes || subnodes.length == 0) return undefined;
		return subnodes[0].attr["value"];
	}else{
		// This is an array of simple values, such as
		// <Resource index="Minerals" value="100"/>
		let [arrayName, arrayIndex] = name;
		
		let v = accessArray(cur, arrayName, arrayIndex, false);
		if(!v) return undefined;
		
		return v.attr["value"];
	}
}

function getArrayFieldIndexes(field:CatalogField):string[]|undefined {
	let vv = accessEntry(field.entry, false);
	if(!vv) return undefined;
	
	
	let cur = getFieldContainer(field, vv.node, false);
	if(!cur) return undefined;
	
	let arrName = field.name[field.name.length - 1];
	
	if(typeof arrName != 'string'){
		throw new Error("You must refer to the array without an index");
	}
	
	return getArrayFieldIndexesInternal(cur, arrName);
}

function getArrayFieldIndexesInternal(cur:XMLNode, arrName:string, mapping?:Record<string, number>):string[]|undefined {
	let subnodes = getChildrenByTagName(cur, arrName);
	if(!subnodes || subnodes.length == 0){
		return [];
	}
	
	let taken = new Set<string>();
	
	let lastIndex:number = -1;
	for(let sub of subnodes){
		if(sub.attr && typeof sub.attr["index"] != 'undefined'){
			let vv = sub.attr["index"];
			taken.add(vv);
			
			let num:number;
			if(/^[0-9]+$/.test(vv)){
				num = parseInt(vv, 10);
			}else{
				if(mapping === undefined) throw new Error("Invalid index type, expected only numbers");
				
				if(!(vv in mapping)) throw new Error("Invalid index: " + vv);
				num = mapping[vv];
			}
			
			lastIndex = Math.max(lastIndex, num);
			continue;
		}
		
		taken.add((lastIndex+1).toString());
		++lastIndex;
	}
	
	return Array.from(taken);
}

function test_getArrayFieldIndexesInternal(xml:string, arr:string[], mapping?:Record<string, number>){
	let vv = getArrayFieldIndexesInternal(parseXML(`<A>${xml}</A>`)["A"], 'B', mapping);
	assert.deepStrictEqual(
		vv,
		arr,
		`${xml} has bad getArrayFieldIndexesInternal.\nGot: ${JSON.stringify(vv)}\nExpected: ${JSON.stringify(arr)}`
	);
}

{
	test_getArrayFieldIndexesInternal(`<B/><B/><B/><B/>`, ['0', '1', '2', '3']);
	test_getArrayFieldIndexesInternal(`<B/><B/><B index="0"/><B/>`, ['0', '1', '2']);
	test_getArrayFieldIndexesInternal(`<B index="0"/><B/><B index="0"/><B/>`, ['0', '1', '2']);
	test_getArrayFieldIndexesInternal(`<B index="2"/><B/><B/><B/>`, ['2', '3', '4', '5']);
	
	let mapping = {
		Research1: 0,
		Research2: 1,
		Research3: 2,
		Research4: 3,
	};
	
	test_getArrayFieldIndexesInternal(`<B/><B/><B/><B/>`, ['0', '1', '2', '3'], mapping);
	test_getArrayFieldIndexesInternal(`<B index="Research1"/><B index="1"/><B index="Research3"/><B index="Research4"/>`, ['Research1', '1', 'Research3', 'Research4'], mapping);
}


function setFieldValue(field:CatalogField, newValue:string){
	assert(field.name.length >= 1);
	
	let vv = accessEntry(field.entry, true);
	let cur = getFieldContainer(field, vv.node, true);
	
	let name = field.name[field.name.length - 1];
	if(typeof name == 'string'){
		// There are two ways this could be defined, say we're accessing "Row"
		// 1. <DefaultButtonLayout Row="1"/>
		// 2. <DefaultButtonLayout><Row value="1"/></DefaultButtonLayout>
		
		// Check if the first form exists
		if(name in cur.attr){
			if(cur.attr[name] === newValue) return; // Not changed
			cur.attr[name] = newValue;
			modifiedDataspace(vv.dataspace);
			return;
		}
		
		// Check the second form exists
		let subnodes = getChildrenByTagName(cur, name);
		if(subnodes && subnodes.length > 0){
			assert(subnodes.length == 1); // Otherwise this should've been an array...
			
			// So just set the "value" attribute in that child
			
			let sub = subnodes[0];
			if(sub.attr["value"] === newValue) return; // Not changed
			
			sub.attr["value"] = newValue;
			modifiedDataspace(vv.dataspace);
			return;
		}
		
		// Neither exists, so we must create it
		if(cur == vv.node){
			// Our `cur` node is also our entry node
			// We can't put root ones in the attributes, or it'd be a token
			
			// Create a <name value="newValue"/> inside it
			addChild(cur, newNode(name, {value:newValue}));
			modifiedDataspace(vv.dataspace);
		}else{
			cur.attr[name] = newValue;
			modifiedDataspace(vv.dataspace);
		}
	}else{
		// This is an array of simple values, such as
		// <Resource index="Minerals" value="100"/>
		let [arrayName, arrayIndex] = name;
		
		let v = accessArray(cur, arrayName, arrayIndex, true);
		
		if(v.attr["value"] === newValue) return; // Not changed
		
		v.attr["value"] = newValue;
		modifiedDataspace(vv.dataspace);
	}
}

const messageHandlers:{
	[Key in keyof WorkerClient]:WorkerClient[Key];
} = {
	async ping(){
		
	},
	
	async loadMap(rootMapDir:string){
		console.time("loadMap");
		let index = await loadGameDataIndex(rootMapDir);
		console.timeEnd("loadMap");
		
		map = {
			rootMapDir,
			index,
			modifiedDataspaces: new Set(),
			destinationDataspace: -1,
			hasIndexChanges: false,
			
			stringsModified: false,
			strings: await importTxtFile(rootMapDir, "enUS"),
			
			hotkeysModified: false,
			hotkeys: await importHotkeysFile(rootMapDir),
		};
	},
	
	async getFieldValue(field){
		return getFieldValue(field);
	},
	
	async getArrayFieldIndexes(field){
		return getArrayFieldIndexes(field);
	},
	
	async save(){
		let arr = Array.from(map.modifiedDataspaces);
		map.modifiedDataspaces.clear();
		
		await saveDataspaces(map.index, arr);
		
		if(map.hasIndexChanges){
			map.hasIndexChanges = false;
			await saveGameDataIndex(map.index);
		}
		
		if(map.stringsModified){
			map.stringsModified = false;
			await exportTxtFile(map.rootMapDir, "enUS", map.strings);
		}
		
		if(map.hotkeysModified){
			map.hotkeysModified = false;
			await exportHotkeysFile(map.rootMapDir, map.hotkeys);
		}
		
		notifyChanges();
	},
	
	async forceSaveAll(){
		await Promise.all([
			saveDataspaces(map.index, map.index.dataspaces),
			saveDataspaces(map.index, Object.values(map.index.implicitDataspaces)),
		]);
	},
	
	async getDataspaceList(){
		let arr = map.index.dataspaces.map(v => v.name);
		
		arr.sort(function(a, b){
			let aDepth = 0;
			for(let ch of a) if(ch == '/') ++aDepth;
			
			let bDepth = 0;
			for(let ch of b) if(ch == '/') ++bDepth;
			
			if(aDepth != bDepth) return aDepth - bDepth;
			
			let al = a.toLowerCase();
			let bl = b.toLowerCase();
			if(al != bl) return al < bl ? -1 : 1;
			
			return 0;
		});
		
		return arr;
	},
	
	async setDestinationDataspace(value:string|null){
		if(value == null){
			map.destinationDataspace = -1;
			return;
		}
		
		for(let i = 0; i < map.index.dataspaces.length; ++i){
			if(map.index.dataspaces[i].name == value){
				map.destinationDataspace = i;
				return;
			}
		}
		
		map.hasIndexChanges = true;
		map.destinationDataspace = map.index.dataspaces.length;
		let dataspace = newDataspace(value);
		addDataspaceToIndex(map.index, dataspace);
		modifiedDataspace(dataspace);
	},
	
	async entryExists(entry:CatalogEntry){
		return accessEntry(entry, false) !== undefined;
	},
	
	async getEntryType(entry:CatalogEntry){
		let v = accessEntry(entry, false);
		if(v === undefined) return undefined;
		return v.node.tagname;
	},
	
	async setEntryType(entry:CatalogEntry, value:string){
		assert(value in CatalogTypesInstance[entry.catalog]);
		
		let v = accessEntry(entry, true);
		if(v.node.tagname == value) return;
		
		v.node.tagname = value;
		modifiedDataspace(v.dataspace);
	},
	
	async getStringLink(link:string){
		return map.strings.get(link);
	},
	
	async setStringLink(link:string, value:string){
		if(!map.stringsModified){
			map.stringsModified = true;
			notifyChanges();
		}
		
		map.strings.set(link, value);
	},
	
	async getSourceList(){
		return map.index.dependencies.map(v => v.name);
	},
	
	async getEntries(filterByCatalog:CatalogName|null, filterBySource?:string|null|undefined, filterByDataspace?:string, filterByParent?:string, partialMatch?:string, limit?:number){
		let ret:Awaited<ReturnType<WorkerClient["getEntries"]>> = {
			items: [],
			totalCount: 0,
		};
		
		let partialMatchLower = partialMatch !== undefined ? partialMatch.toLowerCase() : undefined;
		
		const iterateEntries = (entries:XMLNode[], catalogName:CatalogName|null, dataspaceName:string|null, dataspaceSource:string|null) => {
			for(let entry of entries){
				if(typeof filterByParent != "undefined" && entry.attr["parent"] != filterByParent){
					continue;
				}
				
				let id = "";
				
				if("id" in entry.attr) id = entry.attr["id"];
				
				if(typeof partialMatchLower != "undefined"){
					if(id.toLowerCase().indexOf(partialMatchLower) == -1) continue;
				}
				
				let e:typeof ret.items[number] = {
					id: id,
				};
				
				if(dataspaceName != null) e.dataspace = dataspaceName;
				if(dataspaceSource != null) e.source = dataspaceSource;
				if(catalogName) e.catalog = catalogName;
				
				ret.items.push(e);
			}
		};
		
		if(filterByCatalog != null){
			const iterateDataspace = (dataspace:Dataspace, dataspaceName:string|null, dataspaceSource:string|null) => {
				iterateEntries(dataspace.catalogs[filterByCatalog].entries, null, dataspaceName, dataspaceSource);
			};
			
			// This map
			if(filterBySource == null){ // also checks for undefined
				if(filterByDataspace == null){
					iterateDataspace(map.index.implicitDataspaces[filterByCatalog], null, null);
					map.index.dataspaces.forEach((d) => iterateDataspace(d, d.name, null));
				}else{
					for(let dataspace of map.index.dataspaces){
						if(dataspace.name != filterByDataspace) continue;
						iterateDataspace(dataspace, dataspace.name, null);
					}
				}
			}
			
			// Dependencies
			if(filterByDataspace == null){
				for(let dep of map.index.dependencies){
					if(filterBySource === undefined || dep.name == filterBySource){
						iterateDataspace(dep.dataspace, null, dep.name);
					}
				}
			}
		}else{
			const iterateDataspace = (dataspace:Dataspace, dataspaceName:string|null, dataspaceSource:string|null) => {
				for(let catalogName in dataspace.catalogs){
					let catalog = dataspace.catalogs[catalogName as CatalogName];
					iterateEntries(catalog.entries, catalogName as CatalogName, dataspaceName, dataspaceSource);
				}
			};
			
			// This map
			if(filterBySource == null){ // also checks for undefined
				if(filterByDataspace == null){
					for(let d in map.index.implicitDataspaces){
						iterateDataspace(map.index.implicitDataspaces[d as CatalogName], null, null);
					}
					
					map.index.dataspaces.forEach((d) => iterateDataspace(d, d.name, null));
				}else{
					for(let dataspace of map.index.dataspaces){
						if(dataspace.name != filterByDataspace) continue;
						iterateDataspace(dataspace, dataspace.name, null);
					}
				}
			}
			
			// Dependencies
			if(filterByDataspace == null){
				for(let dep of map.index.dependencies){
					if(filterBySource === undefined || dep.name == filterBySource){
						iterateDataspace(dep.dataspace, null, dep.name);
					}
				}
			}
		}
		
		ret.items.sort(function(a, b){
			if(typeof partialMatchLower !== 'undefined'){
				let aStarts = a.id.toLowerCase().startsWith(partialMatchLower);
				let bStarts = b.id.toLowerCase().startsWith(partialMatchLower);
				if(aStarts != bStarts) return aStarts ? -1 : 1;
			}
			
			if(a.source !== b.source) return b.source !== undefined ? -1 : 1;
			if(a.id != b.id) return a.id < b.id ? -1 : 1;
			
			return 0;
		});
		
		ret.totalCount = ret.items.length;
		
		if(typeof limit != "undefined" && ret.items.length > limit){
			// Find the first non-exact match after `limit` so we can cut off there
			for(let i = limit; i < ret.items.length; ++i){
				if(ret.items[i].id !== partialMatch){
					// We can break it here
					ret.items.length = i;
					break;
				}
			}
		}
		
		return ret;
	},
	
	async getEntryParent(entry:CatalogEntry){
		let v = accessEntry(entry, false);
		if(!v) return undefined;
		return v.node.attr["parent"];
	},
	
	async setEntryParent(entry:CatalogEntry, value:string){
		let {node, dataspace} = accessEntry(entry, true);
		
		if(node.attr["parent"] === value) return;
		node.attr["parent"] = value;
		
		modifiedDataspace(dataspace);
	},
	
	async setFieldValue(field:CatalogField, value:string){
		setFieldValue(field, value);
	},
	
	async getPendingChangesList(){
		return {
			dataspaces: Array.from(map.modifiedDataspaces).map(v => v.name),
			hotkeys: map.hotkeysModified,
			strings: map.stringsModified,
		};
	},
	
	async waitPendingChangesList(){
		return notifyChangesPromise;
	},
};

function hasMemoryHandler(i:string):i is keyof typeof messageHandlers {
	return i in messageHandlers;
}

async function onMessage(msg:Message){
	for(let i in msg.data){
		if(hasMemoryHandler(i)){
			const label = `[${msg.id}] ${i}`;
			
			console.time(label);
			
			let r = (messageHandlers[i] as any).apply(messageHandlers, msg.data[i]);
			try { await r; } catch(e){}
			
			console.timeEnd(label);
			
			return r;
		}else{
			throw new Error("Bad message type: " + i);
		}
	}
	
	throw new Error("Empty message? " + JSON.stringify(msg));
}

function getDestinationDataspace(catalog:CatalogName){
	assert(map.destinationDataspace < map.index.dataspaces.length);
	if(map.destinationDataspace < 0){
		return map.index.implicitDataspaces[catalog];
	}
	
	return map.index.dataspaces[map.destinationDataspace];
}

type NotifyChangesType = Awaited<ReturnType<(typeof messageHandlers)["getPendingChangesList"]>>;
let notifyChangesPromise:Promise<NotifyChangesType>;
let notifyChangesCallbacks:null|[(x:NotifyChangesType) => void, (x:any)=>void] = null;
function notifyChanges(){
	if(notifyChangesCallbacks){
		messageHandlers.getPendingChangesList().then(notifyChangesCallbacks[0]).catch(notifyChangesCallbacks[1]);
	}
	resetNotifyChanges();
}

function modifiedDataspace(x:Dataspace){
	if(map.modifiedDataspaces.has(x)) return;
	
	map.modifiedDataspaces.add(x);
	notifyChanges();
}

function resetNotifyChanges(){
	notifyChangesCallbacks = null
	notifyChangesPromise = new Promise<NotifyChangesType>((resolve, reject) => {
		notifyChangesCallbacks = [resolve, reject];
	});
}

resetNotifyChanges();

onmessage = function(e){
	const msg:Message = e.data;
	onMessage(msg).then(function(value:any){
		postMessage(<MessageResponse>{ id: msg.id, value });
	});
}
