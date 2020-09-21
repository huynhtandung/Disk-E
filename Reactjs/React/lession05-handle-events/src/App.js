import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './Components/Product';

class App extends Component {
    click(){
        alert("Click me");
    }
  	render() {
        var ip = [
            {
                id: 1,
                name: "IPhone 5",
                price: "5000000"
            },
            {
                id: 2,
                name: "IPhone 6",
                price: "6000000"
            },
            {
                id: 3,
                name: "IPhone XS",
                price: "7000000"
            }
        ];

        var elements = ip.map((ip, index) =>
        {
            return <Product
                        key={ip.id}
                        name={ip.name}
                        price={ip.price}
                   ></Product>
        });
    	return (
            <div className="col-md-12">
                {elements}
                <button type="button" className="btn btn-default" onClick= { () => {this.click()} } >Click me</button>
            </div>   
   		);
  	}
}

export default App;
