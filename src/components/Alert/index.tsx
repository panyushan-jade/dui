import React, { ReactNode } from "react";
import className from "classnames";

type AlertType = "success" | "info" | "warning" | "error";

export interface IAlertProps {
  /**alert类型 */
  type?: AlertType;
  closable?: boolean;
  /**是否禁用 */
  disabled?: boolean;
  className?: string;
  /**alert文案 */
  message?: ReactNode; // 内容
  /**alert相关描述 */
  description?: ReactNode; //相关描述
  style?: React.CSSProperties;
  /**alert关闭节点 */
  closeText?: React.ReactNode;
  /**alert关闭回调 */
  onClose?: () => void;
}

/**
 * 警告提示，展现需要关注的信息
 * ### 引用方法
 *
 * ~~~js
 * import { Alert } from 'jadedui'
 * ~~~
 */
const Alert: React.FC<IAlertProps> = (props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    type = "success",
    closable = false,
    onClose = () => ({}),
    description,
    closeText = "x",
    message,
    className: cusClassname,
    ...restprops
  } = props;
  const [classNames, setClassNames] = React.useState(
    className(cusClassname, "dui-alert", {
      [`dui-alert-${type}`]: true,
    })
  );

  const messageClassNames = className({
    [`dui-alert-message-with-description`]: description && message,
  });

  const onCloseHandle = () => {
    onClose();
    setClassNames(className(classNames, "dui-alert-close-transition"));
    setTimeout(() => {
      setClassNames(className(classNames, "dui-alert-transition-end"));
    }, 500);
  };

  // 这里先用x代替关闭图标 因为还没做icon组件 test
  return (
    <div className={classNames} {...restprops}>
      <div className="dui-alert-content">
        <div className={`${messageClassNames} dui-alert-message`}>
          {message}
        </div>
        <div className="dui-alert-description">{description}</div>
      </div>
      {closable && (
        <div className="dui-alert-close" onClick={() => onCloseHandle()}>
          {closeText}
        </div>
      )}
    </div>
  );
};

export default Alert;
