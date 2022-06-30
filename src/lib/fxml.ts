// Fast xml parser and builder that is also able to apply text changes
import assert from "assert";
import { EOL } from "os";
import { unreachable } from "./utils";

namespace fxml {

const entityMap:Record<string, string> = {
	"&amp;": "&",
	"&quot;": '"',
	"&apos;": "'",
	"&lt;": '<',
	"&gt;": '>',
	"&nbsp;": '\xA0',
};

const entityMapInverse:Record<string, string> = Object.fromEntries(Object.entries(entityMap).map(([k,v]) => [v,k]));
	
type EncodeOptions = {
	pretty:boolean;
	indent:string;
	eol:string;
};

type EncodeContext = {
	depth:number;
};

export interface Prolog {
	version:string;
	encoding:string|null;
}

export type DocumentJSON = {
	prolog?:Prolog;
	root:ElementNodeJSON;
};

export class Document {
	private _root:ElementNode;
	private _prolog:Prolog|undefined = undefined;
	
	get root(){ return this._root; }
	get prolog(){ return this._prolog; }
	
	/** @internal */
	constructor(str:string);
	constructor(json:DocumentJSON);
	constructor(arg:string|DocumentJSON){
		if(typeof arg == 'string'){
			this._root = this._fromXML(arg);
		}else{
			this._root = this._fromJSON(arg);
		}
	}
	
	private _fromXML(str:string):ElementNode {
		let i:number = 0;
		let curLine = 0;
		let lineStartedAt:number = 0;
		
		const curPos = (offset:number = 0):Position => {
			return { line: curLine, character: i - lineStartedAt + offset };
		};
		
		const skipChar = () => {
			notEol();
			if(str[i] == '\n'){
				++curLine;
				lineStartedAt = i+1;
			}
			
			++i;
		};
		
		const acceptChar = (v:string):boolean => {
			if(str[i] == v){
				skipChar();
				return true;
			}
			
			return false;
		};
		
		const expectChar = (v:string) => {
			if(str[i] != v) error("Expected " + v);
			skipChar();
		};
		
		const expectString = (v:string) => {
			for(let ch of v){
				if(!acceptChar(ch)) error("Expected " + v);
			}
		};
		
		const curLineContents = ():string => {
			let ii:number|undefined = str.indexOf("\n", lineStartedAt+1);
			if(ii == -1) ii = undefined;
			return str.slice(lineStartedAt, ii);
		};
		
		const restLineContents = ():string => {
			let ii:number|undefined = str.indexOf("\n", i);
			if(ii == -1) ii = undefined;
			return str.slice(i, ii);
		};
		
		// This needs to be declared like this so typescript will take :never into account for narrowing
		function error(str:string):never {
			let p = curPos();
			throw new Error(`${str} @ line ${1+p.line} column ${1+p.character}\n${curLineContents()}`);
		};
		
		const acceptRegex = (r:RegExp):RegExpExecArray|null => {
			assert(r.sticky);
			assert(r.source[0] != '^');
			
			r.lastIndex = i;
			let ret = r.exec(str);
			if(ret != null){
				let j = i + ret[0].length;
				while(i < j) skipChar();
				
			}
			return ret;
		};
		
		const expectRegex = (r:RegExp):RegExpExecArray => {
			let ret = acceptRegex(r);
			if(ret == null) error(`Expected to match ${r.source}`);
			return ret;
		};
		
		
		const skipWhitespace = () => {
			let ch = str[i];
			while(ch == ' ' || ch == '\t' || ch == '\r' || ch == '\n'){
				skipChar();
				ch = str[i];
			}
		};
		
		const eol = ():boolean => {
			return i >= str.length;
		};
		
		const notEol = () => {
			if(eol()) error("Unexpected eol");
		};
		
		const prolog = ():Prolog|null => {
			skipWhitespace();
			if(!acceptRegex(/<\?xml/y)) return null;
			
			skipWhitespace();
			expectRegex(/version\s*=\s*("1\.0"|'1\.0')/y);
			
			let encoding:string|null = null;
			skipWhitespace();
			
			let encodingRegexResult:RegExpExecArray|null;
			if((encodingRegexResult = acceptRegex(/encoding\s*=\s*("[A-Za-z][A-Za-z0-9._\-]*"|'[A-Za-z][A-Za-z0-9._\-]*')/yi)) != null){
				encoding = encodingRegexResult[1].slice(1, -1);
			}
			
			skipWhitespace();
			expectRegex(/\?>/y);
			
			return {
				version: "1.0",
				encoding,
			};
		};
		
		const acceptName = ():{ value:string; range:Range; }|null => {
			let start = curPos();
			let tmp = acceptRegex(/[a-z_:][a-z_:0-9\.\-]*/iy);
			if(tmp == null) return null;
			let value = tmp[0];
			let end = curPos();
			return { value, range: {start, end} };
		};
		
		const expectName = ():{ value:string; range:Range; } => {
			let ret = acceptName();
			if(ret == null) error("Expected name");
			return ret;
		};
		
		const attrValue = ():{value:string; range:Range} => {
			let isDoubleQuote = true;
			if(acceptChar("'")){
				isDoubleQuote = false;
			}else{
				expectChar('"');
			}
			
			let start = curPos();
			let startIndex = i;
			let end:Position;
			let endIndex:number;
			
			for(;;){
				notEol();
				
				end = curPos();
				endIndex = i;
				
				if(isDoubleQuote){
					if(acceptChar('"')) break;
				}else{
					if(acceptChar("'")) break;
				}
				
				skipChar();
			}
			
			return { value: decodeEntities(str.slice(startIndex, endIndex)), range: { start, end } };
		};
		
		const charData = ():TextNode|CDataNode|null => {
			if(eol()) return null;
			
			if(str[i] == "<" && str[i+1] != "!") return null;
			
			let start = curPos();
			
			if(acceptRegex(/<!\[CDATA\[/y)){
				let cDataStart = i;
				
				expectRegex(/[\s\S]*?\]\]>/y);
				let cDataEnd = i - "]]>".length;
				
				let end = curPos();
				return new CDataNode({start, end}, str.slice(cDataStart, cDataEnd));
			}
			
			if(str[i] == "<") return null;
			
			let startIndex = i;
			
			while(!eol() && str[i] != "<"){
				skipChar();
			}
			
			let end = curPos();
			
			return new TextNode({start,end}, decodeEntities(str.slice(startIndex, i).trim()));
		};
		
		const instruction = ():InstructionNode|null => {
			if(str[i+1] != "?") return null;
			let start = curPos();
			if(!acceptChar("<")) return null;
			skipChar(); // ?
			
			let name = expectName();
			if(name.value.toLowerCase() == "xml") error("Instruction node cannot be <?xml");
			
			skipWhitespace();
			
			// Okay, this is actually a violation of the spec
			// We should accept literally any string until a ?>
			
			let attrs = parseAttributes();
			
			skipWhitespace();
			expectString("?>")
			
			let end = curPos();
			
			return new InstructionNode({start, end}, attrs, name.value, name.range);
		};
		
		const parseAttributes = () => {
			let attrs:Attributes = {};
			for(;;){
				skipWhitespace();
				
				let attrStart = curPos();
				let name = acceptName();
				if(name == null) break;
				skipWhitespace();
				expectChar("=");
				skipWhitespace();
				
				let value = attrValue();
				let attrEnd = curPos();
				
				attrs[name.value] = {
					value: value.value,
					valueRange: value.range,
					nameRange: name.range,
					range: {start:attrStart, end:attrEnd},
				};
			}
			
			return attrs;
		};
		
		const element = ():ElementNode|null => {
			if(str[i] != '<' || str[i+1] == '/' || str[i+1] == '?') return null;
			
			let start = curPos();
			skipChar(); // <
			
			let tagname = expectName();
			
			let attrs = parseAttributes();
			skipWhitespace();
			
			let children:Node[];
			let closeRange:Range;
			
			// Self closing
			if(acceptChar("/")){
				expectChar(">");
				children = [];
				closeRange = tagname.range;
			}else{
				expectChar(">");
				children = content();
				
				skipWhitespace();
				expectString("</");
				
				let closingName = expectName();
				if(closingName.value != tagname.value){
					error(`Closing tag ${closingName.value} doesn't match opening tag ${tagname.value} (from line ${1+(tagname.range?.start.line||-1)})`);
				}
				
				closeRange = closingName.range;
				
				skipWhitespace();
				expectChar(">");
				
			}
			
			let end = curPos();
			
			return new ElementNode({start, end}, tagname.value, tagname.range, closeRange, attrs, children);
		};
		
		const comment = ():CommentNode|null => {
			if(str[i] != '<' || str[i+1] != '!') return null; // tiny optimization
			let start = curPos();
			if(!acceptRegex(/<!--/y)) return null;
			
			let valueStart = i;
			let valueEnd = i;
			
			expectRegex(/[\s\S]*?-->/y);
			valueEnd = i - "-->".length;
			
			let end = curPos();
			
			return new CommentNode({start, end}, str.slice(valueStart, valueEnd));
		};
		
		const content = ():Node[] => {
			let ret:Node[] = [];
			while(!eol()){
				skipWhitespace();
				
				{
					let e = comment();
					if(e != null){
						ret.push(e);
						continue;
					}
				}
				
				{
					let e = charData();
					if(e != null){
						ret.push(e);
						continue;
					}
				}
				
				{
					let e = element();
					if(e != null){
						ret.push(e);
						continue;
					}
				}
				
				{
					let e = instruction();
					if(e != null){
						ret.push(e);
						continue;
					}
				}
				
				break;
			}
			
			return ret;
		};
		
		this._prolog = prolog() || undefined;
		skipWhitespace();
		let root = element();
		if(root == null) error("Expected root node");
		
		skipWhitespace();
		if(!eol()) error("Expected nothing else after root element");
		return root;
	}
	
	static fromString(xml:string):Document {
		return new Document(xml);
	}
	
	private _fromJSON(obj:DocumentJSON):ElementNode {
		this._prolog = obj.prolog;
		return ElementNode.fromJSON(obj.root);
	}
	
	static fromJSON(arg:any):Document {
		if(typeof arg == "string") arg = JSON.parse(arg);
		return new Document(arg);
	}
	
	static fromScratch(rootName:string):Document {
		const t:DocumentJSON = {
			prolog: {
				version: "1.0",
				encoding: "utf-8",
			},
			
			root: {
				tagname: rootName,
			}
		};
		
		return this.fromJSON(t);
	}
	
	toJSON(){
		let ret:DocumentJSON = {
			root: this._root.toJSON(),
		};
		
		if(this._prolog) ret.prolog = this._prolog;
		
		return ret;
	}
	
	encode(options:Partial<EncodeOptions>):string {
		let str = "";
		
		
		if(this._prolog){
			str += `<?xml version="${this._prolog.version}"`;
			if(this._prolog.encoding != null) str += ` encoding="${this._prolog.encoding}"`;
			str += "?>" + ('eol' in options ? options.eol : EOL);
		}
		
		str += this._root.encode(options);
		
		return str;
	}
}

type NodeJSON = CommentNodeJSON|TextNodeJSON|CDataNodeJSON|ElementNodeJSON|InstructionNodeJSON;
export abstract class Node {
	protected _parent:ElementNode|null = null;
	
	/** @internal */
	constructor(
		private _range:Range|undefined,
	){
		
	}
	
	get range(){ return this._range; }
	
	/** @internal */
	_setParent(v:ElementNode|null):void {
		this._parent = v;
	}
	
	orphanate():void {
		if(this._parent) this._parent.removeChild(this);
	}
	
	abstract toJSON():NodeJSON;
	encode(options?:Partial<EncodeOptions>, ctx?:Partial<EncodeContext>):string {
		return this._encode({
			pretty: false,
			indent: '\t',
			eol: EOL,
			...options
		}, {
			depth: 0,
			...ctx
		});
	}
	
	/** @internal */
	abstract _encode(options:EncodeOptions, ctx:EncodeContext):string;
	
	protected _encodeLine(options:EncodeOptions, ctx:EncodeContext, line:string):string {
		if(!options.pretty) return line;
		
		let prefix = "";
		for(let i = 0; i < ctx.depth; ++i) prefix += options.indent;
		return prefix + line + options.eol;
	}
	
	static fromJSON(arg:NodeJSON):Node {
		if(typeof arg == "string") return TextNode.fromJSON(arg);
		if("comment" in arg) return CommentNode.fromJSON(arg);
		if("tagname" in arg) return ElementNode.fromJSON(arg);
		if("instruction" in arg) return InstructionNode.fromJSON(arg);
		if("cdata" in arg) return CDataNode.fromJSON(arg);
		
		unreachable(arg);
	}
}

type CommentNodeJSON = { comment: string };
export class CommentNode extends Node {
	/** @internal */
	constructor(
		_range:Range|undefined,
		private _text:string,
	){
		super(_range);
	}
	
	get text(){ return this._text; }
	
	toJSON():CommentNodeJSON {
		return { comment: this._text };
	}
	
	static override fromJSON(v:CommentNodeJSON){
		return new CommentNode(undefined, v.comment);
	}
	
	_encode(options:EncodeOptions, ctx:EncodeContext):string {
		return this._encodeLine(options, ctx, `<!--${this._text}-->`);
	}
}

type TextNodeJSON = string;
export class TextNode extends Node {
	/** @internal */
	constructor(
		_range:Range|undefined,
		private _text:string,
	){
		super(_range);
	}
	
	get text(){ return this._text; }
	
	toJSON():TextNodeJSON {
		return this._text;
	}
	
	static override fromJSON(arg:TextNodeJSON):TextNode {
		return new TextNode(undefined, arg);
	}
	
	_encode(options:EncodeOptions, ctx:EncodeContext):string {
		return this._encodeLine(options, ctx, this._text);
	}
}

type CDataNodeJSON = {cdata:string};
export class CDataNode extends Node {
	/** @internal */
	constructor(
		_range:Range|undefined,
		private _text:string,
	){
		super(_range);
	}
	
	get text(){ return this._text; }
	
	toJSON():CDataNodeJSON {
		return {cdata:this._text};
	}
	
	static override fromJSON(arg:CDataNodeJSON):CDataNode {
		return new CDataNode(undefined, arg.cdata);
	}
	
	_encode(options:EncodeOptions, ctx:EncodeContext):string {
		return this._encodeLine(options, ctx, `<![CDATA[${this._text}]]>`);
	}
}

type Attributes = Record<string, {value: string, range?:Range|undefined, nameRange?:Range|undefined, valueRange?:Range|undefined }>;
abstract class AttributesNode extends Node {
	constructor(
		_range:Range|undefined,
		private _attrs:Attributes,
	){
		super(_range);
	}
	
	hasAttribute(name:string):boolean {
		return name in this._attrs;
	}
	
	getAttribute(name:string):string|undefined;
	getAttribute<T>(name:string, or:T):string|T;
	getAttribute<T>(name:string, or?:T):string|T|undefined {
		if(!(name in this._attrs)){
			return or;
		}
		
		return this._attrs[name].value;
	}
	
	getAttributeValueRange(name:string):Range|undefined {
		if(!(name in this._attrs)) return undefined;
		return this._attrs[name].valueRange;
	}
	
	getAttributesByValue(value:string):string[] {
		let ret:string[] = [];
		
		for(let i in this._attrs){
			if(this._attrs[i].value === value) ret.push(i);
		}
		
		return ret;
	}
	
	getAttributes():Record<string, string> {
		let attr:Record<string,string> = {};
		for(let i in this._attrs){
			attr[i] = this._attrs[i].value;
		}
		return attr;
	}
	
	setAttribute(name:string, value:string):void {
		this._attrs[name] = {
			value,
		};
	}
	
	deleteAttribute(name:string):void {
		delete this._attrs[name];
	}
	
	clearAttributes():void {
		this._attrs = {};
	}
	
	static attributesFromJSON(attrs:Record<string,string>|undefined):Attributes {
		let ret:Attributes = {};
		
		if(attrs){
			for(let i in attrs){
				ret[i] = { value: attrs[i] };
			}
		}
		
		return ret;
	}
	
	protected attrsToJSON():Record<string,string>|undefined {
		let attr:Record<string,string>|undefined;
		for(let i in this._attrs){
			attr = attr || {};
			attr[i] = this._attrs[i].value;
		}
		
		return attr;
	}
	
	protected attrsToXML():string {
		let line = "";
		for(let attrName in this._attrs){
			line += ` ${attrName}="${encodeEntities(this._attrs[attrName].value)}"`
		}
		
		return line;
	}
}

interface InstructionNodeJSON {
	instruction:string;
	attrs?:Record<string,string>;
}

export class InstructionNode extends AttributesNode {
	constructor(
		_range:Range|undefined,
		_attrs:Attributes,
		private _tagname:string,
		private _tagnameRange:Range|undefined,
	){
		super(_range, _attrs);
	}
	
	get tagname(){ return this._tagname; }
	
	toJSON() {
		let ret:InstructionNodeJSON = {
			instruction: this._tagname,
		};
		
		let attrs = this.attrsToJSON();
		if(attrs) ret.attrs = attrs;
		
		return ret;
	}
	
	_encode(options:EncodeOptions, ctx:EncodeContext):string {
		return this._encodeLine(options, ctx, `<?${this._tagname}${this.attrsToXML()}?>`);
	}
}

interface ElementNodeJSON {
	tagname:string;
	attrs?:Record<string,string>;
	children?:NodeJSON[];
}

export class ElementNode extends AttributesNode {
	private _childrenByTagName:Record<string, ElementNode[]> = {};
	
	/** @internal */
	constructor(
		_range:Range|undefined,
		private _tagname:string,
		private _tagnameRange:Range|undefined,
		private _tagnameCloseRange:Range|undefined,
		_attrs:Attributes,
		private _children:Node[],
	){
		super(_range, _attrs);
		
		for(let child of _children){
			child._setParent(this);
			
			if(child instanceof ElementNode){
				this._childrenByTagName[child._tagname] = this._childrenByTagName[child._tagname] || [];
				this._childrenByTagName[child._tagname].push(child);
			}
		}
	}
	
	static override fromJSON(obj:ElementNodeJSON):ElementNode {
		return new ElementNode(undefined, obj.tagname, undefined, undefined, AttributesNode.attributesFromJSON(obj.attrs), (obj.children || []).map(v => Node.fromJSON(v)));
	}
	
	get tagname(){ return this._tagname; }
	get tagnameRange(){ return this._tagnameRange; }
	get tagnameCloseRange(){ return this._tagnameCloseRange; }
	get children():readonly Node[] { return this._children; }
	
	set tagname(v:string){
		if(v == this._tagname) return;
		
		let p = this._parent;
		if(p){
			let arr = p._childrenByTagName[this._tagname];
			let i = arr.indexOf(this);
			assert(i !== -1);
			arr.splice(i, 1);
			if(arr.length == 0) delete p._childrenByTagName[this._tagname];
			
			p._childrenByTagName[v] = p._childrenByTagName[v] || [];
			arr = p._childrenByTagName[v];
			arr.push(this);
		}
		
		this._tagname = v;
		this._tagnameRange = undefined;
		this._tagnameCloseRange = undefined;
	}
	
	removeChild(child:Node, hintIndex?:number):boolean {
		let i:number;
		
		if(typeof hintIndex !== "undefined" && this._children[hintIndex] === child){
			i = hintIndex;
		}else{
			i = this._children.indexOf(child);
			if(i == -1) return false;
		}
		
		this._children.splice(i, 1);
		
		if(child instanceof ElementNode){
			assert(child._tagname in this._childrenByTagName);
			
			let arr = this._childrenByTagName[child._tagname];
			let j = arr.indexOf(child);
			assert(j !== -1);
			arr.splice(j, 1);
			
			if(arr.length == 0){
				delete this._childrenByTagName[child._tagname];
			}
		}
		
		child._setParent(null);
		
		return true;
	}
	
	removeChildren():void {
		for(let v of this._children) v._setParent(null);
		this._children = [];
		this._childrenByTagName = {};
	}
	
	appendChild(child:Node):void {
		child.orphanate();
		child._setParent(this);
		this._children.push(child);
		
		if(child instanceof ElementNode){
			this._childrenByTagName[child._tagname] = this._childrenByTagName[child._tagname] || [];
			this._childrenByTagName[child._tagname].push(child);
		}
	}
	
	appendChildrenFrom(otherParent:ElementNode):void {
		let oldChildren = otherParent._children.concat();
		for(let v of oldChildren){
			this.appendChild(v);
		}
	}
	
	getChildrenByTagName(tagname:string):readonly ElementNode[] {
		if(tagname in this._childrenByTagName){
			return this._childrenByTagName[tagname];
		}else{
			return [];
		}
	}
	
	toJSON():ElementNodeJSON {
		let ret:ElementNodeJSON = {
			tagname: this._tagname,
		};
		
		let attrs = this.attrsToJSON();
		if(attrs) ret.attrs = attrs;
		
		if(this._children.length > 0) ret.children = this._children.map(v => v.toJSON());
		
		return ret;
	}
	
	_encode(options:EncodeOptions, ctx:EncodeContext):string {
		let canSelfClose = this._children.length == 0;
		
		let line = `<${this._tagname}${this.attrsToXML()}`;
		
		if(canSelfClose){
			line += "/>";
			return this._encodeLine(options, ctx, line);
		}else{
			line += ">";
			
			let str = this._encodeLine(options, ctx, line);
			
			++ctx.depth;
			for(let c of this._children) str += c._encode(options, ctx);
			--ctx.depth;
			str += this._encodeLine(options, ctx, `</${this._tagname}>`);
			
			
			return str;
		}
	}
}

export function encodeEntities(x:string):string {
	return x.replaceAll(/[&<>'"'\xA0]/gm, function(all){
		if(all in entityMapInverse) return entityMapInverse[all];
		return all;
	})
}

export function decodeEntities(x:string):string {
	return x.replaceAll(/&[^;]+;/gm, function(all){
		if(all in entityMap) return entityMap[all];
		return all;
	})
}

export function cdata(x:string):string {
	return `<![CDATA[${x}]]>`;
}

export type Range = {
	readonly start:Position;
	readonly end:Position;
};

export function rangeIntersects(a:Range, b:Range){
	return positionLTE(a.start, b.end) && positionLTE(b.start, a.end);
}

export function positionLTE(a:Position, b:Position){
	if(a.line > b.line) return false;
	if(a.line < b.line) return true;
	return a.character <= b.character;
}

export function positionLT(a:Position, b:Position){
	if(a.line > b.line) return false;
	if(a.line < b.line) return true;
	return a.character < b.character;
}


type Position = {
	readonly line:number;
	readonly character:number; // Within this line, 0 based
};

interface TextChange {
	range:Range; // range that got replaced
	rangeLength:number; // length of the range that got replaced
	rangeOffset:number; // the offset of the range that got replaced
	text:string; // new text for the range
}

}

export default fxml;
