import { importStringsFile } from "./game_strings_loader";

let strings:Awaited<typeof stringsPromise>;
const stringsPromise = importStringsFile("deps/SC2GameData/mods/core.sc2mod/enus.sc2data/LocalizedData/Editor/EditorCatalogStrings.txt");
stringsPromise.then((v) => strings = v);

function getKeyValueOrKey(key:string):string {
	let v = strings[key];
	if(v !== undefined) return v;
	return key;
}

export function getEnumValue(docname:string, val:string):string {
	return getKeyValueOrKey(`EDSTR_ENUMVAL_${docname}${val}`);
}

export function getStructFieldName(docname:string, field:string):string {
	return getKeyValueOrKey(`EDSTR_FIELDNAME_${docname}_${field}`);
}

export function getStructFieldHint(docname:string, field:string):string {
	return getKeyValueOrKey(`EDSTR_FIELDHINT_${docname}_${field}`);
}

export function getNamedArrayIndexName(enumDocname:string, index:string):string {
	return getKeyValueOrKey(`EDSTR_ENUMVAL_${enumDocname}${index}`);
}

export function promise(){
	return stringsPromise;
}
