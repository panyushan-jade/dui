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
