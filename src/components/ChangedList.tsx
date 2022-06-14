import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { Container, Row, Col, Form, Badge, Card, Button } from 'react-bootstrap';
import assert from 'assert';
import { getPendingChangesList, save } from '../worker_client';

export default function(){
	let [changedData, setChangedData] = React.useState<undefined|Awaited<ReturnType<typeof getPendingChangesList>>>(undefined);
	let [forceRefetch, setForceRefetch] = React.useState(0);
	
	React.useEffect(() => {
		let abort = false;
		let cb = () => {
			if(abort) return;
			getPendingChangesList().then((v) => {
				if(abort) return;
				setChangedData(v);
			});
		};
		
		cb();
		
		//FIXME: we should've be polling for this...
		const timer = setInterval(cb, 250);
		return () => {
			abort = true;
			clearInterval(timer);
		}
	}, [forceRefetch]);
	
	
	const hasChanges = changedData !== undefined && (changedData.dataspaces.length > 0 || changedData.hotkeys || changedData.strings);
	
	return <>
		<Row className="mb-3">
			<Col>
				<Card>
					<Card.Body className="d-flex align-items-center">
						<div className="flex-fill">
							{changedData !== undefined && hasChanges && <>
								{changedData.strings && <><Badge bg="success">Strings</Badge>{' '}</>}
								{changedData.hotkeys && <><Badge bg="info">Hotkeys</Badge>{' '}</>}
								{changedData.dataspaces.map(v => <><Badge key={v} bg="warning" text="dark">{v}</Badge>{' '}</>)}
							</>}
							
							{!hasChanges && <>
								No unsaved changes
							</>}
						</div>
						
						<Button disabled={!hasChanges} variant={hasChanges ? "success" : "secondary"} onClick={() => {
							save().then(() => setForceRefetch(forceRefetch + 1));
						}}>Save</Button>
					</Card.Body>
				</Card>
			</Col>
		</Row>
	</>;
}
