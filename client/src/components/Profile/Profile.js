import React, { useEffect } from "react";
import { useGlobalContext } from "../../Context.js";

import Header from "./Header/Header";
import Posts from "./Posts/Posts";

import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../actions/posts";
import { useParams } from "react-router-dom";

function Profile() {
    const dispatch = useDispatch();
    const { currentId } = useGlobalContext();
    const { username } = useParams();
    const { isLoading } = useSelector((state) => state.posts);

    useEffect(() => {
        dispatch(getPosts(username));
    }, [currentId, dispatch]);

    if (isLoading) {
        return (
            <div className="container">
                <h1>Loading...</h1>
            </div>
        );
    }

    return (
        <div className="profile">
            <Header />
            <Posts />
        </div>
    );
}

export default Profile;
