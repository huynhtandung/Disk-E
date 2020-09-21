import * as Types from './../constants/ActionTypes';

var initialState = 0;

const preventFetchData = (state = initialState, action) => {
	switch(action.type){
		case Types.PREVENT_FETCH_DATA:
			state = 1;
			return state;
		default : return state;
	}
}

export default preventFetchData;