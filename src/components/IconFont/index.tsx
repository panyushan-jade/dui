import React, { FC } from "react";
//   import classNames from "classnames";

type IconFontType = "icon-closefill";

export interface IconFontProps extends React.SVGAttributes<HTMLOrSVGElement> {
  type: IconFontType;
}

function createScript() {
  const isExistDom = document.getElementById("dui-iconfont");
  if (isExistDom) return;
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "//at.alicdn.com/t/c/font_3672057_v2qqlp9rc8.js";
  script.id = "dui-iconfont";
  document.body.appendChild(script);
}

/**
 * IconFont 图标组件库 支持所有svg属性
 * 通过 iconfont.cn 链接方式生成icon
 *
 * ~~~js
 * import { IconFont } from 'vikingship'
 * ~~~
 */
const IconFont: FC<IconFontProps> = (props) => {
  const { type, ...restProps } = props;
  createScript();

  return (
    <svg
      width="1em"
      height="1em"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      {...restProps}
    >
      <use xlinkHref={`#${type}`}></use>
    </svg>
  );
};

export default IconFont;
