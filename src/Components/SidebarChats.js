import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import useAuth from "../AuthProvider/useAuth";
import { Link } from "react-router-dom";

const SidebarChats = ({ id, name, addNewChat }) => {
  const { db } = useAuth();
  const [messages, setMessages] = useState("");
  const createChat = () => {
    const roomName = prompt("Please enter name for chat");
    if (roomName) {
      db.collection("rooms").add({
        name: roomName,
      });
    }
  };

  useEffect(() => {
    if (id) {
      db.collection("rooms")
        .doc(id)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [id]);
  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
      <div className="sidebarchats">
        <Avatar src={`https://avatars.dicebear.com/api/human/${id}.svg`} />
        <div className="sidebarchatinfo">
          <h2>{name}</h2>
          <p>{messages[0] && messages[0]?.message.slice(0, 20) + "..."}</p>
        </div>
      </div>
    </Link>
  ) : (
    <div onClick={createChat} className="sidebarchats">
      <h2>Add new chat</h2>
    </div>
  );
};

export default SidebarChats;
