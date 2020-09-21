import * as Types from './../constants/ActionTypes';
import callApi from './../utils/apiCaller';

export const actFetchProducts = (products) => {
	return{
		type : Types.FETCH_PRODUCTS,
		products
	}
}

export const actFetchProductsRequest = () => {
	return (dispatch) => {
		return callApi('projects', 'GET', null).then(res => {
			//console.log(res.data);
			dispatch(actFetchProducts(res.data))
		})
	}
}

export const actDeleteProduct = (id) => {
	return{
		type : Types.DELETE_PRODUCT,
		id
	}
}

export const actDeleteProductRequest = (id) => {
	return dispatch => {
		return callApi(`projects/${id}`, 'DELETE', null).then(res => {
			dispatch(actDeleteProduct(id))
		})
	}
}

export const actAddProdcut = (product) => {
	return{
		type: Types.ADD_PRODUCT,
		product
	}
}

export const actAddProdcutRequest = (product) =>{
	return dispatch => {
		return callApi('projects', 'POST', product).then(res =>{
			dispatch(actAddProdcut(res.data))
		})
	}
}

export const actUpdateProduct = (product) => {
	return{
		type : Types.UPDATE_PRODUCT,
		product
	}
}

export const actUpdateProdcutRequest = (product) =>{
	var newProduct = {
		name : product.txtName,
		price : product.txtPrice,
		status : product.chkStatus,
	}
	return dispatch => {
		return callApi(`products/${product.id}`, 'PUT', newProduct).then(res =>{
			dispatch(actUpdateProduct(res.data))
		})
	}
}

export const actGetDataUpdate = (product) =>{
	return{
		type : Types.GET_DATA_UPDATE,
		product
	}
}

export const actGetDataUpdateRequest = (id) => {
	return dispatch => {
		return callApi(`products/${id}`,'GET', null).then(res =>{
			if(res)
				dispatch(actGetDataUpdate(res.data))
		})
	}
}