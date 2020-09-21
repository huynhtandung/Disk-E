import * as taskConstants from './../constants/task';

export const  fetchListTask = (params = {}) => {
    return{
        type : taskConstants.FETCH_TASK,
        payload : {
            params
        }
    };
};
export const  fetchListTaskSuccess = (data) => {
    //console.log(data);
    return{
        type : taskConstants.FETCH_TASK_SUCCESS,
        payload : {
            data
        }
    };
};
export const  fetchListTaskFail = (error) => {
    return{
        type : taskConstants.FETCH_TASK_FAIL,
        payload : {
            error
        }
    };
};
export const  addTask = (title, description) => {
    //console.log('Action: ', description);
    return{
        type : taskConstants.ADD_TASK,
        payload : {
            title,
            description
        }
    };
};
export const  addTaskSuccess = (data) => {
    //console.log(data);
    return{
        type : taskConstants.ADD_TASK_SUCCESS,
        payload : {
            data
        }
    };
};
export const  addTaskFail = (error) => {
    return{
        type : taskConstants.ADD_TASK_FAIL,
        payload : {
            error
        }
    };
};
/*export const fetchListTaskRequest = () =>{
    return dispatch => {
        dispatch(fetchListTask());
        taskApis.getList().then(resp=>{
            const {data} = resp;
            dispatch(fetchListTaskSuccess(data));
        }).catch(error=>{
            dispatch(fetchListTaskFail(error));
        });
    };
};*/

export const filterTask = keyword =>({
    type : taskConstants.FILTER_TASK,
    payload : {
        keyword,
    }
});

export const filterTaskSuccess = data => ({
    type : taskConstants.FILTER_TASK_SUCCESS,
    payload : {
        data
    }
});

export const setTaskEditting = task => {
    return{
        type : taskConstants.SET_TASK_EDITTING,
        payload : {
            task
        }
    };
};

export const  editTask = (task) => {
    //console.log('Action: ', description);
    return{
        type : taskConstants.EDIT_TASK,
        payload : {
            task
        }
    };
};
export const  editTaskSuccess = (data) => {
    //console.log(data);
    return{
        type : taskConstants.EDIT_TASK_SUCCESS,
        payload : {
            data
        }
    };
};
export const  editTaskFail = (error) => {
    return{
        type : taskConstants.EDIT_TASK_FAIL,
        payload : {
            error
        }
    };
};


