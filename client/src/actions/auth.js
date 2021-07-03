import * as api from "../api/index";
import { LOGOUT, AUTH } from "../constants/actionTypes";

export const logOut = () => async (dispatch) => {
    dispatch({ type: LOGOUT });
};

export const register = (formData) => async (dispatch) => {
    try {
        const { data } = await api.register(formData);
        dispatch({ type: AUTH, data });
    } catch (error) {
        console.log(error);
    }
};

export const login = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.login(formData);
        dispatch({ type: AUTH, data });

        history.push("/");
    } catch (error) {
        console.log(error);
    }
};
