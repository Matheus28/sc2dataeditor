import * as React from 'react';
import { Card, Col, Form, Row, Table } from 'react-bootstrap';
import { CatalogName, CatalogTypesInstance, FieldType } from '../lib/game_data';
import { mapObjectToArray } from '../lib/utils';
import { CatalogEntry, CatalogField } from '../worker';
import { GenericCatalogField } from './components/GenericCatalogField';
import SelectEntry, { SelectOption } from './components/SelectEntry';
import SelectEntryType from './components/SelectEntryType';


interface Props {
	catalog:CatalogName|null;
	source:string|null|undefined;
	dataspace?:string|undefined;
}

export default function(props:Props){
	const [entry, setEntry] = React.useState<SelectOption|null>(null);
	const [entryType, setEntryType] = React.useState<string|undefined>();
	
	const onEntryChange = (v:SelectOption|null) => {
		setEntry(v);
		setEntryType(undefined);
	};
	
	
	const addFieldsAndParent = (entry:CatalogEntry, catalog:CatalogName, entryType:string|null):React.ReactNode[]|null => {
		if(entryType == null) return null;
		
		return [
			addFieldsAndParent(entry, catalog, CatalogTypesInstance[catalog][entryType].parent),
			addFields(entry, entryType, CatalogTypesInstance[catalog][entryType].type.struct)
		];
	};
	
	const addFields = (entry:CatalogEntry, entryType:string, fields:Record<string, FieldType>) => {
		return mapObjectToArray(
			fields,
			(name, meta) => {
				const field:CatalogField = {
					entry,
					name: [name]
				};
				
				return <GenericCatalogField directChildProps={{}} key={`${entryType}::${name}`} name={name} field={field} meta={meta}/>
			}
		);
	};
	
	return <Form>
		<Row className="mb-3"><Col><Card>
			<Card.Body>
				<Form.Group>
					<SelectEntry canCreate value={entry} catalog={props.catalog} source={props.source} dataspace={props.dataspace} onChange={onEntryChange}/>
				</Form.Group>
			</Card.Body>
		</Card></Col></Row>
	
		{entry && <Row className="mb-3"><Col><Card>
			<Card.Body>
				<Form.Group>
					<Form.Label>Type</Form.Label>
					<SelectEntryType
						entry={entry.value}
						value={entryType}
						onLoad={setEntryType}
						onChange={setEntryType}
					/>
				</Form.Group>
			</Card.Body>
		</Card></Col></Row>}
		
		{entry && entryType && <Row className="mb-3"><Col><Card>
			<Card.Body>
				<Table className="entry-fields" striped bordered size="sm">
					<thead>
						<tr>
							<th>Property</th>
							<th>Value</th>
						</tr>
					</thead>
					<tbody>{addFieldsAndParent(entry.value, entry.value.catalog, entryType)}</tbody>
				</Table>
			</Card.Body>
		</Card></Col></Row>}
	</Form>;
}
