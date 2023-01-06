import React, { useState } from "react"; // , { ReactNode }
import classnames from "classnames";
import Icon from "../IconFont";

export type OrientationType = "left" | "right" | "center";

export interface RateProps {
  /** 评分样式类 */
  className?: string;
  /** 评分样式对象 */
  style?: React.CSSProperties;
  /** 是否允许半选 */
  allowHalf?: boolean;
}

/**
 * Rate 评分
 * 对评价进行展示
 * 对事物进行快速的评级操作
 * ### 引用方法
 *
 * ~~~js
 * import { Rate } from 'jadedui'
 * ~~~
 */
const Rate: React.FC<RateProps> = (props) => {
  const { className, allowHalf } = props;
  console.log("allowHalf: ", allowHalf);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [ids, setIds] = useState<number[]>([0, 1, 2, 3, 4]);
  const [pos, setPos] = useState<any>({
    curIndexLi: -1,
    curIndexStar: -1,
  });
  // const [classNames,setClassNames] = useState<Record<string,any>>({
  //   'dui-rate-star': true, // 基础类
  //   'dui-rate-star-zero': false, // 0 星
  //   'dui-rate-star-half': false, // 半星
  //   'dui-rate-star-full': false, // 满星
  //   'dui-rate-star-active': false, // 当前激活星
  // })

  const onMouseFirstEnter = (d: number, curStar: number) => {
    console.log("onMouseFirstEnter");
    const curIndex = ids.findIndex((id) => id == d);
    console.log("curIndex: ", curIndex, curStar);
    setPos({
      curIndexLi: curIndex,
      curIndexStar: curStar,
    });
  };

  const renderClassNames = (key: number) => {
    console.log("key: ", key);
    let classNames = "dui-rate-star";
    if (pos.curIndexLi === -1) {
      classNames += " dui-rate-star-zero";
    }
    return classNames;
  };

  return (
    <ul className={classnames("dui-rate", className)}>
      {ids.map((key) => {
        return (
          <li className={renderClassNames(key)} key={key}>
            <div
              className="dui-rate-star-first"
              onMouseEnter={() => onMouseFirstEnter(key, 0)}
            >
              <Icon
                type="icon-star"
                style={{ fontSize: 20, color: "#f0f0f0" }}
              />
            </div>
            <div
              className="dui-rate-star-second"
              onMouseEnter={() => onMouseFirstEnter(key, 1)}
            >
              <Icon
                type="icon-star"
                style={{ fontSize: 20, color: "#f0f0f0" }}
              />
            </div>
          </li>
        );
      })}
    </ul>
  );
};

// Divider.defaultProps = {
//   plain: false,
//   orientation: "center",
//   type: "horizontal",
//   dashed: false,
// };

export default Rate;
