import { React, useEffect, useState } from "react";
// import { MoreVert } from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./post.css";
import { DOMAIN } from "../../util/url.constant";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

export default function Post(props) {
  const { postIMG, post } = props;

  useEffect(() => {
    postIMG();
  }, []);

  return (
    <>
      {post?.length >= 1 &&
        post.map((value, index) => {
          return (
            <div className="post" key={index}>
              <div className="postWrapper">
                <div className="postTop">
                  <div className="postTopLeft">
                    <Link>
                      <img
                        className="postProfileImg"
                        // src={
                        //   user.profilePicture
                        //     ? PF + user.profilePicture
                        //     : PF + "person/noAvatar.png"
                        // }
                        src="assets/person/noAvatar.png"
                        alt=""
                      />
                    </Link>
                    <span className="postUsername">phạm văn trường •</span>
                    <span className="postDate">12h</span>
                    <MoreHorizIcon />
                    {/* <div className="postTopRight">
                      dấu ba chấm bên tay phải
                    </div> */}
                  </div>
                </div>
                <div className="postCenter">
                  <span className="postText">{value.content}</span>
                  {value.images?.map((img, indexs) => {
                    return (
                      <img
                        key={indexs}
                        className="postImg"
                        src={`${DOMAIN}poseidon/public/api/v1/file/${img}`}
                        alt=""
                      />
                    );
                  })}
                </div>
                <div className="postBottom">
                  <div className="postBottomLeft">
                    <div className="likeIcon">
                      <FavoriteBorderRoundedIcon />
                    </div>
                    <div className="likeIcon">
                      <ChatBubbleOutlineIcon />
                    </div>
                    {/* <img
                      className="likeIcon"
                        src={`${PF}like.png`}
                        onClick={likeHandler}
                      alt=""
                    /> */}
                    {/* <img
                      className="likeIcon"
                        src={`${PF}heart.png`}
                        onClick={likeHandler}
                      alt=""
                    /> */}
                    <span className="postLikeCounter"> people like it</span>
                  </div>
                  <div className="postBottomRight">
                    <span className="postCommentText">
                      <BookmarkBorderIcon />
                    </span>
                  </div>
                </div>
              </div>
              <hr />
            </div>
          );
        })}
    </>
  );
}
