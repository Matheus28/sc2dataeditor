import * as React from 'react';
import { Form } from 'react-bootstrap';
import { CatalogEntry, CatalogField, ValueSource } from '../../worker';
import { getFieldValue, setFieldValue } from '../../worker_client';
import useDeepCompareEffect from "use-deep-compare-effect";
import { valueSourceToClassName } from './utils';

type SubElements = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

interface ControlProps {
	className?:string;
	disabled:boolean;
	value:string|boolean;
	checked:boolean;
	onChange:React.ChangeEventHandler<SubElements>;
	isInvalid:boolean;
}

export default function<
	P extends ControlProps
>(props:{
	field:CatalogField;
	default:string|number|boolean;
	isValid?:(v:string)=>boolean;
	control:React.ReactElement<P>;
}){
	const defaultValueAsString = typeof props.default == "boolean" ? (props.default?"1":"0") : props.default.toString();
	const [value, setValue] = React.useState<string>(defaultValueAsString);
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
				setValue(defaultValueAsString);
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
		value: (typeof props.default == "boolean" ? (value!="0") : value),
		checked: (typeof props.default == "boolean" ? (value!="0") : false),
		isInvalid: !isValid,
		onChange: (e) => {
			let str = e.target.value;
			if(e.target instanceof HTMLInputElement){
				if(e.target.type == "checkbox"){
					str = e.target.checked ? "1" : "0";
				}
			}
			
			setValue(str);
			setSource(ValueSource.Self);
			
			if(e.target.validity.valid){
				if(props.isValid == null || props.isValid(str)){
					setFieldValue(props.field, str);
				}
			}
		}
	};
	
	if(source !== undefined) extraProps.className += " entry-field-value";
	if(source !== undefined) extraProps.className += " " + valueSourceToClassName(source);
	
	return React.cloneElement<P>(props.control, {...extraProps as any, ref}); // FIXME: what is this type bug?
};
