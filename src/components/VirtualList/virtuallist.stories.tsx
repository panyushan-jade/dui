import React from "react";
import faker from "faker";
import { storiesOf } from "@storybook/react";
import VirtualList from "./index";

const VirtualListComp = () => {
    const data = [];
    for (let id = 0; id < 100; id++) {
    data.push({
        id,
        key:id,
        value: faker.lorem.sentences() // 长文本
    });
    }
    return <VirtualList data={[...data]} height={600} itemHeight={80} estimatedItemHeight={30}>
    {(item,index) => <span style={{color:'red'}}>{index}、<span style={{color:'black'}}>{item.value}</span></span>}
  </VirtualList>
};


storiesOf("VirtualList虚拟列表", module)
  .add("VirtualList", VirtualListComp)
