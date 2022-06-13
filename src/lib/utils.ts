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
