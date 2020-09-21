import * as types from './../constants/ActionTypes';

var initialState = null;
var myReducer = (state = initialState, action)=>{
	switch(action.type){
		case types.SEARCH:
			state = action.data;
			//console.log(action);
			return state;
		default: return state;
	}
}

export default myReducer;