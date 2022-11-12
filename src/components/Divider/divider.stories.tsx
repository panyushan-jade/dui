import React from "react";
import { storiesOf } from "@storybook/react";
// import { action } from "@storybook/addon-actions";

import Divider from "./index";

const defaultDivider = () => <Divider></Divider>;

storiesOf("Divider 分割线", module).add("Divider", defaultDivider);
