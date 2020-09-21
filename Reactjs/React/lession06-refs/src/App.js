import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './Components/Product';

class App extends Component {
    click(){
        alert(this.refs.name.value);
    }
  	render() {
        return(
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">Them sam pham</h3>
                </div>
                <div class="panel-body">
                    <input type="text" ref="name" />
                    <button type="button" class="btn btn-info" onClick = {()=>{this.click()}}>Them</button>
                </div>
            </div>
        );
  	}
}

export default App;
