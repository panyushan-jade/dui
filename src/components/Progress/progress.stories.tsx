import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
// import { action } from "@storybook/addon-actions";
import Progress from "./index";
import Button from "../Button";
import Icon from "../IconFont";

const defaultProgress = () => <Progress />;

const controllProgress = () => {
  const [value, setValue] = useState(0);
  return (
    <>
      <Progress percent={value} />
      <div style={{ display: "flex" }}>
        <Button
          type="primary"
          style={{ display: "flex", alignItems: "center" }}
          onClick={() => {
            setValue((pre) => {
              return pre >= 100 ? 100 : pre + 10;
            });
          }}
        >
          <Icon type="icon-plus" />
          增加
        </Button>

        <Button
          type="primary"
          style={{ display: "flex", alignItems: "center" }}
          onClick={() => {
            setValue((pre) => {
              return pre <= 0 ? 0 : pre - 10;
            });
          }}
        >
          <Icon type="icon-minus" />
          减少
        </Button>
      </div>
    </>
  );
};

const customColorProgress = () => <Progress color="#ff8235" percent={80} />;

const circleProgress = () => {
  const [value, setValue] = useState(20);
  return (
    <>
      <Progress color="#ff8235" type="circle" percent={value} />
      <div style={{ display: "flex" }}>
        <Button
          type="primary"
          style={{ display: "flex", alignItems: "center" }}
          onClick={() => {
            setValue((pre) => {
              return pre + 10;
            });
          }}
        >
          <Icon type="icon-plus" />
          增加
        </Button>

        <Button
          type="primary"
          style={{ display: "flex", alignItems: "center" }}
          onClick={() => {
            setValue((pre) => {
              return pre - 10;
            });
          }}
        >
          <Icon type="icon-minus" />
          减少
        </Button>
      </div>
    </>
  );
};

storiesOf("Progress 进度条", module)
  .add("默认 Progress", defaultProgress)
  .add("受控 Progress", controllProgress)
  .add("自定义颜色 Progress", customColorProgress)
  .add("进度圈 Progress", circleProgress);
