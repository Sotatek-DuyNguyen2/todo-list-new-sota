import { ADD_TASK, REMOVE_TASK, UPDATE_TASK } from '../actions/tasks';

export default function tasks(state = [], action) {
    switch (action.type) {
        case ADD_TASK:
            const sortTasks = state.concat([action.payload])
            // .sort((a,b) => {
            //     return new Date(a.date).getTime() - new Date(b.date).getTime() 
            // })
            return sortTasks;
            
        case REMOVE_TASK:
            const newState = state.filter(item => item !== action.payload);
            return newState;
            
        case UPDATE_TASK:
            const updateState = state.map(item => {
                if(item === action.payload.oldTask) {
                    return action.payload.newTask
                }
                return item;
            });
            return updateState;
        default:
            return state;
    }
}