import * as types from './../constants/ActionTypes';

var s4 =()=>{
    return Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1);
}

var generateID =()=>{
    return s4() + '-' + s4() + '-' + s4() + '-' + s4();
}


var data = JSON.parse(localStorage.getItem('tasks'));
var initialState = data ? data : [];

var findIndex = (tasks, id)=>{
    var result = -1;
    tasks.forEach((task, index)=>{
        if(task.id === id){
            result = index;
        }
    });
    return result;
}

var index;

var myReducer = (state = initialState, action) =>{
	switch(action.type){
		case types.LIST_ALL:
			return state;
		case types.ADD_TASK:
			if(action.task.id === ''){
				var newTask = {
					id: generateID(),
					name: action.task.name,
					status: action.task.status
				}
				state.push(newTask);
			}else{
				index = findIndex(state, action.task.id);
				if(index !== -1){
		           	state[index] = {
						...state[index],
						name: action.task.name,
						status: action.task.status
					};
        		}
			}
			localStorage.setItem('tasks', JSON.stringify(state));
			return [...state];
		case types.CHANGE_STATUS:
			index = findIndex(state, action.id);
			//state[index].status = !state[index].status;
			if(index !== -1){
	           	state[index] = {
					...state[index],
					status: !state[index].status
				};
	            localStorage.setItem('tasks', JSON.stringify(state));
        	}
        	return [...state];
        case types.DELETE_TASK:
        	index = findIndex(state, action.id);
        	if(index !== -1){
        		state.splice(index, 1);
        		localStorage.setItem('tasks', JSON.stringify(state));
        	}
        	return [...state];
        /*case types.FILTER_TABLE:
        	var name = action.filter.name;
        	var status = +action.filter.status;
        	if(action.filter){
	            if(action.filter.name){
	                state = state.filter((task)=>{
	                    return (task.name.toLowerCase().indexOf(name) !==-1);
	                });
	            }
	            state = state.filter((task)=>{
	                if(status === -1)
	                    return task;
	                else{
	                    return task.status === (status === 1 ? true : false)
	                }
	            });
        	}
        	return [...state];*/
        case types.SORT:
        	if(action.sort.by === 'name'){
            	state.sort((a, b)=>{
	                if(a.name > b.name) return action.sort.value;
	                else if(a.name < b.name) return -action.sort.value;
	                else return 0;
            	});
        	}
	        if(action.sort.by === 'status'){
	            state.sort((a, b)=>{
	                if(a.status > b.status) return -action.sort.value;
	                else if(a.status < b.status) return action.sort.value;
	                else return 0;
	            });
	        }
        	return [...state];
		default: return state;
	}
}

export default myReducer;