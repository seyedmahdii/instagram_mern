import {
    END_LOADING,
    SEARCH_USERS,
    START_LOADING,
} from "../constants/actionTypes.js";

const reducer = (state = { isLoading: false, users: [] }, action) => {
    if (action.type === SEARCH_USERS) {
        return { ...state, users: action.payload };
    }
    if (action.type === START_LOADING) {
        return { ...state, isLoading: true };
    }
    if (action.type === END_LOADING) {
        return { ...state, isLoading: false };
    }
    return state;
};

export default reducer;
