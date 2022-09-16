/* eslint-disable react/prop-types */
import React, { useState, useRef, useEffect, useImperativeHandle } from "react";
import classnames from "classnames";

type easing = "linear" | "ease" | "ease-in" | "ease-in-out" | "ease-out";

export type CarouselRefProps = {
  next: () => void;
  prev: () => void;
  moveTo: (index: number) => void;
};
export interface ICarouselProps {
  /**是否自动播放 */
  autoplay?: boolean;
  /**播放速率 */
  easing?: easing;
  /**是否显示指示点 子节点为1时不生效 */
  dots?: boolean;
  /**是否显示左右箭头 */
  arrows?: boolean;
  ref?: React.Ref<CarouselRefProps>;
}
export interface ICarouselItemProps {
  className?: string;
}

// eslint-disable-next-line react/display-name
const Carousel: React.FC<ICarouselProps> = React.forwardRef<
  CarouselRefProps,
  ICarouselProps
>((props, ref) => {
  const {
    children,
    autoplay,
    easing = "linear",
    dots = true,
    arrows = false,
  } = props;
  // console.log("props===>", props);
  const [active, setActive] = useState(0);
  const activeRef = useRef(active);
  useImperativeHandle(ref, () => ({
    next: onNextHandle,
    prev: onPrevHandle,
    moveTo: moveTo,
  }));

  const renderChildren = React.Children.map(
    React.Children.map(children, (child) => child),
    (child) => {
      const newChild = child as React.ReactElement<ICarouselItemProps>;
      return React.cloneElement(newChild, {
        className: "dui-carousel-item",
      });
    }
  );
  useEffect(() => {
    activeRef.current = active;
  }, [active]);
  useEffect(() => {
    if (React.Children.count(renderChildren) > 1 && autoplay) {
      // 只有一个子节点不进行自动轮播
      const timer = setInterval(() => {
        onNextHandle();
      }, 5000);
      return () => clearInterval(timer);
    }
  }, []);

  const classes = classnames("dui-carousel");
  // console.log("hihihi", React.Children.count(children));
  const moveTo = (index: number) => {
    const element = document.querySelector(
      ".dui-carousel-container"
    ) as HTMLElement;
    const elementItem = document.querySelectorAll(".dui-carousel-item");
    element.style.transform = `translate(-${index}00%)`;
    element.style.transition = `all .5s ${easing}`;
    // 清除
    setTimeout(() => {
      (elementItem[elementItem.length - 1] as HTMLElement).style.transform =
        "none";
      (elementItem[0] as HTMLElement).style.transform = "none";
    }, 500);
    setActive(index);
  };
  const changeStyleHandle = (type: string) => {
    const element = document.querySelector(
      ".dui-carousel-container"
    ) as HTMLElement;
    const elementItem = document.querySelectorAll(".dui-carousel-item");
    const curItem =
      type === "prev" ? elementItem[0] : elementItem[elementItem.length - 1];
    (curItem as HTMLElement).style.transform =
      type === "prev"
        ? `translate(${elementItem.length}00%)`
        : `translate(-${elementItem.length}00%)`;
    element.style.transform =
      type === "prev"
        ? `translate(-${elementItem.length}00%)`
        : `translate(${elementItem.length - activeRef.current}00%)`;
    element.style.transition = "none";
    element.clientHeight;
    type === "prev" ? moveTo(elementItem.length - 1) : moveTo(0);
  };
  const onPrevHandle = () => {
    if (active === 0) {
      changeStyleHandle("prev");
    } else {
      moveTo(active - 1);
    }
  };
  const onNextHandle = () => {
    const elementItem = document.querySelectorAll(".dui-carousel-item");
    if (activeRef.current === elementItem.length - 1) {
      changeStyleHandle("next");
    } else {
      moveTo(activeRef.current + 1);
    }
  };
  const renderIndicator = () => {
    return renderChildren?.map((_indicator, index) => {
      return (
        <span
          className={classnames({
            "dui-carousel-indicator-active": active === index,
          })}
          key={index}
          onClick={() => moveTo(index)}
        ></span>
      );
    });
  };
  return (
    <div className={classes}>
      <div className="dui-carousel-container">{renderChildren}</div>
      {React.Children.count(renderChildren) > 1 ? (
        <>
          {dots ? (
            <div className="dui-carousel-indicator">{renderIndicator()}</div>
          ) : null}
          {arrows ? (
            <>
              <div className="dui-carousel-prev" onClick={onPrevHandle}>
                {"<"}
              </div>
              <div className="dui-carousel-next" onClick={onNextHandle}>
                {">"}
              </div>
            </>
          ) : null}
        </>
      ) : null}
    </div>
  );
});

export default Carousel;
// export default React.Ref<InputRefProps,ICarouselProps>(Carousel);
