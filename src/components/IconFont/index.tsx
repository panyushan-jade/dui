import React, { CSSProperties, FC } from "react";
//   import classNames from "classnames";

// type IconFontType = "icon-closefill";

export interface IconFontProps extends React.SVGAttributes<HTMLOrSVGElement> {
  /**图标类型 */
  type: string;
  /**是否旋转 */
  spin?: boolean;
  /**图标颜色 */
  color?: string;
  style?: CSSProperties;
}

function createScript() {
  const isExistDom = document.getElementById("dui-iconfont");
  if (isExistDom) return;
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "//at.alicdn.com/t/c/font_3672057_9x8gvk6a2ho.js";
  script.id = "dui-iconfont";
  document.body.appendChild(script);
}

/**
 * IconFont 图标组件库 支持所有svg属性
 * 支持ant design所有图标
 * 通过 iconfont.cn 链接方式生成icon
 *
 * ~~~js
 * import { Icon } from 'jadedui'
 * ~~~
 */
const Icon: FC<IconFontProps> = (props) => {
  const { type, color, spin = false, ...restProps } = props;
  createScript();

  return (
    <svg
      width="1em"
      height="1em"
      fill={color || "currentColor"}
      aria-hidden="true"
      focusable="false"
      className={spin ? "dui-icon-spin" : ""}
      {...restProps}
    >
      <use xlinkHref={`#${type}`}></use>
    </svg>
  );
};

export default Icon;
