import {
    END_LOADING,
    SEARCH_USERS,
    START_LOADING,
    UPDATE_USER_PROFILE,
    GET_USER_PROFILE,
    UPDATE,
} from "../constants/actionTypes.js";

const reducer = (state = { isLoading: true, users: [], user: {} }, action) => {
    if (action.type === SEARCH_USERS) {
        return { ...state, users: action.payload };
    }
    if (action.type === START_LOADING) {
        return { ...state, isLoading: true };
    }
    if (action.type === END_LOADING) {
        return { ...state, isLoading: false };
    }
    if (action.type === UPDATE_USER_PROFILE) {
        return { ...state, user: action.payload };
    }
    if (action.type === GET_USER_PROFILE) {
        return { ...state, user: action.payload };
    }
    if (action.type === UPDATE) {
        return { ...state, user: action.payload };
    }
    return state;
};

export default reducer;
