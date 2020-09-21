import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {actAddProdcutRequest, actGetDataUpdateRequest, actUpdateProdcutRequest} from './../../actions/index';
import {connect} from 'react-redux';

class ProductActionPage extends Component {
	constructor(props){
		super(props);
		this.state = {
			id : '',
			txtName : '',
			txtPrice : '',
			chkStatus : false,
		}
	}
	componentDidMount(){
		var {match} = this.props;
		if(match){
			var id = match.params.id;
			this.props.onGetDataUpdate(id);
		}
	}
	componentWillReceiveProps(nextProps){
		var {itemEditing} = nextProps;
		//console.log(itemEditing[0]);
		this.setState({
			id : itemEditing._id,
			txtName : itemEditing.name,
			txtPrice : itemEditing.price,
			chkStatus : itemEditing.state
		})
		//console.log(this.state.id);
	}

	onChange = (event) => {
		var target = event.target;
		var name = target.name;
		var value = target.type === 'checkbox' ? target.checked : target.value;
		this.setState({
			[name] : value
		})
	}
	onSave = (event) =>{
		event.preventDefault();
		var {id, txtName, txtPrice, chkStatus} = this.state;
		var {history} = this.props;
		var newProduct = {
			name : txtName,
			price : txtPrice,
			state : chkStatus
		}
		if(id === ''){
			this.props.onAddProduct(newProduct);
			
		}else{
			this.props.onUpdateProduct(this.state);
			
		}
		
	
		history.goBack();
	}
	render() {
		var {txtName, txtPrice, chkStatus} = this.state;
		return (
			<div className="container" onSubmit={this.onSave}>
				<form>
					<div className="form-group">
						<label>Product Name</label>
						<input name='txtName' type="text" 
							className="form-control" id="" 
							placeholder="Input field" 
							value={txtName}
							onChange={this.onChange}
						/>
					</div>
					<div className="form-group">
							<label>Product Price</label>
							<input name='txtPrice' type="text" 
							className="form-control" id="" 
							placeholder="Input field"
							value={txtPrice}
							onChange={this.onChange}
						/>
					</div>
					<div className="form-group">
						<label>Product Status</label>
						<div className="checkbox">
							<label>
								<input name='chkStatus' 
								type="checkbox"
								value={chkStatus}
								checked={chkStatus}
								onChange={this.onChange}
							/>
								Available
							</label>
						</div>
					</div>				
					<button type="submit" className="btn btn-primary">Save</button>
					<Link to='/product-list' className="btn btn-danger">Back</Link>
				</form>
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	return{
		itemEditing : state.itemEditing
	}
}
const mapDispatchToProps = (dispatch, props) => {
	return{
		onAddProduct : (product) => {
			dispatch(actAddProdcutRequest(product))
		},
		onGetDataUpdate : (id) =>{
			dispatch(actGetDataUpdateRequest(id))
		},
		onUpdateProduct : (product) =>{
			dispatch(actUpdateProdcutRequest(product))
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);
