import React, { createContext } from "react";
import classnames from "classnames";

import { IMenuItemProps } from "./MenuItem";

type mode = "vertical" | "horizontal";

interface IBaseProps {
  defaultOpenKeys?: string[];
  defaultSelectedKeys?: string[];
  onSelect?: (key: string) => void;
  onClick?: (key: string) => void;
  mode?: mode;
}
export interface IMenuProps extends IBaseProps {
  className?: string;
  style?: React.CSSProperties; // 根节点样式
}

export const menuContext = createContext<IBaseProps>({});

const Menu: React.FC<IMenuProps> = (props) => {
  const { className, style, children, mode, defaultSelectedKeys } = props;

  const passonContext: IBaseProps = {
    mode,
    defaultSelectedKeys,
  };

  console.log("passonContext", passonContext);

  const classes = classnames("dui-menu", className, {
    "dui-menu-horizontal": mode === "horizontal",
    "dui-menu-vertical": mode === "vertical",
  });

  const renderChildren = () => {
    const newChildren =
      children as React.FunctionComponentElement<IMenuItemProps>;
    return React.Children.map(newChildren, (child, index) => {
      return React.cloneElement(child, {
        index: index.toString(),
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
