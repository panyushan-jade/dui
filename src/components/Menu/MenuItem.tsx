import React, { useContext } from "react";
import classnames from "classnames";

import { menuContext } from "./Menu";

export interface IMenuItemProps {
  className?: string;
  index?: string;
  onSelect?: (key: string) => void;
  onClick?: (key: string) => void;
}

const MenuItem: React.FC<IMenuItemProps> = (props) => {
  const { className, children, index } = props;
  const context = useContext(menuContext);
  console.log("context====>", context);
  const classes = classnames("dui-menu-item", className, {
    "dui-menu-item-active": index
      ? context.defaultSelectedKeys?.includes(index)
      : false,
  });

  return (
    <li className={classes}>
      <span>{children}</span>
    </li>
  );
};

export default MenuItem;
