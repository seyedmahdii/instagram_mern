import React, { useEffect } from "react";
import { useGlobalContext } from "../../Context.js";

import Header from "./Header/Header";
import Posts from "./Posts/Posts";

import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../actions/posts";
import { useParams } from "react-router-dom";
import { getUserProfile } from "../../actions/users.js";

function Profile() {
    const dispatch = useDispatch();
    const { currentId } = useGlobalContext();
    const { username } = useParams();
    const { isLoading: isPostsLoading } = useSelector((state) => state.posts);
    const { isLoading: isProfileHeaderLoading } = useSelector(
        (state) => state.users
    );

    useEffect(() => {
        dispatch(getUserProfile(username));
        dispatch(getPosts(username));
    }, [currentId, dispatch, username]);

    if (isPostsLoading || isProfileHeaderLoading) {
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
