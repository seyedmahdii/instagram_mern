import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Posts from "./components/Posts/Posts";

function App() {
    return (
        <div className="instagram">
            <Navbar />
            <Header />
            <Posts />
        </div>
    );
}

export default App;
