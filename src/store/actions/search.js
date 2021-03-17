export const SEARCH_TASK = "SEARCH_TASK";

export function searchTask(value) {
    return {
        type: SEARCH_TASK,
        payload: value
    }
}