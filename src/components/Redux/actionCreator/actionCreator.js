import { ADD_TO_HISTORY } from "../actionTypes/actionTypes"

export const addToHistory = (product) => {
    return {
        type: ADD_TO_HISTORY,
        payload: product,
    }
}