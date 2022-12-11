import { ADD_TO_HISTORY, DELETE_BLOG, LOAD_BLOG, LOAD_BLOG_ID, POST_BLOG } from "../actionTypes/actionTypes";

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

        case LOAD_BLOG_ID:
            return {
                ...state,
                blogs: action.payload,
            };


        case POST_BLOG:
            return {
                ...state,
                blogs: [...state.blogs, action.payload],
            };

        case DELETE_BLOG:
            return {
                ...state,
                blogs: state.blogs.filter(
                    (blog) => blog._id !== action.payload
                ),
            };

        default:
            return state;
    }
};


export default blogReducer;