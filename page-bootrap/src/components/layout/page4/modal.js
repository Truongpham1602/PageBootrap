import React, { useState } from "react";
import axios from "axios";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { FileUpload } from "primereact/fileupload";

export default function WithoutModalDemo() {
  const [visible, setVisible] = useState(false);
  const token = localStorage.getItem("token");
  axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
  //   const axios = require("axios");

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "localhost:8086/poseidon/api/v1/post/to-post",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  axios
    .request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <div className="">
      <Button
        label="Show"
        icon="pi pi-external-link"
        onClick={() => setVisible(true)}
      />
      <Dialog
        header="Image"
        visible={visible}
        modal={false}
        style={{ width: "50vw" }}
        onHide={() => setVisible(false)}
      >
        <FileUpload
          name="demo[]"
          url={"/poseidon/api/v1/post/to-post"}
          multiple
          accept="image/*"
          maxFileSize={1000000}
          emptyTemplate={
            <p className="m-0">Drag and drop files to here to upload.</p>
          }
        />
      </Dialog>
    </div>
  );
}
