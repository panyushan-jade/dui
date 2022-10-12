import React from "react";
import { storiesOf } from "@storybook/react";
// import { action } from "@storybook/addon-actions";
// import { withInfo } from '@storybook/addon-info'

import IconFont from "./index";

const IconFontComp = () => (
  <div style={{ width: 500, display: "flex", justifyContent: "space-evenly" }}>
    <IconFont type="icon-closefill" color="red" />
    <IconFont type="icon-propertysafety-fill" color="red" />
    <IconFont type="icon-mobile" />
    <IconFont type="icon-folder-add" />
    <IconFont type="icon-wifi" />
    <IconFont type="icon-tag" />
    <IconFont type="icon-arrowright" />
    <IconFont type="icon-arrowup" />
    <IconFont type="icon-arrowleft" />
    <IconFont type="icon-arrowdown" />
    <IconFont type="icon-YUAN" />
    <IconFont type="icon-edit-square" />
    <IconFont type="icon-deleteteam" />
    <IconFont type="icon-transaction" />
    <IconFont type="icon-folder-open-fill" />
    <IconFont type="icon-dashboard-fill" />
    <IconFont type="icon-customerservice-fill" />
    <IconFont type="icon-small-dash" />
    <IconFont type="icon-fullscreen" />
  </div>
);

const SpinIconFont = () => <IconFont type="icon-loading" spin />;

storiesOf("Icon图标", module)
  .add("IconFont", IconFontComp)
  .add("旋转Icon", SpinIconFont);
