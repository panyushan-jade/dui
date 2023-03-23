import React, {
    FC,
    ReactNode,
    CSSProperties
  } from "react";
//   import classNames from "classnames";


  export interface EmptyProps {
    /** 自定义描述内容 */
    description?: boolean;
    /** 设置显示图片，为 string 时表示自定义图片地址。 */
    image?: string | ReactNode;
    /** 图片样式 */
    imageStyle?: CSSProperties;
  }
  
  /**
   * Input 空状态时的展示占位图
   * 
   * 当目前没有数据时，用于显式的用户提示
   * 初始化场景时的引导创建流程
   *
   * ~~~js
   * // 这样引用
   * import { Empty } from 'jadedui'
   * ~~~
   */
  export const Empty: FC<EmptyProps> = () => {
  
    return (
      <div>
            empty
      </div>
    );
  };
  
  Empty.defaultProps = {
    image: 'PRESENTED_IMAGE_DEFAULT',
  };
  
  export default Empty;
  