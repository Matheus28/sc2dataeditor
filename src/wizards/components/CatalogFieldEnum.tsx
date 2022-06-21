import * as React from 'react';
import { Form } from 'react-bootstrap';
import { EnumType } from '../../lib/game_data';
import { mapObjectToArray } from '../../lib/utils';
import { CatalogField } from '../../worker';
import CatalogFieldSimple from './CatalogFieldSimple';

interface Props {
	field:CatalogField;
	
	enumType:EnumType;
}

export default function(props:Props){
	return <CatalogFieldSimple
		field={props.field}
		default={props.enumType.reverseValues[0]}
		control={<Form.Select>
			{mapObjectToArray(props.enumType.values, (value, index) => {
				return <option key={index} value={value}>{value}</option>;
			})}
		</Form.Select>}
	/>;
};
