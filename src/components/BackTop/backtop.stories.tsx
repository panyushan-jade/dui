import React from "react";
import { storiesOf } from "@storybook/react";
import BackTop from "./index";


const defaultBackTop = () => {
    return <div style={{height:'50vh'}}>
        <div>滑动试试</div>
        <div>滑动试试</div>
        <BackTop />
    </div>
}

storiesOf("BackTop 回到顶部", module)
  .add("BackTop", defaultBackTop)
//   .add("被禁用的 Input", disabledInput)
//   .add("带图标的 Input", iconInput)
//   .add("大小不同的 Input", sizeInput)
//   .add("带前后缀的 Input", pandInput);
