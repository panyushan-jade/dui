import React from "react";
import { storiesOf } from "@storybook/react";
// import { action } from "@storybook/addon-actions";
// import { withInfo } from '@storybook/addon-info'

import Rate from "./index";

const defaultRate = () => <Rate />;

const characterRate = () => (
  <>
    <Rate character="好" />
    <Rate character="A" />
    <Rate character={() => <span>星</span>} />
  </>
);

const disableRate = () => <Rate defaultValue={2.7} disabled />;

storiesOf("Rate 评分", module)
  .add("Rate", defaultRate)
  .add("只读 Rate", disableRate)
  .add("自定义字符 Rate", characterRate);
