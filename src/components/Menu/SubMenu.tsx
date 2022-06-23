import React, { useState } from "react";
import classnames from "classnames";

// import { IMenuItemProps } from "./MenuItem";

export interface ISubMenuProps {
  eventKey?: string;
  index?: string;
  disabled?: boolean;
  title: React.ReactNode;
}

const SubMenu: React.FC<ISubMenuProps> = (props) => {
  const { title, children } = props;
  const [currentHover, setCurrentHover] = useState("");

  //   const context = useContext(menuContext);
  const classes = classnames("dui-menu-submenu", currentHover);
  //   {
  //     "dui-menu-item-active": eventKey
  //       ? context.activeKey?.includes(eventKey)
  //       : index
  //       ? context.activeKey?.includes(index)
  //       : false,
  //      "dui-menu-item-disabled": disabled
  //   }

  //   const handleClick = () => {
  //     if (context.onSelect && !disabled) {
  //       if (index) {
  //         context.onSelect(index);
  //       }
  //       if (eventKey) {
  //         context.onSelect(eventKey);
  //       }
  //     }
  //   };
  const onMouseEnter = () => {
    // if(disabled) return
    setCurrentHover("dui-menu-submenu-hover");
  };
  const onMouseLeave = () => {
    setCurrentHover("");
  };
  // const renderChildren = () => {
  //     const newChildren =
  //     children as React.FunctionComponentElement<IMenuItemProps>;
  //     return React.Children.map(newChildren, (child, index) => {
  //     return React.cloneElement(child, {
  //         index: index.toString(),
  //         eventKey: child.key as string,
  //     });
  //     });
  // };
  return (
    <li
      className={classes}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <span className="ant-menu-title-content">
        {title}
        <ul className="dui-menu-submenu-item">{children}</ul>
      </span>
    </li>
  );
};

export default SubMenu;
