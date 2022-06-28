import React, { useState, useContext } from "react";
import classnames from "classnames";

import { IMenuItemProps } from "./MenuItem";
import { menuContext } from "./Menu";
export interface ISubMenuProps {
  eventKey?: string;
  index?: string;
  disabled?: boolean;
  title: React.ReactNode;
}

const SubMenu: React.FC<ISubMenuProps> = (props) => {
  const { title, children, index, eventKey, disabled } = props;
  const [currentHover, setCurrentHover] = useState("");

  const context = useContext(menuContext);
  console.log("context====>: ", context);
  console.log("context====>111: ", index);
  console.log("context====>2222: ", eventKey);
  const classes = classnames("dui-menu-submenu", currentHover, {
    "dui-menu-submenu-active": eventKey
      ? context.activeKey?.includes(eventKey)
      : index
      ? context.activeKey?.includes(index)
      : false,
    "dui-menu-submenu-disabled": disabled,
  });

  const onMouseEnter = () => {
    if (disabled) return;
    setCurrentHover("dui-menu-submenu-hover");
  };
  const onMouseLeave = () => {
    setCurrentHover("");
  };
  const renderSubMenuChildren = () => {
    const newChildren =
      children as React.FunctionComponentElement<IMenuItemProps>;
    return React.Children.map(newChildren, (child, subIndex) => {
      const { displayName } = child.type;
      if (displayName === "MenuItem") {
        return React.cloneElement(child, {
          index: eventKey ? `${eventKey}-${subIndex}` : `${index}-${subIndex}`,
          eventKey: child.key as string,
        });
      } else {
        console.warn(
          "Warning: SubMenu has a child which is not a MenuItem component"
        );
      }
    });
  };
  return (
    <li
      className={classes}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <span className="ant-menu-title-content">
        {title}
        <ul className="dui-menu-submenu-item">{renderSubMenuChildren()}</ul>
      </span>
      <span className="dui-menu-submenu-icon">{">"}</span>
    </li>
  );
};
// 设置别名（用来判断children的类型）
SubMenu.displayName = "SubMenu";
export default SubMenu;
