import * as React from 'react';
import { Form } from 'react-bootstrap';
import { CatalogField, ValueSource } from '../../lib/game_data_access';
import CatalogFieldSimple from './CatalogFieldSimple';

interface Props {
	field:CatalogField;
	
	default:string;
	
	onLoad?:undefined|((unresolved:string, resolved:string, source:ValueSource)=>void);
	onChange?:undefined|((unresolved:string, resolved:string, source:ValueSource)=>void);
}

export default function(props:Props){
	return <CatalogFieldSimple
		field={props.field}
		default={props.default}
		control={<Form.Control/>}
		onLoad={props.onLoad}
		onChange={props.onChange}
	/>;
};
