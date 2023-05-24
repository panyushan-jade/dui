import React, { Children, Fragment } from "react";
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
  style?: React.CSSProperties;
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
  const {
    size = "small",
    wrap,
    split,
    align,
    direction,
    children,
    style,
  } = props;
  const classNames = className(
    "dui-space",
    { [`dui-space-align-${align}`]: true },
    { [`dui-space-${direction}`]: true }
  );

  const gapMap = {
    small: 8,
    middle: 16,
    large: 24,
  };
  const gap = typeof size === "number" ? size : gapMap[size] ?? 8;

  const child = Children.toArray(children);

  return (
    <div
      className={classNames}
      style={{ gap, flexWrap: wrap ? "wrap" : undefined, ...style }}
    >
      {child.map((ch, index) => {
        return (
          <Fragment key={index}>
            <div className="dui-space-item">{ch}</div>
            {index === child.length - 1 || !split ? null : (
              <span className="dui-space-item-split">{split}</span>
            )}
          </Fragment>
        );
      })}
    </div>
  );
};

Space.defaultProps = {
  size: "small",
  align: "center",
  direction: "horizontal",
  wrap: false,
};

export default Space;
