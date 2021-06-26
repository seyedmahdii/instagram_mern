import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";

import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts.js";

function App() {
    const dispatch = useDispatch();
    const [currentId, setCurrentId] = useState(null);

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return (
        <div className="instagram">
            <Navbar />
            <Header />
            <Posts setCurrentId={setCurrentId} />
            <Form currentId={currentId} />
        </div>
    );
}

export default App;
