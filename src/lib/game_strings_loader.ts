import * as fs from "fs/promises";

export function getTxtFileName(rootMapDir:string, lang:string, filename:string = "GameStrings.txt"){
	return rootMapDir + "/" + lang + '.SC2Data/LocalizedData/' + filename;
}

export async function importStringsFile(filename:string):Promise<Record<string,string>>{
	let contents = await fs.readFile(filename, "utf8");
	
	// Strip BOM (editor adds it...)
	if(contents.charCodeAt(0) == 0xFEFF){
		contents = contents.slice(1);
	}
	
	let res:Record<string,string> = {};
	
	for(let line of contents.split(/\r?\n/gm)){
		let i = line.indexOf("=");
		if(i == -1) continue;
		
		let key = line.slice(0, i);
		let value = line.slice(i+1);
		res[key] = value;
	}
	
	for(let k in res){
		let v = res[k];
		res[k] = fixBadString(v).replaceAll(/<n\/>/gi, '\n');
	}
	
	return res;
}

export async function exportStringsFile(filename:string, data:Record<string, string>){
	await fs.writeFile(filename, "\uFEFF" + sortMapByKey(data).map(kv => kv[0] + "=" + kv[1].replaceAll(/\r?\n/gi, '<n/>')).join("\r\n") + "\r\n");
}

function sortMapByKey<T>(m:Record<string,T>) : [string,T][] {
	return Object.entries(m).sort(function(a, b){
		if(a[0] == b[0]) return 0;
		return a[0] < b[0] ? -1 : 1;
	});
}

export function fixBadString(str:string){
	return str.replaceAll(/<\/n>/gmi, '<n/>');
}
