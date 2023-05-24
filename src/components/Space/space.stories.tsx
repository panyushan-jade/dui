import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "../Button";
import Space from "./index";

const defaultSpace = () => (
  <Space>
    Space
    <Button type="primary"> primary button </Button>
    <Button danger> danger button </Button>
    <div>Text</div>
    {null}
    {undefined}
  </Space>
);

const sizeSpace = () => (
  <>
    <Space size="large">
      Space
      <Button type="primary"> primary button </Button>
      <Button danger> danger button </Button>
      <div>Text</div>
    </Space>
    <br />
    <br />
    <Space size={50}>
      Space
      <Button type="primary"> primary button </Button>
      <Button danger> danger button </Button>
      <div>Text</div>
    </Space>
  </>
);

const wrapSpace = () => (
  <div style={{ width: 300 }}>
    <Space wrap>
      Space
      <Button type="primary"> primary button </Button>
      <Button danger> danger button </Button>
      <div>Text</div>
    </Space>
  </div>
);

const splitSpace = () => (
  <Space split="|">
    Space
    <Button type="primary"> primary button </Button>
    <Button danger> danger button </Button>
    <div>Text</div>
  </Space>
);

const verticalSpace = () => (
  <Space direction="vertical" size="middle">
    Space
    <Button type="primary"> primary button </Button>
    <Button danger> danger button </Button>
    <div>Text</div>
  </Space>
);

storiesOf("Space 间距", module)
  .add("Space", defaultSpace)
  .add("Space 大小", sizeSpace)
  .add("Space 换行", wrapSpace)
  .add("Space 分隔符", splitSpace)
  .add("Space 垂直间距", verticalSpace);
