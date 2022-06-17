import { assert } from 'console';
import * as React from 'react';
import { Alert, Badge, Form } from 'react-bootstrap';
import { createFilter } from 'react-select';
import Select from "react-select/creatable";
import { CatalogName } from '../../lib/game_data';
import { getEntries } from '../../worker_client';

export type Value = {
	id:string;
	catalog:CatalogName;
	dataspace:string|undefined;
	source:string|null;
	exists:boolean;
};

export interface SelectOption {
	value:Value;
	label:React.ReactNode;
}

interface Props {
	value:SelectOption|null;
	
	catalog:CatalogName|null;
	source?:string|null|undefined;
	dataspace?:string|undefined;
	parent?:string;
	
	onChange:(v:null|SelectOption)=>void;
}

const filterOption = createFilter<SelectOption>({
	ignoreAccents: false, // Performance
});

export default function(props:Props){
	const [inputValue, setInputValue] = React.useState<string>("");
	const [options, setOptions] = React.useState<SelectOption[]|undefined>(undefined);
	
	const hideDataspace = props.dataspace !== undefined;
	const hideSource = props.source !== undefined;
	const hideCatalog = props.catalog !== null;
	
	const createLabel = (label:string, value:Value) => {
		return <div style={{display: 'flex'}}>
			<span>{label}</span>
			<div style={{display:"inline-block", textAlign: "right", flex: 1}}>
				{!value.exists && <Badge bg="success" className="ms-1 align-text-bottom">New</Badge>}
				{value.catalog && !hideCatalog && <Badge bg="danger" className="ms-1 align-text-bottom">{value.catalog}</Badge>}
				{value.dataspace && !hideDataspace && <Badge bg="warning" className="ms-1 align-text-bottom">{value.dataspace}</Badge>}
				{value.source && !hideSource && <Badge bg="info" className="ms-1 align-text-bottom">{value.source}</Badge>}
			</div>
		</div>;
	};
	
	React.useEffect(() => {
		if(props.value == null) return;
		if(props.value.value.catalog !== props.catalog
		|| props.value.value.source !== props.source
		|| props.value.value.dataspace !== props.dataspace
		){
			props.onChange(null);
		}
	}, [props.catalog, props.source, props.dataspace, props.parent]);
	
	React.useEffect(() => {
		setOptions(undefined);
		
		let abort = false;
		
		getEntries(props.catalog, props.source, props.dataspace, props.parent, inputValue, 6).then((res) => {
			if(abort) return;
			
			let arr2 = res.items.map((value):SelectOption => {
				const catalog = value.catalog !== undefined ? value.catalog : props.catalog;
				assert(catalog != null);
				if(catalog == null) throw new Error("bad assert");
				
				let source = value.source !== undefined ? value.source : props.source;
				if(source === undefined) source = null;
				
				const dataspace = value.dataspace !== undefined ? value.dataspace : props.dataspace;
				
				let value2:Value = {
					id: value.id,
					catalog,
					source,
					dataspace,
					exists: true,
				};
				
				return {
					value: value2,
					label: createLabel(value.id, value2),
				};
			});
			
			setOptions(arr2);
		});
		
		return () => {
			abort = true;
		};
	}, [inputValue, props.catalog, props.source, props.dataspace, props.parent]);
	
	const canCreate = props.catalog !== null;
	
	return <>
		<Form.Group className="mb-3">
			<Select
				value={props.value}
				isLoading={options === undefined}
				placeholder="ID"
				options={options}
				filterOption={filterOption}
				onChange={props.onChange}
				onCreateOption={(inputValue) => {
					if(props.catalog === null) throw new Error("can't create");
					
					let value:Value = {
						id: inputValue,
						catalog: props.catalog,
						source: null,
						dataspace: props.dataspace,
						
						exists: false,
					};
					
					if(props.dataspace !== undefined) value.dataspace = props.dataspace;
					
					let option:SelectOption = {
						value,
						label: createLabel(value.id, value),
					};
					
					props.onChange(option);
				}}
				
				getOptionValue={(option) => {
					return (option.value.catalog||"")+
						(option.value.id||"")+
						(option.value.dataspace||"")+
						(option.value.source||"")
					;
				}}
				
				isValidNewOption={(inputValue) => {
					return canCreate && /^[a-z][a-z_0-9@]*$/i.test(inputValue);
				}}
				
				getNewOptionData={(inputValue) => {
					if(props.catalog === null) throw new Error("can't create");
					
					let value:Value = {
						id: inputValue,
						catalog: props.catalog,
						source: null,
						dataspace: props.dataspace,
						
						exists: false,
					};
					
					if(props.dataspace !== undefined) value.dataspace = props.dataspace;
					
					return {
						value,
						label: createLabel(`Create "${value.id}"...`, value)
					};
				}}
				
				onInputChange={setInputValue}
			/>
		</Form.Group>
	</>;
}
