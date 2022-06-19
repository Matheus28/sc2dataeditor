import assert from 'assert';
import * as React from 'react';
import { Accordion, Button, Card, Form, Spinner, Table } from 'react-bootstrap';
import useDeepCompareEffect from 'use-deep-compare-effect';
import { CatalogLinks, CatalogName, CatalogNameArray, CatalogTypesInstanceGeneric, DataFieldDefaults, DataFieldTypes, FieldType, FieldTypeNamedArray, FieldTypeStruct, FieldValue } from '../lib/game_data';
import { CatalogEntry, CatalogField, ValueSource } from '../worker';
import { getArrayFieldIndexes } from '../worker_client';
import CatalogFieldEnum from './components/CatalogFieldEnum';
import CatalogFieldInt from './components/CatalogFieldInt';
import CatalogFieldLink from './components/CatalogFieldLink';
import CatalogFieldObjectStringLink from './components/CatalogFieldObjectStringLink';
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
				
				return <FieldComponent endOfRow={null} key={`${entryType}::${name}`} name={name} field={field} meta={meta}/>
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
						
						return <Table className="entry-fields" striped bordered size="sm">
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

interface FieldComponentSharedProps {
	name:string;
	field:CatalogField;
	
	endOfRow:React.ReactNode;
}

function FieldComponent(props:FieldComponentSharedProps & {meta:FieldType}){
	return <>
		{props.meta.value && <FieldComponentValue {...props} desc={props.meta.value} /> }
		{'struct' in props.meta && <FieldComponentStruct {...props} desc={props.meta.struct} alsoHasValue={props.meta.value !== undefined} /> }
		{'array' in props.meta && <FieldComponentArray {...props} desc={props.meta.array} /> }
		{'namedArray' in props.meta && <FieldComponentNamedArray {...props} desc={props.meta.namedArray} /> }
	</>;
}

type ComponentFromTypeFunc = React.FC<FieldComponentSharedProps & {def:any}>; //fixme: any

const SimpleValueWrapper = (props:FieldComponentSharedProps & {children:React.ReactNode}) => {
	return <tr>
		<td>{props.name}</td>
		<td className="entry-field-value">{props.children}</td>
		{props.endOfRow}
	</tr>;
};

const boolType:ComponentFromTypeFunc = (props) => {
	return <SimpleValueWrapper {...props}><Form.Check style={{paddingLeft: '0.5rem'}} type="checkbox"/></SimpleValueWrapper>;
};

const intType:ComponentFromTypeFunc = (props) => {
	return <SimpleValueWrapper {...props}><CatalogFieldInt field={props.field} default={props.def}/></SimpleValueWrapper>;
};

const realType:ComponentFromTypeFunc = (props) => {
	return <SimpleValueWrapper {...props}><CatalogFieldReal field={props.field} default={props.def}/></SimpleValueWrapper>;
};


const componentFromType:Record<DataFieldTypes, ComponentFromTypeFunc> = {
	CString: (props) => {
		return <SimpleValueWrapper {...props}><CatalogFieldString field={props.field} default={props.def}/></SimpleValueWrapper>;
	},
	
	CStringLink: () => {
		return null;
	},
	
	CObjectStringLink: (props) => {
		const link = props.def.replace(/##id##/gm, props.field.entry.id);
		return <SimpleValueWrapper {...props}><CatalogFieldObjectStringLink link={link} default={""} oneLine={true}/></SimpleValueWrapper>;
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
			v[`C${catalogName}Link`] = (props) => {
				return <SimpleValueWrapper {...props}><CatalogFieldLink field={props.field} catalog={catalogName} default={props.def} /></SimpleValueWrapper>;
			};
		}
		
		return v;
	})()
};

function FieldComponentValue(props:FieldComponentSharedProps & {desc:FieldValue}){
	let x:React.FC;
	if(props.desc.type == "CEnum"){
		let values = props.desc.values;
		
		return <SimpleValueWrapper {...props}><CatalogFieldEnum field={props.field} values={values}/></SimpleValueWrapper>;
	}
	
	const def = typeof props.desc.default == "undefined" ? DataFieldDefaults[props.desc.type] : props.desc.default;
	
	const C = componentFromType[props.desc.type];
	return <C {...props} def={def} />
}

function FieldComponentStruct(props:FieldComponentSharedProps & {desc:FieldTypeStruct, alsoHasValue:boolean}){
	// This is used for accumulator fields
	if(props.alsoHasValue && Object.keys(props.desc).length == 1){
		for(let subname in props.desc){
			let sub = props.desc[subname];
			let prettyName = `${props.name} ${subname}`;
			
			const subfield:CatalogField = {
				entry: props.field.entry,
				name: props.field.name.concat(subname),
			};
			
			return <FieldComponent {...props} name={prettyName} field={subfield} meta={sub}/>;
		}
	}
	
	return <SimpleValueWrapper {...props}>
		<Table striped size="sm" className="entry-subfields" >
			<tbody>
				{mapObject(
					props.desc,
					(name, meta) => {
						const subfield:CatalogField = {
							entry: props.field.entry,
							name: props.field.name.concat(name),
						};
						
						return <FieldComponent endOfRow={null} key={name} name={name} field={subfield} meta={meta}/>
					}
				)}
			</tbody>
		</Table>
	</SimpleValueWrapper>;
}

function FieldComponentArray(props:FieldComponentSharedProps & {desc:FieldType}){
	const [indexes, setIndexes] = React.useState<undefined|Awaited<ReturnType<typeof getArrayFieldIndexes>>>(undefined);
	
	useDeepCompareEffect(() => {
		setIndexes(undefined);
		
		let abort = false;
		
		getArrayFieldIndexes(props.field).then((v) => {
			if(abort) return;
			
			if(v === undefined) v = {};
			setIndexes(v);
		});
		
		return function(){
			abort = true;
		}
	}, [props.field]);
	
	
	return <SimpleValueWrapper {...props}>
		{
			indexes === undefined
			?
			<Spinner animation="border" />
			:
			(() => {
				// Since arrays always have numeric indices... we can parse treat them to numbers
				// and find out the length
				const arrayLen = Object.keys(indexes).map(v => {
					let vv = parseInt(v, 10);
					if(!isFinite(vv) || !/^[0-9]+$/.test(v)){
						console.error(`Invalid index ${v} in ${JSON.stringify(props.field)}. Must be an integer.`);
						return null;
					}
					
					return vv;
				}).filter(notNull).reduce((acc, v) => Math.max(acc, v + 1), 0);
				
				return <Table striped size="sm" className="entry-subfields">
					<tbody>
						{range(arrayLen, index => {
							assert(indexes);
							
							/*
							// In case we want to know the origin of this row...
							let tmp:undefined|((typeof indexes)[number]) = indexes[index];
							
							// So this happens if we have something like
							// <B index="0"/>
							// <B index="2"/>
							// Index 1 will show up here but it doesn't exist anywhere...
							// We consider that we created it ourselves then
							if(tmp === undefined) tmp = { source: ValueSource.Self, removed: false };
							*/
							
							const subfield:CatalogField = {
								entry: props.field.entry,
								name: props.field.name.slice(0, -1).concat([[props.name, index]]),
							};
							
							return <FieldComponent
								key={index}
								name={index.toString()}
								field={subfield}
								meta={props.desc}
								endOfRow={
									<td style={{verticalAlign: 'middle'}}>
										<Button variant="danger">Delete</Button>
									</td>
								}
							/>;
						})}
						<tr>
							<td>{arrayLen}</td>
							<td className="entry-field-value"></td>
							<td style={{textAlign: 'end'}}>
								<Button variant="success">New</Button>
							</td>
						</tr>
					</tbody>
				</Table>
			})()
		}
	</SimpleValueWrapper>;
}

function FieldComponentNamedArray(props:FieldComponentSharedProps & {desc:FieldTypeNamedArray}){
	let isFlagArray = true;
	for(let i in props.desc){
		let v = props.desc[i].value;
		if(v === undefined || v.type !== 'bool'){
			isFlagArray = false;
			break;
		}
	}
	
	if(isFlagArray){
		return <SimpleValueWrapper {...props}><div style={{padding: '0.5rem 0.5rem 0 0.5rem'}}>
			{mapObject(props.desc, (index, v) => {
				let subfield = {
					entry: props.field.entry,
					name: props.field.name.slice(0, -1).concat([[props.name, index]]),
				};
				
				assert(v.value !== undefined);
				assert(v.value.type === 'bool');
				
				return <Form.Check key={index} label={index} type="checkbox"/>;
			})}
		</div></SimpleValueWrapper>;
	}else{
		return <SimpleValueWrapper {...props}>
			<Table striped size="sm" className="entry-subfields">
				<tbody>
					{mapObject(props.desc, (index, v) => {
						const subfield:CatalogField = {
							entry: props.field.entry,
							name: props.field.name.slice(0, -1).concat([[props.name, index]]),
						};
						
						return <FieldComponent
							endOfRow={null}
							key={index}
							name={index.toString()}
							field={subfield}
							meta={v}
						/>;
					})}
				</tbody>
			</Table>
		</SimpleValueWrapper>;
	}
}

function mapObject<T, U>(obj:T, fn:(key:string, value:T[keyof T])=>U):U[] {
	let arr:U[] = [];
	
	for(let key in obj){
		arr.push(fn(key, obj[key]));
	}
	
	return arr;
}


function range<T>(n:number, fn:(i:number)=>T):T[] {
	let arr = new Array<T>(n);
	for(let i = 0; i < n; ++i) arr[i] = fn(i);
	return arr;
}

function notNull<T>(v:T|null):v is T {
	return v !== null;
}
