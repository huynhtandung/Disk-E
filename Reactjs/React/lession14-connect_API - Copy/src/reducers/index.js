import {combineReducers} from 'redux';
import products from './products';
import itemEditing from './itemEditing';

const appReducers = combineReducers({
	products : products,
	itemEditing : itemEditing
});

export default appReducers;