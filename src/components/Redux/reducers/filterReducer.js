import { TOGGLE_GENDER, TOGGLE_STATUS } from "../actionTypes/actionTypes";

export const initialState = {

    gender: [],
    status: false,

    keyword: '',
};

export const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_GENDER:
            if (!state.gender.includes(action.payload)) {
                return {
                    ...state,
                    gender: [...state.gender, action.payload],
                };
            } else {
                return {
                    ...state,
                    gender: state.gender.filter((gender) => gender !== action.payload,)
                };
            }

        case TOGGLE_STATUS:
            return {
                ...state,
                status: !state.status,
            };

        default:
            return state;
    }
};