import React, { Component } from 'react';
import ProductList from './../../components/ProductList/ProductList';
import ProductItem from './../../components/ProductItem/ProductItem';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {actFetchProductsRequest, actDeleteProductRequest, actPreventFetchData} from './../../actions/index';

class ProductListPage extends Component {
	componentDidMount(){
		//if(this.props.preventFetchData === 0){
			this.props.fetchAllProducts();
			//this.props.onPreventFetchData();
		//}
	}
	onDelete = (id) => {
		//var id = '5d024a08110d2305d4287083';
		//console.log(id);
		this.props.onDeleteProduct(id);
	}
	render() {		
		var {products} = this.props;
		//console.log(products);
		//console.log('Hello');
		return (
			
			<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
				<Link to='./product/add' className="btn btn-success">
					Add Product
				</Link>
			
				<ProductList>
					{this.showProducts(products)}
				</ProductList>
			</div>
		);
	}
	showProducts = (products) => {
		//this.props.fetchAllProducts();
		var result = null;
		if(products.length > 0){
			result = products.map((product, index)=>{
				return(
					<ProductItem
						key={index}
						product={product}
						index={index}
						onDelete={this.onDelete}
					/>
				)
			})
		}
		return result;
	}
}
const mapStateToProps = state =>{
	return{
		products : state.products,
		preventFetchData : state.preventFetchData
	}
}
const mapDispatchToProps = (dispatch, props) => {
	return{
		fetchAllProducts : () => {
			dispatch(actFetchProductsRequest())
		},
		onDeleteProduct : (id) => {
			dispatch(actDeleteProductRequest(id))
		},
		onPreventFetchData : () =>{
			dispatch(actPreventFetchData())
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
