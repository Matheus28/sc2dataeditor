import * as React from 'react';
import { Form } from 'react-bootstrap';
import { CatalogEntry, CatalogField } from '../../worker';
import { getFieldValue, setFieldValue } from '../../worker_client';
import useDeepCompareEffect from "use-deep-compare-effect";

interface Props {
	field:CatalogField;
	
	default:string;
}

export default function(props:Props){
	const [value, setValue] = React.useState(props.default);
	const [isDisabled, setDisabled] = React.useState(true);
	
	// Try to load field from dataspace
	useDeepCompareEffect(() => {
		setDisabled(true);
		
		if(props.field.entry.id.length == 0) return;
		
		let abort = false;
		
		getFieldValue(props.field).then((v) => {
			if(abort) return;
			
			setDisabled(false);
			if(typeof v != "undefined"){
				setValue(v);
			}else{
				setValue(props.default);
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
			if(!e.target.validity.valid) return;
			
			let v = e.target.value;
			setValue(v);
			setFieldValue(props.field, v.toString());
		}}
	/>;
};
