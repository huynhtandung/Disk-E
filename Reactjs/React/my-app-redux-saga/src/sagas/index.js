import {fork, take, call, put, delay, takeLatest, select, takeEvery, actionChannel} from 'redux-saga/effects';
import * as taskTypes from './../constants/task';
import {getList, addTask, editTask} from './../apis/task';
import {STATUS_CODE, STATUSES} from './../constants';
import { fetchListTaskSuccess, fetchListTaskFail, filterTaskSuccess, addTaskSuccess, addTaskFail, fetchListTask } from '../action/task';
import { showLoading, hideLoading } from '../action/ui';
import { hideModal } from '../action/modal';
//import {showLoading, hideLoading} from '../action/ui';

function* watchFetchListTaskAction(){
    while(true){
        const action = yield take(taskTypes.FETCH_TASK);
        //yield put(showLoading());
        const {params} = action.payload;
        const res = yield call(getList, params);
        const {status, data} = res;
        if(status === STATUS_CODE.SUCCESS){
            //dispatch fetchListTaskSuccess
            yield put(fetchListTaskSuccess(data));
        }else{
            yield put(fetchListTaskFail(data));
        }
        //yield delay(1000);
        //yield put(hideLoading());
    }
    //console.log(res);
};

function* watchCreateTaskAction(){
    yield 'OK';
    //console.log('watchCreateTaskAction');
};

function* fileterTaskSaga({payload}){
    yield delay(500);
    const {keyword} = payload;
    yield put(fetchListTask({
        q : keyword
    }));
}

function* rootSaga(){
    yield fork(watchFetchListTaskAction);
    yield fork(watchCreateTaskAction);
    yield takeLatest(taskTypes.FILTER_TASK, fileterTaskSaga);
    yield takeEvery(taskTypes.ADD_TASK, addTaskSaga);
    yield takeEvery(taskTypes.EDIT_TASK, editTaskSaga);
};

function * editTaskSaga({payload}){
    const {task} = payload;
    console.log('Da goi ham nay');
    yield call(editTask, task);
    yield put(hideModal());
};

function * addTaskSaga({payload}){
    const {title, description} = payload;
    //console.log(description);
    yield put(showLoading());
    const res = yield call(addTask, {
        title,
        description,
        status : STATUSES[0].value
    });
    const {data, status} = res;
    if(status === STATUS_CODE.CRETATED){
        yield put(addTaskSuccess(data));
        yield put(hideModal());
    }else{
        yield put(addTaskFail(data));
    }
    yield put(hideLoading());
}



export default rootSaga;
