import React from "react";
import "./Message.css";

function Message() {
    const loggedUser = JSON.parse(localStorage.getItem("profile"));
    console.log(loggedUser);

    return (
        <div className={`message`}>
            <a href={`/direct/userId`} className="message__link">
                <div className="message__image-container">
                    <img
                        src={loggedUser?.result?.image}
                        alt="User"
                        className="message__image"
                    />
                </div>
                <div className="message__info">
                    <h5 className="message__username">seyedmahdii</h5>

                    <span className="message__last-message">
                        yes, that's ok as the last message . 5m ago
                    </span>
                </div>
            </a>
        </div>
    );
}

export default Message;
