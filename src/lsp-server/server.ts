import {
	createConnection,
	TextDocuments,
	ProposedFeatures,
	TextDocumentSyncKind,
	DiagnosticSeverity,
	SymbolInformation,
	SymbolKind,
	CodeLens,
	WorkspaceSymbol,
	DefinitionLink,
	WorkspaceEdit
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
	dataspaceToString,
	forEachDataspace,
	GameDataIndex,
	getCatalogNameByTagname,
	loadGameDataIndex,
	reloadDataspaceFromString
} from "../lib/game_data_loader";

import {
	InlayHint,
	Location,
	TextEdit,
} from 'vscode-languageserver-protocol';

import {
	DecorationTypeDidChange,
	DecorationsRangesDidChange,
} from "./decoration_protocol";

import difflib from "difflib";

import assert from 'assert';
import path from 'path';
import { CatalogNameArray } from '../lib/game_data';
import { fileURLToPath, pathToFileURL } from 'url';
import fxml from '../lib/fxml';
import { accessEntry, CatalogField, findReferencesTo, setEntryToken, setFieldValue } from '../lib/game_data_access';

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
	let text = change.document.getText();
	let version = change.document.version;
	
	getDocumentDataspace(change.document).then((dataspace) => {
		if(change.document.version != version) return;
		if(dataspace) reloadDataspaceFromString(dataspace, text);
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
			workspaceSymbolProvider: true,
			//inlayHintProvider: {
				//resolveProvider: true,
			//}
			
			definitionProvider: true,
			referencesProvider: true,
			renameProvider: {
				prepareProvider: true,
			},
			
			linkedEditingRangeProvider: true,
			
			//codeLensProvider: {
			//	
			//},
		},
	};
});

function renameCommon(dataspace:Dataspace, position:Position){
	let checkRange:Range = {start:position, end:position};
	let attr = fxml.getAttributeValueFromRange(dataspace.data_.root, checkRange);
	if(attr === undefined) return null;
	if(attr.name != "id") return null;
	
	let entry = attr.elem;
	
	if(!(entry instanceof fxml.ElementNode)) return null;
	
	// Make sure this is an actual entry
	let catalog = entry.parent;
	if(catalog == null) return null;
	if(catalog.tagname != "Catalog") return null;
	
	// Okay we know we can rename it
	
	return {
		attr,
		entry,
	};
}

connection.onPrepareRename(async e => {
	let document = documents.get(e.textDocument.uri);
	assert(document);
	
	let dataspace = await getDocumentDataspace(document);
	if(!dataspace) return null;
	
	let rename = renameCommon(dataspace, e.position);
	if(rename == null) return null;
	
	return { range: rename.attr.range, placeholder: rename.attr.value }
});

connection.onRenameRequest(async e => {
	let document = documents.get(e.textDocument.uri);
	assert(document);
	
	let dataspace = await getDocumentDataspace(document);
	if(!dataspace) return null;
	if(!dataspace.index) return null;
	
	let rename = renameCommon(dataspace, e.position);
	if(rename == null) return null;
	
	let ret:WorkspaceEdit = {
		documentChanges: [],
	};
	
	if(e.newName == rename.attr.value) return ret;
	
	let refs = findReferencesTo(dataspace.index, {
		id: rename.attr.value,
		catalog: getCatalogNameByTagname(rename.entry.tagname),
	});
	
	let changedDataspaces = new Map<Dataspace, string>();
	
	changedDataspaces.set(dataspace, dataspaceToString(dataspace));
	rename.entry.setAttribute("id", e.newName);
	
	for(let ref of refs){
		if(changedDataspaces.has(ref.dataspace)){
			changedDataspaces.set(ref.dataspace, dataspaceToString(ref.dataspace));
		}
		
		if("tokenName" in ref){
			setEntryToken(dataspace.index, ref.entry, ref.tokenName, e.newName, dataspace);
			let vv = accessEntry(dataspace.index, ref.entry);
			assert(vv);
		}else{
			setFieldValue(dataspace.index, ref.field, e.newName, dataspace);
			let vv = accessEntry(dataspace.index, ref.field.entry);
			assert(vv);
		}
	}
	
	for(let [dataspace, oldString] of changedDataspaces){
		assert(ret.documentChanges);
		
		let uri = getDataspaceURI(dataspace);
		let document = documents.get(uri);
		
		console.log("generating diffs...");
		let edits = makeEditOperations(oldString, dataspaceToString(dataspace));
		if(edits.length == 0) continue;
		
		console.log(edits);
		
		ret.documentChanges.push({
			textDocument: {
				uri,
				version: document === undefined ? null : document.version,
			},
			
			edits
		});
	}
	
	return ret;
});

function makeEditOperations(oldString:string, newString:string):TextEdit[] {
	if(oldString == newString) return [];
	
	let oldLines = oldString.split("\n");
	let newLines = newString.split("\n");
	
	let s = new difflib.SequenceMatcher(null, oldLines, newLines);
	let ops = s.getOpcodes();
	
	let ret:TextEdit[] = [];
	for(let op of ops){
		if(op[0] == "equal") continue;
		
		let oldRangeStart = op[1];
		let oldRangeEnd = op[2];
		let newRangeStart = op[3];
		let newRangeEnd = op[4];
		
		let range:Range = {
			start: { line: oldRangeStart, character: 0 },
			end: { line: oldRangeEnd, character: 0 },
		};
		
		if(op[0] == "delete"){
			assert(newRangeStart == newRangeEnd);
			
			ret.push({
				range,
				newText: "",
			});
		}else if(op[0] == "insert"){
			assert(oldRangeStart == oldRangeEnd);
			
			ret.push({
				range,
				newText: newLines.slice(newRangeStart, newRangeEnd).join("\n"),
			});
		}else if(op[0] == "replace"){
			ret.push({
				range,
				newText: newLines.slice(newRangeStart, newRangeEnd).join("\n"),
			});
		}
	}
	
	return ret;
}

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
	let checkRange:Range = {start:e.position, end:e.position};
	for(let entry of dataspace.data_.root.children){
		if(!(entry instanceof fxml.ElementNode)) continue;
		if(entry.tagname == "const") continue;
		if(entry.range === undefined) continue;
		
		if(!fxml.rangeIntersects(entry.range, checkRange)) continue;
		
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

connection.onDefinition(async (e) => {
	let id:string;
	let originSelectionRange:Range;
	
	{ // First find out what we're hovering
		let document = documents.get(e.textDocument.uri);
		assert(document);
		
		let dataspace = await getDocumentDataspace(document);
		if(!dataspace) return null;
		
		
		let checkRange:Range = {start:e.position, end:e.position};
		
		let tmp = fxml.getAttributeValueFromRange(dataspace.data_.root, checkRange);
		if(tmp === undefined) return null;
		
		id = tmp.value;
		originSelectionRange = tmp.range;
	}
	
	
	let ret:DefinitionLink[] = [];
	
	for(let [_, map] of loadedMapByRootMapDir){
		let index = await map.index;
		
		forEachDataspace(index, true, false, (dataspace:Dataspace) => {
			for(let entry of dataspace.data_.root.children){
				if(!(entry instanceof fxml.ElementNode)) continue;
				if(entry.tagname == "const") continue;
				if(entry.range === undefined) continue;
				if(entry.getAttribute("id") !== id) continue;
				
				let targetSelectionRange = entry.getAttributeValueRange("id");
				if(targetSelectionRange === undefined) continue;
				
				ret.push({
					originSelectionRange,
					targetUri: getDataspaceURI(dataspace),
					targetRange: entry.range,
					targetSelectionRange,
				});
			}
		});
	}
	
	return ret;
});

function getDataspaceURI(dataspace:Dataspace):string {
	assert(dataspace.index);
	return pathToFileURL(dataspaceNameToFilename(dataspace.index.rootMapDir, dataspace.name)).toString();
}

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

connection.onWorkspaceSymbol(async (e) => {
	let ret:WorkspaceSymbol[] = [];
	
	for(let [_, map] of loadedMapByRootMapDir){
		let index = await map.index;
		
		forEachDataspace(index, true, false, (dataspace:Dataspace) => {
			for(let entry of dataspace.data_.root.children){
				if(!(entry instanceof fxml.ElementNode)) continue;
				if(entry.tagname == "const") continue;
				if(entry.range === undefined) continue;
				
				let name = entry.getAttribute("id", entry.tagname);
				if(name.toLowerCase().indexOf(e.query.toLowerCase()) == -1) continue;
				
				ret.push({
					name,
					kind: SymbolKind.Class,
					location: {
						uri: getDataspaceURI(dataspace),
						range: entry.range,
					},
				});
			}
		});
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

connection.languages.onLinkedEditingRange(async (e) => {
	let document = documents.get(e.textDocument.uri);
	assert(document);
	
	let dataspace = await getDocumentDataspace(document);
	if(!dataspace) return null;
	
	let checkRange:Range = {start:e.position, end:e.position};
	
	let vv = fxml.getTagnameFromRange(dataspace.data_.root, checkRange);
	if(!vv) return null;
	if(!vv.closeRange) return null;
	
	return {
		ranges: [
			vv.range,
			vv.closeRange
		],
		
		//wordPattern: "/^[a-z_:][a-z_:0-9\\.\\-]*$/"
	}
});

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
