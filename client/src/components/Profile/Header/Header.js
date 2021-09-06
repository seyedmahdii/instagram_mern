import React, { useState } from "react";
import "./Header.css";
import defaultProfile from "../../../images/defaultProfile.png";
import SettingsIcon from "@material-ui/icons/Settings";

import { useGlobalContext } from "../../../Context";
import { useSelector, useDispatch } from "react-redux";
import { followUser } from "../../../actions/users";
import { useHistory } from "react-router-dom";

function Header() {
    const loggedUser = JSON.parse(localStorage.getItem("profile"));
    const userData = useState(useSelector((state) => state.users));
    const { user } = userData[0];
    const { postsCount } = useGlobalContext();
    const dispatch = useDispatch();
    const history = useHistory();

    const FollowButton = () => {
        return user?.followers?.find((id) => id === loggedUser?.result?._id) ? (
            <button
                onClick={() => dispatch(followUser(user?._id))}
                className="btn btn-bordered-default btn-mh"
            >
                Unfollow
            </button>
        ) : (
            <button
                onClick={() => dispatch(followUser(user?._id))}
                className="btn btn-primary btn-mh"
            >
                Follow
            </button>
        );
    };

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
                        {loggedUser?.result?.username === user?.username && (
                            <div className="header__btn-container">
                                <a
                                    href="/accounts/edit"
                                    className="btn btn-bordered btn-bordered-default"
                                >
                                    Edit Profile
                                </a>
                                <SettingsIcon className="header__settings-btn" />
                            </div>
                        )}
                        {loggedUser?.result?.username === user?.username && (
                            <div className="header__btn-container">
                                <a
                                    href="/post/create"
                                    className="btn btn-bordered btn-bordered-default"
                                >
                                    New Post
                                </a>
                            </div>
                        )}
                        {loggedUser &&
                            loggedUser?.result?.username !== user?.username && (
                                <>
                                    <FollowButton />
                                    <button
                                        className="btn btn-bordered-default btn-mh"
                                        onClick={() =>
                                            history.push(`/direct/${user?._id}`)
                                        }
                                    >
                                        Message
                                    </button>
                                </>
                            )}
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
                                {user?.followers?.length}
                            </span>
                            &nbsp;followers
                        </div>

                        <div className="header__follow-item">
                            <span className="header__data header__following">
                                {user?.followings?.length}
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
