import { TOGGLE_GENDER, TOGGLE_STATUS } from "../actionTypes/actionTypes"

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