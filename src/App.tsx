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
      <Alert message="哈哈哈" />
      <Progress
        value={16}
        color="pink"
        style={{ height: 10, width: 500 }}
      ></Progress>
    </div>
  );
}

export default App;
