import React from "react";
import clsx from "clsx";

const Button = ({ children, size, onContactPage }) => {
  return (
    <button
      className={clsx(
        "h-[48px] bg-transparent hover:bg-[#EE2737] text-[#EE2737] font-semibold hover:text-white border border-[#EE2737] hover:border-transparent rounded",
        size === "sm" ? "w-[130px]" : "w-[275px]"
      )}
      onClick={onContactPage}
    >
      {children}
    </button>
  );
};

export default Button;
