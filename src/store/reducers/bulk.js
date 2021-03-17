import {DISPLAY_BULK_ACTION} from '../actions/bulk';
const initialState = {
    isDisplay: false,
    task: {}
}
export default function bulk(state = initialState, action) {
    switch (action.type) {
        case DISPLAY_BULK_ACTION:
            let newState = {}
            if (state.isDisplay){
                newState = {
                    isDisplay:false,
                    task: {}
                }
            } else {
                newState = {
                    isDisplay: true,
                    task: action.payload
                }
            }
            return newState;
        default:
            return state;
    }
}