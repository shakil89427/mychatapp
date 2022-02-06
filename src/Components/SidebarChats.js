import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";

const SidebarChats = ({ id, name, addNewChat }) => {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createChat = () => {
    const roomName = prompt("Please enter name for chat");
    if (roomName) {
      //   do something
    }
  };
  return !addNewChat ? (
    <div className="sidebarchats">
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      <div className="sidebarchatinfo">
        <h2>{name}</h2>
        <p>Last message...</p>
      </div>
    </div>
  ) : (
    <div onClick={createChat} className="sidebarchats">
      <h2>Add new chat</h2>
    </div>
  );
};

export default SidebarChats;
