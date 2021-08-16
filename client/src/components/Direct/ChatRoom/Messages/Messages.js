import React from "react";
import "./Messages.css";
import Message from "./Message/Message";

function Messages() {
    return (
        <div className="chatroom__messages">
            <Message messageText="salam aleikom" isMessageMine={true} />
            <Message messageText="keje dari brrr" isMessageMine={true} />
            <Message
                messageText="aleike salam gol pesar"
                isMessageMine={false}
            />
            <Message messageText="qazaa khordi??" isMessageMine={true} />
            <Message messageText="na hannooozs" isMessageMine={false} />
            <Message messageText="kheili zoode hanoz" isMessageMine={false} />
            <Message messageText="badan migiram" isMessageMine={false} />
            <Message messageText="merge my last commit" isMessageMine={true} />
            <Message messageText="hi there" isMessageMine={true} />
        </div>
    );
}

export default Messages;
