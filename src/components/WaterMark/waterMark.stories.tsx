import React from "react";
import { storiesOf } from "@storybook/react";
import WaterMark from "./index";
import Img from "../../assets/test.png";

const defaultWaterMark = () => {
  return (
    <>
      <WaterMark url={Img} />
    </>
  );
};

const textWithWaterMark = () => <WaterMark url={Img} text="我是水印~" />;
const qualityWithWaterMark = () => (
  <WaterMark url={Img} text="我是水印~" type="webp" quality={1} />
);

const densityWithWaterMark = () => {
  return (
    <>
      <h4>低密度</h4>
      <WaterMark url={Img} text="我是水印~" density={0.4} />
      <h4>高密度</h4>
      <WaterMark url={Img} text="我是水印~" density={0.9} />
    </>
  );
};

storiesOf("WaterMark 水印", module)
  .add("默认 WaterMark", defaultWaterMark)
  .add("修改文字 WaterMark", textWithWaterMark)
  .add("高质量 WaterMark", qualityWithWaterMark)
  .add("密集度 WaterMark", densityWithWaterMark);
