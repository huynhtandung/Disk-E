import * as Types from './../constants/ActionTypes';
import callApi from './../utils/apiCaller';

export const actFetchProducts = (products) => {
	//console.log(products);
	console.log('Luu data vao store');
	return{
		type : Types.FETCH_PRODUCTS,
		products
	}
}

export const actFetchProductsRequest = () => {
	console.log('Lay data tu database xuong');
	return (dispatch) => {
		return callApi('projects', 'GET', null).then(res => {
			console.log(res);
			dispatch(actFetchProducts(res.data))
			//console.log(res.data)
		})
	}
}

export const actDeleteProduct = (id) => {
	console.log('Xoa du lieu tren store');
	return{
		type : Types.DELETE_PRODUCT,
		id
	}
}

export const actDeleteProductRequest = (id) => {
	console.log('Xoa du lieu tren database');
	return dispatch => {
		return callApi(`projects/delete/${id}`, 'DELETE', null).then(res => {
			dispatch(actDeleteProduct(id))
		})
	}
}

export const actAddProdcut = (product) => {
	console.log('Them du lieu vao store');
	return{
		type: Types.ADD_PRODUCT,
		product
	}
}

export const actAddProdcutRequest = (product) =>{
	console.log('Them du dieu vao database');
	return dispatch => {
		return callApi('projects', 'POST', product).then(res =>{
			//dispatch(actAddProdcut(res.data))
		})
	}
}

export const actUpdateProduct = (product) => {
	console.log('Sua du lieu trong store');
	return{
		type : Types.UPDATE_PRODUCT,
		product
	}
}

export const actUpdateProdcutRequest = (product) =>{
	console.log('Sua du lieu tren db');
	var newProduct = {
		name : product.txtName,
		price : product.txtPrice,
		state : product.chkStatus,
	}
	return dispatch => {
		return callApi(`projects/edit/${product.id}`, 'PUT', newProduct).then(res =>{
			dispatch(actUpdateProduct(res.data))
		})
	}
}

export const actGetDataUpdate = (product) =>{
	//console.log(product);
	return{
		type : Types.GET_DATA_UPDATE,
		product
	}
}

export const actGetDataUpdateRequest = (id) => {
	return dispatch => {
		return callApi(`projects/${id}`,'GET', null).then(res =>{
			if(res)(
				dispatch(actGetDataUpdate(res.data))
			)
		})
	}
}

export const actPreventFetchData = () => {
	return {
		type : Types.PREVENT_FETCH_DATA,
	}
}
