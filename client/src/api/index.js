import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:8000" });

// Sending the token to the backend -> so that backend middleware verifys the user is logged in
API.interceptors.request.use((req) => {
    if (localStorage.getItem("profile")) {
        req.headers.authorization = `Bearer ${
            JSON.parse(localStorage.getItem("profile")).token
        }`;
    }

    return req;
});

export const getPosts = () => API.get(`/posts`);

export const createPost = (newPost) => API.post(`/posts`, newPost);

export const updatePost = (updatedPost, id) =>
    API.patch(`/posts/${id}`, updatedPost);

export const deletePost = (id) => API.delete(`/posts/${id}`);

export const likePost = (id) => API.patch(`/posts/${id}/likePost`);

export const register = (formData) => API.post(`/user/register`, formData);
export const login = (formData) => API.post(`/user/login`, formData);
