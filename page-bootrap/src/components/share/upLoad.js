import { React, useState } from "react";
import { DOMAIN } from "../../util/url.constant";
import axios from "axios";
import "./share.css";
import {
  PermMedia,
  Label,
  Room,
  EmojiEmotions,
  Cancel,
} from "@mui/icons-material";

export default function UpLoad(props) {
  const [files, setFiles] = useState([]);
  const [msg, setMsg] = useState(null);
  const FormData = require("form-data");
  axios.defaults.headers.common = {
    Authorization: `Bearer ${JSON.parse(localStorage.getItem("user"))}`,
  };
  const { postIMG } = props;
  const [contents, setContents] = useState("");

  const imgs = (e) => {
    let arr = [...files];
    for (let i = 0; i < e.target.files.length; i++) {
      if (!arr.map((t) => t.name).includes(e.target.files[i].name)) {
        arr.push(e.target.files[i]);
      }
    }
    setFiles([...arr]);
  };

  const removeIMG = (fileName) => {
    let arr = [...files];
    let index = arr.map((t) => t.name).indexOf(fileName);
    arr.splice(index, 1);
    setFiles([...arr]);
  };

  async function handleUpload() {
    if (!files) {
      setMsg("No file selected");
      return;
    }

    let data = new FormData();
    data.append("content", contents);
    data.append("accessMode", "PUBLIC");
    for (let i = 0; i < files.length; i++) {
      data.append(`img`, files[i]);
    }
    setMsg("Uploading...");
    await axios
      .post(DOMAIN + "poseidon/api/v1/post/to-post", data)
      .then((response) => {
        console.log(files);
        setMsg("Upload successful");
        postIMG();
        setFiles([]);
        setContents("");
        return response.data;
      })
      .catch((error) => {
        setMsg("Upload faied");
        console.log(error);
      });
  }
  return (
    <>
      {/* <div>
        <h1>upLoad Files</h1>
        <input
          onChange={(e) => {
            setFiles(e.target.files);
          }}
          type="file"
          multiple
        />
        <button
          type="button"
          className="btn btn-outline-info"
          onClick={handleUpload}
        >
          UpLoad
        </button>
        {msg && <span>{msg}</span>}
      </div> */}

      <div className="share">
        <div className="shareWrapper">
          <div className="shareTop">
            <img
              className="shareProfileImg"
              src="assets/person/noAvatar.png"
              alt=""
            />
            <input
              placeholder={"What's in your mind ?"}
              className="shareInput"
              value={contents}
              onChange={(e) => setContents(e.target.value)}
            />
          </div>
          <hr className="shareHr" />
          {files.length >= 1 &&
            files.map((value, index) => {
              return (
                <div key={index} className="shareImgContainer">
                  <img
                    className="shareImg"
                    src={URL.createObjectURL(value)}
                    alt=""
                  />
                  <Cancel
                    className="shareCancelImg"
                    onClick={() => removeIMG(value.name)}
                  />
                </div>
              );
            })}
          <form className="shareBottom">
            <div className="shareOptions">
              <label htmlFor="file" className="shareOption">
                <PermMedia htmlColor="tomato" className="shareIcon" />
                <span className="shareOptionText">Photo or Video</span>
                <input
                  style={{ display: "none" }}
                  type="file"
                  id="file"
                  accept=".png,.jpeg,.jpg"
                  onChange={(e) => imgs(e)}
                  multiple
                />
              </label>
              <div className="shareOption">
                <Label htmlColor="blue" className="shareIcon" />
                <span className="shareOptionText">Tag</span>
              </div>
              <div className="shareOption">
                <Room htmlColor="green" className="shareIcon" />
                <span className="shareOptionText">Location</span>
              </div>
              <div className="shareOption">
                <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
                <span className="shareOptionText">Feelings</span>
              </div>
            </div>
            <button
              className="shareButton"
              type="button"
              onClick={handleUpload}
            >
              Share
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
