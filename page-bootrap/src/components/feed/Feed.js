import { React, useState } from "react";
import Post from "../post/Post";
import "./feed.css";
import axios from "axios";
import { DOMAIN } from "../../util/url.constant";
import UpLoad from "../share/upLoad";

export default function Feed() {
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
    <div className="feed">
      <div className="feedWrapper">
        {/* {(!username || username === user.username) && <Share />}
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))} */}
        <UpLoad postIMG={postIMG} />
        <Post postIMG={postIMG} post={post} />
      </div>
    </div>
  );
}
