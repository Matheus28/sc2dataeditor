import * as React from 'react';
import { Form } from 'react-bootstrap';
import { ValueSource } from '../../lib/game_data_access';
import { getStringLink, setStringLink } from '../../worker_client';
import { valueSourceToClassName } from './utils';

type Props = {
	link:string;
	
	default?:string;
	placeholder?:string;
	
	source?:ValueSource;
} & ({
	oneLine:true;
} | {
	oneLine?:false;
	rows?:number;
})

export default function(props:Props){
	const [value, setValue] = React.useState(() => (props.default || "").replace(/<n\s*\/>/gi, '\n'));
	const [isDisabled, setDisabled] = React.useState(false);
	
	// Try to load field from dataspace
	React.useEffect(() => {
		setDisabled(true);
		if(props.link == "") return;
		
		let abort = false;
		
		getStringLink(props.link).then((v) => {
			if(abort) return;
			
			setDisabled(false);
			if(typeof v == "undefined"){
				v = props.default || "";
			}
			
			setValue(v.replace(/<n\s*\/>/gi, '\n'));
		});
		
		return function(){
			setDisabled(false);
			abort = true;
		}
	}, [props.link]);
	
	const sharedProps = {
		value,
		disabled: isDisabled || props.link == "",
		placeholder: props.placeholder,
		className: valueSourceToClassName(props.source),
		onChange(e:{target:{value:string, validity:{valid:boolean}}}){
			if(e.target.validity.valid){
				setValue(e.target.value)
				setStringLink(props.link, e.target.value.replace(/\r?\n/g, "<n/>"));
			}
		},
	};
	
	if(props.oneLine){
		return <Form.Control
			{...sharedProps}
		/>;
	}else{
		return <Form.Control
			{...sharedProps}
			as="textarea"
			rows={typeof props.rows == "undefined" ? 4 : props.rows}
		/>;
	}
};
