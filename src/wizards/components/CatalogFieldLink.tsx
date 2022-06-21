import * as React from 'react';
import { Form } from 'react-bootstrap';
import { CatalogEntry, CatalogField, ValueSource } from '../../worker';
import { getEntries, getEntry, getFieldValue, setFieldValue } from '../../worker_client';
import useDeepCompareEffect from "use-deep-compare-effect";
import { CatalogName } from '../../lib/game_data';
import SelectEntry, { makeSelectOption, SelectOption } from './SelectEntry';
import { resolveTokens, unresolveTokens, valueSourceToClassName } from './utils';

interface Props {
	field:CatalogField;
	catalog:CatalogName;
	
	default:string;
}

export default function(props:Props){
	const [value, setValue] = React.useState<SelectOption|null>(null);
	const [isLoading, setLoading] = React.useState(true);
	const [source, setSource] = React.useState<ValueSource|undefined>();
	const [writtenValueIsResolved, setWrittenValueIsResolved] = React.useState(true);
	const [tokens, setTokens] = React.useState<Record<string,string>>({});
	
	const fieldValueChangeRef = React.useRef<{}>({});
	
	React.useEffect(() => {
		setValue(null);
		setLoading(true);
		setSource(undefined);
		setWrittenValueIsResolved(true);
		setTokens({});
		
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
			setWrittenValueIsResolved(resolvedValue === vv.value);
			setTokens(vv.tokens);
			setValue(makeSelectOption({
				id: resolvedValue,
				catalog: props.catalog,
				dataspace: entry !== undefined ? entry.dataspace : undefined,
				source: entry !== undefined && entry.source !== undefined ? entry.source : null,
				exists: entry !== undefined,
			}, true));
		});
		
		return function(){
			abort = true;
		}
	}, [props.catalog, props.field]);
	
	const onChange = (newValue:SelectOption|null) => {
		setValue(newValue);
		setSource(ValueSource.Self);
		
		let tokenValue = {};
		fieldValueChangeRef.current = tokenValue;
		setFieldValue(props.field, newValue ? newValue.value.id : "").then((v) => {
			if(fieldValueChangeRef.current != tokenValue) return;
			
			setTokens(v.tokens);
			setWrittenValueIsResolved(v.writtenValueIsResolved);
		});
	};
	
	const resolvedValue = value ? resolveTokens(value.value.id, tokens) : "";
	const unresolvedValue = value ? unresolveTokens(value.value.id, tokens) : "";
	const valueID = value ? value.value.id : "";
	
	let className = "";
	if(source) className += " " + valueSourceToClassName(source);
	if(value && !value.value.exists) className += " is-invalid";
	
	return <>
		<SelectEntry className={className} isLoading={isLoading} catalog={props.catalog} value={value} onChange={onChange}/>
		{!writtenValueIsResolved && valueID !== unresolvedValue && <Form.Text muted>Stored as {unresolvedValue}</Form.Text>}
	</>;
};
