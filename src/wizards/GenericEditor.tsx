import * as React from 'react';
import { CatalogName } from '../lib/game_data';
import { Card, Form } from 'react-bootstrap';
import { CatalogEntry } from '../worker';
import CatalogFieldInt from './components/CatalogFieldInt';
import CatalogFieldStringLink from './components/CatalogFieldStringLink';
import EntryParent from './components/ForceEntryParent';
import SelectEntry, { SelectOption } from './components/SelectEntry';


interface Props {
	catalog:CatalogName|null;
	source:string|null|undefined;
	dataspace?:string|undefined;
}

export default function(props:Props){
	const [entry, setEntry] = React.useState<SelectOption|null>(null);
	
	return <>
		<Card>
			<Card.Body>
				<Form>
					<SelectEntry value={entry} catalog={props.catalog} source={props.source} dataspace={props.dataspace} onChange={setEntry}/>
					
				</Form>
			</Card.Body>
		</Card>
	</>;
}
