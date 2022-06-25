import * as React from 'react';
import { Card, Col, Form, Row, Table } from 'react-bootstrap';
import { CatalogName, CatalogTypesInstance, FieldType } from '../lib/game_data';
import { mapObjectToArray } from '../lib/utils';
import { CatalogEntry, CatalogField } from '../worker';
import { GenericCatalogField } from './components/GenericCatalogField';
import SelectEntry, { SelectOption } from './components/SelectEntry';
import SelectEntryType from './components/SelectEntryType';
import GenericEditor from './GenericEditor';



interface Props {
	catalog:CatalogName|null;
	source:string|null|undefined;
	dataspace?:string|undefined;
}


export default function(props:Props){
	const [entry, setEntry] = React.useState<SelectOption|null>(null);
	
	return <Form>
		<Row className="mb-3"><Col><Card>
			<Card.Body>
				<Form.Group>
					<SelectEntry canCreate value={entry} catalog={props.catalog} source={props.source} dataspace={props.dataspace} onChange={setEntry}/>
				</Form.Group>
			</Card.Body>
		</Card></Col></Row>
		
		{entry && <GenericEditor entry={entry.value}/>}
	</Form>
}
