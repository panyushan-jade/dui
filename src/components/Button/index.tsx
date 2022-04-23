import React from "react";
// import className from "classnames"; //用来拼接class  详情参考：https://github.com/JedWatson/classnames#readme

//ant design 的组件样式基础样式 是 ant 这里我们用 dui eg：dui-btn、dui-btn-primary
// _xxx.scss 这里的下划线的意思是告诉 Sass 不要编译这些文件，但导入语句中却不需要添加下划线

//类型别名
type ButtonType = "default" | "primary" | "danger" | "link";
type ButtonSize = "normal" | "small" | "large";

//button 的基础属性
//需要注意当是链接按钮时 type=link ，对应生成的是 a 标签
interface IBaseButtonProps {
  //这里的属性最好不要和 原生属性冲突 ts会报错 eg：type -> btnType
  type?: ButtonType; // button的类型 eg：default、primary、danger、link
  size?: ButtonSize; // button的大小 eg: normal、small、large
  disable?: boolean; // button 的禁用状态 at: a标签是没有disable的属性的
  className?: string;
  children: React.ReactNode; // 用来渲染组件中的内容
}

// button 和 a 标签还有一些其他的属性 如onclick 不能把每一个属性都一一写在上面 这里用React提供的interface然后传入一个泛型
type ButtonProps = React.ButtonHTMLAttributes<HTMLElement>; // button的其他原生属性
type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement>; // a标签的其他原生属性
type AllOptionalButtonprops = Partial<ButtonProps & AnchorProps>; // 这里用ts的Utility Types 将type都转成可选的(用户不一定把所有参数都传入)

//将可选的和 IBaseButtonProps 结合成为最终的 props
type IButtonProps = AllOptionalButtonprops & IBaseButtonProps;

const Button: React.FC<IButtonProps | IBaseButtonProps> = (props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { type, size, disable, children, ...restprops } = props;
  //如果是link类型就生成a标签
  if (type === "link") {
    return <a>{children}</a>;
  } else {
    return <button>{children}</button>;
  }
};
Button.defaultProps = {
  type: "default",
};

export default Button;
