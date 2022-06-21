import React from "react";
import classnames from "classnames";

type mode = "vertical" | "horizontal";

export interface IMenuProps {
  className?: string;
  mode?: mode; // 菜单类型 水平 垂直
  defaultOpenKeys?: string[]; // 初始展开的 SubMenu 菜单项 key 数组
  defaultSelectedKeys?: string[]; // 初始选中的菜单项 key 数组
  style?: React.CSSProperties; // 根节点样式
  onSelect?: (key: string) => void;
  onClick?: (key: string) => void;
}

const Menu: React.FC<IMenuProps> = (props) => {
  const { className, style, children, mode } = props;
  const classes = classnames("dui-menu", className, {
    "dui-menu-horizontal": mode === "horizontal",
    "dui-menu-vertical": mode === "vertical",
  });

  return (
    <ul style={style} className={classes}>
      {children}
    </ul>
  );
};

export default Menu;

Menu.defaultProps = {
  mode: "horizontal",
};
