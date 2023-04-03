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
        value: id // 长文本
    });
    }
    return <VirtualList data={[...data]} height={600} itemHeight={50}>
    {(item,index) => <div style={{height:'100%',color:'red',border:'1px solid green'}}>{index}、<span style={{color:'black'}}>{item.value}</span></div>}
  </VirtualList>
};

const UnsetVirtualListComp = () => {
    const data = [];
    for (let id = 0; id < 100; id++) {
    data.push({
        id,
        key:id,
        value: faker.lorem.sentences() // 长文本
    });
    }
    return <VirtualList data={[...data]} height={600} estimatedItemHeight={30}>
    {(item,index) => <div style={{height:'100%',color:'red',border:'1px solid green'}}>{index}、<span style={{color:'black'}}>{item.value}</span></div>}
  </VirtualList>
};


storiesOf("VirtualList虚拟列表", module)
  .add("VirtualList定高", VirtualListComp)
  .add("VirtualList不定高", UnsetVirtualListComp)
