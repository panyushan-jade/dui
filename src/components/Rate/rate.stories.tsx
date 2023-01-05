import React from "react";
import { storiesOf } from "@storybook/react";
// import { action } from "@storybook/addon-actions";
// import { withInfo } from '@storybook/addon-info'

import Rate from "./index";

const defaultRate = () => <Rate />;

storiesOf("Rate 评分", module).add("默认 Rate", defaultRate);
