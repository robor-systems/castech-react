import React from "react";
import { Container } from "../..";
import { LOGO } from "constants/content.constant";
import { Link } from "react-router-dom";
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
            <div className='w-[130px]' key={i}>
              <Link
                to={link.href}
                className='px-6 text-text-primary inline-block group w-fit cursor-pointer transition-all duration-300s hover:text-text-dark '
                key={i}
              >
                {link.title}
                <div className='w-0 h-[2px] transition-all duration-300 group-hover:w-full bg-text-dark'></div>
              </Link>
            </div>
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
