import * as React from 'react';
import { Card, Col, Form, Nav, Row } from 'react-bootstrap';
import { CatalogName } from '../lib/game_data';
import { CatalogEntry } from '../lib/game_data_access';
import { mapObjectToArray } from '../lib/utils';
import SelectEntry, { SelectOption } from './components/SelectEntry';
import GenericEditor from './GenericEditor';
import XMLEditor from './XMLEditor';



interface Props {
	catalog:CatalogName|null;
	source:string|null|undefined;
	dataspace?:string|undefined;
}

const editors = {
	"Generic": (entry:CatalogEntry) => <GenericEditor entry={entry}/>,
	"XML": (entry:CatalogEntry) => <XMLEditor entry={entry}/>,
};

export default function(props:Props){
	const [entry, setEntry] = React.useState<SelectOption|null>(null);
	const [activeEditor, setActiveEditor] = React.useState<keyof typeof editors>(() => Object.keys(editors)[0] as keyof typeof editors);
	
	return <Form>
		<Row className="mb-3"><Col><Card><Card.Body style={{padding: `0.25rem`}}>
			<Nav variant="pills" activeKey={activeEditor} onSelect={(v) => {
				if(v == null) return;
				if(!(v in editors)) return;
				setActiveEditor(v as keyof typeof editors);
			}}>
				{mapObjectToArray(editors, (id, _fn) =>
					<Nav.Item key={id}>
						<Nav.Link eventKey={id}>{id}</Nav.Link>
					</Nav.Item>
				)}
			</Nav>
		</Card.Body></Card></Col></Row>
		
		<Row className="mb-3"><Col><Card>
			<Card.Body>
				<Form.Group>
					<SelectEntry canCreate value={entry} catalog={props.catalog} source={props.source} dataspace={props.dataspace} onChange={setEntry}/>
				</Form.Group>
			</Card.Body>
		</Card></Col></Row>
		
		{entry && mapObjectToArray(editors, (id, fn) =>
			(id === activeEditor) ? <React.Fragment key={id}>{fn(entry.value)}</React.Fragment> : null,
		)}
	</Form>
}
