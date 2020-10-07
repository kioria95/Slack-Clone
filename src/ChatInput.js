import React, { useEffect, useState } from "react";
import "./ChatInput.css";
import { useStateValue } from "./StateProvider";
import firebase from "firebase";
import db from "./firebase";

function ChatInput({ channelName, channelId }) {
  const [message, setMessage] = useState("");
  const [{ user }] = useStateValue();

  const input = (e) => {
    e.preventDefault();

    if (channelId) {
      db.collection("rooms").doc(channelId).collection("messages").add({
        message: message,
        user: user?.displayName,
        userImage: user?.photoURL,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });

      setMessage("");
    }
  };

  return (
    <div className="chatInput">
      <form>
        <input
          type="text"
          placeholder={`Send a message to #${channelName}`}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button type="submit" onClick={input}>
          Enter
        </button>
      </form>
    </div>
  );
}

export default ChatInput;
