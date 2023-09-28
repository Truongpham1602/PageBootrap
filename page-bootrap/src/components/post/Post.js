import { React, useEffect, useState } from "react";
// import { MoreVert } from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./post.css";
import { DOMAIN } from "../../util/url.constant";

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
                        alt=""
                      />
                    </Link>
                    <span className="postUsername"></span>
                    <span className="postDate"></span>
                  </div>
                  <div className="postTopRight">
                    {/* <MoreVert /> dấu ba chấm bên tay phải */}
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
                    <img
                      className="likeIcon"
                      //   src={`${PF}like.png`}
                      //   onClick={likeHandler}
                      alt=""
                    />
                    <img
                      className="likeIcon"
                      //   src={`${PF}heart.png`}
                      //   onClick={likeHandler}
                      alt=""
                    />
                    <span className="postLikeCounter"> people like it</span>
                  </div>
                  <div className="postBottomRight">
                    <span className="postCommentText"> comments</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
}
