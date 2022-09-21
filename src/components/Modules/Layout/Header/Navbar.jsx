import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Button, Container } from "../..";
import { LOGO } from "constants/content.constant";
import { useNavigate, Link } from "react-router-dom";
import Snackbar from "./Snackbar";
import Anchor from "components/Modules/Anchor/Anchor";

const Navbar = () => {
  const links = [
    {
      title: "Services",
      href: "/#services",
    },
    {
      title: "About Us",
      href: "/#about-us",
    },
    {
      title: "Career",
      href: "/#career",
    },
  ];

  return (
    <div className='z-20 bg-[#fff]  top-0 sticky shadow-[0px_3px_10px_#00000014]  w-full py-5'>
      <Container className={"flex justify-between items-center "}>
        {/* LOGO */}
        <div>
          <Link to='/'>
            <img src={LOGO} alt='logo' />
          </Link>
        </div>
        {/* NAV ITEMS */}
        <div className='justify-between items-center   lg:flex hidden'>
          {links.map((link, i) => (
            <a
              href={link.href}
              className='px-6 text-text-primary cursor-pointer transition-all duration-300s hover:text-text-dark w-[130px]'
              key={i}
            >
              {link.title}
            </a>
          ))}
          <div className='md:w-[130px] w-full'>
            <Anchor href='/contact' title='Contact Us' classNames='py-2' />
          </div>
        </div>

        {/* Snackbar */}
        <Snackbar links={links} />
      </Container>
    </div>
  );
};

export default Navbar;
