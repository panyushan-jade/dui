import React, { FC,useRef,useLayoutEffect, useState } from "react";
import { targetType } from "../../utils/helper";

export type RenderFunc = (
  item: any,
  index: number
) => React.ReactNode;

export interface VirtualListProps {
  /** 列表高度 */
  height?: number;
  /** item高度 */
  itemHeight?: number;
  itemKey?: string;
  /** 虚拟列表数据 */
  data: any[];
  /** 渲染子项 */
  children: RenderFunc;
}

/**
 * VirtualList 大量数据时的列表展示
 *
 *
 * ~~~js
 * // 这样引用
 * import { VirtualList } from 'jadedui'
 * ~~~
 */
export const VirtualList: FC<VirtualListProps> = (props) => {
  const { height = 300, children, data,itemKey,itemHeight = 30} = props;
  const virListRef = useRef<HTMLDivElement>(null);
  const visibleCount = Math.ceil(height / itemHeight) // 可以显示的数量
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [originData,setOriginalData] = useState<any>(data.slice(0,visibleCount))
  const [currentPosition,setCurrentPosition] = useState(0)
  console.log('originData=======>',originData);
  
  if (targetType(children) !== "function") {
    throw new TypeError("VirtualList: children must be a function");
  }
  if (targetType(data) !== "array") {
    throw new TypeError("VirtualList: data must be a Array");
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      console.log('entry: ', entry);
      if (entry.isIntersecting) {
        console.log('哈哈哈')
        // observer.unobserve(img); // 停止观察
      }else{
        const curPos = entry.target.getAttribute('data-key') ?  Number(entry.target.getAttribute('data-key')) : 0
        const ndata = [...originData]
        ndata.push(originData.length)
        ndata.splice(0,1)
        console.log('进行更新~~~~',ndata)
        setOriginalData([...ndata])
        setCurrentPosition(curPos)
      }
    });
  },{
    root:virListRef.current
  });

  useLayoutEffect(() => {
    const container = virListRef?.current?.querySelector('.dui-virtual-list-container')
    const firstChild = container?.querySelector(':first-child') as HTMLDivElement
    observer.observe(firstChild)
  },[])

  // const getOffestY = () => {

  // }

  // style={{transform:`translate3d(0,${getOffestY()}px,0)`}}
  return (
    <div ref={virListRef} className="dui-virtual-list">
      <div className="dui-virtual-list-phantom" style={{ height:itemHeight*data.length }}></div>
      <div className="dui-virtual-list-container" style={{transform:`translate3d(0,${currentPosition*itemHeight}px,0)`}}>
        {originData.map((od: any,index: number) => {
          return <div key={itemKey ?? index} data-key={index+1}>{children(od,index)}</div>
          // return children(od,index)
        })}
      </div>
      
    </div>
  );
};

VirtualList.defaultProps = {
  height: 300,
};

export default VirtualList;
