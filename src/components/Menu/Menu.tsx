import React, { createContext, useState } from "react";
import classnames from "classnames";

import { IMenuItemProps } from "./MenuItem";

type mode = "vertical" | "horizontal";

interface IBaseProps {
  defaultOpenKeys?: string[];
  defaultSelectedKeys?: string[];
  onSelect?: (key: string) => void;
  mode?: mode;
}
export interface IMenuProps extends IBaseProps {
  className?: string;
  style?: React.CSSProperties; // 根节点样式
}

interface IMenuContext {
  activeKey: string[];
  onSelect?: (selectedIndex: string) => void;
  mode?: mode;
  defaultSelectedKeys?: string[];
}

export const menuContext = createContext<IMenuContext>({ activeKey: ["0"] });

const Menu: React.FC<IMenuProps> = (props) => {
  const { className, style, children, mode, defaultSelectedKeys, onSelect } =
    props;
  const [activeKey, setActiveKey] = useState(defaultSelectedKeys || []);
  const onHandleSelect = (key: string) => {
    setActiveKey([key]);
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

  const renderChildren = () => {
    const newChildren =
      children as React.FunctionComponentElement<IMenuItemProps>;
    return React.Children.map(newChildren, (child, index) => {
      console.log("child===>", child);

      return React.cloneElement(child, {
        index: index.toString(),
        eventKey: child.key as string,
      });
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
