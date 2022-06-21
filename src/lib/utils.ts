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
