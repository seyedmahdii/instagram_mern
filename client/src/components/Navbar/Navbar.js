import React from "react";
import "./Navbar.css";
import "./../../App.css";
import Logo from "./../../images/logo.png";
import SearchIcon from "@material-ui/icons/Search";

function Navbar() {
    return (
        <div className="navbar">
            <div className="container">
                <nav className="nav">
                    <div className="nav__logo">
                        <a href="#">
                            <img src={Logo} alt="Logo" />
                        </a>
                    </div>

                    <div className="nav__input-wrapper">
                        <SearchIcon className="nav__search-icon" />
                        <input
                            type="text"
                            className="nav__input"
                            placeholder="Search"
                        />
                    </div>

                    <div className="nav__buttons">
                        <button type="button" className="btn btn-primary">
                            Log in
                        </button>
                        <button type="button" className="btn btn-color-primary">
                            Sign up
                        </button>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;
