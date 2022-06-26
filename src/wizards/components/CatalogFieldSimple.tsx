import * as React from 'react';
import { Form, Stack } from 'react-bootstrap';
import { getFieldValue, setFieldValue } from '../../worker_client';
import useDeepCompareEffect from "use-deep-compare-effect";
import { valueSourceToClassName } from './utils';
import assert from 'assert';
import { CatalogField, ValueSource } from '../../lib/game_data_access';
import { resolveTokens, unresolveTokens } from '../../lib/utils';

type SubElements = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

interface ControlProps {
	className?:string;
	disabled:boolean;
	value:string|boolean;
	checked:boolean;
	onChange:React.ChangeEventHandler<SubElements>;
	onBlur:React.FocusEventHandler<SubElements>;
	isInvalid:boolean;
}

export default function<
	P extends ControlProps
>(props:{
	field:CatalogField;
	default:string|number|boolean;
	isValid?:(v:string)=>boolean;
	control:React.ReactElement<P>;
	
	onLoad?:undefined|((unresolved:string, resolved:string, source:ValueSource)=>void);
	onChange?:undefined|((unresolved:string, resolved:string, source:ValueSource)=>void);
}){
	const defaultValueAsString = typeof props.default == "boolean" ? (props.default?"1":"0") : props.default.toString();
	
	const [value, setValue] = React.useState<string>(defaultValueAsString);
	const [valueOnBlur, setValueOnBlur] = React.useState<string|undefined>(undefined);
	const [tokens, setTokens] = React.useState<Record<string,string>>({});
	const [source, setSource] = React.useState<ValueSource|undefined>();
	const [isDisabled, setDisabled] = React.useState(true);
	
	const ref = React.useRef<SubElements>();
	const fieldValueChangeRef = React.useRef<{}>({});
	
	// Try to load field from dataspace
	useDeepCompareEffect(() => {
		// Reset every state here
		setValue(defaultValueAsString);
		setValueOnBlur(undefined);
		setTokens({});
		setSource(undefined);
		setDisabled(true);
		
		fieldValueChangeRef.current = {};
		
		if(props.field.entry.id.length == 0) return;
		
		let abort = false;
		
		getFieldValue(props.field).then((v) => {
			if(abort) return;
			
			setDisabled(false);
			if(v === undefined){
				assert(defaultValueAsString.indexOf("##") == -1); // Can't resolve it without tokens
				v = {
					value: defaultValueAsString,
					source: ValueSource.Default,
					tokens: {},
				};
			}
			
			let unresolved = unresolveTokens(v.value, v.tokens);
			let resolved = resolveTokens(v.value, v.tokens);
			setValue(unresolved);
			setSource(v.source);
			setTokens(v.tokens);
			
			if(props.onLoad) props.onLoad(v.value, resolved, v.source);
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
	
	const doValueOnBlur = (x:string) => {
		if(ref.current && document.activeElement === ref.current){
			setValueOnBlur(x);
		}else{
			setValueOnBlur(undefined);
			setValue(x);
		}
	};
	
	const extraProps:ControlProps = {
		className: props.control.props.className||"",
		disabled: isDisabled,
		value: (typeof props.default == "boolean" ? (value!="0") : value),
		checked: (typeof props.default == "boolean" ? (value!="0") : false),
		isInvalid: !isValid,
		onBlur: () => {
			if(valueOnBlur !== undefined){
				setValue(valueOnBlur);
				setValueOnBlur(undefined);
			}
		},
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
					let refValue = {};
					fieldValueChangeRef.current = refValue;
					setFieldValue(props.field, str).then(v => {
						if(fieldValueChangeRef.current != refValue) return;
						
						const onBlurValue = v.unresolvedValue;
						
						let resolved = resolveTokens(str, v.tokens);
						
						setTokens(v.tokens);
						doValueOnBlur(onBlurValue);
						
						if(props.onChange) props.onChange(str, resolved, v.source);
					});
				}
			}
		}
	};
	
	if(source !== undefined) extraProps.className += " entry-field-value";
	if(source !== undefined) extraProps.className += " " + valueSourceToClassName(source);
	
	let elem = React.cloneElement<P>(props.control, {...extraProps as any, ref}); // FIXME: what is this type bug?
	
	const resolvedValue = resolveTokens(value, tokens);
	
	return <>
		{elem}
		{value !== resolvedValue && <Form.Text muted>{resolvedValue}</Form.Text>}
	</>
};
