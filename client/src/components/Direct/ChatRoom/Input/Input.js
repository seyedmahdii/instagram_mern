import React, { useState } from "react";
import "./Input.css";
import SentimentSatisfiedRoundedIcon from "@material-ui/icons/SentimentSatisfiedRounded";
import FavoriteBorderRoundedIcon from "@material-ui/icons/FavoriteBorderRounded";
import CropOriginalRoundedIcon from "@material-ui/icons/CropOriginalRounded";

function Input() {
    const [message, setMessage] = useState("");

    return (
        <div className="chatroom__input-container">
            <SentimentSatisfiedRoundedIcon className="chatroom__input-icon" />
            <input
                type="text"
                className="chatroom__input"
                placeholder="Message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />

            <div>
                {message ? (
                    <button className="btn color-primary">Send</button>
                ) : (
                    <>
                        <CropOriginalRoundedIcon className="chatroom__input-icon" />
                        <FavoriteBorderRoundedIcon className="chatroom__input-icon" />
                    </>
                )}
            </div>
        </div>
    );
}

export default Input;
