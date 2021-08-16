import React, { useEffect, useState } from "react";
import "./Inbox.css";
import Message from "./Message/Message";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import CreateRoundedIcon from "@material-ui/icons/CreateRounded";

function Inbox() {
    return (
        <div className="inbox">
            <header className="inbox__header">
                <span className="inbox__username">
                    seyedmahdii <KeyboardArrowDownIcon />
                </span>
                <CreateRoundedIcon className="inbox__new-message" />
            </header>

            <div className="inbox__meassages">
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
            </div>
        </div>
    );
}

export default Inbox;
