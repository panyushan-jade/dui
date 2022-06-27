import React from "react";

import Button from "src/components/Button";
import Alert from "src/components/Alert";
import Progress from "src/components/Progress";
import Menu from "src/components/Menu/Menu";
import MenuItem from "src/components/Menu/MenuItem";
import SubMenu from "src/components/Menu/SubMenu";

function App() {
  return (
    <div className="App" style={{ padding: 50 }}>
      <h3>Menu</h3>
      <Menu style={{ width: 800 }} defaultSelectedKey="1">
        <MenuItem disabled>我是MenuItem1</MenuItem>
        <MenuItem>我是MenuItem2</MenuItem>
        <MenuItem>我是MenuItem3</MenuItem>
        <SubMenu title="我是SubMenu">
          <MenuItem>我是submenu1</MenuItem>
          <MenuItem>我是submenu2</MenuItem>
          <div>1111</div>
        </SubMenu>
        <div>222</div>
      </Menu>
      <Menu style={{ width: 800 }} mode="vertical" defaultSelectedKey="1">
        <MenuItem disabled>我是MenuItem1</MenuItem>
        <MenuItem>我是MenuItem2</MenuItem>
        <MenuItem>我是MenuItem3</MenuItem>
        <SubMenu title="我是SubMenu">
          <MenuItem>我是submenu1</MenuItem>
          <MenuItem>我是submenu2</MenuItem>
          <div>1111</div>
        </SubMenu>
        <div>222</div>
      </Menu>
      <h3>Button</h3>
      <Button type="link">我是link</Button>
      <Button>我是default</Button>
      <Button type="primary">我是primary</Button>
      <Button danger>我是primary danger</Button>
      <Button size="large">我是large</Button>
      <Button size="small">我是small</Button>
      <Button size="small" disabled>
        我是disbled
      </Button>
      <Button type="link" disabled className="pan">
        a disabled
      </Button>
      <h3>Alert</h3>
      <div style={{ width: 300 }}>
        <Alert message="success" />
      </div>
      <div style={{ width: 300 }}>
        <Alert type="info" message="info" />
      </div>
      <div style={{ width: 300 }}>
        <Alert type="warning" message="warning" />
      </div>
      <div style={{ width: 300 }}>
        <Alert type="error" message="error" />
      </div>
      <div style={{ width: 300 }}>
        <Alert type="error" message="onClose" closable />
      </div>
      <div style={{ width: 300 }}>
        <Alert
          type="error"
          message="description"
          description="我是一段描述~~~"
          closable
        />
      </div>
      <div style={{ width: 300 }}>
        <Alert
          type="error"
          message="description"
          description="我是一段描述~~~"
          closable
          closeText="关闭"
        />
      </div>
      <h3>Progress</h3>
      <Progress
        type="circle"
        RingWidth={5}
        value={60}
        radius={100}
        style={{ height: 10, width: 500 }}
      ></Progress>
    </div>
  );
}

export default App;
