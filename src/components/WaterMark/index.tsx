import React, { useEffect, useState } from "react";

interface IWaterMarkProps {
  text?: string;
  url: string;
  type?: string;
  bgColor?: string;
  quality?: number;
  density?: number;
}

const imgToWaterMark = (props: IWaterMarkProps) => {
  const { url, type, bgColor, quality, text, density = 0.6 } = props;
  return new Promise((resolve, reject) => {
    const qualityImg = ["image/jpeg", "image/webp"];
    const image = new Image();
    // CORS 策略，会存在跨域问题https://stackoverflow.com/questions/20424279/canvas-todataurl-securityerror
    image.setAttribute("crossOrigin", "anonymous");
    image.src = url + "?" + new Date().getTime();
    image.onload = function () {
      // 绘制原图
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d", { alpha: false });
      canvas.width = image.width;
      canvas.height = image.height;

      ctx!.fillStyle = bgColor || "white";
      ctx!.fillRect(0, 0, canvas.width, canvas.height);
      ctx!.drawImage(image, 0, 0);

      // 绘制水印
      ctx!.textAlign = "center";
      ctx!.textBaseline = "middle";
      ctx!.font = "20px microsoft yahei";
      ctx!.fillStyle = "rgba(184, 184, 184, 0.8)";
      const textInfo = ctx!.measureText(text || "请勿外传");
      const space = [textInfo.width / density, 40 / density];
      const xCount = Math.round(image.width / space[0]);
      const yCount = Math.round(image.height / space[1]);

      for (let x = 0; x <= xCount; x++) {
        for (let y = 0; y <= yCount; y++) {
          ctx?.save();
          ctx!.translate(space[0] * x, space[1] * y);
          ctx!.rotate((45 * Math.PI) / 180);
          ctx!.fillText(text || "请勿外传", 0, 0);
          ctx?.restore();
        }
      }
      const result = qualityImg.includes(type as string)
        ? canvas.toDataURL(type, quality || 0.96)
        : canvas.toDataURL(type);
      resolve(result);
    };
    // 图片加载失败的错误处理
    image.onerror = () => {
      reject(new Error("urlToBase64 error"));
    };
  });
};

const WaterMark: React.FC<IWaterMarkProps> = (props) => {
  const [waterImg, setWaterImg] = useState("");
  useEffect(() => {
    imgToWaterMark({
      text: "请勿外传",
      ...props,
    }).then((res) => {
      setWaterImg(res as string);
    });
  }, []);

  return <img src={waterImg} alt="waterMark" />;
};

export default WaterMark;
