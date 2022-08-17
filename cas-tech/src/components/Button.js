import React from "react";
import classnames from "classnames";

const Button = ({ children, size, onContactPage }) => {
  return (
    <button
      className={classnames(
        "font-light  h-[48px] bg-transparent hover:bg-[#EE2737] text-[#EE2737] font-semibold hover:text-white border border-[#EE2737] hover:border-transparent rounded",
        { "w-[130px]": size === "sm", "w-[275px]": size === "md" }
      )}
      onClick={onContactPage}
    >
      {children}
    </button>
  );
};

export default Button;
