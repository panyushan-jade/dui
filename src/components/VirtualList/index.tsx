import React, { FC,useRef, useState,useMemo,UIEvent,useLayoutEffect,useEffect} from "react";
import { targetType } from "../../utils/helper";

export type RenderFunc = (
  item: any,
  index: number
) => React.ReactNode;

export interface VirtualListProps {
  /** 渲染区域列表高度 */
  height: number;
  /** item高度 */
  itemHeight?: number;
  /** 预估item高度 */
  estimatedItemHeight?: number;
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
  const { height = 300, children, data,itemHeight = 30,itemKey,estimatedItemHeight = 30} = props;
  // console.log('props: ', props);
  // console.log('itemKey: ', itemKey);
  const virListRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [originData,setOriginalData] = useState<any>([...data])
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [scrollTop,setScrollTop] = useState(0);
  const [position,setPosition] = useState<Array<any>>([]);
  const posRef = useRef<Array<any>>([])
  if (targetType(children) !== "function") {
    throw new TypeError("VirtualList: children must be a function");
  }
  if (targetType(data) !== "array") {
    throw new TypeError("VirtualList: data must be a Array");
  }
  if(!props.itemHeight && !props.estimatedItemHeight){
    throw new Error('either itemHeight or estimatedItemHeight must have one')
  }

  useLayoutEffect(() => {
    initPosition()
  },[])

  useEffect(() => {
    updatePosition()
  },[scrollTop])


  const binarySearch = () => {
    const pos = posRef.current
    let left = 0;
    let right = pos?.length - 1;
    let tempIndex = null
    while( left <= right ){
      const midIndex = (left + right) >> 1;
      const midValue = pos[midIndex].bottom
      if(midValue === scrollTop){
        return midIndex + 1
      }else if(midValue < scrollTop){
        left = midIndex + 1;
      }else if( midValue > scrollTop ){
        if(tempIndex === null || tempIndex > midIndex){
          tempIndex = midIndex;
        }
        right = right - 1;
      }
    }
    return tempIndex
  }

  const listHeight = useMemo(() => props.estimatedItemHeight ? position.at(-1)?.bottom : itemHeight*originData.length, [position]) // 列表总高度
  // const visibleCount =  Math.ceil(height / (props.estimatedItemHeight ? estimatedItemHeight : itemHeight)) // 可显示列表项数
  const visibleCount =  props.estimatedItemHeight ? useMemo(() => {
    const count = position.findIndex( item => item.top > (height + estimatedItemHeight*3));
    return count
  },[scrollTop,position]) : Math.ceil(height / itemHeight) // 可显示列表项数
  const startIndex = useMemo(() => {
    if(props.estimatedItemHeight) return binarySearch()
    return Math.floor(scrollTop / itemHeight)
  },[scrollTop,position]) // 列表开始索引
  const endIndex = useMemo(() => (startIndex || 0) + visibleCount,[startIndex,position])  // 列表结束索引
  const getTransform = useMemo(() => {
    
    let offsetY = scrollTop - (scrollTop % itemHeight)
    if(props.estimatedItemHeight){
      offsetY = startIndex ? posRef.current[startIndex - 1].bottom : 0
    }
    return `translate3d(0,${offsetY}px,0)`
  },[scrollTop,position])  // 列表offset
  const truthData = useMemo(() => originData.slice(startIndex, Math.min(endIndex,originData.length)),[startIndex,position])  // 渲染真实列表数据
  // const truthData = useMemo(() => originData.slice(startIndex, Math.min(endIndex+1,originData.length)),[startIndex])  // 渲染真实列表数据
  console.log('visibleCount======>',visibleCount);
  console.log('startIndex======>',startIndex);
  console.log('endIndex======>',endIndex);
  
  



  const initPosition = () => {
    const data = []
    for (let i = 0; i < originData.length; i++) {
      data.push({
        index: i,
        height: estimatedItemHeight,
        top: i * estimatedItemHeight,
        bottom: (i + 1) * estimatedItemHeight
      })
    }
    posRef.current = [...data]
  }

  const updatePosition = () => {
    const nodes = listRef.current?.children 
    if(!nodes) return [];
    const pos = [...posRef.current as Array<any>]
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i]
      const rect = node.getBoundingClientRect();
      const height = rect.height;
      const index = + node.id
      const oldHeight = pos[index].height;
      const dValue = oldHeight - height;
      //存在差值
      if(dValue){
        pos[index].bottom = pos[index].bottom - dValue;
        pos[index].height = height;
        for(let k = index + 1;k < pos.length; k++){
          pos[k].top = pos[k-1].bottom;
          pos[k].bottom = pos[k].bottom - dValue;
        }
      }
    }
    posRef.current = [...pos]
    setPosition([...pos])
  }

  const scrollEvent = (e: UIEvent<HTMLElement>) => {
    setScrollTop(e.currentTarget.scrollTop)
  }
  
  return (
    <div ref={virListRef} className="dui-virtual-list" onScroll={scrollEvent}>
      <div className="dui-virtual-list-phantom" style={{ height:listHeight }}></div>
      <div ref={listRef} className="dui-virtual-list-container" style={{transform:getTransform,height}}>
        {truthData.map((item: any,index: number) => {
          return <div key={item.index} id={itemKey || item.id || index} style={{border:'1px solid green'}}>{children(item,itemKey || item.id || index)}</div>
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
