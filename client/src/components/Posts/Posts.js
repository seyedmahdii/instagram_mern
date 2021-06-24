import React from "react";
import "./Posts.css";
import "./../../App.css";
import Post from "./Post/Post";
import Image1 from "./../../images/Post1.jpg";
import Image2 from "./../../images/Post2.jpg";
import Image3 from "./../../images/Post3.jpg";
import Image4 from "./../../images/Post4.jpg";

import { useSelector } from "react-redux";

function Posts() {
    const posts = useSelector((state) => state.posts);
    console.log(posts);

    return (
        <div className="posts">
            <div className="container posts-container">
                <Post img={Image1} caption="Caption 1" />
                <Post img={Image2} caption="Caption 2" />
                <Post img={Image3} caption="Caption 3" />
                <Post img={Image4} caption="Caption 4" />
            </div>
        </div>
    );
}

export default Posts;
