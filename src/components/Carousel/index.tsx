import React from "react";
import classnames from "classnames";

interface ICarouselProps {
  autoplay?: boolean;
}
interface ICarouselItemProps {
  className?: string;
}

const Carousel: React.FC<ICarouselProps> = (props) => {
  const { children } = props;

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

  return (
    <div className={classes}>
      <div className="dui-carousel-container">{renderChildren}</div>
    </div>
  );
};

export default Carousel;
