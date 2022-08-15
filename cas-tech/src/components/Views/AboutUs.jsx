import React from "react";
import AboutStats from "../AboutStats";
const group_image =
  "https://robor-team.s3.eu-central-1.amazonaws.com/cas-tech/home-image-2.jpg";
const dot_Square =
  "https://robor-team.s3.eu-central-1.amazonaws.com/cas-tech/dots-square.svg";
const AboutUs = () => {
  return (
    <div className="px-[40px] md:px-[100px] lg:px-[200px]">
      <div className="flex flex-col md:flex-row mt-[120px]">
        <div>
          <div className="text-text-secondary text-[14px]   ">WHO ARE WE</div>
          <h1 className="text-[32px] leading-[2.5rem] mb-[12px] font-semibold">
            We are technology-oriented <br /> solution provider & consultants
          </h1>
          <p className="text-text-primary text-[14px] leading-[1.5rem]">
            An IT Consulting and solution provider company. It is based in
            Regina, Canada and <br /> has specialized in Software Development
            Projects, Telecom Solutions Integrator <br /> (CRM & Billing) and
            Data Warehousing. CASTechnology is fully committed to provide <br />{" "}
            first class IT and consultancy services around the globe.
          </p>
          <p className="text-text-primary mt-[8px] text-[14px] leading-[1.5rem]">
            {" "}
            We are lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            ex ipsum, rhoncus <br /> sed sollicitudin eget, cursus ultricies
            magna. Vestibulum porttitor, ante nec <br /> vulputate bibendum,
            ante lectus scelerisque tellus, nec accumsan tortor ex in lorem{" "}
            <br />{" "}
          </p>
          <p className="text-text-primary mt-[8px] text-[14px] leading-[1.5rem]">
            {" "}
            From designing next generation server architecture,
            installing/upgrading a small <br /> network or building a complete
            end-to-end solution for small-to-enterprise business is welcome.
          </p>
        </div>
        <div className="relative">
          <img
            src={group_image}
            alt="groupimage"
            className="w-[312px] md:w-[496px] h-[239px] md:h-[380px]  md:ml-[30px] rounded-[35px] md:rounded-[80px] relative z-10 mt-[30px] md:mt-[0px]"
          />
          <div className="absolute right-[5%] md:right-[-15%] bottom-[-11%] md:bottom-[28%] xl:bottom-[-8%] ">
            <img src={dot_Square} alt="dots" className="h-[52px] md:h-[auto]" />
          </div>
        </div>
      </div>
      <AboutStats />
    </div>
  );
};

export default AboutUs;
