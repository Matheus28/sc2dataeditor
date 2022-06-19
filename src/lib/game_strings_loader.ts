import * as fs from "fs/promises";

export async function importTxtFile(rootMapDir:string, lang:string, filename:string = "GameStrings.txt"):Promise<Map<string,string>>{
	let contents = await fs.readFile(langCodeToGameStringFilename(rootMapDir, lang, filename), "utf8");
	
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
	
	for(let [k, v] of res){
		if(fixBadString(v) != v){
			res.set(k, fixBadString(v));
		}
	}
	
	return new Map(sortMapByKey(res));
}

export async function exportTxtFile(rootMapDir:string, lang:string, data:Map<string, string>, filename:string = "GameStrings.txt"){
	await fs.writeFile(langCodeToGameStringFilename(rootMapDir, lang, filename), "\uFEFF" + sortMapByKey(data).map(kv => kv[0] + "=" + kv[1]).join("\r\n") + "\r\n");
}

function sortMapByKey<A, B>(m:Map<A,B>) : [A,B][] {
	return Array.from(m).sort(function(a, b){
		if(a[0] == b[0]) return 0;
		return a[0] < b[0] ? -1 : 1;
	});
}

export function fixBadString(str:string){
	return str.replace(/<\/n>/gmi, '<n/>');
}

function langCodeToGameStringFilename(rootMapDir:string, lang:string, filename:string){
	return rootMapDir + "/" + lang + '.SC2Data/LocalizedData/' + filename;
}
