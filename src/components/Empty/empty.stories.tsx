import React from "react";
import { storiesOf } from "@storybook/react";
import image from "../../assets/image1.webp";
import Empty from "./index";

const EmptyComp = () => <Empty />;

const EmptyWithImage = () => <Empty image={image} />;


storiesOf("Empty空状态", module)
  .add("Empty", EmptyComp)
  .add("Empty自定义image", EmptyWithImage)
