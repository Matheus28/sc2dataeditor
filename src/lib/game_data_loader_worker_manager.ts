import assert from "assert";
import { cpus } from "os";
import * as loader from "./game_data_loader";

// Only valid for non-workers:
let maxWorkers = Math.max(1, Math.min(16, cpus().length));
let idleWorkers:WorkerWrapper[] = [];
let allWorkers = new Set<WorkerWrapper>();

// Exists in non-worker & worker:
let amILoaderWorker = false;
let nextID = 0;
let pendingResolves = new Map<number, (v:any)=>void>();


export function youAreALoaderWorker(){
	amILoaderWorker = true;
	
	assert(!onmessage);
	onmessage = (e) => {
		(async function(){
			let input:Message = e.data;
			if(input.type == "run"){
				let result = await (loader as any)[e.data.name].apply(null, e.data.args);
				let output:Message = {
					type: "result",
					id: input.id,
					data: result,
				};
				
				postMessage(output);
			}else if(input.type == "result"){
				resolveResult(input.id, input.data);
			}
			
		})();
	}
}

function resolveResult(id:number, data:any){
	let vv = pendingResolves.get(id);
	assert(vv !== undefined, "Result for an unknown request");
	pendingResolves.delete(id);
	vv(data);
}

export type Message = {
	type:"run";
	id:number;
	name:string;
	args:any[];
} | {
	type:"result";
	id:number;
	data:any;
}

interface WorkerWrapper {
	request(funcName:string, args:any[]):Promise<any>;
	keepAlive():void; // Keeps this worker alive until at least another request, then restart idle timers
}

async function grabWorkerAsWorker():Promise<WorkerWrapper> {
	assert(amILoaderWorker);
	return {
		request(name:string, args:any[]):Promise<any> {
			let id = nextID++;
			return new Promise((resolve) => {
				let msg:Message = {
					type: "run",
					id,
					name,
					args,
				};
				
				postMessage(msg);
				
				pendingResolves.set(id, resolve);
			});
		},
		
		keepAlive(){
			
		},
	}
}

function grabWorkerAsMainOrFail():WorkerWrapper|null {
	assert(!amILoaderWorker);
	if(allWorkers.size >= maxWorkers && idleWorkers.length == 0) return null
	
	let ret = idleWorkers.pop();
	if(ret === undefined) return null;
	
	return newWorkerAsMain();
}

function newWorkerAsMain():WorkerWrapper {
	let worker = new Worker(__dirname + "/game_data_loader_worker_wrapper.js");
	let idleTimer:NodeJS.Timeout|null = null;
	let busyAmount = 0;
	
	function busy(){
		if(busyAmount == 0){
			idleWorkers = idleWorkers.filter(w => w != self);
		}
		
		++busyAmount;
		
		if(idleTimer != null){
			clearTimeout(idleTimer);
			idleTimer = null;
		}
	}
	
	function idle(){
		--busyAmount;
		assert(busyAmount >= 0);
		if(busyAmount == 0){
			// If anyone is waiting for an available worker
			let wantsMe = workerAvailableQueue.pop();
			if(wantsMe !== undefined){
				wantsMe(self);
				return;
			}
			
			idleWorkers.push(self);
			assert(idleTimer == null);
			idleTimer = setTimeout(() => {
				allWorkers.delete(self);
				idleWorkers = idleWorkers.filter(w => w != self);
				worker.terminate();
			}, 2000);
		}
	}
	
	worker.onmessage = function(e){
		(async function(){
			let input:Message = e.data;
			
			// Worker wants to delegate some work to a different worker
			if(input.type == "run"){
				busy();
				
				let result:any;
				
				let subworker = grabWorkerAsMainOrFail();
				if(subworker == null){
					// Well, then distribute to a random worker and hope they're available
					let arr = Array.from(allWorkers);
					subworker = arr[Math.floor(arr.length * Math.random())];
					assert(subworker);
				}
				
				result = await subworker.request(input.name, input.args);
				
				
				let output:Message = {
					type: "result",
					id: input.id,
					data: result,
				};
				
				worker.postMessage(output);
				
				idle();
			}else if(input.type == "result"){
				resolveResult(input.id, input.data);
			}
		})();
	}
	
	let self = {
		request(name:string, args:any[]):Promise<any> {
			busy();
			
			let id = nextID++;
			return new Promise((resolve) => {
				let msg:Message = {
					type: "run",
					id,
					name,
					args,
				};
				
				worker.postMessage(msg);
				
				pendingResolves.set(id, (result) => {
					resolve(result);
					idle();
				});
			});
		},
		
		keepAlive(){
			if(idleTimer != null){
				clearTimeout(idleTimer);
				idleTimer = null;
			}
		},
	}
	
	allWorkers.add(self);
	
	return self;
}

let workerAvailableQueue:((w:WorkerWrapper) => void)[] = [];

function waitUntilWorkerBecomesAvailable():Promise<WorkerWrapper> {
	assert(!amILoaderWorker);
	
	{
		let ret = idleWorkers.pop();
		if(ret !== undefined){
			ret.keepAlive();
			return Promise.resolve(ret);
		}
	}
	
	if(allWorkers.size < maxWorkers){
		return Promise.resolve(newWorkerAsMain());
	}
	
	let promise = new Promise<WorkerWrapper>((resolve) => {
		workerAvailableQueue.push(resolve);
	});
	
	return promise;
}

export async function runInWorker<T extends keyof typeof import("./game_data_loader")>(funcName:T, ...args:Parameters<(typeof import("./game_data_loader"))[T]>):Promise<Awaited<ReturnType<(typeof import("./game_data_loader"))[T]>>> {
	if(maxWorkers == 0) throw new Error("Can't spawn workers");
	
	let worker = await (amILoaderWorker ? grabWorkerAsWorker() : waitUntilWorkerBecomesAvailable());
	
	return await worker.request(funcName, args);
}
