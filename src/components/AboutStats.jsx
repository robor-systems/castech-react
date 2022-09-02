import React from "react";

const AboutStats = () => {
  return (
    <div className="w-[312px] h-[260px] md:w-[580px] lg:w-[800px]  xl:w-[1126px] lg:h-[120px] rounded-[8px] bg-[#EE2737] mt-[100px] flex flex-row justify-around md:px-[50px] xl:px-[100px] ">
      <div className="flex flex-col lg:flex-row lg:w-[500px] justify-around">
        <div className="py-[24px] ">
          <p className="text-[39px] text-[#FFFFFF]">100+</p>
          <p className="text-[14px] text-[#FFFFFF]">IT Professionals</p>
        </div>
        <div className="py-[24px]">
          <p className="text-[39px] text-[#FFFFFF]">12+</p>
          <p className="text-[14px] text-[#FFFFFF]">Years of Experience</p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:w-[500px] justify-around">
        <div className="py-[24px]">
          <p className="text-[39px] text-[#FFFFFF]">24+</p>
          <p className="text-[14px] text-[#FFFFFF]">Projects Delivered</p>
        </div>
        <div className="py-[24px] ">
          <p className="text-[39px] text-[#FFFFFF]">20+</p>
          <p className="text-[14px] text-[#FFFFFF]">Global Clients</p>
        </div>
      </div>
    </div>
  );
};

export default AboutStats;
