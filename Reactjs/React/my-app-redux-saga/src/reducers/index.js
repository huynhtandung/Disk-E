import {combineReducers} from 'redux';
import taskReducer from './task';
import uiReducer from './ui';
import modalReducer from './modal';
import { reducer as formReducer } from 'redux-form';


const rootReducer = combineReducers({
    task : taskReducer,
    modal : modalReducer,
    ui : uiReducer,
    form : formReducer
});

export default rootReducer;
