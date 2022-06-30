import {
	createConnection, TextDocuments, ProposedFeatures, TextDocumentSyncKind, DiagnosticSeverity, SymbolInformation, SymbolKind, CodeLens
} from 'vscode-languageserver/node';

import {
	Range,
	Position,
	TextDocument
} from 'vscode-languageserver-textdocument';

import {
	Dataspace,
	dataspaceFilenameToName,
	dataspaceNameToFilename,
	forEachDataspace,
	GameDataIndex,
	getCatalogNameByTagname,
	loadGameDataIndex,
	reloadDataspaceFromString
} from "../lib/game_data_loader";

import {
	InlayHint,
	Location,
} from 'vscode-languageserver-protocol';

import {
	DecorationTypeDidChange,
	DecorationsRangesDidChange,
} from "./decoration_protocol";

import assert from 'assert';
import path from 'path';
import { CatalogNameArray } from '../lib/game_data';
import { fileURLToPath, pathToFileURL } from 'url';
import fxml from '../lib/fxml';
import { CatalogField, findReferencesTo } from '../lib/game_data_access';

//LinkedEditingRanges

interface WorkspaceMap {
	index:Promise<GameDataIndex>;
	
}

interface MyTextDocument extends TextDocument {
	map?:WorkspaceMap|null;
	dataspace?:Dataspace|null;
}

const loadedMapByRootMapDir = new Map<string, WorkspaceMap>();

const connection = createConnection(ProposedFeatures.all);
const documents:TextDocuments<MyTextDocument> = new TextDocuments(TextDocument);

documents.onDidOpen((e) => {
	connection.console.log(`[Server(${process.pid})] Document opened: ${e.document.uri}`);
	
	// FIXME change document language
	getDocumentDataspace(e.document).then(v => {
		if(v == null) return;
		
	});
});

documents.onDidChangeContent((change) => {
	validateDocument(change.document);
	getDocumentDataspace(change.document).then((dataspace) => {
		if(dataspace) reloadDataspaceFromString(dataspace, change.document.getText());
	});
});

documents.listen(connection);

connection.onInitialize((_params) => {
	connection.console.log(`[Server(${process.pid})] Started and initialize received`);
	
	return {
		capabilities: {
			textDocumentSync: {
				openClose: true,
				change: TextDocumentSyncKind.Incremental
			},
			
			//workspaceSymbolProvider: true,
			documentSymbolProvider: true,
			//inlayHintProvider: {
				//resolveProvider: true,
			//}
			
			referencesProvider: true,
			
			//codeLensProvider: {
			//	
			//},
		},
	};
});

connection.onCodeLens(async (e) => {
	let document = documents.get(e.textDocument.uri);
	assert(document);
	
	let dataspace = await getDocumentDataspace(document);
	if(!dataspace) return null;
	
	let ret:CodeLens[] = [];
	
	for(let entry of dataspace.data_.root.children){
		if(!(entry instanceof fxml.ElementNode)) continue;
		if(entry.tagname == "const") continue;
		
		if(entry.range == undefined) continue;
		//if(!rangeIntersects(entry.range, e.range)) continue;
		
		if(entry.children.length == 0) continue;
		
		let firstChildRange:Range|undefined = entry.children[0].range;
		if(firstChildRange === undefined) continue;
		
		console.log("heh");
		
		ret.push({
			range: {start: firstChildRange.start, end: firstChildRange.end},
			command: {
				title: "Dododododo",
				command: "sc2dataeditor.inheritedProp"
			}
		});
		
		ret.push({
			range: {start: firstChildRange.start, end: firstChildRange.end},
			command: {
				title: "Dadadadadadada",
				command: "sc2dataeditor.inheritedProp"
			}
		});
	}
	
	return ret;
});

connection.onReferences(async (e) => {
	let document = documents.get(e.textDocument.uri);
	assert(document);
	
	let dataspace = await getDocumentDataspace(document);
	if(!dataspace) return null;
	
	if(!dataspace.index) return null;
	let index = dataspace.index;
	
	let hoveredEntry:fxml.ElementNode|undefined;
	for(let entry of dataspace.data_.root.children){
		if(!(entry instanceof fxml.ElementNode)) continue;
		if(entry.tagname == "const") continue;
		if(entry.range === undefined) continue;
		
		if(!fxml.positionLTE(e.position, entry.range.end)) continue;
		if(fxml.positionLT(entry.range.start, e.position)) continue;
		
		hoveredEntry = entry;
		break;
	}
	
	if(!hoveredEntry) return null;
	
	let hoveredEntryID = hoveredEntry.getAttribute("id");
	if(!hoveredEntryID) return null;
	let hoveredEntryCatalog = getCatalogNameByTagname(hoveredEntry.tagname);
	
	
	let references = findReferencesTo(index, {
		id: hoveredEntryID,
		catalog: hoveredEntryCatalog,
	});
	
	let ret:Location[] = [];
	
	for(let ref of references){
		if(ref.range === undefined) continue;
		ret.push({
			uri: pathToFileURL(dataspaceNameToFilename(index.rootMapDir, ref.dataspace.name)).toString(),
			range: ref.range,
		});
	}
	
	return ret;
});

connection.onDocumentSymbol(async (e) => {
	let document = documents.get(e.textDocument.uri);
	assert(document);
	
	let dataspace = await getDocumentDataspace(document);
	if(!dataspace) return null;
	
	let ret:SymbolInformation[] = [];
	
	for(let catalogName of CatalogNameArray){
		let catalog = dataspace.catalogs[catalogName];
		
		let start:Position|undefined;
		let end:Position|undefined;
		
		for(let entry of catalog.entries){
			if(!entry.range) continue;
			
			if(entry.range.start !== undefined){
				if(start === undefined){
					start = entry.range.start;
				}else{
					start = minPosition(start, entry.range.start);
				}
			}
			
			if(entry.range.end !== undefined){
				if(end === undefined){
					end = entry.range.end;
				}else{
					end = maxPosition(end, entry.range.end);
				}
			}
			
			ret.push({
				name: entry.getAttribute("id", entry.tagname),
				kind: SymbolKind.Class,
				location: {
					uri: document.uri,
					range: entry.range,
				},
				containerName: catalogName,
			});
		}
		
		if(start && end){
			ret.push({
				name: catalogName,
				kind: SymbolKind.Namespace,
				location: {
					uri: document.uri,
					range: { start, end }
				},
			});
		}
	}
	
	return ret;
});


function minPosition(a:Position, b:Position){
	if(a.line != b.line) return a.line < b.line ? a : b;
	return a.character < b.character ? a : b;
}

function maxPosition(a:Position, b:Position){
	if(a.line != b.line) return a.line > b.line ? a : b;
	return a.character > b.character ? a : b;
}

connection.languages.inlayHint.on(async e => {
	let document = documents.get(e.textDocument.uri);
	assert(document);
	
	let dataspace = await getDocumentDataspace(document);
	if(!dataspace) return null;
	
	let ret:InlayHint[] = [];
	
	/*
	for(let entry of dataspace.data_.root.children){
		if(!(entry instanceof fxml.ElementNode)) continue;
		if(entry.range == undefined) continue;
		if(!rangeIntersects(entry.range, e.range)) continue;
		
		if(entry.children.length == 0) continue;
		let firstChildRange:Range|undefined = entry.children[0].range;
		if(firstChildRange === undefined) continue;
		
		let pos = firstChildRange.start;
		
		ret.push({
			position: pos,
			label: "hiiiiiiiiii " + entry.getAttribute("id", entry.tagname) + "\n",
		});
	}
	*/
	return ret;
});

connection.listen();


function validateDocument(document:MyTextDocument){
	
	connection.sendNotification(DecorationTypeDidChange.type, {
		backgroundColor: '#FF0000',
	});
	
	connection.sendNotification(DecorationsRangesDidChange.type, {
		uri: document.uri.toString(),
		options: [
			
		],
	});
}

function getWorkspaceMap(document:MyTextDocument):WorkspaceMap|null {
	if(document.map === undefined){
		let rootMapDir = findRootMapDirFromURI(document.uri);
		
		if(rootMapDir == null){
			return document.map = null;
		}
		
		let loadedMap = loadedMapByRootMapDir.get(rootMapDir);
		if(loadedMap === undefined){
			loadedMap = {
				index: loadGameDataIndex(rootMapDir),
			}
			
			console.log(`[Server(${process.pid})] Loading index at ${rootMapDir}`);
			loadedMap.index.then(() => console.log(`[Server(${process.pid})] Finished loading index at ${rootMapDir}`))
			
			loadedMapByRootMapDir.set(rootMapDir, loadedMap);
			//FIXME: cleanup when all documents are closed
		}
		
		return document.map = loadedMap;
	}else{
		return document.map;
	}
}

async function getDocumentDataspace(document:MyTextDocument):Promise<Dataspace|null> {
	if(document.dataspace !== undefined) return document.dataspace;
	let map = getWorkspaceMap(document);
	if(!map) return document.dataspace = null;
	
	let myName = getDataspaceNameFromURI(document.uri);
	
	let index = await map.index;
	let ret:Dataspace|null = null;
	forEachDataspace(index, true, false, (otherDataspace:Dataspace) => {
		if(otherDataspace.name == myName){
			ret = otherDataspace;
			return false;
		}
		
		return true;
	});
	
	return document.dataspace = ret;
}

function findRootMapDirFromURI(uri:string):string|null {
	assert(uri.startsWith("file:///"));
	let pathname = fileURLToPath(uri);
	pathname = path.resolve(path.normalize(pathname));
	
	for(;;){
		if(pathname.endsWith(".SC2Map")) return pathname.replaceAll(/\\/gm, '/');
		
		let lastPath = pathname;
		pathname = path.resolve(pathname, "..");
		if(lastPath == pathname) return null;
	}
}

function getDataspaceNameFromURI(uri:string):string|null {
	let rootMapDir = findRootMapDirFromURI(uri);
	if(rootMapDir == null) return null;
	
	assert(uri.startsWith("file:///"));
	let pathname = fileURLToPath(uri);
	pathname = path.resolve(path.normalize(pathname));
	pathname = pathname.replaceAll(/\\/gm, '/');
	
	assert(pathname.startsWith(rootMapDir));
	return dataspaceFilenameToName(rootMapDir, pathname);
}