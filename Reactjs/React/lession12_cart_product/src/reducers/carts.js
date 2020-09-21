import * as types from './../constants/ActionType';

var data = JSON.parse(localStorage.getItem('carts'));
var initialState = data ? data : [];

var findIndex = (array, id)=>{
    var result = -1;
    array.forEach((item, index)=>{
        if(item.id === id){
            result = index;
        }
    });
    return result;
}

var products = JSON.parse(localStorage.getItem('products'));
var checkInventory = (array,id)=>{
	var index = findIndex(array, id);
	if(array[index].inventory <=0 )
		return 0;
	else
		return 1;
}

const carts = (state = initialState, action) =>{
	switch(action.type){
		case types.ADD_TO_CART:
			var products = JSON.parse(localStorage.getItem('products'));
			if(checkInventory(products, action.item.id) === 1){
				var index = findIndex(state, action.item.id);
				if(index !== -1)
					state[index] = {
						...state[index],
						quantity: state[index].quantity + 1
					};
				else
					state.push(action.item);

				index = findIndex(products, action.item.id);
				products[index] = {
					...products[index],
					inventory : products[index].inventory - 1
				};
				localStorage.setItem('products', JSON.stringify(products));
				localStorage.setItem('carts', JSON.stringify(state));
			}
			return [...state];
		case types.MINUS_TO_CART:
			var index = findIndex(state, action.id);
			if(state[index].quantity > 1){
				state[index] = {
					...state[index],
					quantity : state[index].quantity - 1
				}
				var products = JSON.parse(localStorage.getItem('products'));
				index = findIndex(products, action.id);
				products[index] = {
					...products[index],
					inventory : products[index].inventory + 1
				}
				localStorage.setItem('products', JSON.stringify(products));
				localStorage.setItem('carts', JSON.stringify(state));
			}
			return [...state];
		case types.REMOVE_TO_CART:
			var index = findIndex(state, action.item.id);
			state.splice(index, 1);
			var products = JSON.parse(localStorage.getItem('products'));
			index = findIndex(products, action.item.id);
			products[index] = {
				...products[index],
				inventory : products[index].inventory + action.item.quantity
			}
			localStorage.setItem('products', JSON.stringify(products));
			localStorage.setItem('carts', JSON.stringify(state));
			return [...state];
		default: return [...state];
	}
}

export default carts;