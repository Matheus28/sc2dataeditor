import * as React from 'react';
import { Form } from 'react-bootstrap';
import { CatalogEntry, CatalogField } from '../../worker';
import { getFieldValue, setFieldValue } from '../../worker_client';
import useDeepCompareEffect from "use-deep-compare-effect";
import { CatalogName } from '../../lib/game_data';
import SelectEntry, { SelectOption } from './SelectEntry';

interface Props {
	field:CatalogField;
	catalog:CatalogName;
	
	default:string;
}

export default function(props:Props){
	const [value, setValue] = React.useState<SelectOption|null>(null);
	
	return <SelectEntry catalog={props.catalog} value={value} onChange={setValue}/>
};
