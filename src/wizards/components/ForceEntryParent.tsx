import * as React from 'react';
import { Alert } from 'react-bootstrap';
import { CatalogEntry } from '../../worker';
import { getEntryParent, setEntryParent } from '../../worker_client';
import useDeepCompareEffect from "use-deep-compare-effect";

interface Props {
	entry:CatalogEntry;
	parent:string;
}

export default function(props:Props){
	const [value, setValue] = React.useState<string|undefined>(undefined);
	
	// Try to load field from dataspace
	useDeepCompareEffect(() => {
		if(props.entry.id.length == 0){
			setValue(undefined);
			return;
		}
		
		let abort = false;
		
		getEntryParent(props.entry).then((v) => {
			if(abort) return;
			setValue(v);
		});
		
		return function(){
			abort = true;
		}
	}, [props.entry]);
	
	
	return <>
		{value !== undefined && value != props.parent && <Alert variant="danger">The entry {props.entry.id} (props.entry.type) exists but has a mismatching parent: BadBadBad (expected {props.parent}). You're likely editing an object not meant for this wizard.</Alert>}
	</>
}
