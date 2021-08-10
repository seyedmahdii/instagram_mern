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

export const getPosts = (username) => API.get(`/posts/${username}`);
export const createPost = (newPost) => API.post(`/post`, newPost);

export const updatePost = (updatedPost, id) =>
    API.patch(`/post/${id}`, updatedPost);

export const deletePost = (id) => API.delete(`/post/${id}`);
export const likePost = (id) => API.patch(`/post/${id}/likePost`);
export const getPost = (id) => API.get(`/post/${id}`);

// Auth
export const register = (formData) => API.post(`/user/register`, formData);
export const login = (formData) => API.post(`/user/login`, formData);

// Users
export const searchUsers = (query) => API.get(`/user/search?q=${query}`);
export const updateUserProfile = (id, updatedUser) =>
    API.patch(`/user/${id}/edit`, updatedUser);
export const getUserProfile = (username) => API.get(`/user/${username}`);
export const followUser = (id) => API.patch(`/user/${id}/follow`);
