import assert from 'assert';
import * as React from 'react';
import Select from "react-select";
import { CatalogName, CatalogNameArray } from '../lib/game_data';

type SelectOption = { value:CatalogName; label:string; };

function makeOption(value:CatalogName){
	return {value, label: value};
}

interface Props {
	onChange?:(v:CatalogName|null)=>void;
}

export default function(props:Props){
	const [value, setValue] = React.useState<SelectOption|null>(null);
	
	const options = React.useMemo(():SelectOption[] => {
		return CatalogNameArray.map(makeOption);
	}, CatalogNameArray);
	
	return <>
		<Select 
			placeholder="Catalog"
			options={options}
			value={value}
			
			isClearable={true}
			
			onChange={(newValue) => {
				setValue(newValue);
				if(props.onChange) props.onChange(newValue !== null ? newValue.value : null);
			}}
			
			getOptionLabel={(v) => v.label}
			getOptionValue={(v) => v.value}
		/>
	</>;
}
