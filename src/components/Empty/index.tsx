import React, {
    FC,
    ReactNode,
    CSSProperties
  } from "react";
  import Icon from "../IconFont/index";
//   import classNames from "classnames";


  export interface EmptyProps {
    /** 自定义描述内容 */
    description?: string;
    /** 设置显示图片，为 string 时表示自定义图片地址。 */
    image?: string | ReactNode;
    /** 图片样式 */
    imageStyle?: CSSProperties;
  }
  
  /**
   * Empty 空状态时的展示占位图
   * 
   * 当目前没有数据时，用于显式的用户提示
   * 初始化场景时的引导创建流程
   *
   * ~~~js
   * // 这样引用
   * import { Empty } from 'jadedui'
   * ~~~
   */
  export const Empty: FC<EmptyProps> = (props) => {
    const {description = '暂无数据',image,imageStyle } = props;
    const renderEmptImage = () => {
      if(image){
        return typeof image === 'string' ? <img src={image} alt="No data" /> : image
      }else{
        return <Icon type="icon-zanwushuju1" style={{fontSize:'xxx-large'}} />
      }
    }

    return (
      <div className="dui-empty" style={imageStyle}>
        <div className="dui-empty-image">{renderEmptImage()}</div>
        <div className="ant-empty-description">{description}</div>
      </div>
    );
  };
  
  Empty.defaultProps = {
    description:'暂无数据'
  };
  
  export default Empty;
  