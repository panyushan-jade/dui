import React from "react";

import Button from "src/components/Button";
import Alert from "src/components/Alert";
import Progress from "src/components/Progress";

function App() {
  return (
    <div className="App">
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
