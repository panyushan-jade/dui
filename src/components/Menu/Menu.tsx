import React from "react";

export interface IMenuProps {
  className?: string;
}

const Menu: React.FC<IMenuProps> = (props) => {
  console.log("props:222 ", props);
  return <div>Menu</div>;
};

export default Menu;
