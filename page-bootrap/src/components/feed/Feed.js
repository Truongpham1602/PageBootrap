import React from "react";
import Post from "../post/Post";
import "./feed.css";
import Modal from "../layout/page4/modal";
import { useOutletContext } from "react-router-dom";

export default function Feed() {
  const [postIMG, post] = useOutletContext();
  return (
    <div className="feed">
      <div className="feedWrapper">
        {/* {(!username || username === user.username) && <Share />}
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))} */}
        {/* <UpLoad postIMG={postIMG} /> */}
        {/* <Modal visible={visible} setVisible={setVisible} postIMG={postIMG} /> */}
        <Post postIMG={postIMG} post={post} />
      </div>
      <div className="feed_right"></div>
    </div>
  );
}
