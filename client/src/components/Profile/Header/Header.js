import React from "react";
import "./Header.css";
import Profile from "../../../images/profile.jpg";
import SettingsIcon from "@material-ui/icons/Settings";

function Header() {
    return (
        <div className="header">
            <div className="container header-container">
                <div className="header__image-wrapper">
                    <img
                        src={Profile}
                        alt="Username here"
                        className="header__image"
                    />
                </div>

                <div className="header__profile">
                    <div className="header__top">
                        <h2 className="header__username">seyedmahdii_</h2>
                        <div className="header__btn-container">
                            <a className="btn btn-bordered btn-bordered-default">
                                Edit Profile
                            </a>
                            <SettingsIcon className="header__settings-btn" />
                        </div>
                    </div>

                    <div className="header__follow">
                        <div className="header__follow-item">
                            <span className="header__data header__posts">
                                11
                            </span>{" "}
                            posts
                        </div>

                        <div className="header__follow-item">
                            <span className="header__data header__followers">
                                216
                            </span>{" "}
                            followers
                        </div>

                        <div className="header__follow-item">
                            <span className="header__data header__following">
                                158
                            </span>{" "}
                            following
                        </div>
                    </div>

                    <div className="header__info">
                        <h1 className="header__name">Seyed Mahdi Jalali</h1>
                        <span className="header__description">
                            Web developer Forgot to die behind my pc👨‍💻
                            <br />
                            Learned to strengthen my land in my head🛀
                        </span>
                        <a href="#" className="header__url">
                            seyedmahdijalali.ir
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
