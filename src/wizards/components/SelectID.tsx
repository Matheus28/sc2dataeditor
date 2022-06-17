import * as React from 'react';
import { Alert, Badge, Form } from 'react-bootstrap';
import { createFilter } from 'react-select';
import Select from "react-select/creatable";
import { CatalogName } from '../../lib/game_data';
import { getEntries } from '../../worker_client';

// FIXME: we need a virtual list

interface SelectOption {
	value:string;
	label:React.ReactNode;
}

interface SelectID_Props {
	catalog:CatalogName|null;
	source?:string|null|undefined;
	dataspace?:string|undefined;
	parent?:string;
	
	onChange:(id:string)=>void;
}

interface SelectID_State {
	id:string;
	idExists?:boolean|undefined;
	existingIDs?:SelectOption[]|undefined;
}

const filterOption = createFilter<SelectOption>({
	ignoreAccents: false, // Performance
});

export default function(props:SelectID_Props){
	const [id, setID] = React.useState<string>("");
	const [inputValue, setInputValue] = React.useState<string>("");
	const [idExists, setIDExists] = React.useState<boolean|undefined>(undefined);
	const [options, setOptions] = React.useState<SelectOption[]|undefined>(undefined);
	
	const idRef = React.useRef<string>(id);
	idRef.current = id;
	
	
	React.useEffect(() => {
		setID("");
		setIDExists(undefined);
		setOptions(undefined);
		
		let abort = false;
		
		getEntries(props.catalog, props.source, props.dataspace, props.parent, inputValue, 6).then((res) => {
			if(abort) return;
			
			const hideDataspace = props.dataspace !== undefined;
			const hideSource = props.source !== undefined;
			const hideCatalog = props.catalog !== null;
			
			let idExists:boolean|undefined = idRef.current.length > 0 ? false : undefined;
			let arr2 = res.items.map((v):SelectOption => {
				if(idExists !== undefined && v.id == idRef.current) idExists = true;
				
				return {
					value: v.id,
					label: <div style={{display: 'flex'}}>
						<span>{v.id}</span>
						<div style={{display:"inline-block", textAlign: "right", flex: 1}}>
							{v.dataspace && !hideDataspace && <Badge bg="warning" className="ms-1 align-text-bottom">{v.dataspace}</Badge>}
							{v.source && !hideSource && <Badge bg="info" className="ms-1 align-text-bottom">{v.source}</Badge>}
							{v.catalog && !hideCatalog && <Badge bg="danger" className="ms-1 align-text-bottom">{v.catalog}</Badge>}
						</div>
					</div>
				}
				
			});
			
			setIDExists(idExists);
			setOptions(arr2);
		});
		
		return () => {
			abort = true;
		};
	}, [inputValue, props.catalog, props.source, props.dataspace, props.parent]);
	
	return <>
		<Form.Group className="mb-3">
			<Select
				isLoading={options === undefined}
				placeholder="ID"
				options={options}
				filterOption={filterOption}
				onChange={(newValue) => {
					let v = (newValue ? newValue.value : "");
					setID(v);
					setIDExists(options && v.length > 0 ? options.filter(vv => vv.value == v).length > 0 : undefined);
					props.onChange(v);
				}}
				
				isValidNewOption={(newValue) => {
					return /^[a-z][a-z_0-9@]*$/i.test(newValue);
				}}
				
				onInputChange={setInputValue}
			/>
		</Form.Group>
		
		{ idExists === undefined && id.length > 0 && <Alert variant="info">Loading...</Alert> }
		{ idExists === false && <Alert variant="warning">ID does not exist, a new entry will be created</Alert> }
		{ idExists === true && <Alert variant="success">Modifying existing entry</Alert> }
	</>;
}
