import React, { useEffect, useState } from "react";
import "../../App.css";
import logo from "../../images/logo.png";

import FileBase from "react-file-base64";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/posts.js";

function Form({ currentId }) {
    const [postData, setPostData] = useState({
        caption: "",
        selectedFile: "",
    });
    const dispatch = useDispatch();
    const history = useHistory();
    const toBeUpdatedPostData = useSelector((state) =>
        currentId ? state.posts.find((post) => post._id === currentId) : null
    );

    useEffect(() => {
        if (toBeUpdatedPostData) {
            setPostData(toBeUpdatedPostData);
        }
    }, [toBeUpdatedPostData]);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (currentId) {
            dispatch(updatePost(postData, currentId));
        } else {
            dispatch(createPost(postData));
        }

        history.push("/");
    };

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setPostData({ ...postData, [name]: value });
    };

    return (
        <div className="form">
            <div className="container auth-container">
                <div className="box">
                    <header className="auth__header">
                        <img src={logo} className="auth__logo" alt="Logo" />
                    </header>
                    <form
                        className="form"
                        autoComplete="off"
                        noValidate
                        onSubmit={handleSubmit}
                    >
                        <div className="form-control">
                            <input
                                type="text"
                                name="caption"
                                id="caption"
                                className="form__input"
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="caption" className="form__label">
                                Caption
                            </label>
                        </div>
                        <div className="form-control">
                            <label
                                htmlFor="image"
                                className="form__label"
                                style={{ position: "relative" }}
                            >
                                Image
                            </label>
                            <FileBase
                                type="file"
                                id="image"
                                multiple={false}
                                onDone={({ base64 }) =>
                                    setPostData({
                                        ...postData,
                                        selectedFile: base64,
                                    })
                                }
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary btn--full-width"
                        >
                            Post
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Form;

/* <form className="form" autoComplete="off" noValidate onSubmit={handleSubmit}>
    <div className="form__control">
        <input
            type="text"
            className="form__input"
            id="caption"
            value={postData.caption}
            onChange={(event) =>
                setPostData({
                    ...postData,
                    caption: event.target.value,
                })
            }
        />
        <label htmlFor="caption" className="form__label">
            caption
        </label>
        <div className="underlined"></div>
    </div>

    <div className="form__control">
        <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
                setPostData({ ...postData, selectedFile: base64 })
            }
        />
    </div>

    <div className="form__control">
        <button className="form__btn" type="submit">
            post
        </button>
    </div>
</form>; */
