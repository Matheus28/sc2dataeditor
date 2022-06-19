import { assert } from 'console';
import * as React from 'react';
import { Alert, Badge, Form } from 'react-bootstrap';
import { createFilter } from 'react-select';
import Select from "react-select";
import { CatalogEntry } from '../../worker';
import { getEntryType, setEntryType } from '../../worker_client';
import { CatalogTypesInstance } from '../../lib/game_data';


interface Props {
	entry:CatalogEntry;
	
	value:string|undefined;
	onLoad:(v:string|undefined)=>void;
	onChange:(v:string)=>void;
}

interface SelectOption {
	value:string;
	label:React.ReactNode;
}

export default function(props:Props){
	const [isLoading, setLoading] = React.useState(true);
	
	React.useEffect(() => {
		let abort = false;
		
		setLoading(true);
		getEntryType(props.entry).then((v) => {
			if(abort) return;
			
			setLoading(false);
			props.onLoad(v);
		});
		
		return () => { abort = true; };
	}, [props.entry])
	
	const options = React.useMemo(() => {
		let arr = Object.keys(CatalogTypesInstance[props.entry.catalog]);
		
		return arr.map((v):SelectOption => {
			return {
				value: v,
				label: v,
			};
		});
	}, [props.entry.catalog]);
	
	let selectedOption = isLoading || props.value === undefined ? null : options.filter(v => v.value == props.value)[0];
	if(selectedOption === undefined) selectedOption = null;
	
	return <Select
		placeholder="Type"
		isLoading={isLoading}
		value={selectedOption}
		options={options}
		isClearable={false}
		onChange={(option) => {
			assert(option != null);
			if(option == null) return;
			
			setEntryType(props.entry, option.value);
			props.onChange(option.value);
		}}
	/>;
}
