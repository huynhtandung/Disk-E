import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	showProduct(Product){
		if(Product.Status){
			return	<h3>
						ID: {Product.ID} <br />
						Name: {Product.Name} <br />
						Price: {Product.Price}
					</h3>	
		}
	}
  	render() {
  		var a = 5;
    	var b = 5;
    	var Product = {
    		ID: '01',
    		Name: 'Realme',
    		Price: 2490000,
    		Status: false
    	};

    	var users = [
    		{
    			id: 1,
    			name: 'Nguyen Van A', 
    			age: 18
    		},
    		{
    			id: 2,
    			name: 'Nguyen Van B', 
    			age: 18
    		},
    		{
    			id: 3,
    			name: 'Nguyen Van C', 
    			age: 18
    		}
    	];

    	var elements = users.map((user, index) => {
    		return 	<div key = { user.id }>
    					<h2>Ten: { user.name }</h2>
    					<h2>Tuoi: { user.age }</h2>
    				</div>
    	});

    	return (
    		<div>
	      		<nav className="navbar navbar-inverse">
	        		<div className="container-fluid">
	          			<a className="navbar-brand" href="#">Title</a>
	          			<ul className="nav navbar-nav">
	            			<li className="active">
	              				<a href="#">Home</a>
	            			</li>
	            			<li>
	              				<a href="#">Link</a>
	            			</li>
	          			</ul>
	        		</div>
	      		</nav>
	      		<h1>{ a } + { b } = { a + b }</h1>
	      		<h1>ID: { Product.ID } Name: { Product.Name } Price: { Product.Price }</h1>
	      		{ this.showProduct(Product) }
	      		<br />
	      		<hr />
	      		{ elements }
	      	</div>
   		);
  	}
}

export default App;
