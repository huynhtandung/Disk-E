import * as types from './../constants/ActionType';
import * as message from './../constants/Message';

var initialState = message.MSG_WELCOME;

const messages = (state = initialState, action) =>{
	switch(action.type){
		case types.CHANGE_MESSAGE:
			state = action.message;
			return [...state];
		default: return [...state];
	}
}

export default messages;