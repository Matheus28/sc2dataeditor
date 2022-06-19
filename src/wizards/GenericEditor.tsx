import assert from 'assert';
import * as React from 'react';
import { Accordion, Card, Form, Table } from 'react-bootstrap';
import { CatalogLinks, CatalogName, CatalogNameArray, CatalogTypesInstanceGeneric, DataFieldDefaults, DataFieldTypes, FieldType, FieldTypeNamedArray, FieldTypeStruct, FieldValue } from '../lib/game_data';
import { CatalogEntry, CatalogField } from '../worker';
import CatalogFieldInt from './components/CatalogFieldInt';
import CatalogFieldLink from './components/CatalogFieldLink';
import CatalogFieldReal from './components/CatalogFieldReal';
import CatalogFieldString from './components/CatalogFieldString';
import SelectEntry, { SelectOption } from './components/SelectEntry';
import SelectEntryType from './components/SelectEntryType';


interface Props {
	catalog:CatalogName|null;
	source:string|null|undefined;
	dataspace?:string|undefined;
}

export default function(props:Props){
	const [entry, setEntry] = React.useState<SelectOption|null>(null);
	const [entryType, setEntryType] = React.useState<string|undefined>();
	
	const onEntryChange = (v:SelectOption|null) => {
		setEntry(v);
		setEntryType(undefined);
	};
	
	
	const addFieldsAndParent = (entry:CatalogEntry, catalog:CatalogName, entryType:string|null):React.ReactNode[]|null => {
		if(entryType == null) return null;
		
		return [
			addFieldsAndParent(entry, catalog, CatalogTypesInstanceGeneric[catalog][entryType].parent),
			addFields(entry, entryType, CatalogTypesInstanceGeneric[catalog][entryType].fields)
		];
	};
	
	const addFields = (entry:CatalogEntry, entryType:string, fields:Record<string, FieldType>) => {
		return mapObject(
			fields,
			(name, meta) => {
				const field:CatalogField = {
					entry,
					name: [name]
				};
				
				return <FieldComponent key={`${entryType}::${name}`} name={name} field={field} meta={meta}/>
			}
		);
	};
	
	return <>
		<Card>
			<Card.Body>
				<Form>
					<Form.Group className="mb-3">
						<SelectEntry value={entry} catalog={props.catalog} source={props.source} dataspace={props.dataspace} onChange={onEntryChange}/>
					</Form.Group>
					
					{entry && <>
						<Form.Group className="mb-3">
							<Form.Label>Type</Form.Label>
							<SelectEntryType
								entry={entry.value}
								value={entryType}
								onLoad={setEntryType}
								onChange={setEntryType}
							/>
						</Form.Group>
					</>}
					
					{(()=>{
						if(!entry || entryType === undefined) return null;
						
						return <Table striped bordered size="sm">
							<thead>
								<tr>
									<th>Property</th>
									<th>Value</th>
								</tr>
							</thead>
							<tbody>{addFieldsAndParent(entry.value, entry.value.catalog, entryType)}</tbody>
						</Table>
					})()}
				</Form>
			</Card.Body>
		</Card>
	</>;
}


function FieldComponent(props:{name:string, field:CatalogField, meta:FieldType}){
	return <>
		{props.meta.value && <FieldComponentValue name={props.name} field={props.field} desc={props.meta.value} /> }
		{'struct' in props.meta && <FieldComponentStruct name={props.name} field={props.field} desc={props.meta.struct} alsoHasValue={props.meta.value !== undefined} /> }
		{'array' in props.meta && <FieldComponentArray name={props.name} field={props.field} desc={props.meta.array} /> }
		{'namedArray' in props.meta && <FieldComponentNamedArray name={props.name} field={props.field} desc={props.meta.namedArray} /> }
	</>;
}

type ComponentFromTypeFunc = React.FC<{name:string, field:CatalogField, def:any}>; //fixme: any

const simpleValueWrapper = (name:string, node:React.ReactNode) => {
	return <tr>
		<td>{name}</td>
		<td>{node}</td>
	</tr>;
};

const boolType:ComponentFromTypeFunc = ({name, field, def}) => {
	return simpleValueWrapper(name, <Form.Check style={{paddingLeft: '0.5rem'}} type="checkbox"/>);
};

const intType:ComponentFromTypeFunc = ({name, field, def}) => {
	return simpleValueWrapper(name, <CatalogFieldInt field={field} default={def}/>);
};

const realType:ComponentFromTypeFunc = ({name, field, def}) => {
	return simpleValueWrapper(name, <CatalogFieldReal field={field} default={def}/>);
};


const componentFromType:Record<DataFieldTypes, ComponentFromTypeFunc> = {
	CString: ({name, field, def}) => {
		return simpleValueWrapper(name, <CatalogFieldString field={field} default={def}/>);
	},
	
	CStringLink: () => {
		return null;
	},
	
	CHotkeyLink: () => { return null; },
	TMarkerLink: () => { return null; },
	TCooldownLink: () => { return null; },
	bool: boolType,
	
	int8: intType,
	int16: intType,
	int32: intType,
	int64: intType,
	uint8: intType,
	uint16: intType,
	uint32: intType,
	uint64: intType,
	
	CFixed: realType,
	real32: realType,
	
	...(():Record<keyof CatalogLinks, ComponentFromTypeFunc> => {
		let v = {} as Record<keyof CatalogLinks, ComponentFromTypeFunc>;
		for(let catalogName of CatalogNameArray){
			v[`C${catalogName}Link`] = ({name, field, def}) => {
				return simpleValueWrapper(name, <CatalogFieldLink field={field} catalog={catalogName} default={def} />);
			};
		}
		
		return v;
	})()
};

function FieldComponentValue(props:{name:string, field:CatalogField, desc:FieldValue}){
	let x:React.FC;
	if(props.desc.type == "CEnum"){
		let values = props.desc.values;
		
		return simpleValueWrapper(props.name, <Form.Select>
			{values.map(v => <option key={v}>{v}</option>)}
		</Form.Select>);
	}
	
	const def = typeof props.desc.default == "undefined" ? DataFieldDefaults[props.desc.type] : props.desc.default;
	
	const C = componentFromType[props.desc.type];
	return <C name={props.name} field={props.field} def={def} />
}

function FieldComponentStruct(props:{name:string, field:CatalogField, desc:FieldTypeStruct, alsoHasValue:boolean}){
	// This is used for accumulator fields
	if(props.alsoHasValue && Object.keys(props.desc).length == 1){
		for(let subname in props.desc){
			let sub = props.desc[subname];
			let prettyName = `${props.name} ${subname}`;
			
			const subfield:CatalogField = {
				entry: props.field.entry,
				name: props.field.name.concat(subname),
			};
			
			return <FieldComponent name={prettyName} field={subfield} meta={sub}/>;
		}
	}
	
	return simpleValueWrapper(
		props.name,
		<Table striped size="sm">
			<tbody>
				{mapObject(
					props.desc,
					(name, meta) => {
						const subfield:CatalogField = {
							entry: props.field.entry,
							name: props.field.name.concat(name),
						};
						
						return <FieldComponent key={name} name={name} field={subfield} meta={meta}/>
					}
				)}
			</tbody>
		</Table>
	);
}

function FieldComponentArray(props:{name:string, field:CatalogField, desc:FieldType}){
	return simpleValueWrapper(props.name, <>
		Array goes here
	</>);
}

function FieldComponentNamedArray(props:{name:string, field:CatalogField, desc:FieldTypeNamedArray}){
	let isFlagArray = true;
	for(let i in props.desc){
		let v = props.desc[i].value;
		if(v === undefined || v.type !== 'bool'){
			isFlagArray = false;
		}
	}
	
	if(isFlagArray){
		return simpleValueWrapper(props.name, <div style={{padding: '0.5rem 0.5rem 0 0.5rem'}}>
			{mapObject(props.desc, (index, v) => {
				let subfield = {
					entry: props.field.entry,
					name: props.field.name.slice(0, -1).concat([props.name, index]),
				};
				
				assert(v.value !== undefined);
				assert(v.value.type === 'bool');
				
				return <Form.Check key={index} label={index} type="checkbox"/>;
			})}
		</div>);
	}else{
		return simpleValueWrapper(props.name, <>
			Named array goes here
		</>);
	}
}

function mapObject<T, U>(obj:T, fn:(key:string, value:T[keyof T])=>U):U[] {
	let arr:U[] = [];
	
	for(let key in obj){
		arr.push(fn(key, obj[key]));
	}
	
	return arr;
}
