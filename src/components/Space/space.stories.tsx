import React from "react";
import { storiesOf } from "@storybook/react";

import Space from "./index";

const defaultSpace = () => <Space> default button </Space>;

storiesOf("Space 间距", module).add("Space", defaultSpace);
