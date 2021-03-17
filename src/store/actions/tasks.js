export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const CHECKED_TASK = 'CHECKED_TASK';

export function addTask(tasks) {
    return {
        type: ADD_TASK,
        payload: tasks
    }
}
export function removeTask(task) {
    return {
        type: REMOVE_TASK,
        payload: task
    }
}
export function updateTask(data) {
    return {
        type: UPDATE_TASK,
        payload: data
    }
}
export function checkedTask(data) {
    return {
        type: CHECKED_TASK,
        payload: data
    }
}