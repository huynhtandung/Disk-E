import React, { Component } from 'react';
import realme_c1 from '../realme_c1.jpg'
class Product extends Component {
    click(text){
        alert(text + this.props.name +' '+this.props.price);
    }
  	render() {
    	return (
    		<div className="col-md-4">
    			<div className="thumbnail">
    				<img src={realme_c1} alt="" />
    				<div>{this.props.children}</div>
    				<div className="caption">
    					<h3>{this.props.name}</h3>
    					<p>
    						{this.props.price}
    					</p>
    					<p>
    						<a href="#" className="btn btn-primary">Detail</a>
    						<a href="#" className="btn btn-default" onClick = {()=>{this.click("San pham:")}}>Buy</a>
    					</p>
    				</div>
    			</div>
    		</div>
   		);
  	}
}

export default Product;
