import assert from "assert";
import * as fs from "fs/promises";
import * as xmlparser from "fast-xml-parser";
import { possiblyBigNumberToString } from "./utils";

export type XMLNode = ({
	tagname:string;
} | {
	tagname:"#text"|"#comment";
	text:string;
}) & {
	children:XMLNode[];
	attr:Record<string, string>;
	childrenByTagname:Record<string,XMLNode[]>;
}

type XMLParseResult = Record<string, XMLNode>;

let rootMapDir = "D:/Projects/kerrigan-survival-2/Kerrigan_Survival2.SC2Map/";

export function getRootMapDir(){
	return rootMapDir;
}

export function setRootMapDir(v:string){
	rootMapDir = v;
}

export function getCatalogFilenameBase(){
	return getRootMapDir() + "/Base.SC2Data/GameData/";
}

export async function getGameDataFileList():Promise<string[]> {
	let v = await parseXML(await fs.readFile(getRootMapDir() + "/Base.SC2Data/GameData.xml", "utf8"));
	
	const prefixToRemove = "GameData/";
	
	const base = getCatalogFilenameBase();
	const arr = getChildrenByTagName(v["Includes"], "Catalog");
	assert(arr);
	return arr.map(v => {
		assert(v.attr);
		assert(v.attr["path"]);
		assert(v.attr["path"].startsWith(prefixToRemove));
		return base + v.attr["path"].slice(prefixToRemove.length)
	});
}

export interface Catalog {
	filename:string;
	
	entriesByID:Record<string, XMLNode[]>;
	data:XMLNode;
};

export async function loadCatalogs(files:string[]):Promise<Catalog[]>{
	return await Promise.all(files.map(async function(filename):Promise<Catalog> {
		let str = await fs.readFile(filename, "utf8");
		
		let data = (await parseXML(str))["Catalog"];
		
		let entriesByID:Record<string, XMLNode[]> = {};
		for(let v of data.children){
			if("id" in v.attr){
				const id = v.attr["id"];
				entriesByID[id] = entriesByID[id] || [];
				entriesByID[id].push(v);
			}
		}
		
		return {
			filename,
			entriesByID,
			data
		};
	}));
}

export async function getCatalogs(){
	return loadCatalogs(await getGameDataFileList());
}

export function addCatalogEntry(catalog:Catalog, child:XMLNode){
	assert("id" in child.attr);
	
	const id = child.attr["id"];
	catalog.entriesByID[id] = catalog.entriesByID[id] || [];
	catalog.entriesByID[id].push(child);
	addChild(catalog.data, child);
}

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

export async function saveCatalogs(datas:Catalog[]){
	await Promise.all(datas.map(async function(data){
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
		
		function encodeNode(node:XMLNode):RawNode {
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
			tmp[node.tagname] = node.children.map(v => encodeNode(v));
			
			// Shitty library needs me to fill this in
			if(node.tagname[0] == '?'){
				assert(node.children.length == 0);
				tmp[node.tagname] = [{"#text":""}];
			}
			
			return r;
		}
		
		let str = '<?xml version="1.0" encoding="utf-8"?>' + builder.build([encodeNode(data.data)]).replace(/\r?\n/g, '\r\n') + '\r\n';
		await fs.writeFile(data.filename, str, "utf8");
	}));
}

// Some arrays can be accessed through constants, which map simply to a number (Research3 -> 2, Minerals -> 0)
// Not sure if those constants are per-array or global
// Editor will prefer constants for the ones that have it (such as Research<N>), but we can write integers and it'll convert it
// next time it saves that catalog
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

export function getValue(node:XMLNode, name:string):string|undefined {
	if(node.attr){
		if(name in node.attr){
			return node.attr[name];
		}
	}
	
	let subnodes = getChildrenByTagName(node, name);
	if(!subnodes || subnodes.length == 0) return undefined;
	
	if(!subnodes[0].attr) return;
	assert(name != "value");
	return subnodes[0].attr["value"];
}

export function setValue(node:XMLNode, name:string, value:string|number|null, canSetInAttributes:boolean){
	if(typeof value == "number") value = possiblyBigNumberToString(value);
	if(name == 'value') assert(canSetInAttributes);
	
	// First check if we have this value in the attributes
	if(name in node.attr){
		// so we have a <node name="value"/>
		if(value == null){
			delete node.attr[name];
			return;
		}
		
		if(canSetInAttributes){
			// just replace the value
			// <node name="value" />
			node.attr[name] = value;
		}else{
			// delete the attribute and add a child
			// <node><name value="value" /></node>
			delete node.attr[name];
			addChild(node, newNode(name, {value:value}));
		}
		
		return;
	}
	
	let subnodes = getChildrenByTagName(node, name);
	
	if(!subnodes || subnodes.length == 0){
		// we have a <node/>
		if(value == null) return;
		
		if(canSetInAttributes){
			// <node name="value" />
			node.attr[name] = value;
		}else{
			// <node><name value="value" /></node>
			addChild(node, newNode(name, {value:value}));
		}
		
		return;
	}
	
	assert(subnodes.length == 1, `${name} should be a single value, but found an array? Check your types`)
	
	// we have <node><name ???>???</name></node>
	if(subnodes[0].children.length == 0 && Object.keys(subnodes[0].attr).filter(s => s != "index" && s != "removed").length == 0){
		// we have a <node><name/></node>
		// with no other attributes, we don't have to preserve this node
		
		if(value == null){
			clearChildrenByTagName(node, name);
			return;
		}
		
		if(canSetInAttributes){
			// <node name="value" />
			clearChildrenByTagName(node, name);
			node.attr[name] = value;
		}else{
			// <node><name value="value" /></node>
			subnodes[0].attr["value"] = value;
		}
	}
	
	// from now on we must preserve the node, since we know there's other stuff there
	
	// <node><name ???>???</name></node>
	
	if(value == null){
		delete subnodes[0].attr["value"];
	}else{
		subnodes[0].attr["value"] = value;
	}
}

export function newNode(tag:string, attrs?:Record<string, string>):XMLNode {
	return {
		tagname: tag,
		children: [],
		childrenByTagname: {},
		attr: attrs || {},
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

// Debugging line to re-save all catalogs to make sure we can be idempotent
if(require.main === module) getGameDataFileList().then(loadCatalogs).then(saveCatalogs);
