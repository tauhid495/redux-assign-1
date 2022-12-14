import nextId from "react-id-generator";
import { ADD_TO_HISTORY, DELETE_BLOG, LOAD_BLOG, LOAD_BLOG_ID, POST_BLOG } from "../actionTypes/actionTypes";

const initialState = {
    history: [],
    blogs: [],
    historyId: 0,
};

const blogReducer = (state = initialState, action) => {

    const inHistory = state.history.find((blog) => blog._id === action.payload._id)
    const historyId = nextId();


    // console.log(inHistory);

    switch (action.type) {

        case ADD_TO_HISTORY:

            if (inHistory) {
                return {
                    ...state,
                    history: state.history.filter(
                        (blog) => blog.id !== action.payload
                    ),
                };
            }
            else {
                return {
                    ...state,
                    history: [...state.history, { ...action.payload, historyId: historyId }],
                };
            }

        case LOAD_BLOG:
            return {
                ...state,
                blogs: action.payload,
            };

        case LOAD_BLOG_ID:
            return {
                ...state,
                blogs: state.blogs.filter(
                    (blog) => blog._id === action.payload
                )
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