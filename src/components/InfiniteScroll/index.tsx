import React, { useEffect } from "react";

export interface InfiniteScrollProps {
  scrollableTarget: string;
  hasMore: boolean;
  dataLength: number;
  scrollThreshold?: number | string;
  endMessage?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  next: () => void;
  rootMargin?: string;
}

const InfiniteScroll: React.FC<InfiniteScrollProps> = (props) => {
  const {
    children,
    scrollableTarget,
    dataLength,
    hasMore,
    next,
    rootMargin = "0px",
  } = props;
  let io: IntersectionObserver | null = null;
  const checkValidProps = () => {
    if (typeof scrollableTarget === "undefined") {
      throw new Error(`You are trying to pass scrollableTarget but it is null. This might
        happen because the element may not have been added to DOM yet`);
    }
    if (typeof dataLength === "undefined") {
      throw new Error(
        'mandatory prop "dataLength" is missing. The prop is needed'
      );
    }
    if (typeof hasMore === "undefined") {
      throw new Error(
        'mandatory prop "hasMore" is missing. The prop is needed'
      );
    }
    if (typeof next === "undefined") {
      throw new Error('mandatory prop "next" is missing. The prop is needed');
    }
  };

  const createIO = () => {
    const options = {
      root: document.querySelector(`#${scrollableTarget}`),
      rootMargin: rootMargin,
    };
    console.log("options===>", options);

    io = new IntersectionObserver((entries) => {
      entries.forEach((item) => {
        // isIntersecting是一个Boolean值，判断目标元素当前是否可见
        console.log("item===>", item);

        if (item.isIntersecting) {
          console.log("获取下一页.....");
          next();
        }
      });
    }, options);
    io.observe(document.querySelector("#infinite-scroll-next") as Element);
  };

  useEffect(() => {
    checkValidProps();
    createIO();
    return () => io!.disconnect();
  }, []);

  return (
    <div>
      {children}
      <div
        id="infinite-scroll-next"
        style={{ height: 300, border: "2px solid black" }}
      >
        哈哈哈
      </div>
    </div>
  );
};

export default InfiniteScroll;
