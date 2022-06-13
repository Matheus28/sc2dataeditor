import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { Button, Container, Row, Col, Form, InputGroup, Card, Alert } from 'react-bootstrap';
import { entryExists, getFieldValue, getStringLink } from '../worker_client';
import { CatalogEntry, CatalogField } from '../worker';

export default function CommonUpgradeWizard(){
	const [id, setID] = React.useState("");
	const [idExists, setIDExists] = React.useState<boolean|undefined>(undefined);
	
	const [maxLevel, setMaxLevel] = React.useState(1);
	const [maxLevelDisabled, setMaxLevelDisabled] = React.useState(false);
	
	const [name, setName] = React.useState("");
	const [nameDisabled, setNameDisabled] = React.useState(false);
	
	const [tooltip, setTooltip] = React.useState("");
	const [tooltipDisabled, setTooltipDisabled] = React.useState(false);
	
	const nameStringLink = `Name/${id}`;
	const tooltipStringLink = `Tooltip/${id}`;
	
	const upgradeEntry:CatalogEntry = {
		id,
		type: "CUpgrade",
		parent: "CommonUpgrade",
	};
	
	const abilResearchEntry:CatalogEntry = {
		id,
		type: "CAbilResearch",
		parent: "CommonUpgrade",
	};
	
	// idExists
	React.useEffect(() => {
		if(id.length == 0){
			setIDExists(undefined);
		}else{
			entryExists(upgradeEntry).then(setIDExists);
		}
	}, [id]);
	
	// maxLevel
	React.useEffect(() => {
		if(id.length == 0) return;
		
		let abort = false;
		
		setMaxLevelDisabled(true);
		getFieldValue({
			entry: upgradeEntry,
			name: ["MaxLevel"],
		}).then((v) => {
			if(abort) return;
			
			setMaxLevelDisabled(false);
			if(typeof v != "undefined"){
				setMaxLevel(parseInt(v, 10));
			}
		});
		
		return function(){
			setMaxLevelDisabled(false);
			abort = true;
		}
	}, [id]);
	
	// name
	React.useEffect(() => {
		if(id.length == 0) return;
		
		let abort = false;
		
		setNameDisabled(true);
		getStringLink(nameStringLink).then((v) => {
			if(abort) return;
			
			setNameDisabled(false);
			if(typeof v != "undefined"){
				setName(v);
			}
		});
		
		return function(){
			setNameDisabled(false);
			abort = true;
		}
	}, [id]);
	
	// tooltop
	React.useEffect(() => {
		if(id.length == 0) return;
		
		let abort = false;
		
		setTooltipDisabled(true);
		getStringLink(tooltipStringLink).then((v) => {
			if(abort) return;
			
			setTooltipDisabled(false);
			if(typeof v != "undefined"){
				setTooltip(v);
			}
		});
		
		return function(){
			setTooltipDisabled(false);
			abort = true;
		}
	}, [id]);
	
	
	return <>
		<Card>
			<Card.Body>
				<Form>
					<Form.Group className="mb-3">
						<InputGroup>
							<InputGroup.Text>Upgrade ID</InputGroup.Text>
							<Form.Control required type="text" pattern="^[a-zA-Z][a-zA-Z0-9_@]*$" title="Must be a simple string" placeholder="UnknownUpgrade" value={id} onChange={(e) => {
								setID(e.target.value);
								setIDExists(undefined);
							}} />
						</InputGroup>
					</Form.Group>
					
					{ idExists === undefined && id.length > 0 && <Alert variant="info">Loading...</Alert> }
					{ idExists === false && <Alert variant="warning">ID does not exist, a new upgrade will be created</Alert> }
					{ idExists === true && <Alert variant="success">Upgrade data loaded</Alert> }
					
					<Form.Group className="mb-3">
						<Form.Label>Max Level</Form.Label>
						<Form.Control disabled={maxLevelDisabled} required type="number" min="1" max="5" value={maxLevel} onChange={(e) => e.target.validity.valid && setMaxLevel(parseInt(e.target.value, 10))} />
					</Form.Group>
					
					<Form.Group className="mb-3">
						<Form.Label>Name</Form.Label>
						<Form.Control disabled={nameDisabled} required type="text" placeholder="Unknown Upgrade" value={name} onChange={e => setName(e.target.value) } />
					</Form.Group>
					
					<Form.Group className="mb-3">
						<Form.Label>Tooltip</Form.Label>
						<Form.Control disabled={tooltipDisabled} as="textarea" rows={5} type="text" placeholder="Does things and all" value={tooltip} onChange={e => setTooltip(e.target.value) } />
					</Form.Group>
				</Form>
			</Card.Body>
		</Card>
	</>
}
