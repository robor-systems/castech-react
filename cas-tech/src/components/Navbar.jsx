import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Button from "./Button";
const castechLogo =
  "https://robor-team.s3.eu-central-1.amazonaws.com/cas-tech/logo/CASTechnology+Inc.png";
const Navbar = () => {
  const [hamMenu, setHamMenu] = useState(false);
  const openMenu = () => {
    setHamMenu(!hamMenu);
  };
  return (
    <div className="flex justify-between items-center shadow-[0px_3px_10px_#00000014] fixed w-full">
      <img
        src={castechLogo}
        alt="logo"
        className="pl-[30px] md:pl-[56px] pt-[27px] pb-[26px]"
      />

      <ul className=" hidden md:flex md:items-center ">
        <li className="px-4 text-text-primary">Services</li>
        <li className="px-4  text-text-primary">About Us</li>
        <li className="px-4  text-text-primary">Career</li>
        <div className="pl-4 mr-[56px] w-[130px]">
          <Button size={"sm"}> Contact Us</Button>
        </div>
      </ul>

      <div onClick={openMenu} className="block md:hidden mr-[20px]">
        {hamMenu ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={30} />}
      </div>
      <div
        className={
          !hamMenu ? "hidden" : "fixed  top-20 ease-in-out duration-500 w-full"
        }
      >
        <ul className="grid items-center md:hidden">
          <li className="flex justify-center  py-[24px]  border-b border-[#EEF2F6]  text-text-primary">
            Services
          </li>
          <li className="flex justify-center py-[24px]  border-b border-[#EEF2F6]  text-text-primary">
            About Us
          </li>
          <li className="flex justify-center py-[24px]  border-b border-[#EEF2F6]  text-text-primary">
            Career
          </li>
          <div className="flex justify-center py-[24px] ">
            <Button size="md"> Contact Us</Button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
