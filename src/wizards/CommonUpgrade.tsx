import * as React from 'react';
import { Button, Container, Row, Col, Form, InputGroup, Card, Alert } from 'react-bootstrap';
import { getFieldValue, getStringLink } from '../worker_client';
import { CatalogEntry, CatalogField } from '../worker';
import SelectID from './components/SelectID';

export default function CommonUpgradeWizard(){
	const [id, setID] = React.useState("");
	
	const [maxLevel, setMaxLevel] = React.useState(1);
	const [maxLevelDisabled, setMaxLevelDisabled] = React.useState(false);
	
	const [name, setName] = React.useState("");
	const [nameDisabled, setNameDisabled] = React.useState(false);
	
	const [tooltip, setTooltip] = React.useState("");
	const [tooltipDisabled, setTooltipDisabled] = React.useState(false);
	
	const nameStringLink = `Name/${id}`;
	const tooltipStringLink = `Tooltip/${id}`;
	
	//FIXME: parent CommonUpgrade
	const upgradeEntry:CatalogEntry = {
		id,
		type: "CUpgrade",
	};
	
	//FIXME: parent CommonUpgrade
	const abilResearchEntry:CatalogEntry = {
		id,
		type: "CAbilResearch",
	};
	
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
					<SelectID type="CUpgrade" parent="CommonUpgrade" onChange={setID}/>
					
					{ id.length > 0 && <>
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
						
						<Form.Group>
							<Button variant="primary" className="float-end">Save</Button>
						</Form.Group>
					</>}
				</Form>
			</Card.Body>
		</Card>
	</>
}
