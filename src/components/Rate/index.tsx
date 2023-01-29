import React, { useEffect, useState } from "react";
import type { ReactNode } from "react";
import classnames from "classnames";
import Icon from "../IconFont";

export type OrientationType = "left" | "right" | "center";

export interface RateProps {
  /** 自定义样式类名 */
  className?: string;
  /** 自定义样式对象 */
  style?: React.CSSProperties;
  /** 当前数，受控值 */
  value?: number;
  /** 默认值 */
  defaultValue?: number;
  /** 只读，无法进行交互 */
  disabled?: boolean;
  /** 自定义字符 */
  character?: ReactNode | ((index: number) => ReactNode);
}

/**
 * Rate 评分
 * 对评价进行展示
 * 对事物进行快速的评级操作
 * ### 引用方法
 *
 * ~~~js
 * import { Rate } from 'jadedui'
 * ~~~
 */
const Rate: React.FC<RateProps> = (props) => {
  const { className, value, defaultValue, character, disabled } = props;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [ids, setIds] = useState<number[]>([0, 1, 2, 3, 4]);
  const [rateValue, setRateValue] = useState<[number, number]>([-1, -1]);
  // const [rateDefaultValue,setRateDefaultValue] = useState<[number,number]>([-1,-1]);
  const [pos, setPos] = useState<any>({
    curIndexLi: -1,
    curIndexStar: -1,
    isFocus: false,
  });
  const cls = ["ant-rate-star-half", "ant-rate-star-full"];
  if (
    (value && typeof value !== "number") ||
    (defaultValue && typeof defaultValue !== "number")
  ) {
    throw new Error("value or defaultValue must be a number!");
  }

  const initRate = () => {
    if (value || defaultValue) {
      const transValue = String(value || defaultValue).split(".");
      const curIndexLi = Number(transValue[0]);
      const curIndexStar = transValue[1]
        ? Number(transValue[1]) >= 5
          ? 0
          : -1
        : -1;
      console.log("curIndexLi: ", curIndexLi);
      console.log("curIndexStar: ", curIndexStar);
      setRateValue([curIndexLi, curIndexStar]);
      setPos({
        curIndexLi,
        curIndexStar,
        isFocus: true,
      });
    }
  };

  useEffect(() => {
    initRate();
  }, [value]);

  const onMouseFirstEnter = (d: number, curStar: number) => {
    if (disabled) return;
    const curIndex = ids.findIndex((id) => id == d);
    setPos({
      ...pos,
      curIndexLi: curIndex,
      curIndexStar: curStar,
    });
  };

  const renderClassNames = (key: number) => {
    let classNames = "dui-rate-star";
    if (disabled) classNames += " dui-rate-star-disabled";
    if (pos.curIndexLi === -1) {
      classNames += " dui-rate-star-zero";
    } else {
      if (key < pos.curIndexLi) {
        classNames += " ant-rate-star-full";
        return classNames;
      }
      if (key == pos.curIndexLi) {
        classNames += " " + cls[pos.curIndexStar];
        return classNames;
      }
      if (key > pos.curIndexLi) {
        classNames += " dui-rate-star-zero";
      }
    }

    return classNames;
  };

  const rateClickHandle = (type: string, key: number) => {
    if (value || disabled) return;
    onMouseFirstEnter(key, type === "first" ? 0 : 1);
    setRateValue([key, type === "first" ? 0 : 1]);
    setPos({
      ...pos,
      isFocus: true,
    });
  };

  const onMouseLeave = () => {
    if (disabled) return;
    if (!pos.isFocus) {
      onMouseFirstEnter(-1, -1);
    } else {
      onMouseFirstEnter(...rateValue);
    }
  };

  const renderNode = (key: number) =>
    typeof character === "function" ? character(key) : character;

  return (
    <ul
      className={classnames("dui-rate", className)}
      onMouseLeave={onMouseLeave}
    >
      {ids.map((key) => {
        return (
          <li className={renderClassNames(key)} key={key}>
            <div
              className="dui-rate-star-first"
              onMouseEnter={() => onMouseFirstEnter(key, 0)}
              onClick={() => rateClickHandle("first", key)}
            >
              {renderNode(key)}
            </div>
            <div
              className="dui-rate-star-second"
              onMouseEnter={() => onMouseFirstEnter(key, 1)}
              onClick={() => rateClickHandle("second", key)}
            >
              {renderNode(key)}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

Rate.defaultProps = {
  character: <Icon type="icon-star" />,
  disabled: false,
};

export default Rate;
