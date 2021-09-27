import React from "react";

interface RowWrapperProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

const RowWrapper: React.FC<RowWrapperProps> = (props) => {
  return (
    <div className="mt-10">
      <h1 className="font-semibold ">{props.title}</h1>
      <div className="flex overflow-x-scroll overflow-y-hidden no-scrollbar">
        {props.children}
      </div>
    </div>
  );
};

export default RowWrapper;
