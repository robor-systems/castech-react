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
    <div className="h-368px w-full  gap-1 py-[56px]  bg-[#1D1D1D] text-text-tertiary">
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
            <Link
              to="#"
              onClick={(e) => {
                window.location.href = "https://www.facebook.com/";
                e.preventDefault();
              }}
            >
              <img src={facebook} alt="facebook" />
            </Link>
            <Link
              to="#"
              onClick={(e) => {
                window.location.href = "https://twitter.com/i/flow/login";
                e.preventDefault();
              }}
            >
              <img src={twitter} alt="twitter" className="ml-[30px]" />
            </Link>
            <Link
              to="#"
              onClick={(e) => {
                window.location.href = "https://www.linkedin.com/feed/";
                e.preventDefault();
              }}
            >
              <img src={linkedin} alt="linkedin" className="ml-[30px]" />
            </Link>
            <Link
              to="#"
              onClick={(e) => {
                window.location.href = "https://www.instagram.com/";
                e.preventDefault();
              }}
            >
              <img src={instagram} alt="instagram" className="ml-[30px]" />
            </Link>
          </div>
        </div>
        <div>
          <Link
            to="#"
            className="flex flex-col md:flex-row items-center  md:items-start"
          >
            {" "}
            <img
              src={location}
              alt="location"
              className="w-[13px] h-[19px] mb-[10px] md:mb-[0px] md:mr-[19px] mt-[56px] md:mt-[5px]"
            />
            <p className="text-[14px]">
              3403 Middleton Place,
              <br /> Regina, SK, S4N 7C2,
              <br />
              Canada
            </p>
          </Link>
          <Link
            to="#"
            onClick={(e) => {
              window.location.href = "mailto:info@castechnology.ca";
              e.preventDefault();
            }}
            className="flex flex-col md:flex-row   items-center mt-[24px]"
          >
            {" "}
            <img
              src={email}
              alt="email"
              className="mb-[10px] md:mb-[0px] md:mr-[19px] "
            />
            <p className="text-[14px]">info@castechnology.ca</p>
          </Link>
          <div className="flex flex-col  md:flex-row  items-center mt-[24px] ">
            {" "}
            <img
              src={phone}
              alt="phone"
              className="mb-[10px] md:mb-[0px]  md:mr-[19px] "
            />
            <p className="text-[14px]">+13065914999</p>
          </div>
        </div>
        <div className="flex justify-center md:hidden mt-[30px]">
          <img src={facebook} alt="facebook" />
          <img src={twitter} alt="twitter" className="ml-[30px]" />
          <img src={linkedin} alt="linkedin" className="ml-[30px]" />
          <img src={instagram} alt="instagram" className="ml-[30px]" />
        </div>
      </div>

      <hr className="bg-#606F7B mt-[47px]  mx-[70px]" />
      <div className="mt-[32px] flex flex-col md:flex-row justify-between px-[25px] md:px-[60px] lg:px-[120px] text-center md:text-left">
        <Link to="/privacy-policy">Privacy Policy</Link>
        <div>Copyright © CASTechnology Inc. 2022</div>
      </div>
    </div>
  );
};

export default Footer;
