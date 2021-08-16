import React from "react";
import "./ChatRoom.css";
import Input from "./Input/Input";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import Messages from "./Messages/Messages";

function ChatRoom() {
    return (
        <div className="chatroom">
            <header className="chatroom__header">
                <div className="chatroom__header-left">
                    <img
                        src="http://seyedmahdijalali.ir/images/about.jpg"
                        alt="Profile"
                        className="chatroom__header-image"
                    />
                    <span>seyedmahdii</span>
                </div>
                <InfoOutlinedIcon className="chatroom__header-info" />
            </header>

            <div className="chatroom__content">
                <Messages />
            </div>

            <footer className="chatroom__footer">
                <Input />
            </footer>
        </div>
    );
}

export default ChatRoom;
