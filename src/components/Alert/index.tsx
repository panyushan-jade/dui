import React, { ReactNode } from "react";
import className from "classnames";

type AlertType = "success" | "info" | "warning" | "error";

interface IAlertProps {
  type?: AlertType;
  closable?: boolean;
  disabled?: boolean;
  className?: string;
  message?: ReactNode; // 内容
  description?: ReactNode; //相关描述
  banner?: boolean; //是否用作顶部公告
  action?: React.ReactNode; // 自定义操作项
  onClose?: () => void;
}

const Alert: React.FC<IAlertProps> = (props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    type = "success",
    closable = false,
    onClose,
    banner,
    action,
    description,
    message,
    className: cusClassname,
    ...restprops
  } = props;

  const classNames = className(cusClassname, "dui-alert", {
    [`dui-alert-${type}`]: true,
  });
  // 这里先用x代替关闭图标 因为还没做icon组件
  return (
    <div className={classNames} {...restprops}>
      <div className="dui-alert-content">
        <div className="dui-alert-message">{message}</div>
        <div className="dui-alert-description">{description}</div>
      </div>
      {closable && (
        <div
          className="dui-alert-close"
          onClick={onClose ? () => onClose() : () => ({})}
        >
          x
        </div>
      )}
    </div>
  );
};

export default Alert;
