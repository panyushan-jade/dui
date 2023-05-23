import React from "react";
import className from "classnames";

export type SpaceDir = "vertical" | "horizontal";
export type SpaceSize = "middle" | "small" | "large" | number;
export type SpaceAlign = "start" | "end" | "center" | "baseline";

export interface SpaceProps {
  /**对齐方式 */
  align?: SpaceAlign;
  /**间距方向 */
  direction?: SpaceDir;
  /**间距大小 */
  size?: SpaceSize;
  /**设置拆分 */
  split?: React.ReactNode;
  /**是否自动换行，仅在 horizontal 时有效 */
  wrap?: boolean;
  children: React.ReactNode;
}

/**
 * 设置组件之间的间距,避免组件紧贴在一起，拉开统一的空间
 * ### 引用方法
 *
 * ~~~js
 * import { Space } from 'jadedui'
 * ~~~
 */
const Space: React.FC<SpaceProps> = (props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { size = "middle", children, ...restprops } = props;

  //如果是link类型就生成a标签
  const classNames = className(
    // cusClassname,
    "dui-btn",
    { [`dui-btn-${size}`]: true }
  );
  return (
    <button className={classNames} {...restprops}>
      {children}
    </button>
  );
};

Space.defaultProps = {
  size: "middle",
  direction: "horizontal",
  wrap: false,
};

export default Space;
