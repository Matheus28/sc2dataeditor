import assert from "assert";
import { CatalogEntry, CatalogField, Message, MessageResponse } from "./worker";

const worker = new Worker("./out/worker_wrapper.js");

let nextMessageID:number = 0;
const pendingRequests = new Map<number, [(v:any)=>void, (v:any)=>void]>();

export function ping():Promise<void> {
	return sendMessage("ping", arguments);
}

export function getFieldValue(_field:CatalogField):Promise<string|undefined>{
	return sendMessage("getFieldValue", arguments);
}

export function save():Promise<void> {
	return sendMessage("save", arguments);
}

export function getCatalogList():Promise<string[]> {
	return sendMessage("getCatalogList", arguments);
}

export function setDestinationCatalog(_value:string):Promise<void> {
	return sendMessage("setDestinationCatalog", arguments);
}

export function entryExists(_entry:CatalogEntry):Promise<boolean> {
	return sendMessage("entryExists", arguments);
}

export function getEntriesOfTypes(_types:string[], _parent?:string):Promise<string[]> {
	return sendMessage("getEntriesOfTypes", arguments);
}

export function getStringLink(_link:string):Promise<string|undefined> {
	return sendMessage("getStringLink", arguments);
}

export function setEntryParent(_entry:CatalogEntry, _value:string):Promise<void> {
	return sendMessage("setEntryParent", arguments);
}

function sendMessage<K extends keyof Message["data"]>(key:K, params:Message["data"][K]|IArguments){
	return new Promise<any>((resolve, reject) => {
		const id = nextMessageID++;
		
		pendingRequests.set(id, [resolve, reject]);
		
		worker.postMessage(<Message>{
			id,
			data: { [key]: [...params] } as any // this part is unchecked... but it'll work, trust :)
		});
	});
}

worker.onmessage = function(e){
	const msg:MessageResponse = e.data;
	const res = pendingRequests.get(msg.id);
	assert(res);
	
	const [resolve, reject] = res;
	
	if('error' in msg){
		reject(msg.error);
	}else{
		resolve(msg.value);
	}
}
