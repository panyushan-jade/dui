import React from "react"; // , { ReactNode }
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
  const classNames = classnames("dui-rate", className);

  return (
    <ul className={classNames}>
      {new Array(5).fill("").map(() => {
        return (
          <li className="dui-rate-star" key={crypto.randomUUID()}>
            <div className="dui-rate-star-first">
              <Icon
                type="icon-star"
                style={{ fontSize: 20, color: "#f0f0f0" }}
              />
            </div>
            <div className="dui-rate-star-second">
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
