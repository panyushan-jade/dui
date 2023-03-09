import React from "react"; // , { ReactNode }
import className from "classnames";
import IconFont from "../IconFont/index";

export interface BackTopProps {
  /** 回到顶部所需要的时间 */
  duration?: string | number;
  /** 设置需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数 */
  target?: () => HTMLElement;
  /** 滚动高度达到此参数值才出现 BackTop */
  visibilityHeight?: string | number;
  /** 点击按钮的回调函数 */
  onClick?: () => void;
  /** 自定义样式 */
  style?: React.CSSProperties;
  /** 自定义类名 */
  className?: string
}

/**
 * BackTop 回到顶部
 * 返回页面顶部的操作按钮
 * ### 引用方法
 *
 * ~~~js
 * import { BackTop } from 'jadedui'
 * ~~~
 */
const BackTop: React.FC<BackTopProps> = (props) => {
  const { children } = props;
  console.log('children: ', children);
  const classNames = className("dui-back-top");

//   if (type === "vertical" && children) {
//     console.warn("children not working in vertical mode");
//   }

  return (
    <div className={classNames}>
        <IconFont type="icon-vertical-align-top" />
    </div>
  );
};

// BackTop.defaultProps = {
//   plain: false,
//   orientation: "center",
//   type: "horizontal",
//   dashed: false,
// };

export default BackTop;
