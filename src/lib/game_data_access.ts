import assert from "assert";
import fxml from "./fxml";
import { CatalogName, CatalogNameArray, CatalogSubtype, CatalogTypesInstance, EnumType, FieldType } from "./game_data";
import { addDataspaceEntry, Dataspace, encodeEntryXML, forEachDataspace, GameDataIndex, getCatalogNameByTagname, isValidCatalogName, isValidTagname, setEntryXML, XMLNodeEntry } from './game_data_loader';
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
	let node = new fxml.ElementNode(undefined, getDefaultTypeForCatalog(entry.catalog), undefined, undefined, {
		"id": {
			value: entry.id,
		}
	}, [])
	
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
	let attr = cur.getAttributes();
	let isDefault = cur.getAttribute("default") === "1";
	if(isDefault){
		// Default classes aren't allowed to set tokens
		let id = attr["id"] || cur.tagname;
		
		let parent = getParentNodeFor(index, cur, false);
		if(parent === undefined) return { id, parent: id };
		
		let parentID = parent.node.getAttribute("id", parent.node.tagname);
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
		
		let id = attr["id"] || cur.tagname;
		
		let parent = getParentNodeFor(index, cur, false);
		if(parent === undefined) return { ...attr, id, parent: id };
		
		let parentID = parent.node.getAttribute("id", parent.node.tagname);
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
		if(parent.getAttribute("default") === "1"){
			// grand parent, parent
			ret = Object.assign(inherited, ret); // Prefer our tokens
		}else{
			// me
			ret = Object.assign({}, ret, inherited); // Prefer parent tokens
		}
	}
	
	return ret;
}

function getFieldContainer(index:GameDataIndex, fieldName:CatalogFieldName, entry:XMLNodeEntry, createIfNotExists:true):fxml.ElementNode;
function getFieldContainer(index:GameDataIndex, fieldName:CatalogFieldName, entry:XMLNodeEntry, createIfNotExists:boolean):fxml.ElementNode|undefined;
function getFieldContainer(index:GameDataIndex, fieldName:CatalogFieldName, entry:XMLNodeEntry, createIfNotExists:boolean):fxml.ElementNode|undefined {
	let container:fxml.ElementNode = entry;
	
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

function getFieldValueLast(index:GameDataIndex, entry:XMLNodeEntry, container:fxml.ElementNode, fieldName:CatalogFieldName):{ value:string; source:ValueSource; range:fxml.Range|undefined; }|undefined {
	let lastName = fieldName[fieldName.length - 1];
	if(typeof lastName == 'string'){
		// Defer to the other definition to reduce duplication
		return getFieldValueLast_Internal(container, lastName);
	}else{
		// This is an array of simple values, such as
		// <Resource index="Minerals" value="100"/>
		let v = wrapAccessArray(index, entry, fieldName, container, false);
		if(!v) return undefined;
		
		let value = v.node.getAttribute("value");
		if(!value) return undefined;
		
		let range = v.node.getAttributeValueRange("value");
		
		return { value, source: ValueSource.Self, range };
	}
}

function getFieldValueLast_Internal(container:fxml.ElementNode, lastName:string){
	// There are two ways this could be defined, say we're accessing "Row"
	// 1. <DefaultButtonLayout Row="1"/>
	// 2. <DefaultButtonLayout><Row value="1"/></DefaultButtonLayout>
	
	// Check the first form
	let tmp = container.getAttribute(lastName);
	if(tmp !== undefined){
		let range = container.getAttributeValueRange(lastName);
		return { value: tmp, source: ValueSource.Self, range };
	}
	
	// Then check the second form
	let subnodes = container.getChildrenByTagName(lastName);
	if(!subnodes || subnodes.length == 0) return undefined;
	
	
	let value = subnodes[0].getAttribute("value");
	if(!value) return undefined;
	
	let range = subnodes[0].getAttributeValueRange("value");
	return { value, source: ValueSource.Self, range };
}

// Does not look into parents to access arrays correctly!!
function getFieldValueLastSimple(container:fxml.ElementNode, lastName:CatalogFieldName[number], metaf:FieldType):{ value:string; source:ValueSource; range:fxml.Range|undefined; }|undefined {
	if(typeof lastName == 'string'){
		return getFieldValueLast_Internal(container, lastName);
	}else{
		// This is an array of simple values, such as
		// <Resource index="Minerals" value="100"/>
		let v = wrapAccessArraySimple(metaf, lastName, container);
		if(!v) return undefined;
		
		let value = v.node.getAttribute("value");
		if(!value) return undefined;
		
		return { value, source: ValueSource.Self, range: v.node.getAttributeValueRange("value") };
	}
}
// If not found on this node, will navigate to the parent to try to find it there
function getFieldValueSpecific(index:GameDataIndex, entry:XMLNodeEntry, fieldName:CatalogFieldName):{ value:string; source:ValueSource; tokens:Record<string,string>; range:fxml.Range|undefined; }|undefined {
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
			if(parent.getAttribute("default") === "1"){
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

function getParentNodeFor(index:GameDataIndex, node:XMLNodeEntry, useMetaChain:boolean = true):{node: XMLNodeEntry, dataspace:Dataspace, isDefault:boolean}|undefined {
	let parentAttr = node.getAttribute("parent");
	if(parentAttr !== undefined){
		let vv = accessEntry(index, {
			id: parentAttr,
			catalog: getCatalogNameByTagname(node.tagname),
		});
		
		if(vv){
			if(vv.node.tagname == node.tagname){
				return {node: vv.node, dataspace: vv.dataspace, isDefault: !vv.node.hasAttribute("id")};
			}else{
				console.error(`Invalid parent for ${node.getAttribute("id", node.tagname)}. Type doesn't match`);
			}
		}else{
			console.error(`Invalid parent for ${node.getAttribute("id", node.tagname)}. It doesn't exist: ${parentAttr}`);
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

function getStructDefaultValue(index:GameDataIndex, tagname:string, fieldName:CatalogFieldName){
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
			if(vv !== undefined) return vv;
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
	
	return getFieldValueStartingFromEntry(index, field.name, v.node);
}

function getFieldValueStartingFromEntry(index:GameDataIndex, fieldName:CatalogFieldName, entry:XMLNodeEntry):{ value:string; source:ValueSource; tokens:Record<string,string>; range:fxml.Range|undefined; }|undefined {
	let vv = getFieldValueSpecific(index, entry, fieldName);
	if(vv !== undefined) return vv;
	
	let tmp = getStructDefaultValue(index, entry.tagname, fieldName);
	if(tmp !== undefined){
		return { ...tmp, source: ValueSource.Default, tokens: getTokensForDefaultField(index, entry) };
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
	
	let lastName_ = field.name[field.name.length - 1];
	if(typeof lastName_ != 'string'){
		throw new Error("You must refer to the array without an index");
	}
	
	let lastName = lastName_;
	
	let ret:Record<string, {removed:boolean;source:ValueSource}> = {};
	
	let mapping:Record<string, number>|undefined;
	
	{
		let metaf = getMetafieldFor(index, vv.node.tagname, field.name);
		if(metaf === undefined) return undefined;
		
		// Named arrays always have all their indexes by default
		if("namedArray" in metaf){
			mapping = metaf.namedArray.keys.values;
			for(let i in mapping){
				ret[i] = {removed:false, source:ValueSource.Default};
			}
		}else if("array" in metaf){
			// k...
		}else{
			return undefined; // Not an array, don't waste time
		}
	}
	
	function iterate(entry:XMLNodeEntry, source:ValueSource):number {
		let parent = getParentNodeFor(index, entry, true);
		let nextIndex:number;
		if(parent === undefined){
			nextIndex = 0;
		}else{
			nextIndex = iterate(parent.node, parent.isDefault ? ValueSource.Default : ValueSource.Parent);
		}
		
		
		let container = getFieldContainer(index, field.name, entry, false);
		if(!container) return nextIndex;
		
		let tmp = getArrayFieldIndexesInternal(container, lastName, nextIndex, mapping);
		if(tmp){
			for(let index in tmp.ret){
				if(!(index in ret)){
					let exists = tmp.ret[index];
					ret[index] = {
						removed: !exists,
						source,
					};
				}
			}
			
			return tmp.nextIndex
		}else{
			return nextIndex;
		}
	}
	
	let entry = vv.node;
	iterate(entry, ValueSource.Self);
	
	return ret;
}

function getArrayFieldIndexesInternal(cur:fxml.ElementNode, arrName:string, nextIndex:number, mapping?:Record<string, number>):{ret: Record<string,boolean>, nextIndex:number }|undefined {
	let subnodes = cur.getChildrenByTagName(arrName);
	
	let ret:Record<string,boolean> = {};
	
	if(!subnodes || subnodes.length == 0){
		return undefined;
	}
	
	for(let sub of subnodes){
		let attrIndex = sub.getAttribute("index");
		if(attrIndex !== undefined){
			if(sub.getAttribute("removed") === "1"){
				ret[attrIndex] = false;
			}else{
				ret[attrIndex] = true;
			}
			
			let num:number;
			if(/^[0-9]+$/.test(attrIndex)){
				num = parseInt(attrIndex, 10);
			}else{
				if(mapping === undefined) throw new Error("Invalid index type, expected only numbers");
				
				if(!(attrIndex in mapping)) throw new Error("Invalid index: " + attrIndex);
				num = mapping[attrIndex];
			}
			
			nextIndex = Math.max(nextIndex, num+1);
			continue;
		}else{
			// Can't remove without an index
			assert(sub.getAttribute("removed") !== "1");
			
			ret[nextIndex.toString()] = true;
			++nextIndex;
		}
	}
	
	return {ret, nextIndex};
}

function test_getArrayFieldIndexesInternal(xml:string, expected:Record<string,boolean>, mapping?:Record<string, number>){
	let vv = getArrayFieldIndexesInternal(fxml.Document.fromString(`<A>${xml}</A>`).root, 'B', 0, mapping);
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

export function setEntryToken(index:GameDataIndex, entry:CatalogEntry, tokenName:string, newValue:string, dataspaceForNewEntries:Dataspace){
	let vv = accessEntryForModification(index, entry, dataspaceForNewEntries);
	vv.node.setAttribute(tokenName, newValue);
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
	
	const isDefaultEntry = vv.node.getAttribute("default") === "1";
	
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
		let cur = getFieldValueStartingFromEntry(index, field.name, parent.node);
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
		if(container.hasAttribute(name)){
			container.setAttribute(name, newValue)
			return ret;
		}
		
		// Check the second form exists
		let subnodes = container.getChildrenByTagName(name);
		if(subnodes && subnodes.length > 0){
			assert(subnodes.length == 1); // Otherwise this should've been an array...
			
			// So just set the "value" attribute in that child
			
			let sub = subnodes[0];
			sub.setAttribute("value", newValue);
			return ret;
		}
		
		// Neither exists, so we must create it
		if(container == vv.node){
			// Our `cur` node is also our entry node
			// We can't put root ones in the attributes, or it'd be a token
			
			// Create a <name value="newValue"/> inside it
			let newNode = new fxml.ElementNode(undefined, name, undefined, undefined, {}, []);
			newNode.setAttribute(name, newValue);
			container.appendChild(newNode);
		}else{
			container.setAttribute(name, newValue);
		}
		
		return ret;
	}else{
		// This is an array of simple values, such as
		// <Resource index="Minerals" value="100"/>
		
		let v = wrapAccessArray(index, vv.node, field.name, container, true);
		v.node.setAttribute("value", newValue);
		
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

function wrapAccessArray(index:GameDataIndex, entry:XMLNodeEntry, fieldName:CatalogFieldName, container:fxml.ElementNode, createIfNotExists:true):{node:fxml.ElementNode, index?:ArrayAccessReturnIndex};
function wrapAccessArray(index:GameDataIndex, entry:XMLNodeEntry, fieldName:CatalogFieldName, container:fxml.ElementNode, createIfNotExists:false):{node:fxml.ElementNode, index:ArrayAccessReturnIndex}|undefined;
function wrapAccessArray(index:GameDataIndex, entry:XMLNodeEntry, fieldName:CatalogFieldName, container:fxml.ElementNode, createIfNotExists:boolean):{node:fxml.ElementNode, index?:ArrayAccessReturnIndex}|undefined;
function wrapAccessArray(index:GameDataIndex, entry:XMLNodeEntry, fieldName:CatalogFieldName, container:fxml.ElementNode, createIfNotExists:boolean):{node:fxml.ElementNode, index?:ArrayAccessReturnIndex}|undefined {
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

function wrapAccessArraySimple(metaf:FieldType, lastName:Exclude<CatalogFieldName[number], string>, container:fxml.ElementNode):{node:fxml.ElementNode, index:ArrayAccessReturnIndex}|undefined {
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

function deleteFieldValueInternal(index:GameDataIndex, entry:XMLNodeEntry, field:CatalogField, container:fxml.ElementNode){
	let name = field.name[field.name.length - 1];
	if(typeof name == 'string'){
		// There are two ways this could be defined, say we're accessing "Row"
		// 1. <DefaultButtonLayout Row="1"/>
		// 2. <DefaultButtonLayout><Row value="1"/></DefaultButtonLayout>
		
		// Check if the first form exists
		container.deleteAttribute(name);
		
		// Check the second form exists
		let subnodes = container.getChildrenByTagName(name);
		if(subnodes && subnodes.length > 0){
			assert(subnodes.length == 1); // Otherwise this should've been an array...
			
			container.removeChild(subnodes[0])
		}
	}else{
		// This is an array of simple values, such as
		// <Resource index="Minerals" value="100"/>
		let v = wrapAccessArray(index, entry, field.name, container, false);
		if(v !== undefined){
			// We'll be lazy here and just mark the field with removed=1
			// Otherwise we'd have to check if we have anyone inheriting this entry to remove this safely
			
			v.node.clearAttributes();
			v.node.setAttribute("index", v.index.str);
			v.node.setAttribute("removed", "1");
			v.node.removeChildren();
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
function getFieldArrayLength(container:fxml.ElementNode, name:string, nextIndex:number, enumType:null|EnumType):number {
	let subnodes = container.getChildrenByTagName(name);
	if(subnodes){
		for(let sub of subnodes){
			let nodeIndex:string|number|undefined = sub.getAttribute("index");
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
function accessArray(container:fxml.ElementNode, name:string, index:string|number|null, nextIndex:number, enumType:null|EnumType, createIfNotExists:true):{node:fxml.ElementNode, index?:ArrayAccessReturnIndex};
function accessArray(container:fxml.ElementNode, name:string, index:string|number|null, nextIndex:number, enumType:null|EnumType, createIfNotExists:false):{node:fxml.ElementNode, index:ArrayAccessReturnIndex}|undefined;
function accessArray(container:fxml.ElementNode, name:string, index:string|number|null, nextIndex:number, enumType:null|EnumType, createIfNotExists:boolean):{node:fxml.ElementNode, index?:ArrayAccessReturnIndex}|undefined;
function accessArray(container:fxml.ElementNode, name:string, index:string|number|null, nextIndex:number, enumType:null|EnumType, createIfNotExists:boolean = false):{node:fxml.ElementNode, index?:ArrayAccessReturnIndex}|undefined {
	if(index == null){
		if(createIfNotExists){
			let c = new fxml.ElementNode(undefined, name, undefined, undefined, {}, []);
			// No index means next available one
			container.appendChild(c);
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
	
	let subnodes = container.getChildrenByTagName(name);
	if(subnodes){
		for(let sub of subnodes){
			let nodeIndex:string|number|undefined = sub.getAttribute("index");
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
				if(sub.getAttribute("removed") === "1"){
					if(createIfNotExists){
						sub.deleteAttribute("removed");
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
		let c = new fxml.ElementNode(undefined, name, undefined, undefined, {}, []);
		c.setAttribute("index", arrayIndexToString(index, enumType));
		container.appendChild(c);
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

function accessStruct(node:fxml.ElementNode, name:string, createIfNotExists:true):fxml.ElementNode;
function accessStruct(node:fxml.ElementNode, name:string, createIfNotExists:boolean):fxml.ElementNode|undefined;
function accessStruct(node:fxml.ElementNode, name:string, createIfNotExists:boolean = false):fxml.ElementNode|undefined {
	let subnodes = node.getChildrenByTagName(name);
	if(!subnodes || subnodes.length == 0){
		if(createIfNotExists){
			let c = new fxml.ElementNode(undefined, name, undefined, undefined, {}, []);;
			node.appendChild(c);
			return c;
		}else{
			return undefined;
		}
	}
	
	return subnodes[0];
}

function getTokenType(index:GameDataIndex, entry:XMLNodeEntry, tokenName:string):string|undefined {
	if(tokenName == "parent"){
		return `C${getCatalogNameByTagname(entry.tagname)}Link`;
	}
	
	if(entry.declaredTokens){
		if(tokenName in entry.declaredTokens){
			return entry.declaredTokens[tokenName].type || "CString";
		}
	}
	
	let parent = getParentNodeFor(index, entry, true);
	if(parent !== undefined){
		return getTokenType(index, parent.node, tokenName);
	}
	
	return undefined;
}

type FindReferenceResult = {
	dataspace:Dataspace;
	entryNode:fxml.ElementNode;
	range:fxml.Range|undefined;
} & (
	{field:CatalogField} | {entry:CatalogEntry; tokenName:string}
)

export function findReferencesTo(index:GameDataIndex, entry:CatalogEntry):FindReferenceResult[] {
	let typeToCheck = `C${entry.catalog}Link`;
	let valueToCheck = entry.id;
	
	type SearchSpace = CatalogFieldName[];
	
	let ret:FindReferenceResult[] = [];
	
	function iterate(out:SearchSpace, t:FieldType, nameSoFar:CatalogFieldName){
		if(t.value !== undefined){
			if(t.value.type === typeToCheck){
				out.push(nameSoFar);
			}
		}
		
		if('struct' in t){
			for(let fieldName in t.struct){
				let fieldType = t.struct[fieldName];
				iterate(out, fieldType, [...nameSoFar, fieldName]);
			}
		}
		
		if('array' in t){
			assert(nameSoFar.length > 0);
			const lastName = typeof nameSoFar[nameSoFar.length-1];
			assert(lastName == "string");
			
			iterate(out, t.array, [...nameSoFar.slice(0,-1), [lastName, "*"]]);
		}
		
		if('namedArray' in t){
			assert(nameSoFar.length > 0);
			const lastName = typeof nameSoFar[nameSoFar.length-1];
			assert(lastName == "string");
			
			iterate(out, t.namedArray.value, [...nameSoFar.slice(0,-1), [lastName, "*"]]);
		}
	}
	
	let searchSpaceByTagname:Record<string, SearchSpace> = {};
	
	for(let catalogName of CatalogNameArray){
		for(let tagname in CatalogTypesInstance[catalogName]){
			
			let searchSpace:SearchSpace = [];
			
			let meta = CatalogTypesInstance[catalogName][tagname];
			for(;;){
				iterate(searchSpace, meta.type, []);
				
				if(meta.parent == null) break;
				meta = CatalogTypesInstance[catalogName][meta.parent];
			}
			
			searchSpaceByTagname[tagname] = searchSpace;
		}
	}
	
	function searchField(dataspace:Dataspace, entryNode:fxml.ElementNode, fieldName:CatalogFieldName){
		
		let id = entryNode.getAttribute("id");
		if(id === undefined) return;
		
		let entry:CatalogEntry = {
			id,
			catalog: getCatalogNameByTagname(entryNode.tagname),
		}
		
		let fieldNames:CatalogFieldName[] = [fieldName];
		//FIXME: handle arrays and expand field names to include the index of each element...
		
		outerLoop: for(let i = 0; i < fieldNames.length; ++i){
			let fieldName = fieldNames[i];
			for(let j = 0; j < fieldName.length; ++j){
				let name = fieldName[j];
				
				// We found something to expand...
				if(typeof name != "string" && name[1] == "*"){
					let indexes = getArrayFieldIndexes(index, {
						entry,
						name: fieldName.slice(0, j).concat(name[0]),
					});
					
					for(let index in indexes){
						let data = indexes[index];
						if(data.removed) continue;
						
						fieldNames.push(fieldName.slice(0, j).concat([name[0], index]).concat(fieldName.slice(j+1)));
					}
					
					// Add the instances and delete the name with *
					fieldNames.splice(i, 1);
					--i;
					continue outerLoop;
				}
			}
		}
		
		for(let fieldName of fieldNames){
			let value = getFieldValueStartingFromEntry(index, fieldName, entryNode);
			if(value === undefined) return;
			if(value.value === "") return;
			let resolvedValue = resolveTokens(value.value, value.tokens);
			if(resolvedValue == valueToCheck){
				let range = value.range;
				if(range === undefined){
					range = entryNode.range;
				}else if(entryNode.range !== undefined){
					if(!fxml.rangeIntersects(entryNode.range, range)){
						range = entryNode.range;
					}
				}
				
				ret.push({
					field: {
						entry: {
							id,
							catalog: getCatalogNameByTagname(entryNode.tagname),
						},
						name: fieldName,
					},
					
					dataspace,
					entryNode: entryNode,
					range: range,
				});
			}
		}
	}
	
	function searchEntry(dataspace:Dataspace, entry:XMLNodeEntry){
		let id = entry.getAttribute("id");
		if(id === undefined) return;
		
		let searchSpaces = searchSpaceByTagname[entry.tagname];
		if(searchSpaces){
			for(let fieldName of searchSpaces){
				searchField(dataspace, entry, fieldName);
			}
		}
		
		let tokens = entry.getAttributesRaw();
		for(let tokenName in tokens){
			if(tokenName === "id") continue;
			if(tokens[tokenName].value != valueToCheck) continue;
			if(getTokenType(index, entry, tokenName) == typeToCheck){
				let range = tokens[tokenName].valueRange;
				if(range === undefined) continue;
				
				ret.push({
					tokenName,
					entry: {
						id,
						catalog: getCatalogNameByTagname(entry.tagname),
					},
					
					dataspace,
					entryNode: entry,
					range,
				})
			}
		}
	}
	
	//FIXME: we assume dependencies can't refer to things in this index, this is likely incorrect but speeds things up
	forEachDataspace(index, true, false, dataspace => {
		for(let entry of dataspace.data_.root.children){
			if(!(entry instanceof fxml.ElementNode)) continue;
			if(entry.tagname == "const") continue;
			searchEntry(dataspace, entry);
		}
	});
	
	return ret;
}
