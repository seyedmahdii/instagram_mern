import { AUTH, LOGOUT } from "../constants//actionTypes.js";

const reducer = (state = { authData: null }, action) => {
    if (action.type === AUTH) {
        localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
        return { ...state, authData: action?.data };
    }
    if (action.type === LOGOUT) {
        localStorage.clear();
        return { ...state, authData: null };
    }
    return state;
};

export default reducer;
