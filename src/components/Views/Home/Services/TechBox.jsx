import React from "react";

const TechBox = ({ heading, para }) => {
  return (
    <div className='border-solid border-2 border-[#EEF2F6] rounded-[6px] py-8 px-8'>
      <h1 className='text-[20px] font-semibold'>{heading}</h1>
      <p className='text-text-primary text-[14px] mt-[12px]'>{para}</p>
    </div>
  );
};

export default TechBox;
