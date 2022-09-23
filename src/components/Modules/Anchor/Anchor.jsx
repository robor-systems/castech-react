import clsx from "clsx";
import React from "react";
import { Link } from "react-router-dom";

const Anchor = ({ href, title, classNames, filled }) => {
  return (
    <Link
      to={href}
      className={clsx(
        "w-full h-full inline-block text-center border hover:border-transparent transition-all duration-300 rounded",
        filled
          ? "bg-[#EE2737] hover:bg-[#DF1D2D] text-white"
          : "hover:bg-[#EE2737] text-[#EE2737] border-[#EE2737] hover:text-white",
        classNames
      )}
    >
      {title}
    </Link>
  );
};

export default Anchor;
