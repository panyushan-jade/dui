import React, { useContext, useState } from "react";
import classnames from "classnames";

import { menuContext } from "./Menu";

export interface IMenuItemProps {
  className?: string;
  eventKey?: string;
  index?: string;
  /**是否禁用 */
  disabled?: boolean;
}

const MenuItem: React.FC<IMenuItemProps> = (props) => {
  const { className, children, eventKey, index, disabled } = props;
  const [currentHover, setCurrentHover] = useState("");

  const context = useContext(menuContext);
  const shouldActive = () => {
    if (eventKey && typeof eventKey !== "string") return false;
    return (
      context.activeKey === (eventKey || index) ||
      context.activeKey?.indexOf((eventKey as string) || (index as string)) ===
        0
    );
  };
  const classes = classnames("dui-menu-item", className, currentHover, {
    "dui-menu-item-active": shouldActive(),
    "dui-menu-item-disabled": disabled,
  });

  const handleClick = () => {
    if (context.onSelect && !disabled) {
      if (index) {
        context.onSelect(index);
      }
      if (eventKey) {
        context.onSelect(eventKey);
      }
    }
  };
  const onMouseEnter = () => {
    if (disabled) return;
    setCurrentHover("dui-menu-item-hover");
  };
  const onMouseLeave = () => {
    setCurrentHover("");
  };
  return (
    <li
      className={classes}
      onClick={handleClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <span className="ant-menu-title-content">{children}</span>
    </li>
  );
};

MenuItem.displayName = "MenuItem";
export default MenuItem;
