import { AUTH, LOGOUT, AUTH_ERROR } from "../constants//actionTypes.js";

const reducer = (state = { authData: null }, action) => {
    if (action.type === AUTH) {
        localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
        return { ...state, authData: action?.data };
    }
    if (action.type === LOGOUT) {
        localStorage.clear();
        return { ...state, authData: null };
    }
    if (action.type === AUTH_ERROR) {
        return { ...state, errorMessage: action.payload };
    }
    return state;
};

export default reducer;
