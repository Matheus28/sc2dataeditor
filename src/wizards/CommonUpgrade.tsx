import * as React from 'react';
import { Card, Form } from 'react-bootstrap';
import { CatalogEntry } from '../worker';
import CatalogFieldInt from './components/CatalogFieldInt';
import CatalogFieldStringLink from './components/CatalogFieldStringLink';
import ForceEntryParent from './components/ForceEntryParent';
import SelectID from './components/SelectID';

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
					<SelectID catalog="Upgrade" parent="CommonUpgrade" onChange={setID}/>
					
					{ id.length > 0 && <>
						<ForceEntryParent entry={upgradeEntry} parent="CommonUpgrade"/>
						<ForceEntryParent entry={abilEntry} parent="CommonUpgrade"/>
						
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
					</>}
				</Form>
			</Card.Body>
		</Card>
	</>
}
