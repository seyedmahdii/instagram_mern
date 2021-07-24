import React, { useState } from "react";
import "./EditProfile.css";
import defaultProfile from "../../images/defaultProfile.png";
import FileBase from "react-file-base64";

import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { updateUserProfile } from "../../actions/users";

function EditProfile() {
    let user = JSON.parse(localStorage.getItem("profile"));
    const [userData, setUserData] = useState({
        name: user?.result?.name,
        username: user?.result?.username,
        website: user?.result?.website,
        bio: user?.result?.bio,
    });
    console.log("logged  ", user);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch(
            updateUserProfile(
                user?.result?._id,
                userData,
                history,
                userData?.username
            )
        );
        localStorage.clear();
        user = { ...user, result: { ...user?.result, ...userData } };
        localStorage.setItem("profile", JSON.stringify(user));
    };

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setUserData({ ...userData, [name]: value });
    };

    return (
        <div className="container">
            <div className="edit-profile">
                <aside className="edit-profile__side">
                    <div className="edit-profile__side-item edit-profile__side-item--active">
                        <a
                            href="/accounts/edit"
                            title="Edit Profile"
                            className="edit-profile__side-item-link"
                        >
                            Edit profile
                        </a>
                    </div>

                    <div className="edit-profile__side-item">
                        <a
                            href="#"
                            title="Change Password"
                            className="edit-profile__side-item-link"
                        >
                            Change Password
                        </a>
                    </div>

                    <div className="edit-profile__side-item">
                        <a
                            href="#"
                            title="Apps and Websites"
                            className="edit-profile__side-item-link"
                        >
                            Apps and Websites
                        </a>
                    </div>

                    <div className="edit-profile__side-item">
                        <a
                            href="#"
                            title="Email and SMS"
                            className="edit-profile__side-item-link"
                        >
                            Email and SMS
                        </a>
                    </div>

                    <div className="edit-profile__side-item">
                        <a
                            href="#"
                            title="Push Notifications"
                            className="edit-profile__side-item-link"
                        >
                            Push Notifications
                        </a>
                    </div>

                    <div className="edit-profile__side-item">
                        <a
                            href="#"
                            title="Manage Contacts"
                            className="edit-profile__side-item-link"
                        >
                            Manage Contacts
                        </a>
                    </div>
                </aside>

                <div className="edit-profile__content">
                    <div className="edit-profile__select-image">
                        <div className="edit-profile__image-wrapper">
                            <img
                                src={
                                    user?.result?.image
                                        ? user?.result?.image
                                        : defaultProfile
                                }
                                alt="Profile"
                                className="edit-profile__image"
                            />
                        </div>
                        <div className="edit-profile__image-username">
                            <h4>{user?.result?.username}</h4>
                            <FileBase
                                type="file"
                                multiple={false}
                                onDone={({ base64 }) =>
                                    setUserData({ ...userData, image: base64 })
                                }
                                className="edit-profile__ul-btn"
                            />
                        </div>
                    </div>

                    <form
                        className="edit-profile__form"
                        autoComplete="off"
                        onSubmit={handleSubmit}
                    >
                        <div className="edit-profile__section">
                            <div className="form-control">
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="form__input"
                                    onChange={handleChange}
                                    value={userData?.name}
                                    required
                                />
                                <label htmlFor="name" className="form__label">
                                    Name
                                </label>
                            </div>
                            <span className="edit-profile__desc">
                                Help people discover your account by using the
                                name you're known by: either your full name,
                                nickname, or business name.
                            </span>
                        </div>

                        <div className="edit-profile__section">
                            <div className="form-control">
                                <input
                                    type="text"
                                    name="username"
                                    id="username"
                                    className="form__input"
                                    onChange={handleChange}
                                    value={userData?.username}
                                    required
                                />
                                <label
                                    htmlFor="username"
                                    className="form__label"
                                >
                                    Username
                                </label>
                            </div>
                            <span className="edit-profile__desc">
                                In most cases, you'll be able to change your
                                username back to seyedmahdii_ for another 14
                                days.
                            </span>
                        </div>

                        <div className="edit-profile__section">
                            <div className="form-control">
                                <input
                                    type="url"
                                    name="website"
                                    id="website"
                                    className="form__input"
                                    onChange={handleChange}
                                    value={userData?.website}
                                />
                                <label
                                    htmlFor="website"
                                    className="form__label"
                                >
                                    Website
                                </label>
                            </div>
                        </div>

                        <div className="edit-profile__section">
                            <div className="form-control">
                                <input
                                    type="text"
                                    name="bio"
                                    id="bio"
                                    className="form__input"
                                    onChange={handleChange}
                                    value={userData?.bio}
                                />
                                <label htmlFor="bio" className="form__label">
                                    Bio
                                </label>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default EditProfile;
