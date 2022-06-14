import * as React from 'react';
import { Form } from 'react-bootstrap';
import { getStringLink, setStringLink } from '../../worker_client';

type Props = {
	link:string;
	
	default?:string;
	placeholder?:string;
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
		disabled: isDisabled,
		placeholder: props.placeholder,
		onChange(e:{target:{value:string, validity:{valid:boolean}}}){
			if(e.target.validity.valid){
				setValue(e.target.value)
				setStringLink(props.link, e.target.value.replace(/\r?\n/g, "<n/>"));
			}
		},
	};
	
	return <>
		{
			props.oneLine
			?
			<Form.Control
				{...sharedProps}
			/>
			:
			<Form.Control
				{...sharedProps}
				as="textarea"
				rows={typeof props.rows == "undefined" ? 4 : props.rows}
			/>
		}
	</>;
};
