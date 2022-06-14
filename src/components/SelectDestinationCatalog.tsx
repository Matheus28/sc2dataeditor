import assert from 'assert';
import * as React from 'react';
import { FloatingLabel } from 'react-bootstrap';
import Select from "react-select/creatable";
import { getCatalogList, setDestinationCatalog } from '../worker_client';

type SelectOption = { value:string; label:string; };

function makeOption(value:string){
	return {value, label: value};
}

export default function(){
	const [value, setValue] = React.useState<SelectOption|null>(null);
	const valueRef = React.useRef<typeof value>(null);
	const [catalogData, setCatalogData] = React.useState<undefined|Awaited<ReturnType<typeof getCatalogList>>>(undefined);
	
	valueRef.current = value;
	
	const options = React.useMemo(() => {
		if(!catalogData) return undefined;
		
		return catalogData.map(makeOption);
	}, [catalogData])
	
	
	React.useEffect(() => {
		let abort = false;
		
		getCatalogList().then((data) => {
			if(abort) return;
			setCatalogData(data);
			if(valueRef.current === null && data.length > 0){
				setValue(makeOption(data[0]));
			}
		});
		
		return () => { abort = true; };
	}, []);
	
	return <>
		<Select 
			isLoading={catalogData === undefined}
			isClearable={false}
			allowCreateWhileLoading={false}
			placeholder="Catalog"
			options={options}
			value={value}
			
			onChange={(newValue) => {
				if(newValue == null) return;
				
				console.log("select " + newValue.value);
				setDestinationCatalog(newValue.value);
				setValue(newValue);
			}}
			
			onCreateOption={(inputValue) => {
				const newOption = makeOption(inputValue);
				
				setValue(newOption);
				setCatalogData(undefined);
				setDestinationCatalog(newOption.value).then(getCatalogList).then(setCatalogData);
			}}
			
			getOptionLabel={(v) => v.label}
			getOptionValue={(v) => v.value}
			getNewOptionData={(inputValue) => {
				return {value:inputValue, label: `Creating catalog "${inputValue}"...`}
			}}
			
			isValidNewOption={(inputValue) => {
				return /^[a-z0-9\-]+(\/[a-z0-9\-]+)*$/i.test(inputValue);
			}}
		/>
	</>;
}
