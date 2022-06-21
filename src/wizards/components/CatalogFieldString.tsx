import * as React from 'react';
import { Form } from 'react-bootstrap';
import { CatalogField } from '../../worker';
import CatalogFieldSimple from './CatalogFieldSimple';

interface Props {
	field:CatalogField;
	
	default:string;
	
	onLoad?:undefined|((v:string)=>void);
	onChange?:undefined|((v:string)=>void);
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
