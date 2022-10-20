import React, { FC } from "react";
import { UploadFile } from "./upload";
import Icon from "../IconFont/index";
// import Icon from '../Icon/icon'
import Progress from "../Progress/index";
interface UploadListProps {
  fileList: UploadFile[];
  onRemove: (_file: UploadFile) => void;
}

export const UploadList: FC<UploadListProps> = (props) => {
  const { fileList, onRemove } = props;
  console.log("fileList======>", fileList);

  return (
    <ul className="dui-upload-list">
      {fileList.map((item) => {
        return (
          <li className="dui-upload-list-item" key={item.uid}>
            <span className={`file-name file-name-${item.status}`}>
              <Icon type="icon-file-image" />
              {item.name}
            </span>
            <span className="file-status">
              {(item.status === "uploading" || item.status === "ready") && (
                <Icon type="icon-loading" spin color="#3683f7" />
              )}
              {item.status === "success" && (
                <Icon type="icon-check-circle-fill" color="#52c41a" />
              )}
              {item.status === "error" && (
                <Icon type="icon-close-circle-fill" color="red" />
              )}
            </span>
            <span className="file-actions">
              <Icon
                type="icon-closefill"
                onClick={() => {
                  onRemove(item);
                }}
              />
            </span>
            {item.status === "uploading" && (
              <Progress RingWidth={5} value={item.percent || 0} />
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default UploadList;
