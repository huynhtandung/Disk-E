import * as types from './../constants/ActionTypes';

export const listAll = () =>{
	return {
		type: types.LIST_ALL
	}
}

export const addTask = (task)=>{
	return {
		type: types.ADD_TASK,
		task: task
	}
}

export const toggleForm = ()=>{
	return{
		type: types.TOGGLE_FORM
	}
}

export const openForm = ()=>{
	return{
		type: types.OPEN_FORM
	}
}

export const closeForm = ()=>{
	return{
		type: types.CLOSE_FORM
	}
}

export const changeStatus = (id)=>{
	return {
		type: types.CHANGE_STATUS,
		id: id
	}
}

export const deleteTask = (id)=>{
	return {
		type: types.DELETE_TASK,
		id: id
	}
}

export const editTask = (task) =>{
	return{
		type: types.EDIT_TASK,
		task: task
	}
}

export const filterTable = (filter) =>{
	return{
		type: types.FILTER_TABLE,
		filter: filter
	}
}

export const search = (key) =>{
	return{
		type: types.SEARCH,
		data: key
	}
}

export const sort = (ob) =>{
	return {
		type : types.SORT,
		sort: ob
	}
}