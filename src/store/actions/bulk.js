export const DISPLAY_BULK_ACTION = "DISPLAY_BULK_ACTION";

export function displayBulkAction(data) {
    return {
        type: DISPLAY_BULK_ACTION,
        payload: data
    }
}