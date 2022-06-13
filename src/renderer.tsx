import assert from 'assert';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

console.log("hello");

const mainElement = document.getElementById("main");
assert(mainElement);
const root = ReactDOM.createRoot(mainElement);

root.render(<h1>Hello, world!</h1>);


const saveCallbacks = new Map<()=>void, number>();
function useSaveCallback(cb:()=>void){
	React.useEffect(() => {
		saveCallbacks.set(cb, (saveCallbacks.get(cb) || 0) + 1);
		return () => {
			let refCount = saveCallbacks.get(cb);
			assert(refCount !== undefined);
			
			--refCount;
			
			if(refCount == 0){
				saveCallbacks.delete(cb);
			}else{
				saveCallbacks.set(cb, refCount);
			}
		};
	});
}

function runSave(){
	for(let [k, _] of saveCallbacks){
		k();
	}
}
