import * as Types from './../constants/ActionTypes';
var initialState = [];

var findIndex = (products, id) => {
	var result = -1;
	products.forEach((product, index)=>{
		if(product.id === id){
			result = index;
		}
	})
	return result;
}

const products = (state = initialState, action) => {
	switch(action.type){
		case Types.FETCH_PRODUCTS:
			state = action.products;
			return [...state];
		case Types.DELETE_PRODUCT:
			var index = findIndex(state, action.id);
			if(index !== -1){
				state.splice(index, 1);
			}
			return [...state];
		case Types.ADD_PRODUCT:
			var newProduct = action.product;
			state.push(newProduct);
			return [...state];
		case Types.UPDATE_PRODUCT:
			index = findIndex(state, action.product.id);
			state[index] = {
				...state[index],
				name : action.product.name,
				price : action.product.price,
				status : action.product.status
			}
			console.log(state[index]);
			return [...state];
		default : return [...state];
	}
}

export default products;