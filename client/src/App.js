import React from "react";
import "./App.css";

import Profile from "./components/Profile/Profile";
import Navbar from "./components/Navbar/Navbar";
import Form from "./components/Form/Form";
import Register from "./components/Auth/Register/Register";
import Login from "./components/Auth/Login/Login";
import NotFound404 from "./components/Error/404/NotFound404";
import PostDetails from "./components/PostDetails/PostDetails";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

function App() {
    const user = JSON.parse(localStorage.getItem("profile"));

    return (
        <div className="instagram">
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route path="/post/create" exact>
                        {user ? <Form /> : <Redirect to="/login" />}
                    </Route>
                    <Route path="/register" exact>
                        {user ? (
                            <Redirect to={`/${user?.result?.username}`} />
                        ) : (
                            <Register />
                        )}
                    </Route>
                    <Route path="/login" exact>
                        {user ? (
                            <Redirect to={`/${user?.result?.username}`} />
                        ) : (
                            <Login />
                        )}
                    </Route>
                    <Route path={`/post/:id/edit`} exact>
                        {user ? <Form /> : <Redirect to="/login" />}
                    </Route>
                    <Route path="/post/:id" exact>
                        {user ? <PostDetails /> : <Redirect to="/login" />}
                    </Route>
                    <Route path="/:username" exact>
                        <Profile />
                    </Route>
                    <NotFound404 />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
