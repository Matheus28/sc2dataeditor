import assert from "assert";
import { CatalogName, CatalogSubtype, CatalogTypesInstance, FieldType } from "./lib/game_data";
import { CatalogEntry, CatalogField, accessArray, accessStruct, addChild, addDataspaceEntry, addDataspaceToIndex, changeDataspaceEntryType, Dataspace, GameDataIndex, getCatalogNameByTagname, getChildrenByTagName, loadGameDataIndex, newDataspace, newNode, saveDataspaces, saveGameDataIndex, XMLNode, parseXML, XMLNodeEntry, isValidTagname, forEachIndex, removeChild } from './lib/game_data_loader';
import { exportHotkeysFile, importHotkeysFile } from "./lib/game_hotkeys_loader";
import { exportStringsFile, getTxtFileName, importStringsFile } from "./lib/game_strings_loader";
import { resolveTokens, unresolveTokens } from "./wizards/components/utils";
import * as worker_client from "./worker_client";

type WorkerClient = typeof worker_client;

//FIXME: remove this and make stuff import it from there instead
export { CatalogEntry, CatalogField };

export const enum ValueSource {
	Default = "source-default",
	Parent = "source-parent",
	Self = "source-self",
};

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
	
	objectStringsModified:boolean;
	objectStrings:Map<string,string>;
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

type EntryNodeWithDataspace = { node:XMLNodeEntry, dataspace:Dataspace };

function accessEntry(entry:CatalogEntry, createIfNotExists:true):EntryNodeWithDataspace;
function accessEntry(entry:CatalogEntry, createIfNotExists:boolean):EntryNodeWithDataspace|undefined;
function accessEntry(entry:CatalogEntry, createIfNotExists:boolean):EntryNodeWithDataspace|undefined {
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

interface SelfTokens {
	readonly id:string;
	readonly parent:string;
	readonly [x:string]:string;
}

function getSelfTokens(cur:XMLNodeEntry):SelfTokens {
	let attr = cur.attr;
	let isDefault = cur.attr.default === "1";
	if(isDefault){
		// Default classes aren't allowed to set tokens
		let id = attr.id || cur.tagname;
		
		let parent = getParentNodeFor(cur, false);
		if(parent === undefined) return { id, parent: id };
		
		let parentID = parent.node.attr.id || parent.node.tagname;
		let ret:Record<string,string> = { id, parent: parentID };
		
		// Any token declarations set their value here
		if(cur.declaredTokens){
			for(let key in cur.declaredTokens){
				ret[key] = cur.declaredTokens[key].value || ""; // Default value is empty string
			}
		}
		
		return ret as SelfTokens;
	}else{
		if('parent' in attr){
			if('id' in attr){
				return attr as SelfTokens;
			}else{
				// huh... this is weird
				console.warn("Entry with no id has a parent...");
				return { ...attr, id: cur.tagname } as SelfTokens;
			}
		}
		
		let id = attr.id || cur.tagname;
		
		let parent = getParentNodeFor(cur, false);
		if(parent === undefined) return { ...attr, id, parent: id };
		
		let parentID = parent.node.attr.id || parent.node.tagname;
		return {...attr, id, parent: parentID };
	}
}

function getTokensForNewField(cur:XMLNodeEntry):Record<string,string> {
	let ret:Record<string,string> = Object.assign({}, getSelfTokens(cur));
	
	let tmp = getParentNodeFor(cur);
	if(tmp !== undefined){
		let {node: parent} = tmp;
		let inherited = getTokensForNewField(parent);
		
		ret = Object.assign(inherited, ret); // Prefer our tokens
	}
	
	return ret;
}

function getTokensForDefaultField(cur:XMLNodeEntry):Record<string,string> {
	let ret:Record<string,string> = Object.assign({}, getSelfTokens(cur));
	
	let tmp = getParentNodeFor(cur);
	if(tmp !== undefined){
		let {node: parent} = tmp;
		let inherited = getTokensForDefaultField(parent);
		
		// So this exists because if we have
		// grand parent (default = 1) -> parent (default = 0) -> me (default = 0)
		// the id token that gets used is the parent one
		// so on the first entry missing `default=1`, we override the id there
		if(parent.attr.default === "1"){
			// grand parent, parent
			ret = Object.assign(inherited, ret); // Prefer our tokens
		}else{
			// me
			ret = Object.assign({}, ret, inherited); // Prefer parent tokens
		}
	}
	
	return ret;
}

function getFieldContainer(field:CatalogField, entry:XMLNodeEntry, createIfNotExists:true):XMLNode;
function getFieldContainer(field:CatalogField, entry:XMLNodeEntry, createIfNotExists:boolean):XMLNode|undefined;
function getFieldContainer(field:CatalogField, entry:XMLNodeEntry, createIfNotExists:boolean):XMLNode|undefined {
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

function getFieldValueLast(cur:XMLNode, name:string|[string,string|number]):{ value:string; source:ValueSource; }|undefined {
	if(typeof name == 'string'){
		// There are two ways this could be defined, say we're accessing "Row"
		// 1. <DefaultButtonLayout Row="1"/>
		// 2. <DefaultButtonLayout><Row value="1"/></DefaultButtonLayout>
		
		// Check the first form
		if(name in cur.attr){
			return { value: cur.attr[name], source: ValueSource.Self };
		}
		
		// Then check the second form
		let subnodes = getChildrenByTagName(cur, name);
		if(!subnodes || subnodes.length == 0) return undefined;
		return { value: subnodes[0].attr["value"], source: ValueSource.Self };
	}else{
		// This is an array of simple values, such as
		// <Resource index="Minerals" value="100"/>
		let [arrayName, arrayIndex] = name;
		
		let v = accessArray(cur, arrayName, arrayIndex, false);
		if(!v) return undefined;
		
		return { value: v.attr["value"], source: ValueSource.Self };
	}
}

// If not found on this node, will navigate to the parent to try to find it there
function getFieldValueSpecific(node:XMLNodeEntry, field:CatalogField):{ value:string; source:ValueSource; tokens:Record<string,string>; }|undefined {
	assert(field.name.length >= 1);
	
	let cur = getFieldContainer(field, node, false);
	if(cur){
		let vv = getFieldValueLast(cur, field.name[field.name.length - 1]);
		if(vv !== undefined){
			return {...vv, tokens: getTokensForNewField(node)};
		}
	}
	
	let tmp = getParentNodeFor(node);
	if(tmp !== undefined){
		let {node: parent, isDefault} = tmp;
		let ret = getFieldValueSpecific(parent, field);
		if(ret){
			// So this exists because if we have
			// grand parent (default = 1) -> parent (default = 0) -> me (default = 0)
			// the id token that gets used is the parent one
			// so on the first entry missing `default=1`, we override the id there
			if(parent.attr.default === "1"){
				// grand parent, parent
				ret.tokens = Object.assign(ret.tokens, getSelfTokens(node)); // Prefer our tokens
			}else{
				// me
				ret.tokens = Object.assign({}, getSelfTokens(node), ret.tokens); // Prefer parent tokens
			}
			
			// ^
			// Also we don't use the other functions to get the tokens is because if the field refers
			// to `id`, it's always going to use the `id` of where that value was set, even if it's a
			// non-default inheriting from several other non-default
			
			if(ret.source == ValueSource.Self){
				if(isDefault){
					ret.source = ValueSource.Default;
				}else{
					ret.source = ValueSource.Parent;
				}
			}
			
			return ret;
		}
	}
	
	return undefined;
}

function getParentNodeFor(node:XMLNodeEntry, useMetaChain:boolean = true):{node: XMLNodeEntry, dataspace:Dataspace, isDefault:boolean}|undefined{
	let def = getDefaultEntryForType(node.tagname);
	if(def === undefined) return undefined;
	
	if(def.node === node){
		// We have reached the top of the chain, like CEffectCreep and we want its parent
		// Now we check the meta parent for that (CEffect)
		if(!useMetaChain) return undefined;
		let meta = CatalogTypesInstance[getCatalogNameByTagname(node.tagname)][node.tagname];
		if(meta.parent == null) return undefined;
		
		def = getDefaultEntryForType(meta.parent);
		if(def === undefined) return undefined;
		return { node: def.node, dataspace: def.dataspace, isDefault: true };
	}
	
	let parent = def; // This will be our fallback parent
	
	if(node.attr.parent){
		let vv = accessEntry({
			id: node.attr.parent,
			catalog: getCatalogNameByTagname(node.tagname),
		}, false);
		
		if(vv){
			if(vv.node.tagname == node.tagname){
				parent = vv;
			}else{
				console.error(`Invalid parent for ${node["attr"]["id"]}. Type doesn't match`);
			}
		}else{
			console.error(`Invalid parent for ${node["attr"]["id"]}. It doesn't exist`);
		}
	}
	
	if(parent === undefined) return undefined;
	return {node: parent.node, dataspace: parent.dataspace, isDefault: parent === def};
}

function getStructDefaultValue(tagname:string, field:CatalogField):string|undefined {
	if(field.name.length < 2) return undefined;
	
	let tmp = getDefaultEntryForType(tagname);
	if(tmp === undefined) return undefined;
	let cur = tmp;
	
	const catalog = getCatalogNameByTagname(tagname);
	let meta:CatalogSubtype = CatalogTypesInstance[catalog][tagname];
	assert(meta);
	
	for(;;){
		const removeIndex = (x:string|[string,string|number]) => {
			if(typeof x == 'string') return x;
			return x[0];
		}
		
		let metaf:FieldType|undefined = meta.fields[removeIndex(field.name[0])];
		for(let i = 1; metaf && i < field.name.length-1; ++i){
			let name = field.name[i];
			if(typeof name == 'string'){
				assert('struct' in metaf);
				metaf = metaf.struct[name];
			}else{
				name = name[0]; // Remove index, we don't care
				if('namedArray' in metaf){
					metaf = metaf.namedArray.value;
				}else if('array' in metaf){
					metaf = metaf.array;
				}else{
					assert(false);
				}
			}
		}
		
		// We still have one more level to go down. We should be at the struct containing our value now
		if(metaf !== undefined){
			if('struct' in metaf){
				let defs = cur.dataspace.structDefaults[metaf.structTypename];
				if(defs !== undefined){
					let vv = getFieldValueLast(defs, field.name[field.name.length - 1]);
					if(vv !== undefined) return vv.value;
				}
			}
		}
		
		// Look in the parent meta
		if(meta.parent != null){
			let tmp = getDefaultEntryForType(meta.parent);
			if(tmp === undefined) return undefined;
			cur = tmp;
			
			meta = CatalogTypesInstance[catalog][meta.parent];
			assert(meta);
		}else{
			break;
		}
	}
	
	return undefined;
}

function getFieldValue(field:CatalogField):{ value:string; source:ValueSource; tokens:Record<string,string>; }|undefined {
	let v = accessEntry(field.entry, false);
	if(!v) return undefined;
	
	return getFieldValueStartingFromNode(field, v.node);
}

function getFieldValueStartingFromNode(field:CatalogField, node:XMLNodeEntry):{ value:string; source:ValueSource; tokens:Record<string,string>; }|undefined {
	let vv = getFieldValueSpecific(node, field);
	if(vv !== undefined) return vv;
	
	let tmp = getStructDefaultValue(node.tagname, field);
	if(tmp !== undefined){
		return { value: tmp, source: ValueSource.Default, tokens: getTokensForDefaultField(node) };
	}
	
	return undefined;
}

function getDefaultEntryForType(tagname:string):{node: XMLNode, dataspace:Dataspace }|undefined {
	let catalogName = getCatalogNameByTagname(tagname);
	return map.index.catalogDefaults[catalogName][tagname];
}

function getArrayFieldIndexes(field:CatalogField):Record<string,{removed:boolean;source:ValueSource}>|undefined {
	let vv = accessEntry(field.entry, false);
	if(!vv) return undefined;
	
	
	let entry = getFieldContainer(field, vv.node, false);
	if(!entry) return undefined;
	
	let arrName2 = field.name[field.name.length - 1];
	
	if(typeof arrName2 != 'string'){
		throw new Error("You must refer to the array without an index");
	}
	
	let arrName = arrName2;
	
	let ret:Record<string,{removed:boolean;source:ValueSource}> = {}
	
	function addEntryIndexes(entry:XMLNode, source:ValueSource){
		let tmp = getArrayFieldIndexesInternal(entry, arrName);
		if(tmp){
			for(let index in tmp){
				if(!(index in ret)){
					let exists = tmp[index];
					ret[index] = {
						removed: !exists,
						source,
					};
				}
			}
		}
	}
	
	addEntryIndexes(entry, ValueSource.Self);
	
	for(;;){
		let tmp = getParentNodeFor(entry);
		if(tmp === undefined) break;
		
		let {node: parent, isDefault} = tmp;
		
		entry = parent;
		addEntryIndexes(entry, isDefault ? ValueSource.Default : ValueSource.Parent);
	}
	
	return ret;
}

function getArrayFieldIndexesInternal(cur:XMLNode, arrName:string, mapping?:Record<string, number>):Record<string,boolean>|undefined {
	let subnodes = getChildrenByTagName(cur, arrName);
	if(!subnodes || subnodes.length == 0){
		return {};
	}
	
	let ret:Record<string,boolean> = {};
	
	let lastIndex:number = -1;
	for(let sub of subnodes){
		if(typeof sub.attr["index"] != 'undefined'){
			let vv = sub.attr["index"];
			
			if(sub.attr["removed"] === "1"){
				ret[vv] = false;
			}else{
				ret[vv] = true;
			}
			
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
		}else{
			// Can't remove without an index
			assert(sub.attr["removed"] !== "1");
			
			ret[(lastIndex+1).toString()] = true;
			++lastIndex;
		}
	}
	
	return ret;
}

function test_getArrayFieldIndexesInternal(xml:string, expected:Record<string,boolean>, mapping?:Record<string, number>){
	let vv = getArrayFieldIndexesInternal(parseXML(`<A>${xml}</A>`)["A"], 'B', mapping);
	assert.deepStrictEqual(
		vv,
		expected,
		`${xml} has bad getArrayFieldIndexesInternal.\nGot: ${JSON.stringify(vv)}\nExpected: ${JSON.stringify(expected)}`
	);
}

{
	test_getArrayFieldIndexesInternal(`<B/><B/><B/><B/>`, {'0':true, '1':true, '2':true, '3':true});
	test_getArrayFieldIndexesInternal(`<B/><B/><B index="0"/><B/>`, {'0':true, '1':true, '2':true});
	test_getArrayFieldIndexesInternal(`<B index="0"/><B/><B index="0"/><B/>`, {'0':true, '1':true, '2':true});
	test_getArrayFieldIndexesInternal(`<B index="2"/><B/><B/><B/>`, {'2':true, '3':true, '4':true, '5':true});
	
	let mapping = {
		Research1: 0,
		Research2: 1,
		Research3: 2,
		Research4: 3,
	};
	
	test_getArrayFieldIndexesInternal(`<B/><B/><B/><B/>`, {'0':true, '1':true, '2':true, '3':true}, mapping);
	test_getArrayFieldIndexesInternal(`<B index="Research1"/><B index="1"/><B index="Research3"/><B index="Research4"/>`, {'Research1':true, '1':true, 'Research3':true, 'Research4':true}, mapping);
}

function setFieldValue(field:CatalogField, newValue:string):{
	source:ValueSource;
	tokens:Record<string,string>;
	unresolvedValue:string;
}{
	assert(field.name.length >= 1);
	
	let vv = accessEntry(field.entry, true);
	
	let unresolvedValue:string;
	let thisEntryTokens = getTokensForNewField(vv.node);
	
	const isDefaultEntry = vv.node.attr["default"] === "1";
	
	if(isDefaultEntry){
		unresolvedValue = unresolveTokens(newValue, thisEntryTokens);
	}else{
		// For non-default entries, the editor just writes down the resolved tokens that it can
		// It can read tokens and resolve them still, but when it writes to the catalog it always does it like this
		unresolvedValue = newValue;
		newValue = resolveTokens(newValue, thisEntryTokens);
	}
	
	
	let parent = getParentNodeFor(vv.node);
	if(parent !== undefined){
		let cur = getFieldValueStartingFromNode(field, parent.node);
		if(cur !== undefined){
			if(cur.source == ValueSource.Self) ValueSource.Parent;
			
			let resolved = resolveTokens(cur.value, cur.tokens);
			if(resolved === newValue){
				// So this field already has this value from a parent
				// delete it if it exists and let's inherit it instead
				let container = getFieldContainer(field, vv.node, false);
				if(container !== undefined){
					deleteFieldValueInternal(field, container);
				}
				
				return {
					source: cur.source,
					tokens: cur.tokens,
					unresolvedValue: cur.value,
				};
			}
		}
	}
	
	let container = getFieldContainer(field, vv.node, true);
	
	let ret = {
		source: ValueSource.Self,
		tokens: thisEntryTokens,
		unresolvedValue,
	};
	
	let name = field.name[field.name.length - 1];
	if(typeof name == 'string'){
		// There are two ways this could be defined, say we're accessing "Row"
		// 1. <DefaultButtonLayout Row="1"/>
		// 2. <DefaultButtonLayout><Row value="1"/></DefaultButtonLayout>
		
		// Check if the first form exists
		if(name in container.attr){
			if(container.attr[name] !== newValue){
				container.attr[name] = newValue;
				modifiedDataspace(vv.dataspace);
			}
			
			return ret;
		}
		
		// Check the second form exists
		let subnodes = getChildrenByTagName(container, name);
		if(subnodes && subnodes.length > 0){
			assert(subnodes.length == 1); // Otherwise this should've been an array...
			
			// So just set the "value" attribute in that child
			
			let sub = subnodes[0];
			if(sub.attr["value"] !== newValue){
				sub.attr["value"] = newValue;
				modifiedDataspace(vv.dataspace);
			}
			
			return ret;
		}
		
		// Neither exists, so we must create it
		if(container == vv.node){
			// Our `cur` node is also our entry node
			// We can't put root ones in the attributes, or it'd be a token
			
			// Create a <name value="newValue"/> inside it
			addChild(container, newNode(name, {value:newValue}));
			modifiedDataspace(vv.dataspace);
		}else{
			container.attr[name] = newValue;
			modifiedDataspace(vv.dataspace);
		}
		
		return ret;
	}else{
		// This is an array of simple values, such as
		// <Resource index="Minerals" value="100"/>
		let [arrayName, arrayIndex] = name;
		
		let v = accessArray(container, arrayName, arrayIndex, true);
		
		if(v.attr["value"] !== newValue){
			v.attr["value"] = newValue;
			modifiedDataspace(vv.dataspace);
		}
		
		return ret;
	}
}

function deleteFieldValueInternal(field:CatalogField, container:XMLNode){
	let name = field.name[field.name.length - 1];
	if(typeof name == 'string'){
		// There are two ways this could be defined, say we're accessing "Row"
		// 1. <DefaultButtonLayout Row="1"/>
		// 2. <DefaultButtonLayout><Row value="1"/></DefaultButtonLayout>
		
		// Check if the first form exists
		if(name in container.attr){
			delete container.attr[name];
		}
		
		// Check the second form exists
		let subnodes = getChildrenByTagName(container, name);
		if(subnodes && subnodes.length > 0){
			assert(subnodes.length == 1); // Otherwise this should've been an array...
			
			removeChild(container, subnodes[0]);
		}
	}else{
		// This is an array of simple values, such as
		// <Resource index="Minerals" value="100"/>
		let [arrayName, arrayIndex] = name;
		
		let v = accessArray(container, arrayName, arrayIndex, false);
		if(v !== undefined){
			removeChild(container, v);
		}
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
			strings: await importStringsFile(getTxtFileName(rootMapDir, "enUS")),
			
			hotkeysModified: false,
			hotkeys: await importHotkeysFile(rootMapDir),
			
			objectStringsModified: false,
			objectStrings: await importStringsFile(getTxtFileName(rootMapDir, "enUS", "ObjectStrings.txt")),
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
			await exportStringsFile(getTxtFileName(map.rootMapDir, "enUS"), map.strings);
		}
		
		if(map.hotkeysModified){
			map.hotkeysModified = false;
			await exportHotkeysFile(map.rootMapDir, map.hotkeys);
		}
		
		if(map.objectStringsModified){
			map.objectStringsModified = false;
			await exportStringsFile(getTxtFileName(map.rootMapDir, "enUS", "GameStrings.txt"), map.objectStrings);
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
		return accessEntry(entry, false) !== undefined;
	},
	
	async getEntry(entry:CatalogEntry){
		let v = accessEntry(entry, false);
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
		
		let v = accessEntry(entry, true);
		if(v.node.tagname == value) return;
		
		v.node.tagname = value;
		modifiedDataspace(v.dataspace);
	},
	
	async getStringLink(link:string){
		return map.strings.get(link);
	},
	
	async setStringLink(link:string, value:string){
		if(map.strings.get(link) === value) return;
		map.strings.set(link, value);
		
		if(!map.stringsModified){
			map.stringsModified = true;
			notifyChanges();
		}
		
	},
	
	async getObjectStringLink(link:string){
		return map.objectStrings.get(link);
	},
	
	async setObjectStringLink(link:string, value:string){
		if(map.objectStrings.get(link) === value) return;
		map.objectStrings.set(link, value);
		
		if(!map.objectStringsModified){
			map.objectStringsModified = true;
			notifyChanges();
		}
	},
	
	async getEntryComment(entry:CatalogEntry) {
		let v = accessEntry(entry, false);
		if(!v) return undefined;
		
		return v.node.editorComment;
	},

	async setEntryComment(entry:CatalogEntry, value:string) {
		let v = accessEntry(entry, true);
		
		if(v.node.editorComment === value) return;
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
		return setFieldValue(field, value);
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
	}).catch(e => {
		setTimeout(() => { throw e; });
	});
}

function delay(ms:number):Promise<void>{
	return new Promise((resolve) => setTimeout(resolve, ms));
}
