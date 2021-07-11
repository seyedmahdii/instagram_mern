import React, { useState } from "react";
import "./Post.css";

import { useDispatch } from "react-redux";
import { useGlobalContext } from "../../../../Context";

import { useHistory } from "react-router-dom";

function Post({ post }) {
    const user = JSON.parse(localStorage.getItem("profile"));
    const { setCurrentId } = useGlobalContext();
    const history = useHistory();

    return (
        <div className="post">
            <div className="post__wrapper">
                <img
                    src={post.selectedFile}
                    alt={post.caption}
                    onClick={() => history.push(`/posts/${post._id}`)}
                    className="post__image"
                />
                {user?.result?._id === post.creatorId && (
                    <>
                        <button onClick={() => setCurrentId(post._id)}>
                            edit
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}

export default Post;
