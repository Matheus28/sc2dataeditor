import * as React from 'react';
import { Form } from 'react-bootstrap';
import { CatalogEntry, CatalogField, ValueSource } from '../../worker';
import { getFieldValue, setFieldValue } from '../../worker_client';
import useDeepCompareEffect from "use-deep-compare-effect";
import { valueSourceToClassName } from './utils';

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

type SubElements = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

interface ControlProps {
	className?:string;
	disabled:boolean;
	value:string;
	onChange:React.ChangeEventHandler<SubElements>;
	isInvalid:boolean;
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
	const ref = React.useRef<SubElements>();
	
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
	
	let isValid:boolean;
	if(isDisabled){
		isValid = true;
	}else{
		if(props.isValid != null && !props.isValid(value)){
			isValid = false;
		}else if(ref.current && !ref.current.validity.valid){
			isValid = false;
		}else{
			isValid = true;
		}
	}
	
	const extraProps:ControlProps = {
		className: props.control.props.className||"",
		disabled: isDisabled,
		value: value,
		isInvalid: !isValid,
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
	
	if(source !== undefined) extraProps.className += " entry-field-value";
	if(source !== undefined) extraProps.className += " " + valueSourceToClassName(source);
	
	return React.cloneElement<P>(props.control, {...extraProps as any, ref}); // FIXME: what is this type bug?
};
