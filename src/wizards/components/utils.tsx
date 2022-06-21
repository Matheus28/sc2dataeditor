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

export function resolveTokens(value:string, tokens:Record<string, string>):string {
	return value.replaceAll(/##([a-z0-9_]+)##/gim, function(all, id){
		if(id in tokens){
			return tokens[id];
		}else{
			return all;
		}
	});
}

// Build unresolved value by undoing handwritten values back to their tokens
export function unresolveTokens(value:string, tokens:Record<string, string>):string {
	let tokenKeys = Object.keys(tokens);
	
	// Prefer longer keys first
	tokenKeys.sort((a, b) => {
		if(a.length != b.length) return a.length > b.length ? -1 : 1;
		return 0;
	});
	
	for(let key of tokenKeys){
		value.replaceAll(`##${key}##`, tokens[key]);
	}
	
	return value;
}
