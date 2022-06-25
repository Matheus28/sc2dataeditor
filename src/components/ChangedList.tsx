import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { Container, Row, Col, Form, Badge, Card, Button } from 'react-bootstrap';
import assert from 'assert';
import { getPendingChangesList, save, waitPendingChangesList } from '../worker_client';
import { dialog } from '@electron/remote';
import * as child_process from "child_process";
import path from 'path';

let sc2SwitcherExecutable = localStorage["sc2switcher"] || undefined;

function runMap(mapDir:string){
	
	if(sc2SwitcherExecutable){
		mapDir = path.resolve(path.normalize(mapDir));
		console.log(mapDir);
		child_process.execFile(sc2SwitcherExecutable, [
			"-run", mapDir,
			"-displaymode", "0",
			"-trigdebug",
			"-breakOnError",
			"-preload", "0",
			"-NoUserCheats",
			"-reloadcheck",
			"-meleeMod", "Void",
			"-difficulty", "2",
			"-speed", "4",
		], {
			cwd: process.cwd()
		}).on("error", function(e){
			console.error(e);
			localStorage["sc2switcher"] = sc2SwitcherExecutable = undefined;
		});
	}else{
		dialog.showOpenDialog({
			properties: ['openFile', 'dontAddToRecent'],
			filters: [{name: 'SC2Switcher_x64.exe', extensions: ['exe']}]
		}).then(function(response){
			if(response.canceled) return;
			
			let files = response.filePaths;
			if(files.length != 1) return;
			let file = files[0];
			if(!file.endsWith("SC2Switcher_x64.exe")) return;
			
			localStorage["sc2switcher"] = sc2SwitcherExecutable = file;
			runMap(mapDir);
		}).catch((_) => {});
	}
}

export default function(props:{mapDir:string}){
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
			doWait();
			setChangedData(v);
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
					<Card.Body className="d-flex align-items-center" style={{padding: 8}}>
						<div className="flex-fill" style={{marginLeft: 10}}>
							{changedData !== undefined && hasChanges && <>
								{changedData.strings && <><Badge bg="success">Strings</Badge>{' '}</>}
								{changedData.hotkeys && <><Badge bg="info">Hotkeys</Badge>{' '}</>}
								{changedData.dataspaces.map(v => <React.Fragment key={v}><Badge bg="warning" text="dark">{v}</Badge>{' '}</React.Fragment>)}
							</>}
							
							{!hasChanges && <>
								No unsaved changes
							</>}
						</div>
						
						<Button disabled={hasChanges} variant={"primary"} onClick={() => runMap(props.mapDir)}>Run</Button>
						
						<Button disabled={!hasChanges} variant={hasChanges ? "success" : "secondary"} className="ms-2"  onClick={() => {
							save();
						}}>Save</Button>
					</Card.Body>
				</Card>
			</Col>
		</Row>
	</>;
}
