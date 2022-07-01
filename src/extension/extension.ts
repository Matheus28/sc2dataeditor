/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
import * as path from 'path';
import {
	workspace as Workspace, window as Window, ExtensionContext, TextDocument, OutputChannel, WorkspaceFolder, Uri, TextEditorDecorationType, DecorationOptions, Range, Position
} from 'vscode';

import {
	LanguageClient, LanguageClientOptions, TransportKind
} from 'vscode-languageclient/node';

import {
	DecorationTypeDidChange,
	DecorationsRangesDidChange,
} from "../lsp-server/decoration_protocol";

let defaultClient: LanguageClient;
const clients: Map<string, LanguageClient> = new Map();

let _sortedWorkspaceFolders: string[] | undefined;
function sortedWorkspaceFolders(): string[] {
	if (_sortedWorkspaceFolders === void 0) {
		_sortedWorkspaceFolders = Workspace.workspaceFolders ? Workspace.workspaceFolders.map(folder => {
			let result = folder.uri.toString();
			if (result.charAt(result.length - 1) !== '/') {
				result = result + '/';
			}
			return result;
		}).sort(
			(a, b) => {
				return a.length - b.length;
			}
		) : [];
	}
	return _sortedWorkspaceFolders;
}
Workspace.onDidChangeWorkspaceFolders(() => _sortedWorkspaceFolders = undefined);

function getOuterMostWorkspaceFolder(folder: WorkspaceFolder): WorkspaceFolder {
	const sorted = sortedWorkspaceFolders();
	for (const element of sorted) {
		let uri = folder.uri.toString();
		if (uri.charAt(uri.length - 1) !== '/') {
			uri = uri + '/';
		}
		if (uri.startsWith(element)) {
			return Workspace.getWorkspaceFolder(Uri.parse(element))!;
		}
	}
	return folder;
}


export function activate(context: ExtensionContext) {
	const serverModule = context.asAbsolutePath(path.join('out', 'lsp-server', 'server.js'));
	const outputChannel: OutputChannel = Window.createOutputChannel('sc2dataeditor');
	
	function createClient(workspaceFolder?:WorkspaceFolder):LanguageClient {
		const debugOptions = { execArgv: ["--nolazy", "--inspect=" + (workspaceFolder ? 6011 + clients.size : 6010)] };
		const serverOptions = {
			run: { module: serverModule, transport: TransportKind.ipc, options: debugOptions },
			debug: { module: serverModule, transport: TransportKind.ipc, options: debugOptions}
		};
		
		const clientOptions: LanguageClientOptions = {
			documentSelector: [
				{ language: 'sc2dataspace' }
			],
			diagnosticCollectionName: 'sc2dataeditor',
			outputChannel: outputChannel
		};
		
		if(workspaceFolder) clientOptions.workspaceFolder = workspaceFolder;
		
		const client = new LanguageClient('sc2dataeditor', 'SC2 Data Editor', serverOptions, clientOptions);
		
		let decorationType:TextEditorDecorationType;
		
		client.onNotification(DecorationTypeDidChange.type, (options) => {
			decorationType = Window.createTextEditorDecorationType(options);
		});
		
		client.onNotification(DecorationsRangesDidChange.type, (params) => {
			let editor = Window.visibleTextEditors.filter(editor => editor.document.uri.toString() === params.uri)[0];
			if(!editor) return;
			
			
			const options = params.options.map<DecorationOptions>((o) => {
				let r:DecorationOptions = {
					range: new Range(
						new Position(o.range.start.line, o.range.start.character),
						new Position(o.range.end.line, o.range.end.character)
					),
				};
				
				if(o.hoverMessage) r.hoverMessage = o.hoverMessage;
				if(o.renderOptions) r.renderOptions = o.renderOptions;
				
				return r;
			});
			
			editor.setDecorations(decorationType, options);
		});
		
		client.start();
		
		return client;
	}
	
	function didOpenTextDocument(document:TextDocument): void {
		// We are only interested in language mode text
		if(document.languageId !== 'sc2dataspace' || (document.uri.scheme !== 'file' && document.uri.scheme !== 'untitled')) {
			return;
		}
		
		let folder = Workspace.getWorkspaceFolder(document.uri);
		// Files outside a folder can't be handled. This might depend on the language.
		// Single file languages like JSON might handle files outside the workspace folders.
		if (!folder) {
			if(!defaultClient) defaultClient = createClient();
			return;
		}
		
		//let editor = Window.visibleTextEditors.filter(editor => editor.document.uri === document.uri)[0];
		//editor.setDecorations(decorationType, rangesOrOptions);
		
		// If we have nested workspace folders we only start a server on the outer most workspace folder.
		folder = getOuterMostWorkspaceFolder(folder);

		if(!clients.has(folder.uri.toString())) {
			clients.set(folder.uri.toString(), createClient(folder));
		}
	}
	
	Workspace.onDidOpenTextDocument(didOpenTextDocument);
	Workspace.textDocuments.forEach(didOpenTextDocument);
	Workspace.onDidChangeWorkspaceFolders((event) => {
		for (const folder  of event.removed) {
			const client = clients.get(folder.uri.toString());
			if (client) {
				clients.delete(folder.uri.toString());
				client.stop();
			}
		}
	});
}

export function deactivate(): Promise<void> {
	const promises: Promise<void>[] = [];
	if (defaultClient) {
		promises.push(defaultClient.stop());
	}
	for (const client of clients.values()) {
		promises.push(client.stop());
	}
	return Promise.all(promises).then(() => undefined);
}
