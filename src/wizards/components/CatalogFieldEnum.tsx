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
	const [extraValue, setExtraValue] = React.useState<string|undefined>();
	React.useEffect(() => {
		setExtraValue(undefined);
	}, [props.field, props.enumType]);
	
	return <CatalogFieldSimple
		field={props.field}
		default={props.enumType.reverseValues[0]}
		onLoad={(_, resolved) => {
			if(resolved in props.enumType.values) return;
			setExtraValue(resolved);
		}}
		control={<Form.Select>
			{mapObjectToArray(props.enumType.values, (value, index) => {
				return <option key={index} value={value}>{value}</option>;
			})}
			
			{extraValue !== undefined && <option key={-1} value={extraValue}>{extraValue}</option>}
		</Form.Select>}
	/>;
};
