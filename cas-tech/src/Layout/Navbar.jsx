import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Button from "../components/Button";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";

const castechLogo =
  "https://robor-team.s3.eu-central-1.amazonaws.com/cas-tech/logo/CASTechnology+Inc.png";
const Navbar = () => {
  const navigate = useNavigate();
  const [hamMenu, setHamMenu] = useState(false);
  const openMenu = () => {
    setHamMenu(!hamMenu);
  };
  const onContactPage = () => {
    navigate("/contact");
    setHamMenu(false);
  };
  return (
    <div className="relative w-full">
      <div className="z-20 bg-[#fff] fixed flex justify-between items-center shadow-[0px_3px_10px_#00000014]  w-full">
        <img
          src={castechLogo}
          alt="logo"
          className="pl-[30px] md:pl-[56px] pt-[27px] pb-[26px]"
        />

        <ul className=" hidden md:flex md:items-center ">
          <li className="px-4 text-text-primary">
            <Link
              className="px-4 text-text-primary"
              to="service"
              smooth={true}
              duration={500}
            >
              Services
            </Link>
          </li>
          <li className="px-4  text-text-primary">
            <Link to="about" smooth={true} offset={5} duration={500}>
              {" "}
              About Us
            </Link>
          </li>
          <li className="px-4  text-text-primary">
            <Link to="career" smooth={true} offset={5} duration={500}>
              {" "}
              Career
            </Link>
          </li>
          <div className="pl-4 mr-[56px] w-[130px]">
            <Button size={"sm"} onContactPage={onContactPage}>
              {" "}
              Contact Us
            </Button>
          </div>
        </ul>

        <div onClick={openMenu} className="grid  right-0 md:hidden mr-[20px]">
          {hamMenu ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={30} />}
        </div>
        {hamMenu && (
          <ul className="grid items-center md:hidden absolute bg-[#fff] top-[80px] w-full">
            <li className="flex justify-center  py-[24px] border-t  border-b border-[#EEF2F6]  text-text-primary">
              <Link
                className="px-4 text-text-primary"
                to="service"
                smooth={true}
                duration={500}
                offset={-300}
              >
                Services
              </Link>
            </li>
            <li className="flex justify-center py-[24px]  border-b border-[#EEF2F6]  text-text-primary">
              <Link to="about" smooth={true} offset={-300} duration={500}>
                {" "}
                About Us
              </Link>
            </li>
            <li className="flex justify-center py-[24px]  border-b border-[#EEF2F6]  text-text-primary">
              <Link to="career" smooth={true} offset={-300} duration={500}>
                {" "}
                Career
              </Link>
            </li>
            <div className="flex justify-center py-[24px] ">
              <Button size="md" onContactPage={onContactPage}>
                Contact Us
              </Button>
            </div>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
