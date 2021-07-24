import React, { useState, useEffect } from "react";
import "./Navbar.css";
import "./../../App.css";
import Logo from "./../../images/logo.png";
import defaultProfile from "../../images/defaultProfile.png";
import SearchIcon from "@material-ui/icons/Search";

import { logOut } from "../../actions/auth";
import { searchUsers } from "../../actions/users";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// import ExploreIcon from "@material-ui/icons/Explore";
import ExploreOutlinedIcon from "@material-ui/icons/ExploreOutlined";
// import HomeIcon from "@material-ui/icons/Home";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
// import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
// import InboxIcon from "@material-ui/icons/Inbox";
// import InboxOutlinedIcon from "@material-ui/icons/InboxOutlined";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import CancelIcon from "@material-ui/icons/Cancel";

import decode from "jwt-decode";

function Navbar() {
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("profile"))
    );
    const [searchQuery, setSearchQuery] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    const {
        users: { data: users },
        isLoading,
    } = useSelector((state) => state.users);

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

            if (decodedToken.exp * 1000 < new Date().getTime()) {
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

                    <div className="nav__search">
                        <div className="nav__input-wrapper">
                            <SearchIcon className="nav__search-icon" />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => {
                                    setSearchQuery(e.target.value.trim());
                                    dispatch(searchUsers(searchQuery));
                                }}
                                className="nav__input"
                                placeholder="Search"
                            />
                            {searchQuery && (
                                <CancelIcon
                                    className="nav__clear-input"
                                    onClick={() => setSearchQuery("")}
                                />
                            )}
                        </div>
                        <div
                            className={`nav__search-result ${
                                searchQuery && `nav__search-result--show`
                            }`}
                        >
                            {isLoading ? (
                                <h4>Loading...</h4>
                            ) : (
                                users?.map((item) => {
                                    return (
                                        <a
                                            href={`/${item.username}`}
                                            className="nav__search-item"
                                            title={item.username}
                                            key={item._id}
                                        >
                                            <div className="nav__search-image-box">
                                                <img
                                                    src={
                                                        item?.image
                                                            ? item?.image
                                                            : defaultProfile
                                                    }
                                                    alt="Profile"
                                                    className="nav__search-image"
                                                />
                                            </div>
                                            <div className="nav__search-info">
                                                <h5>{item.username}</h5>
                                                <span>{item.name}</span>
                                            </div>
                                        </a>
                                    );
                                })
                            )}

                            {!isLoading && users?.length === 0 ? (
                                <div className="nav__search--no-result">
                                    <span>No results found.</span>
                                </div>
                            ) : null}
                        </div>
                    </div>

                    {user ? (
                        <div className="nav__buttons">
                            <HomeOutlinedIcon className="nav__icon logout" />
                            <FavoriteBorderOutlinedIcon className="nav__icon logout" />
                            <ExploreOutlinedIcon className="nav__icon logout" />
                            <ExitToAppIcon
                                onClick={() => logout()}
                                className="nav__icon logout"
                            />
                            <span className="nav__avatar">
                                <img
                                    src={
                                        user
                                            ? user?.result?.image
                                            : defaultProfile
                                    }
                                    alt="profile"
                                    className="avatar__img"
                                />
                            </span>
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
