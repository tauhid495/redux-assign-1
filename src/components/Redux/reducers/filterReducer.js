import { TOGGLE_DATE_TIME, TOGGLE_GENDER, TOGGLE_STATUS } from "../actionTypes/actionTypes";

export const initialState = {

    gender: [],
    status: false,
    toggleTime: false,

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

        case TOGGLE_DATE_TIME:
            return {
                ...state,
                toggleTime: !state.toggleTime,
            };


        default:
            return state;
    }
};