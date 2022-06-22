import React, { useContext } from "react";
import classnames from "classnames";

import { menuContext } from "./Menu";

export interface IMenuItemProps {
  className?: string;
  eventKey?: string;
  index?: string;
}

const MenuItem: React.FC<IMenuItemProps> = (props) => {
  const { className, children, eventKey, index } = props;
  console.log("props======>", props);

  const context = useContext(menuContext);
  // console.log("context====>", context);
  // console.log("context1====>", context.activeKey?.includes(key));
  const classes = classnames("dui-menu-item", className, {
    "dui-menu-item-active": eventKey
      ? context.activeKey?.includes(eventKey)
      : index
      ? context.activeKey?.includes(index)
      : false,
  });

  const handleClick = () => {
    if (context.onSelect) {
      if (index) {
        context.onSelect(index);
      }
      if (eventKey) {
        context.onSelect(eventKey);
      }
    }
  };

  return (
    <li className={classes} onClick={handleClick}>
      <span>{children}</span>
    </li>
  );
};

export default MenuItem;
