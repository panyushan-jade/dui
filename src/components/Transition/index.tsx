import React from "react";

export interface ITransitionProps {
  className?: string;
}

const Transition: React.FC<ITransitionProps> = (props) => {
  console.log("props===>", props);
  return <div></div>;
};

export default Transition;
