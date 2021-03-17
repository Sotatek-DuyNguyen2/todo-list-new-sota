import {SEARCH_TASK} from '../actions/search';

export default function search(state = "", action) {
    switch (action.type) {
        case SEARCH_TASK:
            return action.payload;
        default:
            return state;
    }
}