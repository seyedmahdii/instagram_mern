import * as api from "../api/index";
import { LOGOUT, AUTH, AUTH_ERROR } from "../constants/actionTypes";

export const logOut = () => async (dispatch) => {
    dispatch({ type: LOGOUT });
};

export const register = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.register(formData);
        dispatch({ type: AUTH, data });
        history.push("/");
    } catch (error) {
        dispatch({
            type: AUTH_ERROR,
            payload: error.response.data,
        });
    }
};

export const login = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.login(formData);
        dispatch({ type: AUTH, data });

        history.push("/");
    } catch (error) {
        dispatch({
            type: AUTH_ERROR,
            payload: error.response.data,
        });
    }
};
