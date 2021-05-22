import React from "react";
import "../../../App.css";
import "./Post.css";

function Post({ img, caption }) {
    return (
        <div className="post">
            <div className="post__image-wrapper">
                <img src={img} alt={caption} className="post__image" />
            </div>
        </div>
    );
}

export default Post;
