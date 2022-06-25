import * as React from 'react';
import { Alert, Card, Col, Form, Row, Spinner, Table } from 'react-bootstrap';
import { CatalogName, CatalogTypesInstance, FieldType } from '../lib/game_data';
import { mapObjectToArray } from '../lib/utils';
import { CatalogEntry, CatalogField } from '../worker';
import { getEntryXML, setEntryXML } from '../worker_client';
import { GenericCatalogField } from './components/GenericCatalogField';


import AceEditor from "react-ace";

export default function(props:{entry:CatalogEntry;}) {
	const [value, setValue] = React.useState<string|undefined>();
	const [isValueValid, setValueValid] = React.useState(true);
	const changeRef = React.useRef<{}>({});
	const editorRef = React.useRef<AceEditor>(null);
	
	React.useEffect(() => {
		setValue(undefined);
		setValueValid(true);
		changeRef.current = {};
		
		let abort = false;
		
		getEntryXML(props.entry).then(v => {
			if(abort) return;
			if(v === undefined) v = "";
			
			setValue(v);
		});
		
		return () => { abort = true; }
	}, [props.entry]);
	
	const id = React.useId();
	
	const onChange = (v:string) => {
		setValue(v);
		
		let abortToken = {};
		changeRef.current = abortToken;
		setEntryXML(props.entry, v).then(success => {
			if(changeRef.current != abortToken) return;
			
			setValueValid(success);
		});
	};
	
	return <>
		<Row className="mb-3"><Col><Card style={{position: 'relative'}}>
			{
				value !== undefined
				?
				<>
					<AceEditor
						ref={editorRef}
						name={id}
						theme="github"
						mode="xml"
						fontSize={14}
						value={value}
						onChange={onChange}
						editorProps={{ $blockScrolling: true }}
						style={{width: '100%'}}
					/>
					
					{!isValueValid && <Alert variant="danger" style={{position: 'absolute', right: 0, top: 0, padding: `0.25rem 0.5rem`}}>Invalid XML</Alert>}
				</>
				:
				<Card.Body><Spinner animation="border" style={{margin:20}}/></Card.Body>
			}
		</Card></Col></Row>
	</>;
}
