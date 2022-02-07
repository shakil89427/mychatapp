import { Avatar } from "@material-ui/core";
import {
  AttachFile,
  InsertEmoticon,
  Mic,
  MoreVert,
  SearchOutlined,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../AuthProvider/useAuth";

const Chat = () => {
  const { db, user, firebase } = useAuth();
  const [roomName, setRoomName] = useState("");
  const [messages, setMessages] = useState([]);
  const { id } = useParams();
  const divRef = useRef(null);

  useEffect(() => {
    if (id) {
      db.collection("rooms")
        .doc(id)
        .onSnapshot((snapshot) => setRoomName(snapshot.data().name));
      db.collection("rooms")
        .doc(id)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [id]);

  const sendMessage = (e) => {
    e.preventDefault();
    const input = e.target[0].value;
    if (input === "") return;
    db.collection("rooms").doc(id).collection("messages").add({
      message: input,
      name: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    e.target.reset();
  };

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${id}.svg`} />
        <div className="chat_header_info">
          <h3>{roomName}</h3>
          <p>
            Last seen{" "}
            {new Date(
              messages[messages.length - 1]?.timestamp?.toDate()
            ).toUTCString()}
          </p>
        </div>
        <div className="chat_header_right">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat_body">
        {messages.map((message) => (
          <p
            className={`chat_message ${
              message.name === user.displayName ? "chat_receiver" : "sender"
            }`}
          >
            <span className="chat_name">{message.name}</span>
            {message.message}
            {message.timestamp && (
              <span className="chat_timestamp">
                {new Date(message.timestamp?.toDate()).toUTCString()}
              </span>
            )}
          </p>
        ))}
        <div ref={divRef}></div>
      </div>
      <div className="chat_footer">
        <InsertEmoticon />
        <form onSubmit={sendMessage}>
          <input type="text" />
          <button type="submit">
            <ArrowCircleRightIcon />
          </button>
        </form>
        <Mic />
      </div>
    </div>
  );
};

export default Chat;
