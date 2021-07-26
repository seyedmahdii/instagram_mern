import React, { useState } from "react";
import "./Header.css";
import defaultProfile from "../../../images/defaultProfile.png";
import SettingsIcon from "@material-ui/icons/Settings";

import { useParams } from "react-router-dom";
import { useGlobalContext } from "../../../Context";
import { useSelector } from "react-redux";

function Header() {
    const loggedUser = JSON.parse(localStorage.getItem("profile"));
    const userData = useState(useSelector((state) => state.users));
    const { user } = userData[0];
    const { username } = useParams();
    const { postsCount } = useGlobalContext();

    return (
        <div className="header">
            <div className="container header-container">
                <div className="header__image-wrapper">
                    <img
                        src={user?.image ? user?.image : defaultProfile}
                        alt="profile"
                        className="header__image"
                    />
                </div>

                <div className="header__profile">
                    <div className="header__top">
                        <h2 className="header__username">{user?.username}</h2>
                        <div className="header__btn-container">
                            <a
                                href="/accounts/edit"
                                className="btn btn-bordered btn-bordered-default"
                            >
                                Edit Profile
                            </a>
                            <SettingsIcon className="header__settings-btn" />
                        </div>
                    </div>

                    <div className="header__follow">
                        <div className="header__follow-item">
                            <span className="header__data header__posts">
                                {postsCount}
                            </span>
                            &nbsp;posts
                        </div>

                        <div className="header__follow-item">
                            <span className="header__data header__followers">
                                216
                            </span>
                            &nbsp;followers
                        </div>

                        <div className="header__follow-item">
                            <span className="header__data header__following">
                                158
                            </span>
                            &nbsp;following
                        </div>
                    </div>

                    <div className="header__info">
                        <h1 className="header__name">{user?.name}</h1>
                        <span className="header__description">{user?.bio}</span>
                        <a href={user?.website} className="header__url">
                            {user?.website}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
