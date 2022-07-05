import React, { useState } from "react";
import classnames from "classnames";

interface ICarouselProps {
  autoplay?: boolean;
}
interface ICarouselItemProps {
  className?: string;
}

const Carousel: React.FC<ICarouselProps> = (props) => {
  const { children } = props;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [active, setActive] = useState(0);
  const renderChildren = React.Children.map(
    React.Children.map(children, (child) => child),
    (child) => {
      const newChild = child as React.ReactElement<ICarouselItemProps>;
      return React.cloneElement(newChild, {
        className: "dui-carousel-item",
      });
    }
  );
  console.log("ssssss", renderChildren);

  const classes = classnames("dui-carousel");
  // console.log('hihihi',React.Children.count(children));
  // console.log('hihihi222',React.Children.count(renderChildren));
  const renderIndicator = () => {
    //
    return renderChildren?.map((indicator, index) => {
      return (
        <span
          className={classnames({
            "dui-carousel-indicator-active": active === index,
          })}
          key={index}
        ></span>
      );
    });
  };
  return (
    <div className={classes}>
      <div className="dui-carousel-container">{renderChildren}</div>
      <div className="dui-carousel-indicator">{renderIndicator()}</div>
    </div>
  );
};

export default Carousel;
