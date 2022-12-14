import moment from "moment";
import { ADD_TO_HISTORY, DELETE_BLOG, LOAD_BLOG, LOAD_BLOG_ID, POST_BLOG } from "../actionTypes/actionTypes";

const initialState = {
    history: [],
    blogs: [],
};

const blogReducer = (state = initialState, action) => {

    const inHistory = state.history.find((blog) => blog._id === action.payload._id)


    // console.log(inHistory);

    switch (action.type) {

        case ADD_TO_HISTORY:
            const now = moment.now();
            if (inHistory) {
                return {
                    ...state,
                    history: [...state.history.filter(
                        (blog) => blog._id !== action.payload._id
                    ), { ...action.payload, date: now }]

                };
            }
            else {
                return {
                    ...state,
                    history: [...state.history, { ...action.payload, date: now }],
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