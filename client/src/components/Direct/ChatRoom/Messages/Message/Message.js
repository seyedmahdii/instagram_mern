import React from "react";
import "./Message.css";

function Message({ messageText, isMessageMine }) {
    return (
        <div className="chatroom__message-container">
            {!isMessageMine && (
                <img
                    src="http://seyedmahdijalali.ir/images/about.jpg"
                    alt="Profile"
                    className="chatroom__message-image"
                />
            )}
            <span
                className={`chatroom__message ${
                    isMessageMine
                        ? `chatroom__message--me`
                        : `chatroom__message--other`
                }`}
            >
                {messageText}
            </span>
        </div>
    );
}

export default Message;
