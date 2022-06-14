import * as React from 'react';
import Select from "react-select/creatable";
import { Form, Alert } from 'react-bootstrap';
import { getEntriesOfTypes } from '../../worker_client';

interface SelectOption {
	value:string;
	label:string;
}

interface SelectID_Props {
	type:string;
	parent?:string;
	
	onChange:(id:string)=>void;
}

interface SelectID_State {
	id:string;
	idExists?:boolean|undefined;
	existingIDs?:SelectOption[]|undefined;
}

export default class SelectID extends React.Component<SelectID_Props, SelectID_State> {
	private getEntriesOfTypesToken?:{};
	
	override state:SelectID_State = {
		id: "",
	};
	
	override componentDidMount(){
		let token = {};
		this.getEntriesOfTypesToken = token;
		getEntriesOfTypes(["CUpgrade"], "CommonUpgrade").then(arr => arr.map(v => ({ value: v, label: v }))).then((arr) => {
			if(this.getEntriesOfTypesToken !== token) return;
			this.setState((state) => ({
				existingIDs: arr,
				idExists: state.id.length > 0 ? arr.filter(vv => vv.value == state.id).length > 0 : undefined,
			}));
		});
	}
	
	override componentWillUnmount(){
		delete this.getEntriesOfTypesToken;
	}
	
	override render(): React.ReactNode {
		return <>
			<Form.Group className="mb-3">
				<Select isLoading={this.state.existingIDs === undefined} placeholder="ID" options={this.state.existingIDs} onChange={(newValue) => {
					let v = (newValue ? newValue.value : "");
					this.setState({
						id: v,
						idExists: this.state.existingIDs && v.length > 0 ? this.state.existingIDs.filter(vv => vv.value == v).length > 0 : undefined,
					});
					this.props.onChange(v);
				}} isValidNewOption={(newValue) => {
					return /^[a-z][a-z_0-9@]*$/i.test(newValue);
				}} />
			</Form.Group>
			
			{ this.state.idExists === undefined && this.state.id.length > 0 && <Alert variant="info">Loading...</Alert> }
			{ this.state.idExists === false && <Alert variant="warning">ID does not exist, a new entry will be created</Alert> }
			{ this.state.idExists === true && <Alert variant="success">Modifying existing entry</Alert> }
		</>;
	}
};
