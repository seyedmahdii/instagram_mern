import React, { useEffect } from "react";
import { useGlobalContext } from "../../Context.js";

import Header from "./Header/Header";
import Posts from "./Posts/Posts";

import { useDispatch } from "react-redux";
import { getPosts } from "../../actions/posts";
import { useParams } from "react-router-dom";

function Profile() {
    const dispatch = useDispatch();
    const { currentId } = useGlobalContext();
    const { username } = useParams();

    useEffect(() => {
        dispatch(getPosts(username));
    }, [currentId, dispatch]);

    return (
        <div>
            <Header />
            <Posts />
        </div>
    );
}

export default Profile;
