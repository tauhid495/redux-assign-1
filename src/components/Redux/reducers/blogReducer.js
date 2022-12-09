import { ADD_TO_HISTORY, LOAD_BLOG, POST_BLOG } from "../actionTypes/actionTypes";

const initialState = {
    history: [],
    blogs: [],
};

const blogReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_TO_HISTORY:
            return {
                ...state,
                history: [...state.history, action.payload],
            };

        case LOAD_BLOG:
            return {
                ...state,
                blogs: action.payload,
            };

        case POST_BLOG:
            return {
                ...state,
                blogs: [...state.blogs, action.payload],
            };

        default:
            return state;
    }
};


export default blogReducer;