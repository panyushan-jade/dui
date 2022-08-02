import React, { useRef } from "react";

import Button from "src/components/Button";
import Alert from "src/components/Alert";
import Progress from "src/components/Progress";
import Menu from "src/components/Menu/Menu";
import MenuItem from "src/components/Menu/MenuItem";
import SubMenu from "src/components/Menu/SubMenu";
import Carousel from "src/components/Carousel";

import image1 from "src/assets/image1.webp";
import image2 from "src/assets/image2.webp";
import image3 from "src/assets/image3.webp";

import Lottie from "lottie-react";
import groovyWalkAnimation from "./assets/groovyWalk.json";

type InputRefProps = {
  next: () => void;
  prev: () => void;
  moveTo: (index: number) => void;
};

function App() {
  const myref = useRef<InputRefProps>(null);
  const handle = () => {
    console.log("myref", myref);
    if (myref && myref.current) {
      myref.current.moveTo(1);
    }
  };
  return (
    <div className="App" style={{ padding: 50 }}>
      <Lottie
        style={{ width: 300 }}
        animationData={groovyWalkAnimation}
        loop={true}
      />
      <h3>Carousel</h3>
      <button onClick={handle}>moveTo</button>
      <div style={{ width: 670 }}>
        <Carousel ref={myref}>
          <img src={image1} alt="image1" />
          <img src={image2} alt="image2" />
          <img src={image3} alt="image3" />
          {null}
          {undefined}
        </Carousel>
      </div>
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
      <Menu style={{ width: 250 }} mode="vertical" defaultSelectedKey="1">
        <MenuItem disabled>我是vertical MenuItem1</MenuItem>
        <MenuItem>我是vertical MenuItem2</MenuItem>
        <MenuItem>我是vertical MenuItem3</MenuItem>
        <SubMenu title="我是vertical">
          <MenuItem>我是vertical submenu1</MenuItem>
          <MenuItem>我是vertical submenu2</MenuItem>
        </SubMenu>
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
