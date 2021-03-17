import { createStore, combineReducers } from 'redux'; 
import tasks from './reducers/tasks';
import search from './reducers/search';

const allReducers = combineReducers({
    tasks,
    search
});

export const store = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);