import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			file :''
		}
	}
	onChange= (event) =>{
		console.log(event.target)
	}
	onSubmit = (event) =>{
		console.log(event.target)
	}
	render() {
		return (
		 	<div className="App">
				<form onSubmit={this.onSubmit}>
					<input onChange={this.onChange(event)} type="file" name="file" id="input" />
					
					<button type="submit" class="btn btn-default">button</button>
					
				</form>
				
				
		  	</div>
		);
	}
}

export default App;
