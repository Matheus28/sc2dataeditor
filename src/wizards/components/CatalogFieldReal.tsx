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
		isValid={(v) => isFinite(parseFloat(v))}
		control={<Form.Control
			type="number"
			min={props.min}
			max={props.max}
			step="any"
			className="entry-field-value-real"
			onScroll={(e) => { e.preventDefault(); }}
		/>}
	/>;
};
