import React from "react";
import { storiesOf } from "@storybook/react";
import VirtualList from "./index";

const VirtualListComp = () => (
    <VirtualList data={[0, 1, 2,3,4,5,6,7,8,9,10]} height={150} itemHeight={30}>
  {(index: any) => <div style={{border:'2px solid green',height:30}}>{index}</div>}
</VirtualList>
);


storiesOf("VirtualList虚拟列表", module)
  .add("VirtualList", VirtualListComp)
