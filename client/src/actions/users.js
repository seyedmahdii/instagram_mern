import * as api from "../api/index.js";
import {
    END_LOADING,
    SEARCH_USERS,
    START_LOADING,
} from "../constants/actionTypes.js";

export const searchUsers = (query) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.searchUsers(query);
        dispatch({ type: SEARCH_USERS, payload: data });
        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error);
    }
};
