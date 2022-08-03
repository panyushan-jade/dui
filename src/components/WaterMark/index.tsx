import React, { useEffect, useState } from "react";

// export interface IWaterMarkProps {
//     text?:string
// }

export type position =
  | "left-top"
  | "right-top"
  | "left-bottom"
  | "right-bottom";

interface IWaterMarkProps {
  text?: string;
  url: string;
  type?: string;
  bgColor?: string;
  quality?: number;
  space?: [number, number];
  position?: position;
}

const imgToWaterMark = (props: IWaterMarkProps) => {
  const {
    url,
    type,
    bgColor,
    quality,
    text,
    // space,position
  } = props;
  console.log("props====>222", props);

  return new Promise((resolve, reject) => {
    const qualityImg = ["image/jpeg", "image/webp"];
    const image = new Image();
    // CORS 策略，会存在跨域问题https://stackoverflow.com/questions/20424279/canvas-todataurl-securityerror
    image.setAttribute("crossOrigin", "anonymous");
    image.src = url + "?" + new Date().getTime();
    image.onload = function () {
      // 绘制原图
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      canvas.width = image.width;
      canvas.height = image.height;

      ctx!.fillStyle = bgColor || "white";
      ctx!.fillRect(0, 0, canvas.width, canvas.height);
      ctx!.drawImage(image, 0, 0);
      // 绘制水印
      ctx!.translate(100, 100);
      ctx!.rotate((45 * Math.PI) / 180);

      ctx!.textAlign = "center";
      ctx!.textBaseline = "middle";
      ctx!.font = "20px microsoft yahei";
      ctx!.fillStyle = "rgba(184, 184, 184, 0.8)";
      ctx!.fillText(text || "请勿外传", 0, 0);
      // if(space && space.length === 2){
      // }else{
      //     switch (position) {
      //         case 'left-top':
      //             console.log('11111111111');

      //             t_ctx!.fillText(text || '请勿外传', 0, 100)
      //             break
      //         case 'right-top':
      //             console.log('222222222222');
      //             t_ctx!.fillText(text || '请勿外传',image.width, 100)
      //              break
      //         case 'left-bottom':
      //             console.log('3333333');
      //             t_ctx!.fillText(text || '请勿外传', 0, image.height)
      //             break
      //         case 'right-bottom':
      //             console.log('4444444444');
      //             // ctx!.fillText(text || '请勿外传', image.width-textInf.width, image.height-50)
      //             t_ctx!.fillText(text || '请勿外传',50, 50)
      //             ctx!.drawImage(textCanvas, 100, 100)
      //             break
      //         default:
      //             break;
      //     }
      // }

      // ctx!.fillText(text || '请勿外传', parseFloat(String(image.width)) / 2, parseFloat(String(image.height)) / 2)

      const result = qualityImg.includes(type as string)
        ? canvas.toDataURL(type, quality || 0.96)
        : canvas.toDataURL(type);
      // console.log('result===>',result);

      resolve(result);
    };
    // 图片加载失败的错误处理
    image.onerror = () => {
      reject(new Error("urlToBase64 error"));
    };
  });
};

const WaterMark: React.FC<IWaterMarkProps> = (props) => {
  //   const { url } = props;
  const [waterImg, setWaterImg] = useState("");
  useEffect(() => {
    imgToWaterMark({
      text: "请勿外传",
      position: "right-bottom",
      ...props,
    }).then((res) => {
      // console.log('res',res);

      setWaterImg(res as string);
    });
  }, []);

  return <img src={waterImg} alt="waterMark" />;
};

export default WaterMark;
