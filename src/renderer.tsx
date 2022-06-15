import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { Container, Row, Col, Form } from 'react-bootstrap';
import assert from 'assert';
import CommonUpgradeWizard from './wizards/CommonUpgrade';
import SelectDestinationDataspace from './components/SelectDestinationDataspace';
import { loadMap } from './worker_client';
import ChangedList from './components/ChangedList';

const mainElement = document.getElementById("main");
assert(mainElement);
const root = ReactDOM.createRoot(mainElement);


const CatalogBrowser = function(props:{rootDir:string}){
	const [isLoaded, setLoaded] = React.useState(false);
	
	React.useEffect(() => {
		let abort = false;
		loadMap(props.rootDir).then(() => {
			if(abort) return;
			setLoaded(true);
		});
		
		return () => {
			abort = true;
		};
	}, [props.rootDir]);
	
	if(!isLoaded){
		return <>
			<div style={{position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
				<div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
					<div className="spinner" />
					<div className="mt-3">Loading map...</div>
				</div>
			</div>
		</>;
	}
	
	return <React.StrictMode>
		<Container style={{marginTop: 20, marginBottom: 20}}>
			<Row className="mb-3">
				<Col>
					<Form.Select>
						<option>Common/Upgrade</option>
					</Form.Select>
				</Col>
				<Col>
					<SelectDestinationDataspace />
				</Col>
			</Row>
			
			<ChangedList />
			
			<Row className="mb-3">
				<Col>
					<CommonUpgradeWizard />
				</Col>
			</Row>
		</Container>
	</React.StrictMode>;
}

//D:/Projects/kerrigan-survival-2/Kerrigan_Survival2.SC2Map
root.render(
	<CatalogBrowser rootDir="./out/test.SC2Map"/>
);
