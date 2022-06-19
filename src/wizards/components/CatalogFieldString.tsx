import * as React from 'react';
import { Form } from 'react-bootstrap';
import { CatalogEntry, CatalogField, ValueSource } from '../../worker';
import { getFieldValue, setFieldValue } from '../../worker_client';
import useDeepCompareEffect from "use-deep-compare-effect";

interface Props {
	field:CatalogField;
	
	default:string;
}

export default function(props:Props){
	const [value, setValue] = React.useState(props.default);
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
				setValue(props.default);
				setSource(ValueSource.Default);
			}
		});
		
		return function(){
			setDisabled(false);
			abort = true;
		}
	}, [props.field]);
	
	return <Form.Control
		required
		disabled={isDisabled}
		value={value}
		onChange={(e) => {
			let v = e.target.value;
			setValue(v);
			setSource(ValueSource.Self);
			
			if(e.target.validity.valid){
				setFieldValue(props.field, v.toString());
			}
		}}
	/>;
};
