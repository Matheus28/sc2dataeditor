import * as fs from "fs/promises";

export async function importHotkeysFile(rootMapDir:string):Promise<Map<string,string>>{
	let contents = await fs.readFile(langCodeToGameHotkeysFilename(rootMapDir, "enUS"), "utf8");
	
	// Strip BOM (editor adds it...)
	if(contents.charCodeAt(0) == 0xFEFF){
		contents = contents.slice(1);
	}
	
	let res = new Map<string,string>();
	
	for(let line of contents.split(/\r?\n/gm)){
		let i = line.indexOf("=");
		if(i == -1) continue;
		
		let key = line.slice(0, i);
		let value = line.slice(i+1);
		res.set(key, value);
	}
	
	return new Map(sortMapByKey(res));
}

export async function exportHotkeysFile(rootMapDir:string, data:Map<string, string>){
	await fs.writeFile(langCodeToGameHotkeysFilename(rootMapDir, "enUS"), "\uFEFF" + sortMapByKey(data).map(kv => kv[0] + "=" + kv[1]).join("\r\n") + "\r\n");
}

function sortMapByKey<A, B>(m:Map<A,B>) : [A,B][] {
	return Array.from(m).sort(function(a, b){
		if(a[0] == b[0]) return 0;
		return a[0] < b[0] ? -1 : 1;
	});
}

function langCodeToGameHotkeysFilename(rootMapDir:string, lang:string){
	return rootMapDir + "/" + lang + '.SC2Data/LocalizedData/GameHotkeys.txt';
}
