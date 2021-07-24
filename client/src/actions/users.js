import * as api from "../api/index.js";
import {
    END_LOADING,
    GET_USER_PROFILE,
    SEARCH_USERS,
    START_LOADING,
    UPDATE_USER_PROFILE,
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

export const updateUserProfile =
    (id, updatedUser, history, username) => async (dispatch) => {
        try {
            const { data } = await api.updateUserProfile(id, updatedUser);
            dispatch({ type: UPDATE_USER_PROFILE, payload: data });
            history.push(`/${username}`);
        } catch (error) {
            console.log(error);
        }
    };

export const getUserProfile = (username) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.getUserProfile(username);
        dispatch({ type: GET_USER_PROFILE, payload: data });
        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error);
    }
};
