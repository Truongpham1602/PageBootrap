import React from "react";
import axios from "axios";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { FileUpload } from "primereact/fileupload";
import UpLoad from "../../share/upLoad";

export default function WithoutModalDemo(props) {
  const { visible, setVisible, postIMG } = props;
  return (
    <div className="">
      {/* <Button
        label="Image"
        icon="pi pi-external-link"
        onClick={() => setVisible(true)}
      /> */}
      <Dialog
        header="UpLoad Files"
        visible={visible}
        modal={false}
        style={{ width: "50vw" }}
        onHide={() => setVisible(false)}
      >
        <UpLoad postIMG={postIMG} setVisible={setVisible} />
      </Dialog>
    </div>
  );
}
