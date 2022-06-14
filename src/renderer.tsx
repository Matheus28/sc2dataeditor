import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { Button, Container, Row, Col, Form, InputGroup, Card, Alert } from 'react-bootstrap';
import assert from 'assert';
import CommonUpgradeWizard from './wizards/CommonUpgrade';
import SelectDestinationCatalog from './components/SelectDestinationCatalog';

const mainElement = document.getElementById("main");
assert(mainElement);
const root = ReactDOM.createRoot(mainElement);


root.render(<React.StrictMode><Container style={{marginTop: 20, marginBottom: 20}}>
	<Row style={{marginBottom: 20}}>
		<Col>
			<Form.Select>
				<option>Common/Upgrade</option>
			</Form.Select>
		</Col>
		<Col>
			<SelectDestinationCatalog />
		</Col>
	</Row>
	<Row>
		<Col>
			<CommonUpgradeWizard />
		</Col>
	</Row>
</Container></React.StrictMode>);


const saveCallbacks = new Map<()=>void, number>();
function useSaveCallback(cb:()=>void){
	React.useEffect(() => {
		saveCallbacks.set(cb, (saveCallbacks.get(cb) || 0) + 1);
		return () => {
			let refCount = saveCallbacks.get(cb);
			assert(refCount !== undefined);
			
			--refCount;
			
			if(refCount == 0){
				saveCallbacks.delete(cb);
			}else{
				saveCallbacks.set(cb, refCount);
			}
		};
	});
}

function runSave(){
	for(let [k, _] of saveCallbacks){
		k();
	}
}
