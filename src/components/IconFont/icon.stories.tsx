import React from "react";
import { storiesOf } from "@storybook/react";
// import { action } from "@storybook/addon-actions";
// import { withInfo } from '@storybook/addon-info'

import Icon from "./index";

const IconFontComp = () => (
  <div style={{ width: 500, display: "flex", justifyContent: "space-evenly" }}>
    <Icon type="icon-closefill" color="red" />
    <Icon type="icon-propertysafety-fill" color="red" />
    <Icon type="icon-mobile" />
    <Icon type="icon-folder-add" />
    <Icon type="icon-wifi" />
    <Icon type="icon-tag" />
    <Icon type="icon-arrowright" />
    <Icon type="icon-arrowup" />
    <Icon type="icon-arrowleft" />
    <Icon type="icon-arrowdown" />
    <Icon type="icon-YUAN" />
    <Icon type="icon-edit-square" />
    <Icon type="icon-deleteteam" />
    <Icon type="icon-transaction" />
    <Icon type="icon-folder-open-fill" />
    <Icon type="icon-dashboard-fill" />
    <Icon type="icon-customerservice-fill" />
    <Icon type="icon-small-dash" />
    <Icon type="icon-fullscreen" />
  </div>
);

const SpinIconFont = () => <Icon type="icon-loading" spin />;

storiesOf("Icon图标", module)
  .add("IconFont", IconFontComp)
  .add("旋转Icon", SpinIconFont);
