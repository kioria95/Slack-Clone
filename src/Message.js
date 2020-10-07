import { Avatar } from "@material-ui/core";
import React from "react";
import "./Message.css";

function Message({ message, timestamp, user, userImage }) {
  return (
    <div className="message">
      <img src={userImage} alt="" />
      {/* {user?. <h3>{user}</h3>} */}
      <div className="message__info">
        <h4>{user}</h4>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default Message;
