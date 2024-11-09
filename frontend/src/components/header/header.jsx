import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import {
  Home,
  HomeOutlined,
  Add,
  AddOutlined,
  SearchOutlined,
  Search,
  AccountCircle,
  AccountCircleOutlined,
} from "@mui/icons-material";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <Home />
      </Link>
      <Link to="/newPost">
        <Add />
      </Link>
      <Link to="/search">
        <Search />
      </Link>
      <Link to="/account">
        <AccountCircle />
      </Link>
    </div>
  );
}

export default Header;
