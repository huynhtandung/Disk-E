import * as types from './../constants/ActionType';

export const addToCart = (item) =>{
	return {
		type : types.ADD_TO_CART,
		item : item
	}
}

export const removeToCart = (item) =>{
	return{
		type : types.REMOVE_TO_CART,
		item : item
	}
}

export const minusToCart = (id) =>{
	return{
		type : types.MINUS_TO_CART,
		id : id
	}
}

export const changeMessage = (message) =>{
	return{
		type : types.CHANGE_MESSAGE,
		message : message
	}
}
