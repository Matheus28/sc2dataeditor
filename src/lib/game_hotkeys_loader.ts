import { exportStringsFile, getTxtFileName, importStringsFile } from "./game_strings_loader";

export async function importHotkeysFile(rootMapDir:string):Promise<Record<string,string>>{
	return importStringsFile(getTxtFileName(rootMapDir, "enUS", "GameHotkeys.txt"));
}

export async function exportHotkeysFile(rootMapDir:string, data:Record<string, string>){
	return exportStringsFile(getTxtFileName(rootMapDir, "enUS", "GameHotkeys.txt"), data);
}
