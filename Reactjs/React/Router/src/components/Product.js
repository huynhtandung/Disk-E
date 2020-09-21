import React, { Component } from 'react';

class Product extends Component {
	render() {
		var {match} = this.props;
		var name = match.params.name;
		return (
		 	<div>
		 		Day la chi tiet san pham &nbsp;
		 		{name}
		 	</div>
		);
	}
}

export default Product;
