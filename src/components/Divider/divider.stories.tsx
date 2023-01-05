import React from "react";
import { storiesOf } from "@storybook/react";

import Divider from "./index";

const defaultDivider = () => (
  <>
    <Divider>Text</Divider>
    <span>我是一段文本</span>
    <Divider />
    <span>我是一段文本</span>
  </>
);

const plainTextDivider = () => <Divider plain>Text</Divider>;

const textOrientation = () => (
  <>
    <Divider plain orientation="left">
      Text
    </Divider>
    <span>我是一段文本</span>
    <Divider plain orientation="right">
      Text
    </Divider>
  </>
);

const verticalDivider = () => (
  <>
    Text
    <Divider type="vertical" />
    <a href="#">Link</a>
    <Divider type="vertical" />
    <a href="#">Link</a>
  </>
);

storiesOf("Divider 分割线", module)
  .add("默认分割线", defaultDivider)
  .add("普通文本", plainTextDivider)
  .add("文字对齐", textOrientation)
  .add("垂直方向", verticalDivider);
