import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class ProductItem extends Component {
	onDelete = (id) => {
		if(confirm('Ban chac chan muon xoa ?')){//eslint-disable-line
			this.props.onDelete(id);
		}
	}
	render() {
		var {product, index} = this.props;
		
		var statusName = product.state ? "Available" : "Out Of Order";
		var statusClass = product.state ? "warning" : "default";
		return (
			<tr>
				<td>{index+1}</td>
				<td>{product.code}</td>
				<td>{product.name}</td>
				<td>{product.price}</td>
				<td>
					<span className={`label label-${statusClass}`}>
						{statusName}
					</span>
				</td>
				<td>
					<Link className="btn btn-success margin_right_10"
						to={`/product/${product.id}/edit`}
					>
						&nbsp;&nbsp;Edit&nbsp;&nbsp;
					</Link>
					<button type="button" className="btn btn-danger"
						onClick={()=>this.onDelete(product.id)}
					>
						Delete
					</button>
				</td>
			</tr>
		);
	}
}

export default ProductItem;
