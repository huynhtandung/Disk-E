import * as types from './../constants/ActionType';

var data = JSON.parse(localStorage.getItem('CART'));
var initialState = data ? data : [];

/*var initialState = [
	{
		product : {
			id : 1,
			name : 'Iphone 7 Plus',
			image : 'https://cdn.tgdd.vn/Products/Images/42/78124/iphone-7-plus-gold-400x460.png',
			description : 'San pham do Apple san xuat',
			price : 500,
			inventory : 5,
			rating : 4
		},
		quantity : 2
	},
	{
		product : {
			id : 3,
			name : 'Real Me C1',
			image : 'https://cdn.tgdd.vn/Products/Images/42/193286/oppo-realme-c1-1-400x460.png',
			description : 'San pham do Oppo san xuat',
			price : 300,
			inventory : 7,
			rating : 5
		},
		quantity : 3
	}
]*/

const cart = (state = initialState, action) =>{
	var index = -1;
	switch(action.type){
		case types.ADD_TO_CART:
			index = findProductInCart(state, action.product);
			if(index !== -1){
				state[index].quantity += action.quantity;
			}
			else{
				state.push({
					product : action.product,
					quantity : action.quantity
				})
			}
			localStorage.setItem('CART',JSON.stringify(state));
			return [...state];

		case types.MINUS_TO_CART:
			index = -1;
			index = findProductInCart(state, action.product);
			if(index !== -1 ){
				if(state[index].quantity > 1){
					state[index].quantity += action.quantity;
				}				
			}
			localStorage.setItem('CART',JSON.stringify(state));
			return [...state];
		case types.DELETE_PRODUCT_IN_CART:
			index = -1;
			index = findProductInCart(state, action.product);
			if(index !== -1)
				state.splice(index, 1);
			localStorage.setItem('CART',JSON.stringify(state));
			return [...state];
		default: return [...state];
	}
}

var findProductInCart = (cart, product)=>{
	var index = -1;
	if(cart.length > 0){
		//console.log("cos");
		for(var i =0 ; i < cart.length; i++){
			if(cart[i].product.id === product.id){
				index = i;
				break;
			}
		}
	}
	return index;
}

export default cart;