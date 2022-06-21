import * as React from 'react';
import { Form } from 'react-bootstrap';
import { CatalogEntry, CatalogField, ValueSource } from '../../worker';
import { getEntries, getEntry, getFieldValue, setFieldValue } from '../../worker_client';
import useDeepCompareEffect from "use-deep-compare-effect";
import { CatalogName } from '../../lib/game_data';
import SelectEntry, { makeSelectOption, SelectOption } from './SelectEntry';
import { resolveTokens, valueSourceToClassName } from './utils';

interface Props {
	field:CatalogField;
	catalog:CatalogName;
	
	default:string;
}

export default function(props:Props){
	const [value, setValue] = React.useState<SelectOption|null>(null);
	const [isLoading, setLoading] = React.useState(true);
	const [source, setSource] = React.useState<ValueSource|undefined>();
	
	React.useEffect(() => {
		setLoading(true);
		setSource(undefined);
		
		let abort = false;
		
		getFieldValue(props.field).then(async (vv) => {
			if(abort) return;
			
			if(typeof vv == "undefined"){
				vv = {
					value: props.default || "",
					source: ValueSource.Default,
					tokens: {},
				}
			}
			
			setSource(vv.source);
			
			if(vv.value === ""){
				setLoading(false);
				setValue(null);
				return;
			}
			
			let resolvedValue = resolveTokens(vv.value, vv.tokens);
			let entry = await getEntry({
				id: resolvedValue,
				catalog: props.catalog,
			})
			
			if(abort) return;
			
			setLoading(false);
			setValue(makeSelectOption({
				id: resolvedValue,
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
		setSource(ValueSource.Self);
	};
	
	let className = "";
	if(source) className += " " + valueSourceToClassName(source);
	if(value && !value.value.exists) className += " is-invalid";
	
	
	return <SelectEntry className={className} isLoading={isLoading} catalog={props.catalog} value={value} onChange={onChange}/>
};
