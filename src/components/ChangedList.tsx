import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { Container, Row, Col, Form, Badge, Card, Button } from 'react-bootstrap';
import assert from 'assert';
import { getPendingChangesList, save, waitPendingChangesList } from '../worker_client';

export default function(){
	let [changedData, setChangedData] = React.useState<undefined|Awaited<ReturnType<typeof getPendingChangesList>>>(undefined);
	
	React.useEffect(() => {
		let abort = false;
		
		let doWait = () => {
			waitPendingChangesList().then((v) => {
				if(abort) return;
				setChangedData(v);
				doWait();
			});
		};
		
		getPendingChangesList().then((v) => {
			if(abort) return;
			setChangedData(v);
			doWait();
		});
		
		return () => {
			abort = true;
		}
	}, []);
	
	
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
								{changedData.dataspaces.map(v => <React.Fragment key={v}><Badge bg="warning" text="dark">{v}</Badge>{' '}</React.Fragment>)}
							</>}
							
							{!hasChanges && <>
								No unsaved changes
							</>}
						</div>
						
						<Button disabled={!hasChanges} variant={hasChanges ? "success" : "secondary"} onClick={() => {
							save();
						}}>Save</Button>
					</Card.Body>
				</Card>
			</Col>
		</Row>
	</>;
}
