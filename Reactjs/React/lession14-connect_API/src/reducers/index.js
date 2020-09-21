import {combineReducers} from 'redux';
import products from './products';
import itemEditing from './itemEditing';
import preventFetchData from './preventFetchData';

const appReducers = combineReducers({
	products : products,
	itemEditing : itemEditing,
	preventFetchData : preventFetchData
});

export default appReducers;