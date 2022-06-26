import assert from "assert";

export function unreachable(x:never):never {
	throw new Error("Should've been unreachable");
	x;
}

// Better than .toString() because it won't print things like 1e40 which will mess up the xml
export function possiblyBigNumberToString(n:number){
	return BigInt(n).toString()
}

export function hotkeyPositionToLetter(row:number, column:number):string {
	if(row-- == 0){
		if(column-- == 0) return 'Q';
		if(column-- == 0) return 'W';
		if(column-- == 0) return 'E';
		if(column-- == 0) return 'R';
		if(column-- == 0) return 'T';
	}else if(row-- == 0){
		if(column-- == 0) return 'A';
		if(column-- == 0) return 'S';
		if(column-- == 0) return 'D';
		if(column-- == 0) return 'F';
		if(column-- == 0) return 'G';
	}else if(row-- == 0){
		if(column-- == 0) return 'Z';
		if(column-- == 0) return 'X';
		if(column-- == 0) return 'C';
		if(column-- == 0) return 'V';
		if(column-- == 0) return 'b';
	}
	
	return "";
}

export function mapObjectToArray<T, U>(obj:T, fn:(key:string, value:T[keyof T])=>U):U[] {
	let arr:U[] = [];
	
	for(let key in obj){
		arr.push(fn(key, obj[key]));
	}
	
	return arr;
}

export function mapObject<T, U>(obj:T, fn:(key:string, value:T[keyof T])=>U):Record<string, U> {
	let ret:Record<string, U> = {};
	
	for(let key in obj){
		ret[key] = fn(key, obj[key]);
	}
	
	return ret;
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
