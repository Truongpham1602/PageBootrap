import { React, useState } from "react";
import Feed from "../feed/Feed";
import Topbar from "../topbar/topbar";
import "../css/home.css";
import Sidebar from "../sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import axios from "axios";
import { DOMAIN } from "../../util/url.constant";

export default function Home() {
  const [visible, setVisible] = useState(false);
  axios.defaults.headers.common = {
    Authorization: `Bearer ${JSON.parse(localStorage.getItem("user"))}`,
  };

  const [post, setPost] = useState();

  const postIMG = async () => {
    await axios
      .get(DOMAIN + "poseidon/api/v1/post")
      .then((response) => {
        console.log(response.data);
        setPost(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      {/* <Topbar /> */}
      <div className="homepage">
        <div className="homepage_nav">
          <Sidebar
            visible={visible}
            setVisible={setVisible}
            postIMG={postIMG}
          />
        </div>
        <div className="homepage_feed">
          {/* <Feed /> */}
          <Outlet context={[postIMG, post]} />
        </div>
      </div>
    </>
  );
}
