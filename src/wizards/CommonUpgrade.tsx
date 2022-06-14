import * as React from 'react';
import { Button, Container, Row, Col, Form, InputGroup, Card, Alert } from 'react-bootstrap';
import { getFieldValue, getStringLink } from '../worker_client';
import { CatalogEntry, CatalogField } from '../worker';
import SelectID from './components/SelectID';
import CatalogFieldInt from './components/CatalogFieldInt';
import EntryParent from './components/EntryParent';
import CatalogFieldStringLink from './components/CatalogFieldStringLink';

export default function CommonUpgradeWizard(){
	const [id, setID] = React.useState("");
	
	//FIXME: parent CommonUpgrade
	const upgradeEntry = React.useMemo(():CatalogEntry => ({
		id,
		type: "CUpgrade",
	}), [id]);
	
	const abilEntry = React.useMemo(():CatalogEntry => ({
		id,
		type: "CAbilResearch",
	}), [id]);
	
	return <>
		<Card>
			<Card.Body>
				<Form>
					<SelectID type="CUpgrade" parent="CommonUpgrade" onChange={setID}/>
					
					{ id.length > 0 && <>
						<EntryParent entry={upgradeEntry} parent="CommonUpgrade"/>
						<EntryParent entry={abilEntry} parent="CommonUpgrade"/>
						
						<Form.Group className="mb-3">
							<Form.Label>Max Level</Form.Label>
							<CatalogFieldInt field={{
								entry: upgradeEntry,
								name: ["MaxLevel"]
							}} default={1} min={1} max={5}/>
						</Form.Group>
						
						<Form.Group className="mb-3">
							<Form.Label>Name</Form.Label>
							
							<CatalogFieldStringLink link={`Name/${id}`} placeholder="Unknown Upgrade" oneLine />
						</Form.Group>
						
						<Form.Group className="mb-3">
							<Form.Label>Tooltip</Form.Label>
							<CatalogFieldStringLink link={`Tooltip/${id}`} placeholder="Does things and all" />
						</Form.Group>
						
						<Form.Group>
							<Button variant="primary" className="float-end">Save</Button>
						</Form.Group>
					</>}
				</Form>
			</Card.Body>
		</Card>
	</>
}
