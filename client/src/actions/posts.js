import * as api from "../api/index.js";

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.getPosts();

        dispatch({ type: "READ", payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);

        dispatch({ type: "CREATE", payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const updatePost = (post, id) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(post, id);

        dispatch({ type: "UPDATE", payload: data });
    } catch (error) {
        console.log(error);
    }
};
