import React from "react";
import { CSSTransition } from "react-transition-group";
import { CSSTransitionProps } from "react-transition-group/CSSTransition";

export type AnimationName =
  | "zoom-in-top"
  | "zoom-in-left"
  | "zoom-in-bottom"
  | "zoom-in-right";

export type TransitionProps = CSSTransitionProps & {
  animation?: AnimationName;
  className?: string;
};
// interface TransitionProps extends CSSTransitionClassNames {
//   animation?: AnimationName
//   className?: string
// }

const Transition: React.FC<TransitionProps> = (props) => {
  const { children, className, animation, ...restProps } = props;
  return (
    <CSSTransition
      classNames={className ? className : animation}
      {...restProps}
    >
      <div>{children}</div>
    </CSSTransition>
  );
};

// Transition.defaultProps = {
//   unmountOnExit: true,
//   appear: true,
// }

export default Transition;
