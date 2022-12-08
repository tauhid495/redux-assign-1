import { ADD_TO_HISTORY } from "../actionTypes/actionTypes";

const initialState = {
    history: [],
};

const blogReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_HISTORY:
            return {
                ...state,
                history: [...state.history, action.payload],
            };


        default:
            return state;
    }
};


export default blogReducer;