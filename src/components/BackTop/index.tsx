import React,{ useEffect,useState } from "react"; // , { ReactNode }
import className from "classnames";
import IconFont from "../IconFont/index";

export interface BackTopProps {
  /** 回到顶部所需要的时间 */
  duration?: number;
  /** 滚动高度达到此参数值才出现 BackTop */
  visibilityHeight?: number;
  /** 点击按钮的回调函数 */
  onClick?: () => void;
  /** 自定义样式 */
  style?: React.CSSProperties;
  /** 自定义类名 */
  className?: string;
  children?: React.ReactElement
}

/**
 * BackTop 回到顶部
 * 返回页面顶部的操作按钮
 * ### 引用方法
 *
 * ~~~js
 * import { BackTop } from 'jadedui'
 * ~~~
 */
const BackTop: React.FC<BackTopProps> = (props) => {
  const { children,duration = 450,onClick,visibilityHeight = 400} = props;
  const [visibile,setVisibile] = useState(false)
  const classNames = className("dui-back-top",{
      'dui-back-top-show': visibile
  });
  if( children && !React.isValidElement(children)){
    throw new TypeError('BackTop\'s Children must be a valid element')
  }
  const handleScroll = () => {
    const top = getTopScroll()
    
    if(top > visibilityHeight){
        setVisibile(true)
    }else{
        setVisibile(false)
    }
  }

  const getTopScroll = () => {
    return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
  }

  const addScorllListener = () => window.addEventListener('scroll',handleScroll)

  const removeScorllListener = () => window.removeEventListener('scroll', handleScroll)

  const scrollToTop = (duration: number) => {
    const startingY = getTopScroll();
    const diff = startingY * -1;
    let start: any;
    window.requestAnimationFrame(function step(timestamp) {
        if (!start) start = timestamp;
        const time = timestamp - start;
        const percent = Math.min(time / duration, 1);
        const eased = easeInOutQuad(percent);
        window.scrollTo(0, startingY + diff * eased);
        if (time < duration) {
        window.requestAnimationFrame(step);
        }
    });
  }

  const easeInOutQuad = (t: number) => {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }

  const backTopHandle = () => {
    onClick && onClick()
    scrollToTop(duration)
  }

  useEffect(() => {
    addScorllListener();
    return removeScorllListener
  },[])

  return (
    <div className={classNames} onClick={backTopHandle}>
      {children ? children : <IconFont style={{fontSize:25}} type="icon-vertical-align-top" />}
    </div>
  );
};

BackTop.defaultProps = {
    duration:450,
    visibilityHeight: 400
};

export default BackTop;
