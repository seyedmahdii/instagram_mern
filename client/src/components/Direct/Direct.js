import React from "react";
import "./Direct.css";
import ChatRoom from "./ChatRoom/ChatRoom";
import Inbox from "./Inbox/Inbox";

function Direct() {
    return (
        <div className="container">
            <div className="direct">
                <Inbox />
                <ChatRoom />
            </div>
        </div>
    );
}

export default Direct;
