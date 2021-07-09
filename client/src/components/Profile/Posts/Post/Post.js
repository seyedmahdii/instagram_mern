import React, { useState } from "react";
import "./Post.css";

import { useDispatch } from "react-redux";
import { deletePost, likePost } from "../../../../actions/posts";
import { useGlobalContext } from "../../../../Context";

import moment from "moment";

function Post({ post }) {
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("profile"))
    );
    const {
        selectedFile,
        caption,
        creatorId,
        username,
        _id,
        likes,
        createdAt,
    } = post;
    const { setCurrentId } = useGlobalContext();
    const dispatch = useDispatch();

    return (
        <div className="post">
            <div className="post__wrapper">
                <img src={selectedFile} alt={caption} className="post__image" />
                {user?.result?._id === creatorId && (
                    <>
                        <button onClick={() => setCurrentId(_id)}>edit</button>
                        <button onClick={() => dispatch(deletePost(_id))}>
                            delete
                        </button>
                    </>
                )}

                <button onClick={() => dispatch(likePost(_id))}>like</button>
                <h3>{caption}</h3>
                <h3>username : {username}</h3>
                <h4>likes: {likes.length}</h4>
                <h4>created at: {moment(createdAt).fromNow()}</h4>
            </div>
        </div>
    );
}

export default Post;
