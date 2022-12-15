import { TOGGLE_DATE_TIME, TOGGLE_GENDER, TOGGLE_STATUS } from "../actionTypes/actionTypes"

export const toggleGender = (gender) => {
    return {
        type: TOGGLE_GENDER,
        payload: gender,
    };
};

export const toggleStatus = () => {
    return {
        type: TOGGLE_STATUS,

    };
};

export const toggleDateTime = () => {
    return {
        type: TOGGLE_DATE_TIME,

    };
};