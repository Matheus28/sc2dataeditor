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

export default class SelectID extends React.Component<SelectID_Props, SelectID_State> {
	private getEntriesOfTypesToken?:{};
	
	override state:SelectID_State = {
		id: "",
	};
	
	private refetchList(){
		let token = {};
		
		this.setState({id: "", idExists: undefined, existingIDs: undefined});
		this.getEntriesOfTypesToken = token;
		
		const hideDataspace = this.props.dataspace !== undefined;
		const hideSource = this.props.source !== undefined;
		const hideCatalog = this.props.catalog !== null;
		
		getEntries(this.props.catalog, this.props.source, this.props.dataspace, this.props.parent).then((arr) => {
			if(this.getEntriesOfTypesToken !== token) return;
			
			this.setState((state) => {
				let idExists:boolean|undefined = state.id.length > 0 ? false : undefined;
				let arr2 = arr.map((v):SelectOption => {
					if(idExists !== undefined && v.id == state.id) idExists = true;
					
					return {
						value: v.id,
						label: <>
							{v.id}
							{v.dataspace && !hideDataspace && <Badge bg="warning" className="float-end">{v.dataspace}</Badge>}
							{v.source && !hideSource && <Badge bg="info" className="float-end">{v.source}</Badge>}
							{v.catalog && !hideCatalog && <Badge bg="danger" className="float-end">{v.catalog}</Badge>}
						</>
					}
					
				});
				
				return {
					existingIDs: arr2,
					idExists,
				};
			});
		});
	}
	
	override componentDidMount(){
		this.refetchList();
	}
	
	override componentWillUnmount(){
		delete this.getEntriesOfTypesToken;
	}
	
	override componentDidUpdate(prevProps:SelectID_Props){
		if(prevProps.parent !== this.props.parent
		|| prevProps.catalog !== this.props.catalog
		|| prevProps.source !== this.props.source
		|| prevProps.dataspace !== this.props.dataspace
		){
			this.refetchList();
		}
	}
	
	override render(): React.ReactNode {
		return <>
			<Form.Group className="mb-3">
				<Select
					isLoading={this.state.existingIDs === undefined}
					placeholder="ID"
					options={this.state.existingIDs}
					filterOption={filterOption}
					onChange={(newValue) => {
						let v = (newValue ? newValue.value : "");
						this.setState({
							id: v,
							idExists: this.state.existingIDs && v.length > 0 ? this.state.existingIDs.filter(vv => vv.value == v).length > 0 : undefined,
						});
						this.props.onChange(v);
					}}
					
					isValidNewOption={(newValue) => {
						return /^[a-z][a-z_0-9@]*$/i.test(newValue);
					}}
				/>
			</Form.Group>
			
			{ this.state.idExists === undefined && this.state.id.length > 0 && <Alert variant="info">Loading...</Alert> }
			{ this.state.idExists === false && <Alert variant="warning">ID does not exist, a new entry will be created</Alert> }
			{ this.state.idExists === true && <Alert variant="success">Modifying existing entry</Alert> }
		</>;
	}
};
