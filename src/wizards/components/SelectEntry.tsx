import { assert } from 'console';
import * as React from 'react';
import { Alert, Badge, Form } from 'react-bootstrap';
import { createFilter } from 'react-select';
import Select from "react-select/creatable";
import { components } from "react-select";
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

const createLabel = (label:string, value:Value, notExistsAsUnknown?:boolean) => {
	return <div style={{display: 'flex'}}>
		<span>{label}</span>
		<div style={{display:"inline-block", textAlign: "right", flex: 1}}>
			{!value.exists && (
				notExistsAsUnknown
				?
				<Badge bg="danger" className="ms-1 align-text-bottom">Unknown</Badge>
				:
				<Badge bg="success" className="ms-1 align-text-bottom">New</Badge>
			)}
			{value.catalog && <Badge bg="primary" className="ms-1 align-text-bottom">{value.catalog}</Badge>}
			{value.dataspace && <Badge bg="warning" className="ms-1 align-text-bottom">{value.dataspace}</Badge>}
			{value.source && <Badge bg="info" className="ms-1 align-text-bottom">{value.source}</Badge>}
		</div>
	</div>;
};

export function makeSelectOption(value:Value, notExistsAsUnknown?:boolean):SelectOption {
	return {
		value: {
			id: value.id,
			catalog: value.catalog,
			source: value.source,
			dataspace: value.dataspace,
			
			exists: false,
		},
		
		label: createLabel(value.id, value, notExistsAsUnknown),
	};
}

interface Props {
	value:SelectOption|null;
	
	catalog:CatalogName|null;
	source?:string|null|undefined;
	dataspace?:string|undefined;
	parent?:string;
	
	isLoading?:boolean;
	
	onChange:(v:null|SelectOption)=>void;
	
	className?:string|undefined;
}

const filterOption = createFilter<SelectOption>({
	ignoreAccents: false, // Performance
});

export default function(props:Props){
	const [inputValue, setInputValue] = React.useState<string>("");
	const [options, setOptions] = React.useState<SelectOption[]|undefined>(undefined);
	
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
	
	const makeNewOptionValue = (inputValue:string):Value => {
		if(props.catalog === null) throw new Error("can't create");
		return {
			id: inputValue,
			catalog: props.catalog,
			source: null,
			dataspace: props.dataspace,
			
			exists: false,
		};
	};
	
	const placeholder = props.catalog == null ? "Select entry" : "Select " + props.catalog;
	
	return <Select
		className={props.className||""}
		value={props.value}
		isLoading={props.isLoading || options === undefined}
		isClearable={true}
		placeholder={placeholder}
		options={options}
		filterOption={filterOption}
		onChange={props.onChange}
		onCreateOption={(inputValue) => {
			props.onChange(makeSelectOption(makeNewOptionValue(inputValue)));
		}}
		
		getOptionValue={(option) => {
			return option.value.catalog+"::"+option.value.id;
		}}
		
		isValidNewOption={(inputValue) => {
			return canCreate && /^[a-z][a-z_0-9@]*$/i.test(inputValue);
		}}
		
		getNewOptionData={(inputValue) => {
			let value = makeNewOptionValue(inputValue);
			
			return {
				value,
				label: createLabel(`Create "${value.id}"...`, value)
			};
		}}
		
		onInputChange={setInputValue}
		
		styles={{
			control: (base) => {
				return {
					...base,
					backgroundColor: 'var(--falcon-input-bg)',
					borderColor: 'var(--falcon-input-border-color)',
				};
			},
			
			placeholder: (base) => {
				return {
					...base,
					color: 'var(--falcon-input-color)',
				};
			},
			
			dropdownIndicator: (base) => {
				return {
					...base,
					color: 'var(--falcon-input-color)',
				};
			},
			
			clearIndicator: (base) => {
				return {
					...base,
					color: 'var(--falcon-input-color)',
				};
			},
			
			indicatorSeparator: (base) => {
				return {
					...base,
					backgroundColor: 'var(--falcon-input-color)',
				};
			},
		}}
	/>
}
