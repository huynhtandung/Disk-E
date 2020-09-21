import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './Components/Product';
import readXlsxFile from 'read-excel-file'

class App extends Component {
    constructor(props){
		super(props);
		this.state = {
			file :''
		}
	}
	onChangeFile = (event) =>{
        event.preventDefault();
        const input = document.getElementById('input')
        readXlsxFile(input.files[0]).then((row)=>{
            console.log("HELLO: ", row)
        })
	}
	render() {
		return (
		 	<div className="App">
				<form onSubmit={this.onSubmit}>
                 <input type="file" id="input" onChange={this.onChangeFile}/>
					
					<button type="submit" class="btn btn-default">button</button>
					
				</form>
				
				
		  	</div>
		);
	}
}

export default App;
