import React from // , { ReactNode }
"react";
import className from "classnames";

export type OrientationType = "left" | "right" | "center";

export interface DividerProps {
  /** 分割线样式类 */
  className?: string;
  /** 分割线样式对象 */
  style?: React.CSSProperties;
  /** 文字是否显示为普通正文样式 */
  plain?: boolean;
  /** 是否虚线 */
  dashed?: boolean;
  /** 分割线标题的位置 */
  orientation?: OrientationType;
  /** 水平还是垂直类型 */
  type?: "horizontal" | "vertical";
}

/**
 * Divider 分割线
 * 区隔内容的分割线。
 * ### 引用方法
 *
 * ~~~js
 * import { Divider } from 'jadedui'
 * ~~~
 */
const Divider: React.FC<DividerProps> = (props) => {
  const { type = "horizontal", children } = props;
  const classNames = className("dui-divider", `dui-divider-${type}`);

  return <div className={classNames}>{children}</div>;
};

export default Divider;
