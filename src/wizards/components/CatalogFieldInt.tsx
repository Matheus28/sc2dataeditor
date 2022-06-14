import * as React from 'react';
import { Form } from 'react-bootstrap';
import { CatalogEntry, CatalogField } from '../../worker';
import { getFieldValue, setFieldValue } from '../../worker_client';
import useDeepCompareEffect from "use-deep-compare-effect";

interface Props {
	field:CatalogField;
	
	default:number;
	min?:number;
	max?:number;
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
				setValue(parseInt(v, 10));
			}else{
				setValue(props.default);
			}
		});
		
		return function(){
			setDisabled(false);
			abort = true;
		}
	}, [props.field]);
	
	return <>
		<Form.Control
			required
			type="number"
			disabled={isDisabled}
			min={props.min}
			max={props.max}
			value={value}
			onChange={(e) => {
				if(!e.target.validity.valid) return;
				let v = parseInt(e.target.value, 10);
				if(isNaN(v)) return;
				
				setValue(v);
				setFieldValue(props.field, v.toString());
			}}
		/>
	</>;
};
