import assert from "assert";
import { CatalogName, CatalogSubtype, CatalogTypesInstance, EnumType, FieldType } from "./game_data";
import { addChild, addDataspaceEntry, clearChildren, Dataspace, encodeEntryXML, forEachDataspace, GameDataIndex, getCatalogNameByTagname, getChildrenByTagName, isValidCatalogName, isValidTagname, newCatalogEntry, newNode, parseXML, removeChild, setEntryXML, XMLNode, XMLNodeEntry } from './game_data_loader';
import { resolveTokens, unresolveTokens } from "./utils";

export const enum ValueSource {
	Default = "source-default",
	Parent = "source-parent",
	Self = "source-self",
};

export interface CatalogEntry {
	id:string;
	catalog:CatalogName;
}

type CatalogFieldName = (string|[string, string|number])[];

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

type EntryNodeWithDataspace = { node:XMLNodeEntry, dataspace:Dataspace };

function accessDataspaceEntry(dataspace:Dataspace, entry:CatalogEntry):XMLNodeEntry|undefined {
	let catalog = dataspace.catalogs[entry.catalog];
	
	if(entry.id in catalog.entryByID){
		return catalog.entryByID[entry.id];
	}
	
	return undefined;
}

export function accessEntry(index:GameDataIndex, entry:CatalogEntry):EntryNodeWithDataspace|undefined {
	let ret:EntryNodeWithDataspace|undefined;
	if(!forEachDataspace(index, true, true, (dataspace) => {
		let cur = accessDataspaceEntry(dataspace, entry);
		if(cur){
			ret = {node: cur, dataspace};
			return false;
		}
		
		return true;
	})){
		return ret; // Never undefined here
	}
	
	return undefined;
}

function createEntry(entry:CatalogEntry, dataspace:Dataspace):XMLNodeEntry {
	let attrs:Record<string,string> = {
		"id": entry.id,
	};
	
	let node = newCatalogEntry(getDefaultTypeForCatalog(entry.catalog), attrs);
	addDataspaceEntry(dataspace, node);
	return node;
}

function getDefaultTypeForCatalog(catalog:CatalogName):string {
	for(let i in CatalogTypesInstance[catalog]){
		if(CatalogTypesInstance[catalog][i].abstract) continue;
		return i;
	}
	
	return `C${catalog}`;
}

export function accessEntryForModification(index:GameDataIndex, entry:CatalogEntry, dataspace:Dataspace):EntryNodeWithDataspace {
	let ret:EntryNodeWithDataspace|undefined;
	
	let fn = (dataspace:Dataspace) => {
		let cur = accessDataspaceEntry(dataspace, entry);
		if(cur){
			ret = {node: cur, dataspace};
			return false;
		}
		
		return true;
	};
	
	// Does this entry exist in our index?
	if(!forEachDataspace(index, true, false, fn)){
		assert(ret);
		return ret; // Yes
	}
	
	let node = createEntry(entry, dataspace);
	
	// Does this entry exist in our deps?
	if(!forEachDataspace(index, false, true, fn)){
		assert(ret);
		
		// TODO: there are faster ways to do this than encoding and decoding...
		assert(setEntryXML(node, encodeEntryXML(ret.node)));
	}
	
	return {node, dataspace};
}

interface SelfTokens {
	id:string;
	parent:string;
	[x:string]:string;
}

function getSelfTokens(index:GameDataIndex, cur:XMLNodeEntry):Readonly<SelfTokens> {
	let attr = cur.attr;
	let isDefault = cur.attr.default === "1";
	if(isDefault){
		// Default classes aren't allowed to set tokens
		let id = attr.id || cur.tagname;
		
		let parent = getParentNodeFor(index, cur, false);
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
		
		let parent = getParentNodeFor(index, cur, false);
		if(parent === undefined) return { ...attr, id, parent: id };
		
		let parentID = parent.node.attr.id || parent.node.tagname;
		return {...attr, id, parent: parentID };
	}
}

function getTokensForNewField(index:GameDataIndex, cur:XMLNodeEntry):Record<string,string> {
	let ret:Record<string,string> = Object.assign({}, getSelfTokens(index, cur));
	
	let tmp = getParentNodeFor(index, cur);
	if(tmp !== undefined){
		let {node: parent} = tmp;
		let inherited = getTokensForNewField(index, parent);
		
		ret = Object.assign(inherited, ret); // Prefer our tokens
	}
	
	return ret;
}

function getTokensForDefaultField(index:GameDataIndex, cur:XMLNodeEntry):Record<string,string> {
	let ret:Record<string,string> = Object.assign({}, getSelfTokens(index, cur));
	
	let tmp = getParentNodeFor(index, cur);
	if(tmp !== undefined){
		let {node: parent} = tmp;
		let inherited = getTokensForDefaultField(index, parent);
		
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

function getFieldContainer(index:GameDataIndex, fieldName:CatalogFieldName, entry:XMLNodeEntry, createIfNotExists:true):XMLNode;
function getFieldContainer(index:GameDataIndex, fieldName:CatalogFieldName, entry:XMLNodeEntry, createIfNotExists:boolean):XMLNode|undefined;
function getFieldContainer(index:GameDataIndex, fieldName:CatalogFieldName, entry:XMLNodeEntry, createIfNotExists:boolean):XMLNode|undefined {
	let container:XMLNode = entry;
	
	for(let i = 0; i < fieldName.length-1; ++i){
		let name = fieldName[i];
		if(typeof name == 'string'){
			let tmp = accessStruct(container, name, createIfNotExists);
			if(!tmp) return undefined;
			
			container = tmp;
		}else{
			let tmp = wrapAccessArray(index, entry, fieldName.slice(0, i+1), container, createIfNotExists);
			if(!tmp) return undefined;
			
			container = tmp.node;
		}
	}
	
	return container;
}

function getFieldValueLast(index:GameDataIndex, entry:XMLNodeEntry, container:XMLNode, fieldName:CatalogFieldName):{ value:string; source:ValueSource; }|undefined {
	let lastName = fieldName[fieldName.length - 1];
	if(typeof lastName == 'string'){
		// Defer to the other definition to reduce duplication
		return getFieldValueLast_Internal(container, lastName);
	}else{
		// This is an array of simple values, such as
		// <Resource index="Minerals" value="100"/>
		let v = wrapAccessArray(index, entry, fieldName, container, false);
		if(!v) return undefined;
		
		return { value: v.node.attr["value"], source: ValueSource.Self };
	}
}

function getFieldValueLast_Internal(container:XMLNode, lastName:string){
	// There are two ways this could be defined, say we're accessing "Row"
	// 1. <DefaultButtonLayout Row="1"/>
	// 2. <DefaultButtonLayout><Row value="1"/></DefaultButtonLayout>
	
	// Check the first form
	if(lastName in container.attr){
		return { value: container.attr[lastName], source: ValueSource.Self };
	}
	
	// Then check the second form
	let subnodes = getChildrenByTagName(container, lastName);
	if(!subnodes || subnodes.length == 0) return undefined;
	return { value: subnodes[0].attr["value"], source: ValueSource.Self };
}

// Does not look into parents to access arrays correctly!!
function getFieldValueLastSimple(container:XMLNode, lastName:CatalogFieldName[number], metaf:FieldType):{ value:string; source:ValueSource; }|undefined {
	if(typeof lastName == 'string'){
		return getFieldValueLast_Internal(container, lastName);
	}else{
		// This is an array of simple values, such as
		// <Resource index="Minerals" value="100"/>
		let v = wrapAccessArraySimple(metaf, lastName, container);
		if(!v) return undefined;
		
		return { value: v.node.attr["value"], source: ValueSource.Self };
	}
}
// If not found on this node, will navigate to the parent to try to find it there
function getFieldValueSpecific(index:GameDataIndex, entry:XMLNodeEntry, fieldName:CatalogFieldName):{ value:string; source:ValueSource; tokens:Record<string,string>; }|undefined {
	assert(fieldName.length >= 1);
	
	let container = getFieldContainer(index, fieldName, entry, false);
	if(container){
		let vv = getFieldValueLast(index, entry, container, fieldName);
		if(vv !== undefined){
			return {...vv, tokens: getTokensForNewField(index, entry)};
		}
	}
	
	let tmp = getParentNodeFor(index, entry);
	if(tmp !== undefined){
		let {node: parent, isDefault} = tmp;
		let ret = getFieldValueSpecific(index, parent, fieldName);
		if(ret){
			// So this exists because if we have
			// grand parent (default = 1) -> parent (default = 0) -> me (default = 0)
			// the id token that gets used is the parent one
			// so on the first entry missing `default=1`, we override the id there
			if(parent.attr.default === "1"){
				// grand parent, parent
				ret.tokens = Object.assign(ret.tokens, getSelfTokens(index, entry)); // Prefer our tokens
			}else{
				// me
				ret.tokens = Object.assign({}, getSelfTokens(index, entry), ret.tokens); // Prefer parent tokens
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

function getParentNodeFor(index:GameDataIndex, node:XMLNodeEntry, useMetaChain:boolean = true):{node: XMLNodeEntry, dataspace:Dataspace, isDefault:boolean}|undefined{
	if(node.attr.parent){
		let vv = accessEntry(index, {
			id: node.attr.parent,
			catalog: getCatalogNameByTagname(node.tagname),
		});
		
		if(vv){
			if(vv.node.tagname == node.tagname){
				return {node: vv.node, dataspace: vv.dataspace, isDefault: vv.node.attr.id === undefined};
			}else{
				console.error(`Invalid parent for ${node["attr"]["id"]}. Type doesn't match`);
			}
		}else{
			console.error(`Invalid parent for ${node["attr"]["id"]}. It doesn't exist: ${node.attr.parent}`);
		}
	}
	
	if(!useMetaChain) return undefined;
	
	// Now we start going <CUnitHero id="aaa"/> -> <CUnitHero default="1"/> -> <CUnit default="1"/>
	
	let def = getDefaultEntryForType(index, node.tagname);
	if(def !== undefined && def.node == node) def = undefined; // Not a valid one, we wanna go to our parent
	if(def !== undefined) return { node: def.node, dataspace: def.dataspace, isDefault: true };
	
	// If we don't have a default for this one, try to look up to other parents
	// For example if there's no <CUnitHero default="1"/>, look for a <CUnit default="1"/>
	
	let tagname = node.tagname;
	
	for(;;){
		let meta = CatalogTypesInstance[getCatalogNameByTagname(tagname)][tagname];
		if(meta.parent == null) return undefined;
		
		def = getDefaultEntryForType(index, meta.parent);
		if(def === undefined){
			// Skip to next one up in the meta chain
			tagname = meta.parent;
			continue;
		}
		
		return { node: def.node, dataspace: def.dataspace, isDefault: true };
	}
}

/*
	Given the following metafield:
	
	[1] {
		struct: { // CAbilResearch
			"InfoArray": {
				[2] "namedArray": {
					keys: {"Research1":0, ...}
					value: {
						[3] struct: {
							"Time": [4] { value: { type: "CFixed" } },
							"Resource": {
								[5] "namedArray": {
									keys: {"Minerals":0, ...},
									value: [6] { value: { type: "CFixed" } },
								}
							}
						}
					}
				}
			}
		}
	}
	
	[["InfoArray", "Research1"], "Time"]
		accessMetafield([1], "InfoArray") = [2]
		accessMetafield([1], ["InfoArray", "Research1"]) = [3]
		accessMetafield([3], "Time") = [4]
		
	[["InfoArray", "Research1"], ["Resource", "Minerals"]]
		accessMetafield([3], "Resource") = [5]
		accessMetafield([3], ["Resource", "Minerals"]) = [6]
	
	
*/
function accessMetafield(metaf:FieldType, name:CatalogFieldName[number]):FieldType|undefined {
	assert('struct' in metaf);
	
	if(typeof name == 'string'){
		return metaf.struct[name];
	}else{
		let index = name[1];
		
		name = name[0]; // Remove index, we don't care, it doesn't affect the meta type
		metaf = metaf.struct[name]; // Access the struct
		if(metaf == undefined) return undefined;
		
		const isNumericIndex = typeof index == "number" || /^[0-9]+$/.test(index);
		if(!isNumericIndex) assert('namedArray' in metaf);
		
		// And now we access the index...
		if('namedArray' in metaf){
			if(isNumericIndex) assert(index in metaf.namedArray.keys.reverseValues);
			else assert(index in metaf.namedArray.keys.values);
			
			return metaf.namedArray.value;
		}else if('array' in metaf){
			assert(isNumericIndex);
			return metaf.array;
		}else{
			return undefined;
		}
	}
}

// FIXME: This does a bit more than it says. It also returns the dataspace where the default entry is
function getMetafieldContainerFor(index:GameDataIndex, tagname:string, fieldName:CatalogFieldName):{ metaf:FieldType, dataspace:Dataspace }|undefined {
	if(fieldName.length < 1) return undefined;
	
	let tmp = getDefaultEntryForType(index, tagname);
	if(tmp === undefined) return undefined;
	let cur = tmp;
	
	const catalog = getCatalogNameByTagname(tagname);
	let meta:CatalogSubtype = CatalogTypesInstance[catalog][tagname];
	assert(meta);
	
	for(;;){
		let metaf:FieldType|undefined = meta.type;
		let lastMetaf:FieldType = metaf;
		for(let i = 0; metaf !== undefined && i < fieldName.length; ++i){
			lastMetaf = metaf;
			metaf = accessMetafield(metaf, fieldName[i]);
		}
		
		// Found it
		if(metaf !== undefined){
			return { metaf: lastMetaf, dataspace: cur.dataspace};
		}
		
		// Not here...
		if(meta.parent != null){
			let tmp = getDefaultEntryForType(index, meta.parent);
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

function getStructDefaultValue(index:GameDataIndex, tagname:string, fieldName:CatalogFieldName):string|undefined {
	if(fieldName.length < 2) return undefined;
	
	let tmp = getMetafieldContainerFor(index, tagname, fieldName);
	if(tmp === undefined) return undefined;
	
	let {metaf, dataspace} = tmp;
	
	// We should be at the struct containing our value now
	assert('struct' in metaf); // is this assert too restrictive?
	if('struct' in metaf){
		// So now we check the default values for that struct
		let defs = dataspace.structDefaults[metaf.structTypename];
		if(defs !== undefined){
			let vv = getFieldValueLastSimple(defs, fieldName[fieldName.length - 1], metaf);
			if(vv !== undefined) return vv.value;
		}
	}
	
	return undefined;
}

function getMetafieldFor(index:GameDataIndex, tagname:string, fieldName:CatalogFieldName):FieldType|undefined {
	assert(fieldName.length > 0);
	
	let tmp = getMetafieldContainerFor(index, tagname, fieldName);
	if(tmp === undefined) return undefined;
	
	return accessMetafield(tmp.metaf, fieldName[fieldName.length-1]);
}

export function getFieldValue(index:GameDataIndex, field:CatalogField):{ value:string; source:ValueSource; tokens:Record<string,string>; }|undefined {
	let v = accessEntry(index, field.entry);
	if(!v) return undefined;
	
	return getFieldValueStartingFromNode(index, field, v.node);
}

function getFieldValueStartingFromNode(index:GameDataIndex, field:CatalogField, node:XMLNodeEntry):{ value:string; source:ValueSource; tokens:Record<string,string>; }|undefined {
	let vv = getFieldValueSpecific(index, node, field.name);
	if(vv !== undefined) return vv;
	
	let tmp = getStructDefaultValue(index, node.tagname, field.name);
	if(tmp !== undefined){
		return { value: tmp, source: ValueSource.Default, tokens: getTokensForDefaultField(index, node) };
	}
	
	return undefined;
}

function getDefaultEntryForType(index:GameDataIndex, tagname:string):{node: XMLNodeEntry, dataspace:Dataspace }|undefined {
	let catalogName = getCatalogNameByTagname(tagname);
	return index.catalogDefaults[catalogName][tagname];
}

export function getArrayFieldIndexes(index:GameDataIndex, field:CatalogField):Record<string,{removed:boolean;source:ValueSource}>|undefined {
	let vv = accessEntry(index, field.entry);
	if(!vv) return undefined;
	
	let arrName2 = field.name[field.name.length - 1];
	if(typeof arrName2 != 'string'){
		throw new Error("You must refer to the array without an index");
	}
	
	let arrName = arrName2;
	
	let ret:Record<string,{removed:boolean;source:ValueSource}> = {}
	
	function addEntryIndexes(entry:XMLNodeEntry, source:ValueSource){
		let container = getFieldContainer(index, field.name, entry, false);
		if(!container) return;
		
		let tmp = getArrayFieldIndexesInternal(container, arrName);
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
	
	let entry = vv.node;
	addEntryIndexes(entry, ValueSource.Self);
	
	for(;;){
		let tmp = getParentNodeFor(index, entry);
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
	let vv = getArrayFieldIndexesInternal(parseXML(`<A>${xml}</A>`)[0], 'B', mapping);
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

export function setFieldValue(index:GameDataIndex, field:CatalogField, newValue:string, dataspaceForNewEntries:Dataspace):{
	source:ValueSource;
	tokens:Record<string,string>;
	unresolvedValue:string;
	resolvedValue:string;
	writtenValueIsResolved:boolean;
}{
	assert(field.name.length >= 1);
	
	let vv = accessEntryForModification(index, field.entry, dataspaceForNewEntries);
	
	let thisEntryTokens = getTokensForNewField(index, vv.node);
	let unresolvedValue:string = unresolveTokens(newValue, thisEntryTokens);
	let resolvedValue:string = resolveTokens(newValue, thisEntryTokens);
	
	const isDefaultEntry = vv.node.attr["default"] === "1";
	
	// For non-default entries, the editor just writes down the resolved tokens that it can
	// It can read tokens and resolve them still, but when it writes to the xml it always does it like this
	// So we'll do the same
	const writtenValueIsResolved = !isDefaultEntry;
	
	if(writtenValueIsResolved){
		newValue = resolvedValue;
	}else{
		newValue = unresolvedValue;
	}
	
	
	let parent = getParentNodeFor(index, vv.node);
	if(parent !== undefined){
		let cur = getFieldValueStartingFromNode(index, field, parent.node);
		if(cur !== undefined){
			if(cur.source == ValueSource.Self) ValueSource.Parent;
			
			let resolved = resolveTokens(cur.value, cur.tokens);
			if(resolved === newValue){
				// So this field already has this value from a parent
				// delete it if it exists and let's inherit it instead
				let container = getFieldContainer(index, field.name, vv.node, false);
				if(container !== undefined){
					deleteFieldValueInternal(index, vv.node, field, container);
				}
				
				return {
					source: cur.source,
					tokens: cur.tokens,
					unresolvedValue: cur.value,
					resolvedValue: resolved,
					writtenValueIsResolved: (cur.value) == resolved,
				};
			}
		}
	}
	
	let container = getFieldContainer(index, field.name, vv.node, true);
	
	let ret = {
		source: ValueSource.Self,
		tokens: thisEntryTokens,
		unresolvedValue,
		resolvedValue,
		writtenValueIsResolved,
	};
	
	let name = field.name[field.name.length - 1];
	if(typeof name == 'string'){
		// There are two ways this could be defined, say we're accessing "Row"
		// 1. <DefaultButtonLayout Row="1"/>
		// 2. <DefaultButtonLayout><Row value="1"/></DefaultButtonLayout>
		
		// Check if the first form exists
		if(name in container.attr){
			container.attr[name] = newValue;
			return ret;
		}
		
		// Check the second form exists
		let subnodes = getChildrenByTagName(container, name);
		if(subnodes && subnodes.length > 0){
			assert(subnodes.length == 1); // Otherwise this should've been an array...
			
			// So just set the "value" attribute in that child
			
			let sub = subnodes[0];
			sub.attr["value"] = newValue;
			return ret;
		}
		
		// Neither exists, so we must create it
		if(container == vv.node){
			// Our `cur` node is also our entry node
			// We can't put root ones in the attributes, or it'd be a token
			
			// Create a <name value="newValue"/> inside it
			addChild(container, newNode(name, {value:newValue}));
		}else{
			container.attr[name] = newValue;
		}
		
		return ret;
	}else{
		// This is an array of simple values, such as
		// <Resource index="Minerals" value="100"/>
		
		let v = wrapAccessArray(index, vv.node, field.name, container, true);
		v.node.attr["value"] = newValue;
		
		return ret;
	}
}

function getNextIndexForArray_Internal(index:GameDataIndex, entry:XMLNodeEntry, fieldName:CatalogFieldName, metaf:FieldType):number {
	let lastName = fieldName[fieldName.length - 1];
	assert(typeof lastName === "string");
	
	let nextIndex:number;
	
	let parent = getParentNodeFor(index, entry, true);
	if(parent !== undefined){
		nextIndex = getNextIndexForArray_Internal(index, parent.node, fieldName, metaf);
	}else{
		nextIndex = 0;
	}
	
	let enumType:EnumType|null;
	if('array' in metaf){
		enumType = null;
	}else if('namedArray' in metaf){
		enumType = metaf.namedArray.keys;
	}else{
		throw new Error(`getNextIndexForArray on non-array meta`);
	}
	
	let container = getFieldContainer(index, fieldName, entry, false);
	if(container === undefined) return nextIndex;
	return getFieldArrayLength(container, lastName, nextIndex, enumType);
}

function getNextIndexForArray(index:GameDataIndex, entry:XMLNodeEntry, fieldName:CatalogFieldName, metaf:FieldType):number {
	// We don't count ourselves for this, so start at the parent
	
	let parent = getParentNodeFor(index, entry, true);
	if(parent === undefined) return 0;
	
	return getNextIndexForArray_Internal(index, parent.node, fieldName, metaf);
}

function wrapAccessArray(index:GameDataIndex, entry:XMLNodeEntry, fieldName:CatalogFieldName, container:XMLNode, createIfNotExists:true):{node:XMLNode, index?:ArrayAccessReturnIndex};
function wrapAccessArray(index:GameDataIndex, entry:XMLNodeEntry, fieldName:CatalogFieldName, container:XMLNode, createIfNotExists:false):{node:XMLNode, index:ArrayAccessReturnIndex}|undefined;
function wrapAccessArray(index:GameDataIndex, entry:XMLNodeEntry, fieldName:CatalogFieldName, container:XMLNode, createIfNotExists:boolean):{node:XMLNode, index?:ArrayAccessReturnIndex}|undefined;
function wrapAccessArray(index:GameDataIndex, entry:XMLNodeEntry, fieldName:CatalogFieldName, container:XMLNode, createIfNotExists:boolean):{node:XMLNode, index?:ArrayAccessReturnIndex}|undefined {
	assert(fieldName.length > 0);
	assert(isValidTagname(entry.tagname));
	
	let tmp = getMetafieldContainerFor(index, entry.tagname, fieldName);
	if(tmp === undefined){
		return undefined;
	}
	
	let metaf:FieldType|undefined = tmp.metaf;
	
	let lastName = fieldName[fieldName.length - 1];
	assert(typeof lastName !== "string"); // We're accessing an array, right?
	
	let [arrayName, arrayIndex] = lastName;
	metaf = accessMetafield(metaf, arrayName);
	if(metaf == undefined){
		return undefined;
	}
	
	let almostFullFieldName = fieldName.slice(0, fieldName.length-1).concat(arrayName);
	
	// We need to cache this...
	let nextIndex = getNextIndexForArray(index, entry, almostFullFieldName, metaf);
	
	if('array' in metaf){
		return accessArray(container, arrayName, arrayIndex, nextIndex, null, createIfNotExists);
	}else if('namedArray' in metaf){
		return accessArray(container, arrayName, arrayIndex, nextIndex, metaf.namedArray.keys, createIfNotExists);
	}else{
		throw new Error("Trying to access array value with bad meta field");
	}
}

function wrapAccessArraySimple(metaf:FieldType, lastName:Exclude<CatalogFieldName[number], string>, container:XMLNode):{node:XMLNode, index:ArrayAccessReturnIndex}|undefined {
	assert(typeof lastName !== "string"); // We're accessing an array, right?
	
	let [arrayName, arrayIndex] = lastName;
	let tmp = accessMetafield(metaf, arrayName);
	if(tmp == undefined) return undefined;
	metaf = tmp;
	
	if('array' in metaf){
		return accessArray(container, arrayName, arrayIndex, 0, null, false);
	}else if('namedArray' in metaf){
		return accessArray(container, arrayName, arrayIndex, 0, metaf.namedArray.keys, false);
	}else{
		throw new Error("Trying to access array value with bad meta field");
	}
}

function deleteFieldValueInternal(index:GameDataIndex, entry:XMLNodeEntry, field:CatalogField, container:XMLNode){
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
		let v = wrapAccessArray(index, entry, field.name, container, false);
		if(v !== undefined){
			// We'll be lazy here and just mark the field with removed=1
			// Otherwise we'd have to check if we have anyone inheriting this entry to remove this safely
			
			v.node.attr = {"index": v.index.str, "removed":"1"};
			clearChildren(v.node);
		}
	}
}

function catalogFieldNameToRef(v:CatalogFieldName):string {
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


function catalogFieldToRef(v:CatalogField):string {
	return `${v.entry.catalog},${v.entry.id},${catalogFieldNameToRef(v.name)}`;
}

function refToCatalogField(v:string):CatalogField|undefined {
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
function getFieldArrayLength(container:XMLNode, name:string, nextIndex:number, enumType:null|EnumType):number {
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
type ArrayAccessReturnIndex = { num:number; str:string; };
function accessArray(container:XMLNode, name:string, index:string|number|null, nextIndex:number, enumType:null|EnumType, createIfNotExists:true):{node:XMLNode, index?:ArrayAccessReturnIndex};
function accessArray(container:XMLNode, name:string, index:string|number|null, nextIndex:number, enumType:null|EnumType, createIfNotExists:false):{node:XMLNode, index:ArrayAccessReturnIndex}|undefined;
function accessArray(container:XMLNode, name:string, index:string|number|null, nextIndex:number, enumType:null|EnumType, createIfNotExists:boolean):{node:XMLNode, index?:ArrayAccessReturnIndex}|undefined;
function accessArray(container:XMLNode, name:string, index:string|number|null, nextIndex:number, enumType:null|EnumType, createIfNotExists:boolean = false):{node:XMLNode, index?:ArrayAccessReturnIndex}|undefined {
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

function accessStruct(node:XMLNode, name:string, createIfNotExists:true):XMLNode;
function accessStruct(node:XMLNode, name:string, createIfNotExists:boolean):XMLNode|undefined;
function accessStruct(node:XMLNode, name:string, createIfNotExists:boolean = false):XMLNode|undefined {
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
