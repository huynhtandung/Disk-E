import React, { Component } from 'react';
import {NavLink, Route} from 'react-router-dom';
import Product from './Product';

class Products extends Component {
	render() {
		var products = [
			{
				id : 1,
				slug : 'iphone',
				name : 'IPhone X',
				price : 500
			},
			{
				id : 2,
				slug : 'samsung',
				name : 'Samsung S7',
				price : 400
			},
			{
				id : 3,
				slug : 'oppo',
				name : 'Ream Me C1',
				price : 300
			}
		];
		var {match} = this.props;
		var url = match.url;
		//danh sach cac san pham
		var result = products.map((product, index)=>{
			return (
				<NavLink to={`${url}/${product.slug}`} key={index}>
					<li className="list-group-item">
						{product.id} - {product.name} - {product.price}
					</li>
				</NavLink>
			)
		})

		//var {location} = this.props;
		//console.log(location);
		return (
		 	<div>
		 		<h1>
		 			Day la danh sach san pham
		 		</h1>
		 		<div className="row">
		 			<ul className="list-group">
		 				{result}	 				
		 			</ul>
		 		</div>
		 		<div className="row">
		 			<Route path="/products/:name" component={Product} />
		 		</div>
		 	</div>
		);
	}
}

export default Products;
