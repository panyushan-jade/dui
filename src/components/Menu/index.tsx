import { FC } from "react";
import Menu, { IMenuProps } from "./Menu";
import SubMenu, { ISubMenuProps } from "./SubMenu";
import MenuItem, { IMenuItemProps } from "./MenuItem";

export type IMenuComponent = FC<IMenuProps> & {
  Item: FC<IMenuItemProps>;
  SubMenu: FC<ISubMenuProps>;
};
const TransMenu = Menu as IMenuComponent;

TransMenu.Item = MenuItem;
TransMenu.SubMenu = SubMenu;

export default TransMenu;
