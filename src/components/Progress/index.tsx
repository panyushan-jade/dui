import React from "react";
import "./_style.scss";

interface PropsType {
  color?: string; //进度条颜色
  value?: number; //进度值
  style?: {
    //进度槽样式
    [key: string]: string | number;
  };
}

function Progress(props: PropsType) {
  const { color = "#3683F7", value = 80 } = props;
  return (
    <div className="groove" style={props.style}>
      <div
        className="progress"
        style={{ backgroundColor: color, width: value + "%" }}
      ></div>
    </div>
  );
}
export default React.memo(Progress);
