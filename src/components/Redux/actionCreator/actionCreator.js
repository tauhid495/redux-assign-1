import { ADD_TO_HISTORY, DELETE_BLOG, LOAD_BLOG, LOAD_BLOG_ID, POST_BLOG } from "../actionTypes/actionTypes"

export const addToHistory = (blog) => {
    return {
        type: ADD_TO_HISTORY,
        payload: blog,
    }
};

export const loadBlog = (data) => {
    return {
        type: LOAD_BLOG,
        payload: data,
    };
};
export const loadBlogbyId = (data) => {
    return {
        type: LOAD_BLOG_ID,
        payload: data,
    };
};

export const postBlog = (data) => {
    return {
        type: POST_BLOG,
        payload: data,
    };
};

export const deleteBlog = (id) => {
    return {
        type: DELETE_BLOG,
        payload: id,
    };
};