import React, { useEffect, useState } from "react";
import { Avatar, IconButton } from "@mui/material";
import {
  Chat,
  DonutLarge,
  MoreVert,
  SearchOutlined,
} from "@mui/icons-material";
import SidebarChats from "./SidebarChats";
const Sidebar = () => {
  const [rooms, setRooms] = useState([]);

  // useEffect(() => {
  //   db.collection("rooms").onSnapshot((snapshot) => {
  //     setRooms(
  //       snapshot.docs.map((doc) => ({
  //         id: doc.id,
  //         data: doc.data(),
  //       }))
  //     );
  //   });
  // }, []);
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <Avatar />
        <div className="sidebar_header_right">
          <IconButton>
            <DonutLarge />
          </IconButton>
          <IconButton>
            <Chat />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="sidebar_search">
        <div className="sidebar_searchcontainer">
          <SearchOutlined />
          <input type="text" placeholder="Search or start new chat" />
        </div>
      </div>
      <div className="sidebar_chats">
        <SidebarChats addNewChat />
        {rooms.map((room) => (
          <SidebarChats id={room.id} key={room.id} name={room.data.name} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;