import * as React from 'react';
import { Form } from 'react-bootstrap';
import { CatalogEntry, CatalogField, ValueSource } from '../../worker';
import { getFieldValue, setFieldValue } from '../../worker_client';
import useDeepCompareEffect from "use-deep-compare-effect";

/*
    htmlSize?: number;
    size?: 'sm' | 'lg';
    plaintext?: boolean;
    readOnly?: boolean;
    disabled?: boolean;
    value?: string | string[] | number;
    onChange?: React.ChangeEventHandler<FormControlElement>;
    type?: string;
    isValid?: boolean;
    isInvalid?: boolean;
*/

interface ControlProps {
	className?:string;
	disabled:boolean;
	value:string;
	onChange:React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;
}

export default function<
	T extends {
		toString:()=>string;
	},
	
	P extends ControlProps
>(props:{
	field:CatalogField;
	default:T;
	isValid?:(v:string)=>boolean;
	control:React.ReactElement<P>;
}){
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
	
	const extraProps:ControlProps = {
		disabled: isDisabled,
		value: value,
		onChange: (e) => {
			setValue(e.target.value);
			setSource(ValueSource.Self);
			if(e.target.validity.valid){
				if(props.isValid == null || props.isValid(e.target.value)){
					setFieldValue(props.field, e.target.value);
				}
			}
		}
	};
	
	if(source !== undefined) extraProps.className = source;
	
	return React.cloneElement<P>(props.control, extraProps as any); // FIXME: what is this type bug?
};
