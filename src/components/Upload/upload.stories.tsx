import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Upload from "./upload";
import Icon from "../IconFont/index";
// const defaultFileList: UploadFile[] = [
//   { uid: '123', size: 1234, name: 'hello.md', status: 'uploading', percent: 30 },
//   { uid: '122', size: 1234, name: 'xyz.md', status: 'success', percent: 30 },
//   { uid: '121', size: 1234, name: 'eyiha.md', status: 'error', percent: 30 }
// ]
const checkFileSize = (file: File) => {
  if (Math.round(file.size / 1024) > 50) {
    alert("file too big");
    return false;
  }
  return true;
};
// const filePromise = (file: File) => {
//   const newFile = new File([file], 'new_name.docx', {type: file.type})
//   return Promise.resolve(newFile)
// }
const SimpleUpload = () => {
  return (
    <Upload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      onChange={action("changed")}
      onRemove={action("removed")}
      name="fileName"
      multiple
      style={{ width: 300 }}
    />
  );
};

const CheckFileSize = () => {
  return (
    <Upload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      onChange={action("changed")}
      onRemove={action("removed")}
      name="fileName"
      multiple
      style={{ width: 300 }}
      beforeUpload={checkFileSize}
    />
  );
};

const DragUpload = () => {
  return (
    <Upload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      onChange={action("changed")}
      onRemove={action("removed")}
      name="fileName"
      multiple
      drag
    >
      <Icon type="icon-upload" style={{ fontSize: 100 }} />
      <br />
      <p>Drag file over to upload</p>
    </Upload>
  );
};

storiesOf("Upload 上传", module)
  .add("普通Upload", SimpleUpload)
  .add("上传前检查文件大小", CheckFileSize)
  .add("拖拽上传", DragUpload);
