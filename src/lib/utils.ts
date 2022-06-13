export function unreachable(x:never):never {
	throw new Error("Should've been unreachable");
	x;
}

// Better than .toString() because it won't print things like 1e40 which will mess up the xml
export function possiblyBigNumberToString(n:number){
	return BigInt(n).toString()
}
