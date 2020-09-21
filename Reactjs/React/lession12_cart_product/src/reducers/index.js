import { combineReducers } from 'redux';
import products from './products';
import carts from './carts';
import messages from './messages';

const appReducers = combineReducers({
	products : products,
	carts : carts,
	messages : messages
});

export default appReducers;