import * as React from 'react';
import { Form } from 'react-bootstrap';
import { CatalogEntry, ValueSource } from '../../worker';
import { getEntryComment, setEntryComment } from '../../worker_client';

type Props = {
	entry:CatalogEntry;
}

export default function(props:Props){
	const [value, setValue] = React.useState("");
	const [isDisabled, setDisabled] = React.useState(false);
	
	React.useEffect(() => {
		setDisabled(true);
		
		let abort = false;
		
		getEntryComment(props.entry).then((v) => {
			if(abort) return;
			
			setDisabled(false);
			if(typeof v == "undefined"){
				v = "";
			}
			
			setValue(v);
		});
		
		return function(){
			setDisabled(false);
			abort = true;
		}
	}, [props.entry]);
	
	return <Form.Control
		value={value}
		disabled={isDisabled}
		className={value ? ValueSource.Self : ValueSource.Default}
		onChange={(e) => {
			setValue(e.target.value);
			setEntryComment(props.entry, e.target.value);
		}}
		as="textarea"
		rows={4}
	/>;
};
