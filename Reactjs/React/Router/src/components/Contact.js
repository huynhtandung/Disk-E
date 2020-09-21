import React, { Component } from 'react';
import {Prompt} from 'react-router-dom';

class Contact extends Component {
	constructor(props){
		super(props);
		this.state = {
			isChecked : false
		}
	}
	render() {
		var {isChecked} = this.state;
		return (
		 	<div>
		 		Day la trang lien he <br />
		 		<button onClick={()=>this.onClick(false)} type="button" className="btn btn-default">Allow</button>
		 		<button onClick={()=>this.onClick(true)} type="button" className="btn btn-default">Deny</button>
		 		<Prompt 
		 			when={isChecked}
		 			message={location=>(`Ban chac chan muon den trang ${location.pathname}`)}
		 		/>
		 	</div>
		);
	}
	onClick = (isChecked)=>{
		this.setState({
			isChecked : isChecked
		})
		//console.log(this.state.isChecked);
	}
}

export default Contact;
