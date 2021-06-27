import React from "react";
import "./Posts.css";
import "./../../App.css";
import Post from "./Post/Post";

import { useSelector } from "react-redux";

function Posts({ setCurrentId }) {
    const posts = useSelector((state) => state.posts);
    console.log(posts);

    return (
        <div className="posts">
            <div className="container posts-container">
                {!posts.length ? (
                    <h1>Loading...</h1>
                ) : (
                    posts.map((post) => {
                        return (
                            <Post
                                post={post}
                                key={post._id}
                                setCurrentId={setCurrentId}
                            />
                        );
                    })
                )}
            </div>
        </div>
    );
}

export default Posts;
