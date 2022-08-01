import React from "react";
import className from "classnames"; //用来拼接class  详情参考：https://github.com/JedWatson/classnames#readme

//ant design 的组件样式基础样式前缀 是 ant 这里我们用 dui eg：dui-btn、dui-btn-primary
// _xxx.scss 这里的下划线的意思是告诉 Sass 不要编译这些文件，但导入语句中却不需要添加下划线

//类型别名
export type ButtonType = "default" | "primary" | "link";
export type ButtonSize = "middle" | "small" | "large";

//button 的基础属性
//需要注意当是链接按钮时 type=link ，对应生成的是 a 标签 也可以用button模拟
export interface IBaseButtonProps {
  //这里的属性最好不要和 原生属性冲突 ts会报错 eg：type -> btnType
  type?: ButtonType; // button的类型 eg：default、primary、link
  danger?: boolean;
  size?: ButtonSize; // button的大小 eg: middle、small、large
  disabled?: boolean; // button 的禁用状态 at: a标签是没有disable的属性的
  className?: string;
  children: React.ReactNode; // 用来渲染组件中的内容
}

// button 和 a 标签还有一些其他的属性 如onclick 不能把每一个属性都一一写在上面 这里用React提供的interface然后传入一个泛型
type ButtonProps = React.ButtonHTMLAttributes<HTMLElement>; // button的其他原生属性
type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement>; // a标签的其他原生属性
type AllOptionalButtonprops = Partial<ButtonProps & AnchorProps>; // 这里用ts的Utility Types Partial将type都转成可选的(用户不一定把所有参数都传入)

//将可选的和 IBaseButtonProps 结合成为最终的 props
export type IButtonProps = AllOptionalButtonprops & IBaseButtonProps;

const Button: React.FC<IButtonProps | IBaseButtonProps> = (props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    type = "default",
    size = "middle",
    danger,
    disabled,
    children,
    className: cusClassname,
    ...restprops
  } = props;

  //如果是link类型就生成a标签
  const classNames = className(
    cusClassname,
    "dui-btn",
    { [`dui-btn-${type}`]: true },
    { [`dui-btn-${size}`]: true },
    { [`dui-btn-disabled`]: type === "link" },
    { [`dui-btn-danger`]: danger }
  );
  if (type === "link") {
    return (
      <a className={classNames} {...restprops}>
        {children}
      </a>
    );
  } else {
    return (
      <button disabled={disabled} className={classNames} {...restprops}>
        {children}
      </button>
    );
  }
};
// Button.defaultProps = {
//   type: "default",
//   size: "middle"
// };

export default Button;
