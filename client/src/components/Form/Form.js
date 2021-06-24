import React, { useState } from "react";
import "./Form.css";

import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createPost } from "../../actions/posts.js";

function Form() {
    const [postData, setPostData] = useState({
        caption: "",
        creator: "",
        selectedFile: "",
    });
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch(createPost(postData));
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
                    <input
                        type="text"
                        className="form__input"
                        id="creator"
                        value={postData.creator}
                        onChange={(event) =>
                            setPostData({
                                ...postData,
                                creator: event.target.value,
                            })
                        }
                    />
                    <label htmlFor="creator" className="form__label">
                        creator
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
