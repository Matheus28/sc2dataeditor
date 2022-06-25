import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { Container, Row, Col, Form, Alert } from 'react-bootstrap';
import assert from 'assert';
import SelectDataspace from './components/SelectDataspace';
import { loadMap } from './worker_client';
import ChangedList from './components/ChangedList';
import SelectCatalog from './components/SelectCatalog';
import Editor from './wizards/Editor';
import { CatalogName } from './lib/game_data';
import SelectSource from './components/SelectSource';
import * as editorStrings from "./lib/editor_strings";

const mainElement = document.getElementById("main");
assert(mainElement);
const root = ReactDOM.createRoot(mainElement);


const CatalogBrowser = function(props:{rootDir:string}){
	const [isMapLoaded, setMapLoaded] = React.useState(false);
	const [catalog, setCatalog] = React.useState<CatalogName|null>(null);
	const [source, setSource] = React.useState<string|null|undefined>(undefined);
	const [dataspace, setDataspace] = React.useState<string|undefined>(undefined);
	
	const [editorStringsLoaded, setEditorStringsLoaded] = React.useState(false);
	
	React.useEffect(() => {
		let abort = false;
		
		editorStrings.promise().then(() => {
			if(abort) return;
			setEditorStringsLoaded(true);
		});
		
		return () => { abort = true; }
	}, []);
	
	React.useEffect(() => {
		let abort = false;
		loadMap(props.rootDir).then(() => {
			if(abort) return;
			setMapLoaded(true);
		});
		
		return () => {
			abort = true;
		};
	}, [props.rootDir]);
	
	const onCatalogChange = (v:CatalogName|null) => {
		setCatalog(v);
	};
	
	const onSourceChange = (v:string|null|undefined) => {
		setSource(v);
		if(v != null){ // if setting source to a dependency
			setDataspace(undefined);
		}
	};
	
	const onDataspaceChange = (v:string|undefined) => {
		setDataspace(v);
		if(v !== undefined && source != null){ // If selecting a dataspace, and source is a dependency
			setSource(undefined);
		}
	};
	
	const isAllLoaded = isMapLoaded && editorStringsLoaded;
	
	if(!isAllLoaded){
		return <>
			<div style={{position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
				<div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
					<div className="spinner" />
					<div className="mt-3">{
						isMapLoaded
						?
						"Loading editor..."
						:
						"Loading map..."
					}</div>
				</div>
			</div>
		</>;
	}
	
	return <React.StrictMode>
		<Container style={{marginTop: 20, marginBottom: 20}}>
			<ChangedList mapDir={props.rootDir} />
			
			<Row className="mb-3">
				<Col>
					<SelectCatalog onChange={onCatalogChange} />
				</Col>
				<Col>
					<SelectSource value={source} onChange={onSourceChange} />
				</Col>
				<Col>
					<SelectDataspace value={dataspace} onChange={onDataspaceChange} />
				</Col>
			</Row>
			
			<Row>
				<Col>
					{
						dataspace !== undefined || catalog != null || source !== undefined || true
						?
						<Editor catalog={catalog} source={source} dataspace={dataspace} />
						:
						<Alert variant="warning">Filter by either Catalog, Source or Dataspace</Alert>
					}
				</Col>
			</Row>
		</Container>
	</React.StrictMode>;
}

let rootMapDir = "./out/test.SC2Map";
rootMapDir = "D:/Projects/kerrigan-survival-2/Kerrigan_Survival2.SC2Map"

root.render(
	<CatalogBrowser rootDir={rootMapDir}/>
);
