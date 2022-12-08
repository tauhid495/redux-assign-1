import { ADD_TO_HISTORY, LOAD_BLOG } from "../actionTypes/actionTypes"

export const addToHistory = (product) => {
    return {
        type: ADD_TO_HISTORY,
        payload: product,
    }
};

export const loadBlog = (data) => {
    return {
        type: LOAD_BLOG,
        payload: data,
    };
};