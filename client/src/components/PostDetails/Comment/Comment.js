import React from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import "./Comment.css";
import moment from "moment";

function Comment({ comment }) {
    return (
        <div className="comment">
            <div className="comment-image-container">
                <img
                    src={comment.userImage}
                    alt="Profile"
                    className="comment-image"
                />
            </div>
            <div className="comment-info">
                <div className="comment-info__main">
                    <h5 className="comment-username">{comment.username}</h5>
                    <p className="post-datails__comment-text">
                        {comment.comment}
                    </p>
                    <div className="comment-details">
                        <span className="comment-date">
                            {moment(comment.createdAt).fromNow()}
                        </span>
                        <span className="comment-likes">409 likes</span>
                        <span className="comment-reply">reply</span>
                    </div>
                </div>
                <div>
                    <FavoriteBorderIcon className="comment-like" />
                </div>
            </div>
        </div>
    );
}

export default Comment;
