import * as types from './../constants/ActionTypes';

var initialState = null;

var myReducer = (state = initialState, action)=>{
	switch(action.type){
		case types.EDIT_TASK:
			state = action.task;
			return action.task;
		default: return state;
	}
}

export default myReducer;