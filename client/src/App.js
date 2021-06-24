import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";

import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts.js";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts);
    }, [dispatch]);

    return (
        <div className="instagram">
            <Navbar />
            <Header />
            <Posts />
            <Form />
        </div>
    );
}

export default App;
