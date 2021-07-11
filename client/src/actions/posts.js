import * as api from "../api/index.js";
import {
    READ,
    CREATE,
    UPDATE,
    DELETE,
    SHOW,
} from "../constants/actionTypes.js";

export const getPosts = (username) => async (dispatch) => {
    try {
        const { data } = await api.getPosts(username);

        dispatch({ type: READ, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);

        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const updatePost = (post, id) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(post, id);

        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const deletePost = (id, username, history) => async (dispatch) => {
    try {
        await api.deletePost(id);

        dispatch({ type: DELETE, payload: id });
        history.push(`/${username}`);
    } catch (error) {
        console.log(error);
    }
};

export const likePost = (id) => async (dispatch) => {
    try {
        const { data } = await api.likePost(id);

        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const getPost = (id) => async (dispatch) => {
    try {
        const { data } = await api.getPost(id);
        console.log("data: ", data);

        dispatch({ type: SHOW, payload: data });
    } catch (error) {
        console.log(error);
    }
};
