import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Menu from "./Menu";
import MenuItem from "./MenuItem";
import SubMenu from "./SubMenu";

const defaultMenu = () => (
  <Menu onSelect={action("selected")}>
    <MenuItem>吃饭</MenuItem>
    <MenuItem>碎觉</MenuItem>
    <MenuItem>打豆豆</MenuItem>
  </Menu>
);
const menuWithMenuItem = () => (
  <Menu onSelect={action("selected")} defaultSelectedKey="1">
    <MenuItem>吃饭</MenuItem>
    <MenuItem>碎觉</MenuItem>
    <MenuItem>打豆豆</MenuItem>
    <SubMenu title="我是SubMenu">
      <MenuItem>我是submenu1</MenuItem>
      <MenuItem>我是submenu2</MenuItem>
    </SubMenu>
  </Menu>
);

const menuWithMode = () => (
  <Menu style={{ width: 250 }} mode="vertical" defaultSelectedKey="1">
    <MenuItem disabled>我是vertical MenuItem1</MenuItem>
    <MenuItem>我是vertical MenuItem2</MenuItem>
    <MenuItem>我是vertical MenuItem3</MenuItem>
    <SubMenu title="我是vertical">
      <MenuItem>我是vertical submenu1</MenuItem>
      <MenuItem>我是vertical submenu2</MenuItem>
    </SubMenu>
  </Menu>
);

storiesOf("Menu菜单", module)
  .add("Menu", defaultMenu)
  .add("有子菜单的Menu", menuWithMenuItem)
  .add("不同方向的Menu", menuWithMode);
