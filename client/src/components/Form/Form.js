import React, { useEffect, useState } from "react";
import "../../App.css";
import logo from "../../images/logo.png";

import FileBase from "react-file-base64";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/posts.js";

function Form() {
    const [postData, setPostData] = useState({
        caption: "",
        selectedFile: "",
    });
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    const toBeUpdatedPostData = useSelector((state) => {
        return state?.posts?.post?.data;
        // id ? state?.posts?.find((post) => post._id === id) : null;
    });
    const user = JSON.parse(localStorage.getItem("profile"));

    useEffect(() => {
        if (toBeUpdatedPostData) {
            setPostData(toBeUpdatedPostData);
        }
    }, [toBeUpdatedPostData]);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (id) {
            dispatch(
                updatePost(
                    { ...postData, username: user?.result?.username },
                    id
                )
            );
        } else {
            dispatch(
                createPost({ ...postData, username: user?.result?.username })
            );
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
                                value={postData?.caption}
                                required
                            />
                            <label htmlFor="caption" className="form__label">
                                Caption
                            </label>
                        </div>
                        {!id && (
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
                        )}
                        <button
                            type="submit"
                            className="btn btn-primary btn--full-width"
                        >
                            {id ? `Edit` : `Post`}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Form;
