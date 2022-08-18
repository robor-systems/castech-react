import React from "react";

const TechBox = ({ heading, para }) => {
  return (
    <div className="w-[312px] sm:w-[258px] h-[179px] sm:h-[203px] border-solid border-2 border-[#EEF2F6] rounded-[6px] opacity: 1 p-[24px]">
      <h1 className="text-[20px] ">{heading}</h1>
      <p className="text-text-primary text-[14px] mt-[12px]">{para}</p>
    </div>
  );
};

export default TechBox;
