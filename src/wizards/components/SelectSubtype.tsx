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
	onValidChange:(x:boolean)=>void;
}

interface SelectOption {
	value:string;
	label:React.ReactNode;
}

export default function(props:Props){
	const [value, setValue] = React.useState<string|undefined>();
	const [isLoading, setLoading] = React.useState(true);
	
	React.useEffect(() => {
		let abort = false;
		
		setLoading(true);
		setValue(undefined);
		props.onValidChange(false);
		
		getEntryType(props.entry).then((v) => {
			if(abort) return;
			
			setLoading(false);
			setValue(v);
			if(v !== undefined) props.onValidChange(true);
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
	
	const selectedOption = value === undefined ? null : options.filter(v => v.value == value)[0];
	assert(selectedOption !== undefined);
	
	return <Form.Group className="mb-3"><Select
		placeholder="Type"
		isLoading={isLoading}
		value={selectedOption}
		options={options}
		isClearable={false}
		onChange={(option) => {
			if(option != null){
				setValue(option.value);
				setEntryType(props.entry, option.value);
				props.onValidChange(true);
			}else{
				setValue(undefined);
				props.onValidChange(false);
			}
		}}
	/></Form.Group>;
}
