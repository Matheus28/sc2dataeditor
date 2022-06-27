import assert from "assert";
import { CatalogName, CatalogTypesInstance } from "../lib/game_data";
import { accessEntry, accessEntryForModification, CatalogEntry, CatalogField, getArrayFieldIndexes, getFieldValue, setFieldValue } from "../lib/game_data_access";
import { addDataspaceToIndex, Dataspace, encodeEntryXML, forEachIndex, GameDataIndex, loadGameDataIndex, newDataspace, saveDataspaces, saveGameDataIndex, setEntryXML, XMLNodeEntry } from '../lib/game_data_loader';
import { exportHotkeysFile } from "../lib/game_hotkeys_loader";
import { exportStringsFile, getTxtFileName } from "../lib/game_strings_loader";
import * as worker_client from "./worker_client";

type WorkerClient = typeof worker_client;

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
	hotkeysModified:boolean;
	objectStringsModified:boolean;
};

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
			hotkeysModified: false,
			objectStringsModified: false,
		};
	},
	
	async getFieldValue(field){
		return getFieldValue(map.index, field);
	},
	
	async getArrayFieldIndexes(field){
		return getArrayFieldIndexes(map.index, field);
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
			await exportStringsFile(getTxtFileName(map.rootMapDir, "enUS"), map.index.strings);
		}
		
		if(map.hotkeysModified){
			map.hotkeysModified = false;
			await exportHotkeysFile(map.rootMapDir, map.index.hotkeys);
		}
		
		if(map.objectStringsModified){
			map.objectStringsModified = false;
			await exportStringsFile(getTxtFileName(map.rootMapDir, "enUS", "ObjectStrings.txt"), map.index.objectStrings);
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
		let dataspace = newDataspace(value, false);
		addDataspaceToIndex(map.index, dataspace);
		modifiedDataspace(dataspace);
	},
	
	async entryExists(entry:CatalogEntry){
		return accessEntry(map.index, entry) !== undefined;
	},
	
	async getEntry(entry:CatalogEntry){
		let v = accessEntry(map.index, entry);
		if(v === undefined) return undefined;
		
		let r:Awaited<ReturnType<WorkerClient["getEntry"]>> = {
			type: v.node.tagname,
		};
		
		assert(v.dataspace.index != null);
		if(v.dataspace.index.name != null){
			r.source = v.dataspace.index.name;
		}else if(!v.dataspace.isImplicit){
			r.dataspace = v.dataspace.name;
		}
		
		return r;
	},
	
	async setEntryType(entry:CatalogEntry, value:string){
		assert(value in CatalogTypesInstance[entry.catalog]);
		
		let v = accessEntryForModification(map.index, entry, getDestinationDataspace(entry.catalog));
		
		v.node.tagname = value;
		modifiedDataspace(v.dataspace);
	},
	
	async getStringLink(link:string){
		let ret:string|undefined;
		
		forEachIndex(map.index, true, true, (index) => {
			ret = index.strings[link];
			return ret === undefined;
		});
		
		return ret;
	},
	
	async setStringLink(link:string, value:string){
		if(map.index.strings[link] === value) return;
		map.index.strings[link] = value;
		
		if(!map.stringsModified){
			map.stringsModified = true;
			notifyChanges();
		}
	},
	
	async getObjectStringLink(link:string){
		let ret:string|undefined;
		
		forEachIndex(map.index, true, true, (index) => {
			ret = index.objectStrings[link];
			return ret === undefined;
		});
		
		return ret;
	},
	
	async setObjectStringLink(link:string, value:string){
		if(map.index.objectStrings[link] === value) return;
		map.index.objectStrings[link] = value;
		
		if(!map.objectStringsModified){
			map.objectStringsModified = true;
			notifyChanges();
		}
	},
	
	async getEntryComment(entry:CatalogEntry) {
		let v = accessEntry(map.index, entry);
		if(!v) return undefined;
		
		return v.node.editorComment;
	},

	async setEntryComment(entry:CatalogEntry, value:string) {
		let v = accessEntryForModification(map.index, entry, getDestinationDataspace(entry.catalog));
		
		v.node.editorComment = value;
		modifiedDataspace(v.dataspace);
	},

	async getSourceList(){
		return map.index.dependencies.map(v => { assert(v.name != null); return v.name; });
	},
	
	async getEntries(filterByCatalog:CatalogName|null, filterBySource?:string|null|undefined, filterByDataspace?:string, filterByParent?:string, partialMatch?:string, limit?:number){
		//FIXME: duplicates
		let ret:Awaited<ReturnType<WorkerClient["getEntries"]>> = {
			items: [],
			totalCount: 0,
		};
		
		let partialMatchLower = partialMatch !== undefined ? partialMatch.toLowerCase() : undefined;
		
		const iterateEntries = (entries:XMLNodeEntry[], catalogName:CatalogName|null, dataspaceName:string|null, dataspaceSource:string|null) => {
			for(let entry of entries){
				if(typeof filterByParent != "undefined" && entry.attr.parent != filterByParent){
					continue;
				}
				
				let id = "";
				
				if("id" in entry.attr) id = entry.attr.id;
				
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
			
			forEachIndex(map.index, filterBySource == null /* or undefined */, filterByDataspace == null && filterBySource !== null, (index) => {
				if(filterBySource === undefined || index.name == filterBySource){
					if(filterByDataspace == null){
						iterateDataspace(index.implicitDataspaces[filterByCatalog], null, index.name);
						index.dataspaces.forEach((d) => iterateDataspace(d, index.name == null ? d.name : null, index.name));
					}else if(index.name == null){ // Main index
						for(let dataspace of index.dataspaces){
							if(dataspace.name != filterByDataspace) continue;
							iterateDataspace(dataspace, null, null);
						}
					}
				}
			});
		}else{
			const iterateDataspace = (dataspace:Dataspace, dataspaceName:string|null, dataspaceSource:string|null) => {
				for(let catalogName in dataspace.catalogs){
					let catalog = dataspace.catalogs[catalogName as CatalogName];
					iterateEntries(catalog.entries, catalogName as CatalogName, dataspaceName, dataspaceSource);
				}
			};
			
			forEachIndex(map.index, filterBySource == null /* or undefined */, filterByDataspace == null && filterBySource !== null, (index) => {
				if(filterBySource === undefined || index.name == filterBySource){
					if(filterByDataspace == null){
						for(let i in index.implicitDataspaces){
							iterateDataspace(index.implicitDataspaces[i as CatalogName], null, index.name);
						}
						
						index.dataspaces.forEach((d) => iterateDataspace(d, index.name == null ? d.name : null, index.name));
					}else if(index.name == null){ // Main index
						for(let dataspace of index.dataspaces){
							if(dataspace.name != filterByDataspace) continue;
							iterateDataspace(dataspace, null, null);
						}
					}
				}
			});
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
		let v = accessEntry(map.index, entry);
		if(!v) return undefined;
		return v.node.attr["parent"];
	},
	
	async setEntryParent(entry:CatalogEntry, value:string){
		let {node, dataspace} = accessEntryForModification(map.index, entry, getDestinationDataspace(entry.catalog));
		
		node.attr["parent"] = value;
		modifiedDataspace(dataspace);
	},
	
	async setFieldValue(field:CatalogField, value:string){
		let ret = setFieldValue(map.index, field, value, getDestinationDataspace(field.entry.catalog));
		
		let tmp = accessEntry(map.index, field.entry);
		assert(tmp);
		modifiedDataspace(tmp.dataspace);
		
		return ret;
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
	
	async getEntryXML(entry:CatalogEntry){
		let vv = accessEntry(map.index, entry);
		if(!vv) return;
		
		return encodeEntryXML(vv.node);
	},

	async setEntryXML(entry:CatalogEntry, value:string){
		let vv = accessEntryForModification(map.index, entry, getDestinationDataspace(entry.catalog));
		let ret = setEntryXML(vv.node, value);
		
		modifiedDataspace(vv.dataspace);
		
		return ret;
	},
};

function hasMemoryHandler(i:string):i is keyof typeof messageHandlers {
	return i in messageHandlers;
}

async function onMessage(msg:Message){
	for(let i in msg.data){
		if(hasMemoryHandler(i)){
			
			const alwaysPrintTime = false;
			const printAllRequests = false;
			
			let requestString:undefined|string;
			if(printAllRequests){
				requestString = JSON.stringify(msg.data[i]);
			}
			
			let start = Date.now();
			let r = (messageHandlers[i] as any).apply(messageHandlers, msg.data[i]);
			try { await r; } catch(e){}
			let end = Date.now();
			
			if(alwaysPrintTime || (end - start > 10)){
				console.log(`[${msg.id}] ${i} took ${(end-start).toFixed(1)} ms`);
			}
			
			if(printAllRequests){
				console.log(`${i}(${requestString}) = ${JSON.stringify(await r)}`);
			}
			
			
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

assert(!onmessage);
onmessage = function(e){
	const msg:Message = e.data;
	onMessage(msg).then(function(value:any){
		postMessage(<MessageResponse>{ id: msg.id, value });
	}).catch(e => {
		setTimeout(() => { throw e; });
	});
}

function delay(ms:number):Promise<void>{
	return new Promise((resolve) => setTimeout(resolve, ms));
}
