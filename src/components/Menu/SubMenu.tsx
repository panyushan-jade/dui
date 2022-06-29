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
  const [collapse, setCollapse] = useState<boolean>(false);
  const context = useContext(menuContext);
  const shouldActive = () => {
    if (context.mode === "vertical") return false;
    if (eventKey && typeof eventKey !== "string") return false;
    return (
      context.activeKey?.includes(eventKey as string) ||
      context.activeKey?.includes(index as string)
    );
  };
  const classes = classnames("dui-menu-submenu", currentHover, {
    "dui-menu-submenu-active": shouldActive(),
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

  const handleClick = () => {
    if (disabled) return;
    setCollapse(!collapse);
  };

  const renderMode = () => {
    if (context.mode === "vertical") {
      return (
        <>
          <span className="ant-menu-title-content" onClick={handleClick}>
            {title}
            <span
              className={classnames("dui-menu-submenu-icon", {
                "dui-menu-submenu-icon-switch": collapse,
              })}
            >
              {">"}
            </span>
          </span>
          <ul
            className={classnames("dui-menu-submenu-item", {
              "dui-menu-submenu-collapse-open": collapse,
            })}
          >
            {renderSubMenuChildren()}
          </ul>
        </>
      );
    } else {
      return (
        <span className="ant-menu-title-content">
          {title}
          <ul className="dui-menu-submenu-item">{renderSubMenuChildren()}</ul>
        </span>
      );
    }
  };

  return (
    <li
      className={classes}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {renderMode()}
      {/* <span className="ant-menu-title-content">
        {title}
        <ul className="dui-menu-submenu-item">{renderSubMenuChildren()}</ul>
      </span>
      { context.mode === 'vertical' ? <span className="dui-menu-submenu-icon">{">"}</span> : null } */}
    </li>
  );
};
// 设置别名（用来判断children的类型）
SubMenu.displayName = "SubMenu";
export default SubMenu;
