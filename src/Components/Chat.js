import { Avatar } from "@material-ui/core";
import {
  AttachFile,
  InsertEmoticon,
  Mic,
  MoreVert,
  SearchOutlined,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";

const Chat = () => {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    const input = e.target[0].value;
    console.log(input);
  };
  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="chat_header_info">
          <h3>Room Name</h3>
          <p>Last seen at...</p>
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
        <p className={`chat_message ${true && "chat_receiver"}`}>
          <span className="chat_name">Shakil</span>
          hey you
          <span className="chat_timestamp">3:52pm</span>
        </p>
      </div>
      <div className="chat_footer">
        <InsertEmoticon />
        <form onSubmit={sendMessage}>
          <input type="text" />
          <button type="submit">Send</button>
        </form>
        <Mic />
      </div>
    </div>
  );
};

export default Chat;
