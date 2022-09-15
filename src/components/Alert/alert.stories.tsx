import React from "react";
import { storiesOf } from "@storybook/react";
// import { action } from "@storybook/addon-actions";

import Alert from "./index";

const defaultAlert = () => <Alert message="哈哈哈哈" />;

const alertWithType = () => (
  <>
    <Alert type="info" message="info" />
    <Alert type="warning" message="warning" />
    <Alert type="error" message="error" />
  </>
);

const alertWithDesc = () => (
  <Alert
    type="error"
    message="description"
    description="我是一段描述~~~"
    closable
    closeText="关闭"
  />
);

storiesOf("Alert警告提示", module)
  .add("Alert", defaultAlert)
  .add("不同类型的Alert", alertWithType)
  .add("带有描述和关闭的Alert", alertWithDesc);
