import React from "react";
import TechBox from "../TechBox";

const WhatWeDoSection = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-text-secondary text-[14px] text-center mt-[120px]">
        WHAT WE DO
      </h2>
      <h1 className="text-center text-[32px]">Lorem ipsum dolor sit amet</h1>
      <p className="text-center text-[16px] text-text-primary mb-[48px]">
        Our technology allows you to provide lorem ipsum dolor sit amet.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-6 grid-rows-3 px-[20px]">
        <TechBox
          heading={"Cloud Computing"}
          para={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ex ipsum, rhoncus sed sollicitudin eget, cursus ultricies magna."
          }
        />
        <TechBox
          heading={"Cyber Security"}
          para={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ex ipsum, rhoncus sed sollicitudin eget, cursus ultricies magna."
          }
        />
        <TechBox
          heading={"Data Warehousing"}
          para={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ex ipsum, rhoncus sed sollicitudin eget, cursus ultricies magna."
          }
        />
        <TechBox
          heading={"Quality Assurance"}
          para={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ex ipsum, rhoncus sed sollicitudin eget, cursus ultricies magna."
          }
        />
        <TechBox
          heading={"Blockchain"}
          para={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ex ipsum, rhoncus sed sollicitudin eget, cursus ultricies magna."
          }
        />
        <TechBox
          heading={"Advisory"}
          para={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ex ipsum, rhoncus sed sollicitudin eget, cursus ultricies magna."
          }
        />
        <TechBox
          heading={"Data Storage"}
          para={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ex ipsum, rhoncus sed sollicitudin eget, cursus ultricies magna."
          }
        />
        <TechBox
          heading={"IT Offshoring"}
          para={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ex ipsum, rhoncus sed sollicitudin eget, cursus ultricies magna."
          }
        />
      </div>
    </div>
  );
};

export default WhatWeDoSection;
