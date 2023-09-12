import { React, useState } from "react";
import { DOMAIN } from "../../util/url.constant";
import axios from "axios";

export default function UpLoad() {
  const [files, setFiles] = useState(null);
  const [msg, setMsg] = useState(null);

  async function handleUpload() {
    if (!files) {
      setMsg("No file selected");
      return;
    }

    // const axios = require("axios");
    // const FormData = require("form-data");
    let data = new FormData();
    data.append("content", "");
    data.append("accessMode", "PUBLIC");
    for (let i = 0; i < files.length; i++) {
      data.append(`img${i + 1}`, files[i]);
    }

    setMsg("Uploading...");
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: DOMAIN + "poseidon/api/v1/post/to-post",
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("user"))}`,
      },
      data: data,
    };
    await axios
      .request(config)
      .then((response) => {
        // if (response.data.access_token) {
        //   localStorage.setItem(
        //     "user",
        //     JSON.stringify(response.data.access_token)
        //   );
        // }
        console.log(response);
        setMsg("Upload successful");
        return response.data;
      })
      .catch((error) => {
        setMsg("Upload faied");
        console.log(error);
      });
  }
  return (
    <>
      <div>
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
      </div>
    </>
  );
}
