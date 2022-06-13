import assert from "assert";
import * as readline from 'readline';
import { getGameDataFileList, getCatalogFilenameBase, Catalog, loadCatalogs, XMLNode, accessArray as accessArray, accessStruct as accessStruct, getValue, setValue as setValue, newNode, addChild, getChildrenByTagName, saveCatalogs, addCatalogEntry } from './lib/game_data_loader';
import { exportHotkeysFile, importHotkeysFile } from "./lib/game_hotkeys_loader";
import { exportTxtFile, importTxtFile } from "./lib/game_strings_loader";
import { possiblyBigNumberToString, unreachable } from "./lib/utils";
import clc from "cli-color";


export interface Message {
	id:number;
	req:{
		type:"save";
	} | {
		type:"getFieldValue";
		field:CatalogField;
	} | {
		type:"entryExists";
		entry:CatalogEntry;
	} | {
		type:"getStringLink";
		link:string;
	};
}

export type MessageResponse = {
	id:number;
	value:any;
} | {
	id:number;
	error:string;
}


let catalogs:Catalog[];
let modifiedCatalogs = new Set<Catalog>();

let stringsModified = false;
let strings:Map<string,string>;

let hotkeysModified = false;
let hotkeys:Map<string,string>;

export interface CatalogEntry {
	id:string;
	type:string; // Like CAbilResearch. The xml tag for this
	parent?:string; // The parent tag
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
	//   name = ["InfoArray", "Resource"]
	//   indexes = ["Research1", "Minerals"]
	// Because InfoArray is an array, and Resource is an array inside an item in that array
	//
	// To access Time there, you'd have:
	//   name = ["InfoArray", "Time"]
	//   indexes = ["Research1"]
	// Because InfoArray is an array, but Time is just a value inside an item in that array
	// 
	// Note that in both cases, string indexes are just aliases for a number. Research1 is 0. Minerals is 0.
	
	name:string[];
	indexes?:(string|number)[];
}

function accessCatalogEntry(catalog:Catalog, entry:CatalogEntry, createIfNotExists:boolean):XMLNode|undefined{
	let arr = catalog.entriesByID[entry.id];
	if(arr){
		for(let v of arr){
			if(v.tagname != entry.type) continue;
			return v;
		}
	}
	
	if(createIfNotExists){
		let attrs:Record<string,string> = {
			"id": entry.id,
		};
		
		if(entry.parent) attrs["parent"] = entry.parent;
		
		let node = newNode(entry.type, attrs);
		addCatalogEntry(catalog, node);
		return node;
	}else{
		return undefined;
	}
}

function getEntryToken(catalog:Catalog, entry:CatalogEntry, key:string):string|undefined {
	let cur = accessCatalogEntry(catalog, entry, false);
	if(!cur) return undefined;
	if(!cur.attr) return undefined;
	return cur.attr[key];
}

function setEntryToken(catalog:Catalog, entry:CatalogEntry, key:string, value:string) {
	let cur = accessCatalogEntry(catalog, entry, true);
	assert(cur);
	if(!cur.attr) cur.attr = {};
	cur.attr[key] = value;
}

function accessFieldValue(catalog:Catalog, field:CatalogField, createIfNotExists:boolean):XMLNode|undefined{
	if(field.indexes) assert(field.name.length >= field.indexes.length);
	assert(field.name.length >= 1);
	
	let cur = accessCatalogEntry(catalog, field.entry, createIfNotExists);
	if(!cur){
		assert(!createIfNotExists);
		return undefined;
	}
	
	let i = 0;
	
	assert(cur.attr);
	assert(cur.attr["parent"] == field.entry.parent);
	
	if(field.indexes){
		for(; i < field.indexes.length; ++i){
			let tmp = accessArray(cur, field.name[i], field.indexes[i], createIfNotExists);
			if(!tmp){
				assert(!createIfNotExists);
				return undefined;
			}
			
			cur = tmp;
		}
	}
	
	for(; i < field.name.length - 1; ++i){
		let tmp = accessStruct(cur, field.name[i], createIfNotExists);
		if(!tmp){
			assert(!createIfNotExists);
			return undefined;
		}
		
		cur = tmp;
	}
	
	return cur;
}

function getFieldValue(field:CatalogField):string|undefined {
	for(let catalog of catalogs){
		let v = accessFieldValue(catalog, field, false);
		if(!v) continue;
		
		// We're already at the element we need to retrieve...
		if(field.indexes && field.indexes.length == field.name.length){
			return getValue(v, "value");
		}else{
			return getValue(v, field.name[field.name.length - 1]);
		}
	}
	
	return undefined;
}

function setFieldValue(catalog:Catalog, field:CatalogField, value:string|number|null){
	let v = accessFieldValue(catalog, field, true);
	assert(v);
	
	// We're already at the element we need to set...
	if(field.indexes && field.indexes.length == field.name.length){
		setValue(v, "value", value, true);
	}else{
		setValue(v, field.name[field.name.length - 1], value, field.name.length > 1);
	}
}

let queuedMessages:Message[] = [];
onmessage = function(e){
	queuedMessages.push(e.data);
}

async function onMessage(msg:Message):Promise<any> {
	if(msg.req.type == "getFieldValue"){
		return getFieldValue(msg.req.field);
	}else if(msg.req.type == "save"){
		return await save();
	}else if(msg.req.type == "entryExists"){
		for(let catalog of catalogs){
			if(accessCatalogEntry(catalog, msg.req.entry, false)){
				return true;
			}
		}
		
		return false;
	}else if(msg.req.type == "getStringLink"){
		return strings.get(msg.req.link);
	}else{
		unreachable(msg.req);
	}
}

async function init(){
	catalogs = await loadCatalogs(await getGameDataFileList());
	strings = await importTxtFile("enUS");
	hotkeys = await importHotkeysFile();
	
	function receiveMessage(msg:Message){
		onMessage(msg).then(function(value:any){
			postMessage(<MessageResponse>{ id: msg.id, value });
		}).catch(function(e){
			postMessage(<MessageResponse>{ id: msg.id, error: String(e) });
		});
	}
	
	onmessage = function(e){
		receiveMessage(e.data);
	}
	
	for(let v of queuedMessages){
		receiveMessage(v);
	}
}

async function save(){
	let arr = Array.from(modifiedCatalogs);
	modifiedCatalogs.clear();
	
	await saveCatalogs(arr);
	
	if(stringsModified){
		stringsModified = false;
		await exportTxtFile("enUS", strings);
	}
	
	if(hotkeysModified){
		hotkeysModified = false;
		await exportHotkeysFile(hotkeys);
	}
}

init();

/*
type WizardInputPromptString = { type:"str"; text:string; default?:string; catalogDefault?:string; };
type WizardInputPromptHotkey = { type:"hotkey"; text:string; default?:string; };
type WizardInputPromptInt = {type:"int", text:string; min?:number,max?:number; default?:number; catalogDefault?:number;};

type WizardInputPrompt = WizardInputPromptString | WizardInputPromptInt;

type WizardInputReturnType<T> = T extends {type:"int"} ? number : string;

const prompt = {
	async run(cb:()=>Promise<void>){
		process.on("unhandledRejection", (e) => { throw e; });
		process.stdout.write(clc.reset);
		
		rl = readline.createInterface({ input: process.stdin, output: process.stdout });
		
		strings = await importTxtFile("enUS");
		hotkeys = await importHotkeysFile();
		
		let catalogs = await getGameDataFileList();
		const base = getCatalogFilenameBase();
		
		prompt.line();
		let catalogFilename = await prompt.listPretty("What catalog are we working on?", catalogs, s => s.slice(base.length));
		catalog = (await loadCatalogs([catalogFilename]))[0];
		
		prompt.line(`START`);
		await cb();
		prompt.line(`END`);
		
		rl.close();
	},
	
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
