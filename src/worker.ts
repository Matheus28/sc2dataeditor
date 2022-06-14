import assert from "assert";
import { getCatalogFilenameBase, Catalog, XMLNode, accessArray, accessStruct, newNode, saveCatalogs, addCatalogEntry, newCatalog, CatalogIndex, loadCatalogIndex, loadCatalogsFromIndex, addCatalogToIndex, saveCatalogIndex, getChildrenByTagName, addChild } from './lib/game_data_loader';
import { exportHotkeysFile, importHotkeysFile } from "./lib/game_hotkeys_loader";
import { exportTxtFile, importTxtFile } from "./lib/game_strings_loader";
import { possiblyBigNumberToString, unreachable } from "./lib/utils";
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
	
	index:CatalogIndex;
	catalogs:Catalog[];
	modifiedCatalogs:Set<Catalog>;
	mustAddToIndexIfModified:Set<Catalog>;
	destinationCatalogIndex:number;
	
	stringsModified:boolean;
	strings:Map<string,string>;
	
	hotkeysModified:boolean;
	hotkeys:Map<string,string>;
};


export interface CatalogEntry {
	id:string;
	type:string; // Like CAbilResearch. The xml tag for this
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
	
	name:(string|[string, string|number])[];
}

function accessCatalogEntry(catalog:Catalog, entry:CatalogEntry, createIfNotExists:true):XMLNode;
function accessCatalogEntry(catalog:Catalog, entry:CatalogEntry, createIfNotExists:boolean):XMLNode|undefined;
function accessCatalogEntry(catalog:Catalog, entry:CatalogEntry, createIfNotExists:boolean):XMLNode|undefined {
	let arr = catalog.entriesByID[entry.id];
	if(arr){
		for(let node of arr){
			if(node.tagname != entry.type) continue;
			return node;
		}
	}
	
	if(createIfNotExists){
		let attrs:Record<string,string> = {
			"id": entry.id,
		};
		
		let node = newNode(entry.type, attrs);
		addCatalogEntry(catalog, node);
		map.modifiedCatalogs.add(catalog);
		return node;
	}else{
		return undefined;
	}
}

type NodeWithCatalog = { node:XMLNode, catalog:Catalog };

function accessEntry(entry:CatalogEntry, createIfNotExists:true):NodeWithCatalog;
function accessEntry(entry:CatalogEntry, createIfNotExists:boolean):NodeWithCatalog|undefined;
function accessEntry(entry:CatalogEntry, createIfNotExists:boolean):NodeWithCatalog|undefined {
	for(let catalog of map.catalogs){
		let cur = accessCatalogEntry(catalog, entry, false);
		if(cur) return {node: cur, catalog};
	}
	
	if(!createIfNotExists) return undefined;
	
	let catalog = getDestinationCatalog();
	return {node:accessCatalogEntry(catalog, entry, true), catalog};
}

function getCatalogForPossiblyNewEntry(entry:CatalogEntry):Catalog {
	for(let catalog of map.catalogs){
		if(accessCatalogEntry(catalog, entry, false)){
			return catalog;
		}
	}
	
	return getDestinationCatalog();
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
	
	map.modifiedCatalogs.add(cur.catalog);
	cur.node.attr[key] = value;
}

function getFieldContainer(field:CatalogField, cur:XMLNode, createIfNotExists:true):XMLNode;
function getFieldContainer(field:CatalogField, cur:XMLNode, createIfNotExists:boolean):XMLNode|undefined;
function getFieldContainer(field:CatalogField, cur:XMLNode, createIfNotExists:boolean):XMLNode|undefined {
	for(let i = 0; i < field.name.length-1; ++i){
		let name = field.name[i];
		if(typeof name == 'string'){
			let tmp = accessStruct(cur, name, createIfNotExists);
			if(!tmp) return undefined;
			
			cur = tmp;
		}else{
			let [arrayName, arrayIndex] = name;
			
			let tmp = accessArray(cur, arrayName, arrayIndex, createIfNotExists);
			if(!tmp) return undefined;
			
			cur = tmp;
		}
	}
	
	return cur;
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

function setFieldValue(field:CatalogField, newValue:string){
	assert(field.name.length >= 1);
	
	let vv = accessEntry(field.entry, false);
	if(!vv) return;
	
	let cur = getFieldContainer(field, vv.node, false);
	if(!cur) return;
	
	let name = field.name[field.name.length - 1];
	if(typeof name == 'string'){
		// There are two ways this could be defined, say we're accessing "Row"
		// 1. <DefaultButtonLayout Row="1"/>
		// 2. <DefaultButtonLayout><Row value="1"/></DefaultButtonLayout>
		
		// Check if the first form exists
		if(name in cur.attr){
			if(cur.attr[name] === newValue) return; // Not changed
			cur.attr[name] = newValue;
			map.modifiedCatalogs.add(vv.catalog);
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
			map.modifiedCatalogs.add(vv.catalog);
			return;
		}
		
		// Neither exists, so we must create it
		if(cur == vv.node){
			// Our `cur` node is also our entry node
			// We can't put root ones in the attributes, or it'd be a token
			
			// Create a <name value="newValue"/> inside it
			addChild(cur, newNode(name, {value:newValue}));
			map.modifiedCatalogs.add(vv.catalog);
		}else{
			cur.attr[name] = newValue;
			map.modifiedCatalogs.add(vv.catalog);
		}
	}else{
		// This is an array of simple values, such as
		// <Resource index="Minerals" value="100"/>
		let [arrayName, arrayIndex] = name;
		
		let v = accessArray(cur, arrayName, arrayIndex, true);
		
		if(v.attr["value"] === newValue) return; // Not changed
		
		v.attr["value"] = newValue;
		map.modifiedCatalogs.add(vv.catalog);
	}
}

const messageHandlers:{
	[Key in keyof WorkerClient]:WorkerClient[Key];
} = {
	async ping(){
		
	},
	
	async loadMap(rootMapDir:string){
		let index = await loadCatalogIndex(rootMapDir);
		
		map = {
			rootMapDir,
			index,
			catalogs: await loadCatalogsFromIndex(index),
			modifiedCatalogs: new Set(),
			mustAddToIndexIfModified: new Set(),
			destinationCatalogIndex: 0,
			
			stringsModified: false,
			strings: await importTxtFile(rootMapDir, "enUS"),
			
			hotkeysModified: false,
			hotkeys: await importHotkeysFile(rootMapDir),
		};
	},
	
	async getFieldValue(field){
		return getFieldValue(field);
	},
	
	async save(){
		let arr = Array.from(map.modifiedCatalogs);
		map.modifiedCatalogs.clear();
		
		await saveCatalogs(arr);
		
		let addCatalogsToIndex:Catalog[] = [];
		for(let catalog of arr){
			if(map.mustAddToIndexIfModified.has(catalog)){
				addCatalogsToIndex.push(catalog);
			}
		}
		
		for(let catalog of addCatalogsToIndex){
			addCatalogToIndex(map.index, catalog);
			map.mustAddToIndexIfModified.delete(catalog);
		}
		
		if(addCatalogsToIndex.length > 0){
			saveCatalogIndex(map.index);
		}
		
		if(map.stringsModified){
			map.stringsModified = false;
			await exportTxtFile(map.rootMapDir, "enUS", map.strings);
		}
		
		if(map.hotkeysModified){
			map.hotkeysModified = false;
			await exportHotkeysFile(map.rootMapDir, map.hotkeys);
		}
	},
	
	async getCatalogList(){
		const base = getCatalogFilenameBase(map.index.rootMapDir);
		let arr = map.catalogs.map(v => v.filename.slice(base.length, -4).replace(/\\/g, '/'));
		
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
	
	async setDestinationCatalog(value:string){
		const base = getCatalogFilenameBase(map.index.rootMapDir);
		value = base + value + ".xml";
		
		for(let i = 0; i < map.catalogs.length; ++i){
			if(map.catalogs[i].filename == value){
				map.destinationCatalogIndex = i;
				return;
			}
		}
		
		map.destinationCatalogIndex = map.catalogs.length;
		let catalog = newCatalog(value);
		map.catalogs.push(catalog);
		map.mustAddToIndexIfModified.add(catalog);
	},
	
	async entryExists(entry:CatalogEntry){
		return accessEntry(entry, false) !== undefined;
	},
	
	async getStringLink(link:string){
		return map.strings.get(link);
	},
	
	async getEntriesOfTypes(types:string[], parent?:string){
		let ret:string[] = [];
		
		for(let catalog of map.catalogs){
			for(let type of types){
				let arr = catalog.data.childrenByTagname[type];
				if(arr){
					ret = ret.concat(arr.filter(node => (typeof parent == "undefined" || node.attr["parent"] == parent)).map(node => node.attr["id"]).filter(v => v != undefined));
				}
			}
		}
		
		ret.sort();
		return ret;
	},
	
	async getEntryParent(entry:CatalogEntry){
		let v = accessEntry(entry, false);
		if(!v) return undefined;
		return v.node.attr["parent"];
	},
	
	async setEntryParent(entry:CatalogEntry, value:string){
		let {node, catalog} = accessEntry(entry, true);
		
		if(node.attr["parent"] === value) return;
		node.attr["parent"] = value;
		
		map.modifiedCatalogs.add(catalog);
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

function getDestinationCatalog(){
	assert(map.destinationCatalogIndex < map.catalogs.length);
	return map.catalogs[map.destinationCatalogIndex];
}

onmessage = function(e){
	const msg:Message = e.data;
	onMessage(msg).then(function(value:any){
		postMessage(<MessageResponse>{ id: msg.id, value });
	}).catch(function(e){
		postMessage(<MessageResponse>{ id: msg.id, error: String(e) });
	});
}


/*
type WizardInputPromptString = { type:"str"; text:string; default?:string; catalogDefault?:string; };
type WizardInputPromptHotkey = { type:"hotkey"; text:string; default?:string; };
type WizardInputPromptInt = {type:"int", text:string; min?:number,max?:number; default?:number; catalogDefault?:number;};

type WizardInputPrompt = WizardInputPromptString | WizardInputPromptInt;

type WizardInputReturnType<T> = T extends {type:"int"} ? number : string;

const prompt = {
	line(title?:string, ch:string = "="){
		let v = process.stdout.columns;
		if(!v) v = 80;
		v = Math.floor(v / ch.length);
		
		let str = "";
		
		if(title){
			v -= 2 + title.length;
			if(v < 0) v = 0;
			
			let vExtra = v % 2;
			v = Math.floor(v / 2);
			str = ch.repeat(v) + " " + clc.yellow.bold(title) + " " + ch.repeat(vExtra + v)
		}else{
			str = ch.repeat(v);
		}
		
		console.log(clc.blackBright(str));
	},
	
	async id(query:string){
		return prompt.regex(clc.green.bold(query), /^[a-z][a-z0-9_@]*$/i);
	},
	
	async int(query:string, min?:number, max?:number, acceptBlank:boolean = false):Promise<number>{
		for(;;){
			let r = acceptBlank ? /^\s*(-?\s*[0-9]+\s*)?$/i : /^\s*-?\s*[0-9]+\s*$/i;
			
			let str = await prompt.regex(query, r, "Invalid value, must be integer");
			if(acceptBlank && str.length == 0) return NaN;
			
			let v = parseInt(str.replace(/\s+/g, ''), 10);
			if(isNaN(v)){
				console.error("Invalid value, must be integer");
				continue;
			}
			
			if(((typeof min != "undefined") && (v < min))
			|| ((typeof max != "undefined") && (v > max))){
				if(typeof min != "undefined" && typeof max != "undefined"){
					console.error(`Invalid value ${v}, must be ${min}-${max}`);
				}else if(typeof min != "undefined"){
					console.error(`Invalid value ${v}, must be >= ${min}`);
				}else{
					assert(typeof max != "undefined");
					console.error(`Invalid value ${v}, must be <= ${max}`);
				}
				
				continue;
			}
			
			return v;
		}
	},
	
	async listIndex(query:string, list:string[]):Promise<number> {
		const w = Math.floor(1+Math.log10(list.length));
		
		for(let i = 0; i < list.length; ++i){
			console.log(`- ${clc.magenta(`[${i.toString().padStart(w)}]`)} ${list[i]}`);
		}
		
		let v = await prompt.int(query, 0, list.length-1);
		console.log("* " + list[v]);
		return v;
	},
	
	async list(query:string, list:string[]):Promise<string> {
		return list[await prompt.listIndex(query, list)];
	},
	
	async listPretty(query:string, list:string[], map:(x:string)=>string):Promise<string> {
		return list[await prompt.listIndex(query, list.map(map))];
	},
	
	async str(query:string){
		return await question(clc.green.bold(query));
	},
	
	async regex(query:string, regex:RegExp, error?:string){
		assert(!regex.global);
		for(;;){
			let v = await question(clc.green.bold(query));
			if(!regex.test(v)){
				console.error(error ? error : "Invalid value, must match regex " + regex.toString());
				continue;
			}
			
			return v;
		}
	},
	
	async wizardInput<T extends WizardInputPrompt>(p:T, linkedField:CatalogField) : Promise<WizardInputReturnType<T>>{
		let valueIfBlank = getFieldValue(catalog, linkedField);
		if(typeof valueIfBlank == "undefined" && typeof p.default != "undefined"){
			valueIfBlank = typeof p.default == "string" ? p.default : possiblyBigNumberToString(p.default);
		}
		
		let text = clc.green.bold(p.text) + clc.magenta(typeof valueIfBlank != "undefined" ? ` [${valueIfBlank}]` : "") + clc.green.bold(":");
		let newValue:string|number;
		
		if(p.type == "str"){
			newValue = await prompt.str(text);
			if(newValue.length == 0 && typeof valueIfBlank != "undefined"){
				newValue = valueIfBlank;
			}
		}else if(p.type == "int"){
			newValue = await prompt.int(text, p.min, p.max, typeof valueIfBlank != "undefined");
			if(isNaN(newValue) && valueIfBlank){
				newValue = parseInt(valueIfBlank, 10);
				assert(!isNaN(newValue));
			}
		}else{
			unreachable(p);
		}
		
		if(typeof p.catalogDefault != "undefined" && newValue == p.catalogDefault){
			setFieldValue(catalog, linkedField, null);
		}else{
			setFieldValue(catalog, linkedField, newValue);
		}
		
		// unfortunately can't typecheck that...
		return newValue as any;
	},
	
	async wizardInputStringLink(p:WizardInputPromptString, link:string) : Promise<string>{
		let valueIfBlank = strings.get(link);
		if(typeof valueIfBlank != "string" && typeof p.default != "undefined"){
			valueIfBlank = p.default;
		}
		
		let text = clc.green.bold(p.text) + clc.magenta(typeof valueIfBlank != "undefined" ? ` [${valueIfBlank}]` : "") + clc.green.bold(":");
		
		let newValue:string = await prompt.str(text);
		if(newValue.length == 0 && typeof valueIfBlank != "undefined"){
			newValue = valueIfBlank;
		}
		
		strings.set(link, newValue);
		return newValue;
	},
	
	async wizardInputHotkey(p:WizardInputPromptHotkey, link:string) : Promise<string>{
		let valueIfBlank = hotkeys.get(link);
		if(typeof valueIfBlank != "string" && typeof p.default != "undefined"){
			valueIfBlank = p.default;
		}
		
		let text = clc.green.bold(p.text) + clc.magenta(typeof valueIfBlank != "undefined" ? ` [${valueIfBlank}]` : "") + clc.green.bold(":");
		
		let newValue:string = (await prompt.regex(text, /^[a-z]?$/i)).toUpperCase();
		if(newValue.length == 0 && typeof valueIfBlank != "undefined"){
			newValue = valueIfBlank;
		}
		
		hotkeys.set(link, newValue);
		return newValue;
	},
	
	async wizardInputToken(p:WizardInputPromptString, entry:CatalogEntry, key:string) : Promise<string>{
		let valueIfBlank = getEntryToken(catalog, entry, key);
		if(typeof valueIfBlank != "string" && typeof p.default != "undefined"){
			valueIfBlank = p.default;
		}
		
		let text = clc.green.bold(p.text) + clc.magenta(typeof valueIfBlank != "undefined" ? ` [${valueIfBlank}]` : "") + clc.green.bold(":");
		
		let newValue:string = await prompt.str(text);
		if(newValue.length == 0 && typeof valueIfBlank != "undefined"){
			newValue = valueIfBlank;
		}
		
		setEntryToken(catalog, entry, key, newValue);
		return newValue;
	},
};
*/
