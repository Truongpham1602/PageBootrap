import React, { useState } from "react";
import "./sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
// import { signOut } from "firebase/auth";
// import { logoutUser } from "../features/userSlice";
// import { auth } from "../firebase";
import Modal from "../layout/page4/modal";
import { Link } from "react-router-dom";

function Sidenav(props) {
  // const user = useSelector((state) => state.data.user.user);
  // const dispatch = useDispatch();
  // const handelLogout = () => {
  //   dispatch(logoutUser());
  //   signOut(auth);
  // };
  const { visible, setVisible, postIMG } = props;

  return (
    <div className="sidenav">
      <img
        className="sidenav__logo"
        src={require("../layout/login/images/instag.png")}
        alt="Instagram Logo"
      />

      <div className="sidenav__buttons">
        <button className="sidenav__button">
          <HomeIcon className="sidenav_icon" />
          <span>
            <b>Home</b>
          </span>
        </button>
        <button className="sidenav__button" to="login">
          <SearchIcon className="sidenav_icon" />
          <span>Search</span>
        </button>
        <Link className="sidenav__button" to="login">
          <ExploreIcon className="sidenav_icon" />
          <span>Login</span>
        </Link>
        <button className="sidenav__button">
          <ExploreIcon className="sidenav_icon" />
          <span>Explore</span>
        </button>
        <button className="sidenav__button">
          <SlideshowIcon className="sidenav_icon" />
          <span>Reels</span>
        </button>
        <button className="sidenav__button">
          <ChatIcon className="sidenav_icon" />
          <span>Messages</span>
        </button>
        <button className="sidenav__button">
          <FavoriteBorderIcon className="sidenav_icon" />
          <span>Notifications</span>
        </button>
        <button
          className="sidenav__button"
          onClick={() => setVisible(!visible)}
        >
          <AddCircleOutlineIcon className="sidenav_icon" />
          <span>Create</span>
        </button>
        <button className="sidenav__button">
          <Avatar className="sidenav_icon" sx={{ width: 24, height: 24 }}>
            {/* {user.username ? user.username.charAt(0).toUpperCase() : "A"} */}
          </Avatar>
          <span>
            {/* {user.username}{" "}
            <button onClick={handelLogout} className="logout__button">
              Logout
            </button> */}
            {/* <button className="logout__button">Logout</button> */}
            Personal page
          </span>
        </button>
        <Modal visible={visible} setVisible={setVisible} postIMG={postIMG} />
      </div>
      <div className="sidenav__more">
        <button className="sidenav__button">
          <MenuIcon className="sidenav_icon" />
          <span className="sidenav__buttonText">More</span>
        </button>
      </div>
    </div>
  );
}

export default Sidenav;
