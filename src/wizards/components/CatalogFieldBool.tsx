import * as React from 'react';
import { Form } from 'react-bootstrap';
import { CatalogField } from '../../worker';
import CatalogFieldSimple from './CatalogFieldSimple';

interface Props {
	field:CatalogField;
	
	default:boolean;
	label?:string;
}

export default function(props:Props){
	return <CatalogFieldSimple
		field={props.field}
		default={props.default}
		control={<Form.Check type="checkbox" label={props.label} />}
	/>;
};
