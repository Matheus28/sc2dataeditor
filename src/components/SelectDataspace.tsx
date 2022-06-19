import assert from 'assert';
import * as React from 'react';
import Select from "react-select/creatable";
import { getDataspaceList, setDestinationDataspace } from '../worker_client';

type SelectOption = { value:string; label:string; };

function makeOption(value:string){
	return {value, label: value};
}

interface Props {
	value?:string|undefined;
	onChange?:(x:string|undefined)=>void;
}

export default function(props:Props){
	const [value, setValue] = React.useState<SelectOption|null>(null);
	const [dataspaces, setDataspaces] = React.useState<undefined|Awaited<ReturnType<typeof getDataspaceList>>>(undefined);
	
	const options = React.useMemo(() => {
		if(!dataspaces) return undefined;
		
		return dataspaces.map(makeOption);
	}, [dataspaces])
	
	React.useEffect(() => {
		if('value' in props){
			if(props.value === undefined){
				if(value != null){
					setDestinationDataspace(null);
					setValue(null);
				}
			}else if(options !== undefined){
				let desired = props.value;
				if(value == null || value.value != desired){
					let v = options.filter(v => v.value === desired)[0];
					if(v !== undefined){
						setDestinationDataspace(desired);
						setValue(v);
					}
				}
			}
		}
	}, [props.value, options]);
	
	React.useEffect(() => {
		let abort = false;
		
		getDataspaceList().then((data) => {
			if(abort) return;
			setDataspaces(data);
		});
		
		return () => { abort = true; };
	}, []);
	
	return <>
		<Select 
			isLoading={dataspaces === undefined}
			isClearable={true}
			allowCreateWhileLoading={false}
			placeholder="Dataspace"
			options={options}
			value={value}
			
			onChange={(newValue) => {
				setValue(newValue);
				setDestinationDataspace(newValue ? newValue.value : null);
				if(props.onChange) props.onChange(newValue ? newValue.value : undefined);
			}}
			
			onCreateOption={(inputValue) => {
				const newOption = makeOption(inputValue);
				
				setValue(newOption);
				setDataspaces(undefined);
				setDestinationDataspace(newOption.value).then(getDataspaceList).then(setDataspaces);
				if(props.onChange) props.onChange(newOption.value);
			}}
			
			getOptionLabel={(v) => v.label}
			getOptionValue={(v) => v.value}
			getNewOptionData={(inputValue) => {
				return {value:inputValue, label: `Create dataspace "${inputValue}"...`}
			}}
			
			isValidNewOption={(inputValue) => {
				return /^[a-z0-9\-]+(\/[a-z0-9\-]+)*$/i.test(inputValue);
			}}
		/>
	</>;
}
