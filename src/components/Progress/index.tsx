import React from "react";
import classNames from "classnames";
export interface IProgressProps {
  /**进度条类型  默认线形，circle圆环 */
  type?: string;
  /* 进度条颜色 */
  color?: string;
  /* 进度值 */
  percent?: number;
  /* 圆环半径 */
  radius?: number; //圆环半径
  className?: string; //进度槽类名
}

function Progress(props: IProgressProps) {
  const { color = "#3683F7", type = "Line", radius = 60, className } = props;
  let { percent = 0 } = props;
  percent = percent > 100 ? 100 : percent < 0 ? 0 : percent;
  if (radius <= 20) {
    console.error("Radius is less than 20, are you sure");
  }
  /* 圆环 */
  if (type === "circle") {
    const pathLen = radius * 2 * Math.PI; //圆的周长

    return (
      <div className={classNames("circle-progress", className)}>
        <span>{percent}%</span>
        <svg
          width={radius * 2 + 8}
          height={radius * 2 + 8}
          viewBox={`0 0 ${radius * 2 + 8} ${radius * 2 + 8}`}
        >
          <circle
            fill="transparent"
            className="pie-bg"
            strokeWidth="4"
            cx={radius + 4}
            cy={radius + 4}
            r={radius}
          ></circle>
          <circle
            fill="transparent"
            strokeWidth="4"
            cx={radius + 4}
            cy={radius + 4}
            r={radius}
            style={{
              strokeDasharray: `${(pathLen * percent) / 100},${pathLen}`,
              stroke: color,
            }}
          ></circle>
        </svg>
      </div>
    );
  } else {
    return (
      <div className={classNames("groove", className)}>
        <div
          className="progress"
          style={{ backgroundColor: color, width: percent + "%" }}
        ></div>
      </div>
    );
  }
}
export default React.memo(Progress);
