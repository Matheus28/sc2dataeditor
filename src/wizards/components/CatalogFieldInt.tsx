import * as React from 'react';
import { Form } from 'react-bootstrap';
import { CatalogField } from '../../worker';
import CatalogFieldSimple from './CatalogFieldSimple';

interface Props {
	field:CatalogField;
	
	default:number;
	min?:number|undefined;
	max?:number|undefined;
}

export default function(props:Props){
	return <CatalogFieldSimple
		field={props.field}
		default={props.default}
		isValid={(v) => /^[0-9]+$/.test(v)}
		control={<Form.Control
			type="number"
			min={props.min}
			max={props.max}
			step={1}
		/>}
	/>;
};
