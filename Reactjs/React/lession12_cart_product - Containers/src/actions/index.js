import * as types from './../constants/ActionType';

export const actAddToCart = (product, quantity) =>{
	return {
		type : types.ADD_TO_CART,
		product,
		quantity
	}
}

export const actMinusToCart = (product, quantity) =>{
	return {
		type : types.MINUS_TO_CART,
		product,
		quantity
	}
}

export const actChangeMessage = (message) =>{
	return{
		type : types.CHANGE_MESSAGE,
		message : message
	}
}

export const actDeleteProductInCart = (product) =>{
	return{
		type : types.DELETE_PRODUCT_IN_CART,
		product : product
	}
}
