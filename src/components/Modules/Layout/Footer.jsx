import React from "react";
import { Link } from "react-router-dom";
const twitter =
  "https://robor-team.s3.eu-central-1.amazonaws.com/cas-tech/Footer-icons/twitter.svg";
const linkedin =
  "https://robor-team.s3.eu-central-1.amazonaws.com/cas-tech/Footer-icons/linkedin.svg";
const facebook =
  "https://robor-team.s3.eu-central-1.amazonaws.com/cas-tech/Footer-icons/facebook.svg";
const instagram =
  "https://robor-team.s3.eu-central-1.amazonaws.com/cas-tech/Footer-icons/instagram.svg";
const location =
  "https://robor-team.s3.eu-central-1.amazonaws.com/cas-tech/Footer-icons/location-on.svg";
const email =
  "https://robor-team.s3.eu-central-1.amazonaws.com/cas-tech/Footer-icons/email.svg";
const phone =
  "https://robor-team.s3.eu-central-1.amazonaws.com/cas-tech/Footer-icons/local-phone.svg";
const Footer = () => {
  return (
    <div className="h-368px w-full  gap-1 py-[56px]  bg-[#1D1D1D] text-text-tertiary sticky top-[100%]">
      <div className="flex flex-col md:flex-row justify-between px-[35px] md:px-[60px] lg:px-[120px] text-center md:text-left">
        <div>
          <h1 className="text-[20px] font-bold mb-[10px] text-[#DDEAF5]">
            CASTechnology Inc
          </h1>
          <p className="text-[14px] md:w-[340px] lg:w-[431px]">
            CASTechnology Inc . is an IT Consulting and solution provider
            company. It is based in Regina, Canada and has specialized in
            Software Development Projects, Telecom Solutions Integrator (CRM &
            Billing) and Data Warehousing.
          </p>
          <div className="hidden md:flex mt-[30px]">
            <a
              target="_blank"
              href="https://www.facebook.com/"
              rel="noreferrer"
            >
              <img src={facebook} alt="facebook" />
            </a>
            <a
              target="_blank"
              href="https://twitter.com/i/flow/login"
              rel="noreferrer"
            >
              <img src={twitter} alt="twitter" className="ml-[30px] mt-[2px]" />
            </a>
            <a
              rel="noreferrer"
              href="https://www.linkedin.com/feed/"
              target="_blank"
            >
              <img src={linkedin} alt="linkedin" className="ml-[30px]" />
            </a>
            <a
              rel="noreferrer"
              href="https://www.instagram.com/"
              target="_blank"
            >
              <img src={instagram} alt="instagram" className="ml-[30px]" />
            </a>
          </div>
        </div>
        <div>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://goo.gl/maps/rTC46Vw6Bjybasof6"
            className="flex flex-col gap-2 md:flex-row items-center  md:items-start"
          >
            {" "}
            <img
              src={location}
              alt="location"
              className="w-[13px] h-[19px] mb-[10px] md:mb-[0px]  mt-[56px] md:mt-[5px]"
            />
            <p className="text-[14px] hover:underline ml-[6px]">
              3403 Middleton Place,
              <br /> Regina, SK, S4N 7C2,
              <br />
              Canada
            </p>
          </a>
          <Link
            to="#"
            onClick={(e) => {
              window.location.href = "mailto:info@castechnology.ca";
              e.preventDefault();
            }}
            target="_blank"
            className="flex flex-col gap-2 md:flex-row   items-center mt-[24px]"
          >
            {" "}
            <img src={email} alt="email" className="mb-[10px] md:mb-[0px]  " />
            <p className="text-[14px] hover:underline">info@castechnology.ca</p>
          </Link>
          <div className="flex flex-col gap-2 md:flex-row  items-center mt-[24px] ">
            {" "}
            <img src={phone} alt="phone" className="mb-[10px] md:mb-[0px]  " />
            <p className="text-[14px]">+13065914999</p>
          </div>
        </div>
        <div className="flex justify-center md:hidden mt-[30px]">
          <img src={facebook} alt="facebook" />
          <img src={twitter} alt="twitter" className="ml-[30px] " />
          <img src={linkedin} alt="linkedin" className="ml-[30px]" />
          <img src={instagram} alt="instagram" className="ml-[30px]" />
        </div>
      </div>

      <hr className="bg-#606F7B mt-[47px]  mx-[70px]" />
      <div className="mt-[32px] flex flex-col md:flex-row justify-between px-[25px] md:px-[60px] lg:px-[120px] text-center md:text-left">
        <Link to="/privacy-policy" className="hover:underline">
          Privacy Policy
        </Link>
        <div>Copyright © CASTechnology Inc. 2022</div>
      </div>
    </div>
  );
};

export default Footer;
