import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { Container, Row, Col, Form, Alert } from 'react-bootstrap';
import assert from 'assert';
import CommonUpgradeWizard from './wizards/CommonUpgrade';
import SelectDataspace from './components/SelectDataspace';
import { loadMap } from './worker_client';
import ChangedList from './components/ChangedList';
import SelectCatalog from './components/SelectCatalog';
import GenericEditor from './wizards/GenericEditor';
import { CatalogName } from './lib/game_data';
import SelectSource from './components/SelectSource';

const mainElement = document.getElementById("main");
assert(mainElement);
const root = ReactDOM.createRoot(mainElement);


const CatalogBrowser = function(props:{rootDir:string}){
	const [isLoaded, setLoaded] = React.useState(false);
	const [catalog, setCatalog] = React.useState<CatalogName|null>(null);
	const [source, setSource] = React.useState<string|null|undefined>(undefined);
	const [dataspace, setDataspace] = React.useState<string|undefined>(undefined);
	
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
	
	const onSourceChange = React.useCallback((v:string|null|undefined) => {
		setSource(v);
		if(v != null){ // if setting source to a dependency
			setDataspace(undefined);
		}
	}, []);
	
	const onDataspaceChange = React.useCallback((v:string|undefined) => {
		setDataspace(v);
		if(v !== undefined && source != null){ // If selecting a dataspace, and source is a dependency
			setSource(undefined);
		}
	}, [source]);
	
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
			<ChangedList />
			
			<Row className="mb-3">
				<Col>
					<SelectCatalog onChange={setCatalog} />
				</Col>
				<Col>
					<SelectSource value={source} onChange={onSourceChange} />
				</Col>
				<Col>
					<SelectDataspace value={dataspace} onChange={onDataspaceChange} />
				</Col>
			</Row>
			
			<Row className="mb-3">
				<Col>
					{
						dataspace !== undefined || catalog != null || source !== undefined || true
						?
						<GenericEditor catalog={catalog} source={source} dataspace={dataspace} />
						:
						<Alert variant="warning">Filter by either Catalog, Source or Dataspace</Alert>
					}
				</Col>
			</Row>
		</Container>
	</React.StrictMode>;
}

//D:/Projects/kerrigan-survival-2/Kerrigan_Survival2.SC2Map
root.render(
	<CatalogBrowser rootDir="./out/test.SC2Map"/>
);
