import React from "react";
import Feed from "../feed/Feed";
import Topbar from "../topbar/topbar";
import "../css/home.css";
import Sidebar from "../sidebar.js/Sidebar";

export default function Home() {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        {/* <Outlet /> */}
      </div>
    </>
  );
}
