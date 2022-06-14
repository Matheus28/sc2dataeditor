import assert from 'assert';
import * as React from 'react';
import { FloatingLabel } from 'react-bootstrap';
import Select from "react-select/creatable";
import { getDataspaceList, setDestinationDataspace } from '../worker_client';

type SelectOption = { value:string; label:string; };

function makeOption(value:string){
	return {value, label: value};
}

export default function(){
	const [value, setValue] = React.useState<SelectOption|null>(null);
	const valueRef = React.useRef<typeof value>(null);
	const [dataspaces, setDataspaces] = React.useState<undefined|Awaited<ReturnType<typeof getDataspaceList>>>(undefined);
	
	valueRef.current = value;
	
	const options = React.useMemo(() => {
		if(!dataspaces) return undefined;
		
		return dataspaces.map(makeOption);
	}, [dataspaces])
	
	
	React.useEffect(() => {
		let abort = false;
		
		getDataspaceList().then((data) => {
			if(abort) return;
			setDataspaces(data);
			if(valueRef.current === null && data.length > 0){
				setValue(makeOption(data[0]));
			}
		});
		
		return () => { abort = true; };
	}, []);
	
	return <>
		<Select 
			isLoading={dataspaces === undefined}
			isClearable={false}
			allowCreateWhileLoading={false}
			placeholder="Dataspace"
			options={options}
			value={value}
			
			onChange={(newValue) => {
				if(newValue == null) return;
				
				console.log("select " + newValue.value);
				setDestinationDataspace(newValue.value);
				setValue(newValue);
			}}
			
			onCreateOption={(inputValue) => {
				const newOption = makeOption(inputValue);
				
				setValue(newOption);
				setDataspaces(undefined);
				setDestinationDataspace(newOption.value).then(getDataspaceList).then(setDataspaces);
			}}
			
			getOptionLabel={(v) => v.label}
			getOptionValue={(v) => v.value}
			getNewOptionData={(inputValue) => {
				return {value:inputValue, label: `Creating dataspace "${inputValue}"...`}
			}}
			
			isValidNewOption={(inputValue) => {
				return /^[a-z0-9\-]+(\/[a-z0-9\-]+)*$/i.test(inputValue);
			}}
		/>
	</>;
}
