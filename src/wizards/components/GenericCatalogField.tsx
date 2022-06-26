import assert from 'assert';
import * as React from 'react';
import { Alert, Button, Spinner, Table } from 'react-bootstrap';
import useDeepCompareEffect from 'use-deep-compare-effect';
import { mapObjectToArray } from '../../lib/utils';
import { getArrayFieldIndexes } from '../../worker_client';
import { CatalogLinks, CatalogNameArray, DataFieldDefaults, DataFieldSimpleTypes, FieldType, FieldTypeNamedArray, FieldTypeStruct, FieldTypeWithSimpleValue, FieldValue, SimpleIntegerTypes, SimpleRealTypes, SimpleRealTypesArray, SimpleStringTypes } from '../../lib/game_data';
import CatalogEditorComment from './CatalogEditorComment';
import CatalogFieldBool from './CatalogFieldBool';
import CatalogFieldEnum from './CatalogFieldEnum';
import CatalogFieldInt from './CatalogFieldInt';
import CatalogFieldLink from './CatalogFieldLink';
import CatalogFieldObjectStringLink from './CatalogFieldObjectStringLink';
import CatalogFieldReal from './CatalogFieldReal';
import CatalogFieldString from './CatalogFieldString';
import CatalogFieldStringLink from './CatalogFieldStringLink';
import { valueSourceToClassName } from './utils';
import { CatalogField, ValueSource } from '../../lib/game_data_access';


interface FieldComponentSharedProps {
	name:string;
	field:CatalogField;
	meta:FieldType;
	
	directChildProps:{
		rowClassName?:string;
		endOfRow?:React.ReactNode;
	}
}

export function GenericCatalogField(props:FieldComponentSharedProps){
	return <>
		{props.meta.value && <FieldComponentValue {...props} desc={props.meta.value} /> }
		{'struct' in props.meta && <FieldComponentStruct {...props} desc={props.meta} alsoHasValue={props.meta.value !== undefined} /> }
		{'array' in props.meta && <FieldComponentArray {...props} desc={props.meta.array} /> }
		{'namedArray' in props.meta && <FieldComponentNamedArray {...props} desc={props.meta.namedArray} /> }
	</>;
}

type ComponentFromTypeFunc<K extends DataFieldSimpleTypes> = React.FC<FieldComponentSharedProps & { meta:FieldTypeWithSimpleValue<K>; }>;

const SimpleValueWrapper = (props:FieldComponentSharedProps & {children:React.ReactNode}) => {
	return <tr className={props.directChildProps.rowClassName}>
		<td>{props.name}</td>
		<td className="entry-field-value">{props.children}</td>
		{props.directChildProps.endOfRow}
	</tr>;
};

const componentFromType:{
	[K in DataFieldSimpleTypes]:ComponentFromTypeFunc<K>;
} = {
	...(():ComponentFromTypeHelper<SimpleStringTypes> => {
		let v = {} as ComponentFromTypeHelper<SimpleStringTypes>;
		for(let key in DataFieldDefaults){
			if(typeof DataFieldDefaults[key as keyof DataFieldDefaults] != 'string') continue;
			let key2 = key as SimpleStringTypes;
			
			v[key2] = (props) => {
				const def = DataFieldDefaults[props.meta.value.type];
				return <SimpleValueWrapper {...props}><CatalogFieldString field={props.field} default={def}/></SimpleValueWrapper>;
			};
		}
		
		return v;
	})(),
	
	...(():ComponentFromTypeHelper<SimpleIntegerTypes> => {
		let v = {} as ComponentFromTypeHelper<SimpleIntegerTypes>;
		for(let key in DataFieldDefaults){
			if(typeof DataFieldDefaults[key as keyof DataFieldDefaults] != 'number') continue;
			if((SimpleRealTypesArray as readonly string[]).indexOf(key) !== -1) continue;
			
			let key2 = key as SimpleIntegerTypes;
			
			v[key2] = (props) => {
				const def = DataFieldDefaults[props.meta.value.type];
				let mv = props.meta.value;
				let min = mv.restrictions ? mv.restrictions.min : undefined;
				let max = mv.restrictions ? mv.restrictions.max : undefined;
				
				return <SimpleValueWrapper {...props}><CatalogFieldInt field={props.field} default={def} min={min} max={max}/></SimpleValueWrapper>;
			};
		}
		
		return v;
	})(),
	
	...(():ComponentFromTypeHelper<SimpleRealTypes> => {
		let v = {} as ComponentFromTypeHelper<SimpleRealTypes>;
		for(let key in DataFieldDefaults){
			if(typeof DataFieldDefaults[key as keyof DataFieldDefaults] != 'number') continue;
			if((SimpleRealTypesArray as readonly string[]).indexOf(key) === -1) continue;
			let key2 = key as SimpleRealTypes;
			
			v[key2] = (props) => {
				const def = DataFieldDefaults[props.meta.value.type];
				let mv = props.meta.value;
				let min = mv.restrictions ? mv.restrictions.min : undefined;
				let max = mv.restrictions ? mv.restrictions.max : undefined;
				
				return <SimpleValueWrapper {...props}><CatalogFieldReal field={props.field} default={def} min={min} max={max}/></SimpleValueWrapper>;
			};
		}
		
		return v;
	})(),
	
	...(():ComponentFromTypeHelper<keyof CatalogLinks> => {
		let v = {} as ComponentFromTypeHelper<keyof CatalogLinks>;
		for(let catalogName of CatalogNameArray){
			v[`C${catalogName}Link`] = (props) => {
				const def = DataFieldDefaults[props.meta.value.type];
				return <SimpleValueWrapper {...props}><CatalogFieldLink field={props.field} catalog={catalogName} default={def} /></SimpleValueWrapper>;
			};
		}
		
		return v;
	})(),
	
	CStringLink: (props) => {
		const def = DataFieldDefaults[props.meta.value.type];
		const [link, setLink] = React.useState("");
		
		return <SimpleValueWrapper {...props}>
			<Table size="sm" className="entry-subfields">
				<tbody>
					<tr>
						<td>Link</td>
						<td className="entry-field-value">
							<CatalogFieldString field={props.field} default={def} onLoad={(_unresolved, resolved) => setLink(resolved)} onChange={(_unresolved, resolved) => setLink(resolved)}/>
						</td>
					</tr>
					
					<tr>
						<td>Value</td>
						<td className="entry-field-value"><CatalogFieldStringLink link={link} /></td>
					</tr>
				</tbody>
			</Table>
		</SimpleValueWrapper>;
	},
	
	CObjectStringLink: (props) => {
		let name = props.field.name[0];
		assert(typeof name == "string");
		const link = props.field.entry.catalog + "/" + name + "/" + props.field.entry.id;
		return <SimpleValueWrapper {...props}><CatalogFieldObjectStringLink link={link} default={""} oneLine={true}/></SimpleValueWrapper>;
	},
	
	CEditorComment: (props) => {
		return <SimpleValueWrapper {...props}><CatalogEditorComment entry={props.field.entry}/></SimpleValueWrapper>
	},
	
	bool: (props) => {
		const def = DataFieldDefaults[props.meta.value.type];
		return <SimpleValueWrapper {...props}><CatalogFieldBool field={props.field} default={def}/></SimpleValueWrapper>;
	},
};

type ComponentFromTypeHelper<T extends DataFieldSimpleTypes> = {
	[K in T]:ComponentFromTypeFunc<K>;
};

function FieldComponentValue(props:FieldComponentSharedProps & {desc:FieldValue}){
	let x:React.FC;
	if(props.desc.type == "CEnum"){
		let values = props.desc.values;
		
		return <SimpleValueWrapper {...props}><CatalogFieldEnum field={props.field} enumType={props.desc}/></SimpleValueWrapper>;
	}
	
	const C = componentFromType[props.desc.type] as any; // Too lazy to get the types checked here... just trust :D
	return <C {...props} />
}

function FieldComponentStruct(props:FieldComponentSharedProps & {desc:FieldTypeStruct, alsoHasValue:boolean}){
	// This is used for accumulator fields
	if(props.alsoHasValue && Object.keys(props.desc.struct).length == 1){
		for(let subname in props.desc.struct){
			let sub = props.desc.struct[subname];
			let prettyName = `${props.name} ${subname}`;
			
			const subfield:CatalogField = {
				entry: props.field.entry,
				name: props.field.name.concat(subname),
			};
			
			return <GenericCatalogField {...props} name={prettyName} field={subfield} meta={sub}/>;
		}
	}
	
	return <SimpleValueWrapper {...props}>
		<Table striped size="sm" className="entry-subfields" >
			<tbody>
				{mapObjectToArray(
					props.desc.struct,
					(name, meta) => {
						const subfield:CatalogField = {
							entry: props.field.entry,
							name: props.field.name.concat(name),
						};
						
						return <GenericCatalogField directChildProps={{}} key={name} name={name} field={subfield} meta={meta}/>
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
			<Spinner animation="border" style={{margin:20}}/>
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
							
							// In case we want to know the origin of this row...
							let tmp:undefined|((typeof indexes)[number]) = indexes[index];
							
							// So this happens if we have something like
							// <B index="0"/>
							// <B index="2"/>
							// Index 1 will show up here but it doesn't exist anywhere...
							// We consider that we created it ourselves then
							if(tmp === undefined) tmp = { source: ValueSource.Self, removed: false };
							
							const rowClassName = tmp.source != ValueSource.Self ? valueSourceToClassName(tmp.source) : "";
							
							if(tmp.removed){
								return <tr key={index} className={rowClassName}>
									<td>{index}</td>
									<td className="entry-field-value"><Alert variant="danger" style={{margin: 0, padding: '0.25rem 0.5rem'}}>Removed</Alert></td>
									<td style={{textAlign: 'end'}}>
										<Button variant="success">New</Button>
									</td>
								</tr>
							}
							
							const subfield:CatalogField = {
								entry: props.field.entry,
								name: props.field.name.slice(0, -1).concat([[props.name, index]]),
							};
							
							return <GenericCatalogField
								key={index}
								name={index.toString()}
								field={subfield}
								meta={props.desc}
								directChildProps={{
									rowClassName: rowClassName,
									endOfRow: <td style={{verticalAlign: 'middle'}}>
										<Button variant="danger">Delete</Button>
									</td>,
								}}
							/>;
						})}
						<tr>
							<td>{arrayLen == 0 ? "Empty" : arrayLen}</td>
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
	const isFlagArray = props.desc.value.value !== undefined && props.desc.value.value.type == 'bool';
	let v = props.desc.value;
	
	if(isFlagArray){
		return <SimpleValueWrapper {...props}><div style={{padding: '0.5rem 0.5rem 0 0.5rem'}}>
			{mapObjectToArray(props.desc.keys.values, (indexName) => {
				let subfield = {
					entry: props.field.entry,
					name: props.field.name.slice(0, -1).concat([[props.name, indexName]]),
				};
				
				assert(v.value !== undefined);
				assert(v.value.type === 'bool');
				
				const def = DataFieldDefaults[v.value.type];
				
				return <CatalogFieldBool key={indexName} label={indexName} field={subfield} default={def}/>;
			})}
		</div></SimpleValueWrapper>;
	}else{
		return <SimpleValueWrapper {...props}>
			<Table striped size="sm" className="entry-subfields">
				<tbody>
					{mapObjectToArray(props.desc.keys.values, (indexName) => {
						const subfield:CatalogField = {
							entry: props.field.entry,
							name: props.field.name.slice(0, -1).concat([[props.name, indexName]]),
						};
						
						return <GenericCatalogField
							directChildProps={{}}
							key={indexName}
							name={indexName.toString()}
							field={subfield}
							meta={v}
						/>;
					})}
				</tbody>
			</Table>
		</SimpleValueWrapper>;
	}
}

function range<T>(n:number, fn:(i:number)=>T):T[] {
	let arr = new Array<T>(n);
	for(let i = 0; i < n; ++i) arr[i] = fn(i);
	return arr;
}

function notNull<T>(v:T|null):v is T {
	return v !== null;
}
