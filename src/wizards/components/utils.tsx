import assert from "assert";
import { unreachable } from "../../lib/utils";
import { ValueSource } from "../../worker";

export function valueSourceToClassName(v:ValueSource|undefined):string {
	if(v === undefined) return "";
	if(v == ValueSource.Self) return "source-self table-success";
	if(v == ValueSource.Default) return "source-default table-primary";
	if(v == ValueSource.Parent) return "source-parent table-warning";
	unreachable(v);
}

export function valueSourceToVariant(v:ValueSource):string {
	if(v == ValueSource.Self) return "success";
	if(v == ValueSource.Default) return "primary";
	if(v == ValueSource.Parent) return "warning";
	unreachable(v);
}

export function resolveTokens(str:string, tokens:Record<string, string>):string {
	return str.replaceAll(/##([a-z0-9_]+)##/gim, function(all, id){
		if(id in tokens){
			return tokens[id];
		}else{
			return all;
		}
	});
}

// Build unresolved value by undoing handwritten values back to their tokens
export function unresolveTokens(str:string, tokens:Record<string, string>):string {
	let reverseTokens:Record<string, string> = {};
	
	for(let key in tokens){
		let value = tokens[key];
		
		// Prefer shorter key if they both have the same value
		if(value in reverseTokens && key.length >= reverseTokens[value].length) continue;
		
		reverseTokens[value] = key;
	}
	
	let tokenValues = Object.keys(reverseTokens);
	
	// Prefer longer values first
	tokenValues.sort((a, b) => {
		if(a.length != b.length) return a.length > b.length ? -1 : 1;
		return 0;
	});
	
	for(let value of tokenValues){
		str = str.replaceAll(value, `##${reverseTokens[value]}##`);
	}
	
	return str;
}

assert.equal(resolveTokens("hi ##id##!", {id:"person"}), "hi person!");
assert.equal(unresolveTokens("hi person!", {id:"person"}), "hi ##id##!");
