import React, { useRef } from "react";
import { storiesOf } from "@storybook/react";
// import { action } from "@storybook/addon-actions";
import image1 from "../../assets/image1.webp";
import image2 from "../../assets/image2.webp";
import image3 from "../../assets/image3.webp";

import Carousel from "./index";
import { CarouselRefProps } from "./index";

const defaultCarousel = () => (
  <div style={{ width: "50%" }}>
    <Carousel>
      <img src={image1} alt="image1" />
      <img src={image2} alt="image2" />
      <img src={image3} alt="image3" />
    </Carousel>
  </div>
);

const autoWithArrowsCarousel = () => (
  <div style={{ width: "50%" }}>
    <Carousel autoplay arrows>
      <img src={image1} alt="image1" />
      <img src={image2} alt="image2" />
      <img src={image3} alt="image3" />
    </Carousel>
  </div>
);

const refsWithCarousel = () => {
  const myref = useRef<CarouselRefProps>(null);
  const handle = () => {
    console.log("myref", myref);
    if (myref && myref.current) {
      myref?.current?.moveTo(1);
    }
  };
  return (
    <div style={{ width: "50%" }}>
      <button onClick={handle}>移动到第二张图片</button>
      {/* SDASD */}
      {/**SDASD */}
      <Carousel ref={myref} arrows>
        <img src={image1} alt="image1" />
        <img src={image2} alt="image2" />
        <img src={image3} alt="image3" />
        {null}
        {undefined}
      </Carousel>
    </div>
  );
};

storiesOf("Carousel轮播", module)
  .add("Carousel", defaultCarousel)
  .add("带箭头和autoplay的Carousel", autoWithArrowsCarousel)
  .add("通过ref控制Carousel", refsWithCarousel);
