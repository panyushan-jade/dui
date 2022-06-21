import React from "react";
import classnames from "classnames";

export interface IMenuItemProps {
  className?: string;
  index?: string;
  onSelect?: (key: string) => void;
  onClick?: (key: string) => void;
}

const MenuItem: React.FC<IMenuItemProps> = (props) => {
  const { className, children } = props;
  const classes = classnames("dui-menu-item", className);

  return <li className={classes}>{children}</li>;
};

export default MenuItem;
