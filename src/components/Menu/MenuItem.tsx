import React, { useContext, useState } from "react";
import classnames from "classnames";

import { menuContext } from "./Menu";

export interface IMenuItemProps {
  className?: string;
  eventKey?: string;
  index?: string;
  disabled?: boolean;
}

const MenuItem: React.FC<IMenuItemProps> = (props) => {
  const { className, children, eventKey, index, disabled } = props;
  console.log("props======>", props);
  const [currentHover, setCurrentHover] = useState("");

  const context = useContext(menuContext);
  const classes = classnames("dui-menu-item", className, currentHover, {
    "dui-menu-item-active": eventKey
      ? context.activeKey?.includes(eventKey)
      : index
      ? context.activeKey?.includes(index)
      : false,
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

export default MenuItem;
