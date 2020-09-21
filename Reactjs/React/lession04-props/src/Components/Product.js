import React, { Component } from 'react';
import realme_c1 from '../realme_c1.jpg'
class Product extends Component {
  	render() {
    	return (
    		<div class="col-md-4">
    			<div class="thumbnail">
    				<img src={realme_c1} alt="" />
    				<div>{this.props.children}</div>
    				<div class="caption">
    					<h3>{this.props.name}</h3>
    					<p>
    						{this.props.price}
    					</p>
    					<p>
    						<a href="#" class="btn btn-primary">Detail</a>
    						<a href="#" class="btn btn-default">Buy</a>
    					</p>
    				</div>
    			</div>
    		</div>
   		);
  	}
}

export default Product;
