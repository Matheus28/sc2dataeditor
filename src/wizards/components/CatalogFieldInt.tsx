import * as React from 'react';
import { Form } from 'react-bootstrap';
import { CatalogEntry, CatalogField, ValueSource } from '../../worker';
import { getFieldValue, setFieldValue } from '../../worker_client';
import useDeepCompareEffect from "use-deep-compare-effect";

interface Props {
	field:CatalogField;
	
	default:number;
	min?:number;
	max?:number;
}

export default function(props:Props){
	const [value, setValue] = React.useState<string>(props.default.toString());
	const [source, setSource] = React.useState<ValueSource|undefined>();
	const [isDisabled, setDisabled] = React.useState(true);
	
	// Try to load field from dataspace
	useDeepCompareEffect(() => {
		setDisabled(true);
		setSource(undefined);
		
		if(props.field.entry.id.length == 0) return;
		
		let abort = false;
		
		getFieldValue(props.field).then((v) => {
			if(abort) return;
			
			setDisabled(false);
			if(typeof v != "undefined"){
				setValue(v.value);
				setSource(v.source);
			}else{
				setValue(props.default.toString());
				setSource(ValueSource.Default);
			}
		});
		
		return function(){
			setDisabled(false);
			abort = true;
		}
	}, [props.field]);
	
	return <Form.Control
		type="number"
		disabled={isDisabled}
		min={props.min}
		max={props.max}
		step={0}
		value={value}
		className={source}
		onChange={(e) => {
			setValue(e.target.value);
			setSource(ValueSource.Self);
			if(e.target.validity.valid){
				let v = parseInt(e.target.value, 10);
				if(isFinite(v)){
					setFieldValue(props.field, e.target.value);
				}
			}
		}}
	/>;
};
