import assert from "assert";
import { CatalogEntry, CatalogField, Message, MessageResponse } from "./worker";

const worker = new Worker("./out/worker_wrapper.js");

let nextMessageID:number = 0;
const pendingRequests = new Map<number, [(v:any)=>void, (v:any)=>void]>();

export function getFieldValue(field:CatalogField):Promise<string|undefined>{
	return sendMessage({
		type: "getFieldValue",
		field,
	});
}

export function save():Promise<undefined> {
	return sendMessage({
		type: "save",
	});
}

export function entryExists(entry:CatalogEntry):Promise<boolean> {
	return sendMessage({
		type: "entryExists",
		entry,
	});
}

export function getEntriesOfTypes(types:string[], parent?:string):Promise<string[]> {
	return sendMessage({
		type: "getEntriesOfTypes",
		types,
		parent,
	});
}

export function getStringLink(link:string):Promise<string|undefined> {
	return sendMessage({
		type: "getStringLink",
		link,
	});
}

function sendMessage(req:Message["req"]):Promise<any> {
	return new Promise((resolve, reject) => {
		const id = nextMessageID++;
		
		pendingRequests.set(id, [resolve, reject]);
		
		worker.postMessage(<Message>{
			id,
			req
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
