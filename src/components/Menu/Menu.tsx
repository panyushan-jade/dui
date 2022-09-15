import React, { createContext, useState } from "react";
import classnames from "classnames";

import { IMenuItemProps } from "./MenuItem";

type mode = "vertical" | "horizontal";

export interface IBaseProps {
  // defaultOpenKeys?: string[];
  /**默认选中的menu */
  defaultSelectedKey?: string;
  /**选中时的回调函数 */
  onSelect?: (key: string) => void;
  /**menu模式 */
  mode?: mode;
}
export interface IMenuProps extends IBaseProps {
  className?: string;
  style?: React.CSSProperties; // 根节点样式
}

interface IMenuContext {
  activeKey?: string;
  onSelect?: (selectedIndex: string) => void;
  mode?: mode;
  defaultSelectedKey?: string;
}

export const menuContext = createContext<IMenuContext>({});

/**
 * 为页面和功能提供导航的菜单列表
 * ### 引用方法
 *
 * ~~~js
 * import { Menu } from 'dui'
 * ~~~
 */
const Menu: React.FC<IMenuProps> = (props) => {
  const { className, style, children, mode, defaultSelectedKey, onSelect } =
    props;
  const [activeKey, setActiveKey] = useState(defaultSelectedKey || "");
  const onHandleSelect = (key: string) => {
    setActiveKey(key);
    if (onSelect) {
      onSelect(key);
    }
  };
  const passonContext: IMenuContext = {
    activeKey,
    mode,
    onSelect: onHandleSelect,
  };
  const classes = classnames("dui-menu", className, {
    "dui-menu-horizontal": mode === "horizontal",
    "dui-menu-vertical": mode === "vertical",
  });

  /* 
   如果用户传key则使用key，没有则使用index
  */

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const newChildren =
        child as React.FunctionComponentElement<IMenuItemProps>;
      const { displayName } = newChildren.type;
      if (displayName === "MenuItem" || displayName === "SubMenu") {
        return React.cloneElement(newChildren, {
          index: index.toString(),
          eventKey: newChildren.key as string,
        });
      } else {
        console.warn(
          "Warning: Menu has a child which is not a MenuItem component"
        );
      }
    });
  };

  return (
    <ul style={style} className={classes}>
      <menuContext.Provider value={passonContext}>
        {renderChildren()}
      </menuContext.Provider>
    </ul>
  );
};

export default Menu;

Menu.defaultProps = {
  mode: "horizontal",
};
