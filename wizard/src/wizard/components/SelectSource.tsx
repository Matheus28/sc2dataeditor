import assert from 'assert';
import * as React from 'react';
import Select from "react-select";
import { getSourceList } from '../worker_client';


const ThisSource = "*";
type ThisSource = typeof ThisSource;

type SelectOption = { value:string|ThisSource; label:string; };

function makeOption(value:string|null):SelectOption {
	if(value == null){
		return {value: ThisSource, label: "This map" };
	}
	
	return {value, label: value};
}

interface Props {
	// string = a source
	// null = this map
	// undefined = any
	value?:string|null|undefined;
	onChange?:(x:string|null|undefined)=>void;
}

export default function(props:Props){
	const [value, setValue] = React.useState<SelectOption|null>(null);
	const [sources, setSources] = React.useState<undefined|Awaited<ReturnType<typeof getSourceList>>>(undefined);
	
	const options = React.useMemo(() => {
		if(!sources) return undefined;
		
		return ([null] as (string|null)[]).concat(sources).map(makeOption);
	}, [sources])
	
	if('value' in props){
		if(props.value === undefined){
			if(value != null){
				setValue(null);
			}
		}else if(options !== undefined){
			let desired = props.value === null ? ThisSource : props.value;
			if(value == null || value.value != desired){
				let v = options.filter(v => v.value === desired)[0];
				if(v !== undefined) setValue(v);
			}
		}
	}
	
	React.useEffect(() => {
		let abort = false;
		
		getSourceList().then((data) => {
			if(abort) return;
			setSources(data);
		});
		
		return () => { abort = true; };
	}, []);
	
	return <>
		<Select<SelectOption> 
			isLoading={sources === undefined}
			isClearable={true}
			placeholder="Source"
			options={options}
			value={value}
			
			onChange={(newValue) => {
				setValue(newValue);
				if(props.onChange){
					if(newValue == null){
						props.onChange(undefined);
					}else{
						props.onChange(newValue.value == ThisSource ? null : newValue.value);
					}
				}
			}}
			
			getOptionLabel={(v) => v.label}
			getOptionValue={(v) => v.value}
		/>
	</>;
}
