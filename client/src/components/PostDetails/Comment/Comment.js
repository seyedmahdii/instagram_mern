import React from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import "./Comment.css";

function Comment() {
    return (
        <div className="comment">
            <div className="comment-image-container">
                <img
                    src="http://seyedmahdijalali.ir/images/about.jpg"
                    alt="Profile"
                    className="comment-image"
                />
            </div>
            <div className="comment-info">
                <div>
                    <h5 className="comment-username">seyedmahdii</h5>
                    <p className="post-datails__comment-text">
                        خانواده چهار میلیونی کرفس بپیوندید تا هم به وزن
                        ایده‌آلتون برسید و هم سبک
                    </p>
                    <div className="comment-details">
                        <span className="comment-date">5d ago</span>
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
