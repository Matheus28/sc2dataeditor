import * as React from 'react';
import { CatalogName } from '../lib/game_data';
import { Card, Form } from 'react-bootstrap';
import { CatalogEntry } from '../worker';
import CatalogFieldInt from './components/CatalogFieldInt';
import CatalogFieldStringLink from './components/CatalogFieldStringLink';
import EntryParent from './components/ForceEntryParent';
import SelectID from './components/SelectID';


interface Props {
	catalog:CatalogName|null;
	source:string|null|undefined;
	dataspace?:string|undefined;
}

export default function(props:Props){
	const [id, setID] = React.useState("");
	
	
	return <>
		<Card>
			<Card.Body>
				<Form>
					<SelectID catalog={props.catalog} source={props.source} dataspace={props.dataspace} onChange={setID}/>
					
					{ id.length > 0 && <>
						
					</>}
				</Form>
			</Card.Body>
		</Card>
	</>;
}
