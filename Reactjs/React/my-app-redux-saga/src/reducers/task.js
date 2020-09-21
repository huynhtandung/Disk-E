import * as taskConstants from './../constants/task';
import {toastError} from './../helpers/toastHelper';

const initialState = {
    listTask : [],
    taskEditting : null
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case taskConstants.FETCH_TASK : {
            return{
                ...state,
                listTask : []
            };
        }
        case taskConstants.FETCH_TASK_SUCCESS :{
            const {data} = action.payload;
            return {
                ...state,
                listTask : data
            };
        }
        case taskConstants.FETCH_TASK_FAIL :{
            const {error} = action.payload;
            toastError(error);
            return {
                ...state,
                listTask : []
            };
        }
        case taskConstants.FILTER_TASK_SUCCESS : {
            const {data} = action.payload;
            return{
                ...state,
                listTask : data
            };
        }
        case taskConstants.ADD_TASK : {
            return{
                ...state
            };
        }
        case taskConstants.ADD_TASK_SUCCESS : {
            const {data} = action.payload;
            return{
                ...state,
                listTask : [data].concat(state.listTask)
            };
        }
        case taskConstants.ADD_TASK_FAIL : {
            const {error} = action.payload;
            toastError(error);
            return{
                ...state
            };
        }
        case taskConstants.SET_TASK_EDITTING : {
            return{
                ...state,
                taskEditting : action.payload.task
            };
        }
        case taskConstants.EDIT_TASK : {
            return{
                ...state,
                taskEditting : action.payload.task
            };
        }
        default :
            return state;
    }
};

export default reducer;
