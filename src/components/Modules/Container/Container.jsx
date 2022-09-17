import React from "react";
import clsx from "clsx";
const Container = ({ children, className }) => {
  return (
    <div className={clsx("max-w-screen-2xl  px-7 sm:px-8  mx-auto", className)}>
      {children}
    </div>
  );
};

export default Container;
