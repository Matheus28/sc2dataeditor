import * as React from 'react';
import { Form } from 'react-bootstrap';
import { CatalogEntry, CatalogField } from '../../worker';
import { getEntries, getEntry, getFieldValue, resolveTokens, setFieldValue } from '../../worker_client';
import useDeepCompareEffect from "use-deep-compare-effect";
import { CatalogName } from '../../lib/game_data';
import SelectEntry, { makeSelectOption, SelectOption } from './SelectEntry';

interface Props {
	field:CatalogField;
	catalog:CatalogName;
	
	default:string;
}

export default function(props:Props){
	const [value, setValue] = React.useState<SelectOption|null>(null);
	const [isLoading, setLoading] = React.useState(true);
	
	React.useEffect(() => {
		setLoading(true);
		
		let abort = false;
		
		getFieldValue(props.field).then(async (v) => {
			if(abort) return;
			
			if(typeof v == "undefined"){
				v = props.default || "";
			}
			
			if(v === ""){
				setLoading(false);
				setValue(null);
				return;
			}
			
			let entry = await getEntry({
				id: await resolveTokens(props.field.entry, v),
				catalog: props.catalog,
			})
			
			if(abort) return;
			console.log(props, entry);
			
			setLoading(false);
			setValue(makeSelectOption({
				id: v,
				catalog: props.catalog,
				dataspace: entry !== undefined ? entry.dataspace : undefined,
				source: entry !== undefined && entry.source !== undefined ? entry.source : null,
				exists: entry !== undefined,
			}, true))
		});
		
		return function(){
			abort = true;
		}
	}, [props.catalog, props.field]);
	
	const onChange = (newValue:SelectOption|null) => {
		setValue(newValue);
	};
	
	return <SelectEntry isLoading={isLoading} catalog={props.catalog} value={value} onChange={onChange}/>
};
