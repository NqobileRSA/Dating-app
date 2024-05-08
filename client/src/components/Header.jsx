import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from "@mui/icons-material/Forum";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import { IconButton } from "@mui/material";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header_icon" />
      </IconButton>
      <IconButton>
        <AddReactionIcon fontSize="large" className="header_logo" />
      </IconButton>
      <IconButton>
        <ForumIcon fontSize="large" className="header_icon" />
      </IconButton>
    </div>
  );
};

export default Header;
