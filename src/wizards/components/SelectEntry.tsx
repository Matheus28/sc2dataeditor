import { assert } from 'console';
import * as React from 'react';
import { Alert, Badge, Form } from 'react-bootstrap';
import { createFilter } from 'react-select';
import Select from "react-select/creatable";
import ActualSelect from "react-select";
import { CatalogName } from '../../lib/game_data';
import { getEntries } from '../../worker_client';
import useDeepCompareEffect, { useDeepCompareEffectNoCheck } from 'use-deep-compare-effect';

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
	
	canCreate?:boolean;
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
	const [menuIsOpen, setMenuIsOpen] = React.useState(false);
	
	const canCreate = props.canCreate && props.catalog !== null;
	const placeholder = props.catalog == null ? "Select entry" : "Select " + props.catalog;
	
	const [currentValueIsNew, setCurrentValueIsNew] = React.useState<boolean|undefined>();
	
	let keepSameValueOnOpen:boolean;
	if(props.value == null){
		keepSameValueOnOpen = false;
	}else if(currentValueIsNew === undefined || currentValueIsNew === true){
		keepSameValueOnOpen = true;
	}else{
		keepSameValueOnOpen = false;
	}
	
	const defaultInputValue = props.value && keepSameValueOnOpen ? props.value.value.id : "";
	
	React.useEffect(()=> {
		if(props.value == null){
			setCurrentValueIsNew(false);
			return;
		}
		
		// Keep last value...
		if(!options) return;
		
		let v = false;
		if(canCreate && props.value != null){
			let id = props.value.value.id;
			let catalog = props.value.value.catalog;
			if(!options.some(v => v.value.id == id && v.value.catalog == catalog)){
				v = true;
			}
		}
		
		setCurrentValueIsNew(v);
	}, [props.value, options]);
	
	React.useEffect(() => {
		if(props.value == null) return;
		if((props.catalog != null && props.value.value.catalog !== props.catalog)
		|| (props.source !== undefined && props.value.value.source !== props.source)
		|| (props.dataspace != null && props.value.value.dataspace !== props.dataspace)
		){
			props.onChange(null);
		}
	}, [props.catalog, props.source, props.dataspace, props.parent]);
	
	useDeepCompareEffectNoCheck(() => {
		setOptions(undefined);
		
		let abort = false;
		
		const searchTerm = menuIsOpen ? inputValue : defaultInputValue;
		
		getEntries(props.catalog, props.source, props.dataspace, props.parent, searchTerm, 6).then((res) => {
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
	}, [menuIsOpen ? inputValue : defaultInputValue, props.catalog, props.source, props.dataspace, props.parent]);
	
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
	
	return <Select
		className={props.className||""}
		// This doesn't work because props.value might not be in options...
		// defaultValue={keepSameValueOnOpen ? props.value : null}
		
		value={props.value}
		isLoading={props.isLoading || options === undefined}
		createOptionPosition={keepSameValueOnOpen ? "first" : "last"}
		isClearable={true}
		placeholder={placeholder}
		options={options}
		filterOption={filterOption}
		inputValue={inputValue}
		menuIsOpen={menuIsOpen}
		allowCreateWhileLoading={false}
		onMenuOpen={() => {
			setMenuIsOpen(true);
			setInputValue(defaultInputValue);
		}}
		defaultInputValue={defaultInputValue}
		onMenuClose={() => setMenuIsOpen(false)}
		onChange={props.onChange}
		onCreateOption={(inputValue) => {
			props.onChange(makeSelectOption(makeNewOptionValue(inputValue)));
		}}
		
		getOptionValue={(option) => {
			return option.value.catalog+"::"+option.value.id;
		}}
		
		isValidNewOption={(inputValue) => {
			if(!options) return false;
			if(!canCreate) return false;
			assert(props.catalog != null); // Implied by canCreate
			
			if(!/^[a-z][a-z_0-9@]*$/i.test(inputValue)) return false;
			
			// Can't create if duplicate
			let inputValueLower = inputValue.toLowerCase();
			if(options.some(v => v.value.id.toLowerCase() == inputValueLower)) return false;
			
			return true;
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
