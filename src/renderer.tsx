import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { Container, Row, Col, Form } from 'react-bootstrap';
import assert from 'assert';
import CommonUpgradeWizard from './wizards/CommonUpgrade';
import SelectDestinationCatalog from './components/SelectDestinationCatalog';
import { loadMap } from './worker_client';

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
		</Container>
	</React.StrictMode>;
}

root.render(
	<CatalogBrowser rootDir="D:/Projects/kerrigan-survival-2/Kerrigan_Survival2.SC2Map/"/>
);


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
