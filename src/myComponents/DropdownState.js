import React from 'react';
import "./DropdownState.css";

class DropdownState extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			states : [],
			selectedState : '--Choose State--'
		};
		this.changeState = this.changeState.bind(this);
	}
  
	componentDidMount() {
		this.setState({
            states: [ 'Delhi', 'Kolkata', 'Mumbai', 'Bangalore', 'Uttar Pradesh']
		});
	}


	changeState(event) {
		this.setState({selectedState: event.target.value});
	}
	
	render() {
		return (
			<div id="container">
				<div className="state">
					<label className="state">State</label>
					<select placeholder="State" value={this.state.selectedState} onChange={this.changeState}>
						<option>--Choose State--</option>
						{this.state.states.map((e, key) => {
							return <option key={key}>{e}</option>
						})}
					</select>
				</div>
				
			</div>
		);
	}
}

export default DropdownState;