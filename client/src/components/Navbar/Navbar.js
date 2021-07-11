import React, { useState, useEffect } from "react";
import "./Navbar.css";
import "./../../App.css";
import Logo from "./../../images/logo.png";
import SearchIcon from "@material-ui/icons/Search";

import { logOut } from "../../actions/auth";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

// import ExploreIcon from "@material-ui/icons/Explore";
import ExploreOutlinedIcon from "@material-ui/icons/ExploreOutlined";
import HomeIcon from "@material-ui/icons/Home";
// import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
// import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
// import InboxIcon from "@material-ui/icons/Inbox";
// import InboxOutlinedIcon from "@material-ui/icons/InboxOutlined";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import decode from "jwt-decode";

function Navbar() {
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("profile"))
    );
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    const logout = () => {
        setUser(null);
        dispatch(logOut());
        history.push("/");
    };

    useEffect(() => {
        let token;
        if (user) {
            token = user.token;
        }
        if (token) {
            const decodedToken = decode(token);

            if (decodedToken * 1000 < new Date().getTime()) {
                logout();
            }
        }

        setUser(JSON.parse(localStorage.getItem("profile")));
    }, [location]);

    return (
        <div className="navbar">
            <div className="container">
                <nav className="nav">
                    <div className="nav__logo">
                        <a href="/">
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

                    {user ? (
                        <div className="nav__buttons">
                            <span className="nav__avatar">
                                {user?.result?.username?.charAt(0)}
                            </span>
                            <HomeIcon className="nav__icon logout" />
                            <FavoriteBorderOutlinedIcon className="nav__icon logout" />
                            <ExploreOutlinedIcon className="nav__icon logout" />
                            <ExitToAppIcon
                                onClick={() => logout()}
                                className="nav__icon logout"
                            />
                        </div>
                    ) : (
                        <div className="nav__buttons">
                            <a href="/login" className="btn btn-primary">
                                Log in
                            </a>
                            <a href="/register" className="btn color-primary">
                                Sign up
                            </a>
                        </div>
                    )}
                </nav>
            </div>
        </div>
    );
}

export default Navbar;
