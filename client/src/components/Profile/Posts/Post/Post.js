import React from "react";
import "./Post.css";

import { useHistory } from "react-router-dom";

function Post({ post }) {
    const history = useHistory();

    return (
        <div className="post">
            <div className="post__wrapper">
                <img
                    src={post.selectedFile}
                    alt={post.caption}
                    onClick={() => history.push(`/post/${post._id}`)}
                    className="post__image"
                />
            </div>
        </div>
    );
}

export default Post;
