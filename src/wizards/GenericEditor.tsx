import * as React from 'react';
import { Card, Col, Form, Row, Table } from 'react-bootstrap';
import { CatalogName, CatalogTypesInstance, FieldType } from '../lib/game_data';
import { mapObjectToArray } from '../lib/utils';
import { CatalogEntry, CatalogField } from '../worker';
import { GenericCatalogField } from './components/GenericCatalogField';
import SelectEntryType from './components/SelectEntryType';
import assert from "assert";


interface Props {
	entry:CatalogEntry;
}

export default function(props:Props){
	const [entryType, setEntryType] = React.useState<string|undefined>();
	
	React.useEffect(() => {
		setEntryType(undefined);
	}, [props.entry]);
	
	
	const addFieldsAndParent = (entry:CatalogEntry, catalog:CatalogName, entryType:string|null):React.ReactNode[]|null => {
		if(entryType == null) return null;
		
		assert(entryType in CatalogTypesInstance[catalog]);
		
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
	
	return <>
		{<Row className="mb-3"><Col><Card>
			<Card.Body>
				<Form.Group>
					<Form.Label>Type</Form.Label>
					<SelectEntryType
						entry={props.entry}
						value={entryType}
						onLoad={setEntryType}
						onChange={setEntryType}
					/>
				</Form.Group>
			</Card.Body>
		</Card></Col></Row>}
		
		{entryType && <Row className="mb-3"><Col><Card>
			<Card.Body>
				<Table className="entry-fields" striped bordered size="sm">
					<thead>
						<tr>
							<th>Property</th>
							<th>Value</th>
						</tr>
					</thead>
					<tbody>{addFieldsAndParent(props.entry, props.entry.catalog, entryType)}</tbody>
				</Table>
			</Card.Body>
		</Card></Col></Row>}
	</>;
}
