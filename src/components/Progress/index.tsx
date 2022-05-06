import React from "react";
import "./_style.scss";

interface PropsType {
  type?: string; //进度条类型  默认线形，circle圆环
  color?: string; //进度条颜色
  value?: number; //进度值
  /* 圆环属性 */
  radius?: number; //圆环半径
  className?: string; //进度槽类名
  RingWidth?: number; //进度槽类名
  style?: {
    //进度槽样式
    [key: string]: string | number;
  };
}

function Progress(props: PropsType) {
  const {
    color = "#3683F7",
    type = "Line",
    radius = 80,
    RingWidth = 10,
  } = props;
  let { value = 80 } = props;
  value = value > 100 ? 100 : value;
  /* 圆环 */
  if (type === "circle") {
    // const r=radius;
    const progress = value / 100;
    /* 减90°因为path是从x轴开始计算的 */
    const degrees = progress * 360 - 90;
    const rad = (degrees * Math.PI) / 180;
    //极坐标转换成直角坐标（直接套公式）
    const x = (radius + RingWidth / 2 + Math.cos(rad) * radius).toFixed(2);
    const y = (radius + RingWidth / 2 + Math.sin(rad) * radius).toFixed(2);
    //判断是不是大弧度
    const isBigCircle = value > 50 ? 1 : 0;
    const descriptions = [
      "M",
      radius + RingWidth / 2,
      RingWidth / 2,
      "A",
      radius,
      radius,
      0,
      isBigCircle,
      1,
      x,
      y,
    ];
    return (
      <div className="circle-progress">
        <span>{value}%</span>
        <svg
          width={radius * 2 + RingWidth}
          height={radius * 2 + RingWidth}
          version="1.1"
        >
          <circle
            cx={radius + RingWidth / 2}
            cy={radius + RingWidth / 2}
            r={radius}
            stroke="#e1e1e1"
            strokeWidth={RingWidth}
            fill="none"
          />
          {/* 因为path圆弧起始坐标不能等于结束坐标 所以100% 的时候要用圆环代替 所以又衍生出另一个问题：圆在后面做动画时无法实现 */}
          {value === 100 ? (
            <circle
              cx={radius + RingWidth / 2}
              cy={radius + RingWidth / 2}
              r={radius}
              stroke={color}
              strokeWidth={RingWidth}
              fill="none"
            />
          ) : (
            <path
              id="ring"
              d={descriptions.join(" ")}
              stroke={color}
              strokeLinecap="round"
              fill="none"
              strokeWidth={RingWidth}
              fillOpacity="0.5"
            />
          )}
        </svg>
      </div>
    );
  } else {
    return (
      <div className="groove" style={props.style}>
        <div
          className="progress"
          style={{ backgroundColor: color, width: value + "%" }}
        ></div>
      </div>
    );
  }
}
export default React.memo(Progress);
