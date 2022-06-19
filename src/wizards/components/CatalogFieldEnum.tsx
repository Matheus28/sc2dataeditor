import * as React from 'react';
import { Form } from 'react-bootstrap';
import { CatalogField } from '../../worker';
import CatalogFieldSimple from './CatalogFieldSimple';

interface Props {
	field:CatalogField;
	
	values:[string, ...string[]];
}

export default function(props:Props){
	return <CatalogFieldSimple
		field={props.field}
		default={props.values[0]}
		control={<Form.Select>
			{props.values.map(v => <option key={v} value={v}>{v}</option>)}
		</Form.Select>}
	/>;
};
