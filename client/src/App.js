import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import Register from "./components/Auth/Register/Register";
import Login from "./components/Auth/Login/Login";
import NotFound404 from "./components/Error/404/NotFound404";

import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts.js";

import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
    const dispatch = useDispatch();
    const [currentId, setCurrentId] = useState(null);

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return (
        <div className="instagram">
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route path="/post/create" exact>
                        <Form currentId={currentId} />
                    </Route>
                    <Route path="/register" exact>
                        <Register />
                    </Route>
                    <Route path="/login" exact>
                        <Login />
                    </Route>
                    <Route path="/" exact>
                        <Header />
                        <Posts setCurrentId={setCurrentId} />
                    </Route>
                    <NotFound404 />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
