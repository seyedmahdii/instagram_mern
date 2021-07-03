import React, { useEffect, useState } from "react";
import "./Form.css";

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

    return (
        <div className="form">
            <form
                className="form__group"
                autoComplete="off"
                noValidate
                onSubmit={handleSubmit}
            >
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
            </form>
        </div>
    );
}

export default Form;
