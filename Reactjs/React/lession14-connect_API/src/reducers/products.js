import * as Types from './../constants/ActionTypes';
import callApi from './../utils/apiCaller';
import {actFetchProductsRequest, actFetchProducts} from './../actions/index';

var initialState = [];

//console.log(initialState);

var findIndex = (products, id) => {
	var result = -1;
	products.forEach((product, index)=>{
		if(product._id === id){
			result = index;
		}
	})
	return result;
}

const products = (state = initialState, action) => {
	switch(action.type){
		case Types.FETCH_PRODUCTS:
			state = action.products;
			//console.log(state);
			return [...state];
		case Types.DELETE_PRODUCT:
			var index = findIndex(state, action.id);
			//console.log(index);
			if(index !== -1){
				state.splice(index, 1);
			}
			return [...state];
		case Types.ADD_PRODUCT:
			//console.log("them");
			var newProduct = action.product;
			var index = -1;
			index = findIndex(state, action.product.id);
			//if(index === -1)
				state.push(newProduct);
			return [...state];
		case Types.UPDATE_PRODUCT:
			index = findIndex(state, action.product._id);
			//console.log(index);
			state[index] = {
				...state[index],
				name : action.product.name,
				price : action.product.price,
				state : action.product.state
			}
			console.log(state[index]);
			return [...state];
		default : return [...state];
	}
}

export default products;