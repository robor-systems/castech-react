import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { Container } from "..";

const socialLinks = [
  {
    title: "Facebook",
    href: "https://www.facebook.com/",
    Icon: FaFacebookF,
  },
  {
    title: "Twitter",
    href: "https://twitter.com/i/flow/login",
    Icon: FaTwitter,
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/feed/",
    Icon: FaLinkedinIn,
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/",
    Icon: FaInstagram,
  },
];

const Footer = () => {
  return (
    <div className='w-full  py-10  bg-[#1D1D1D] text-text-tertiary '>
      <Container>
        <div className='flex flex-col md:flex-row justify-between  text-center md:text-left  max-w-6xl mx-auto'>
          <div>
            <h1 className='text-[20px] font-bold mb-[10px] text-[#DDEAF5]'>
              CASTechnology Inc
            </h1>
            <p className='text-[14px] md:w-[340px] lg:w-[431px]'>
              CASTechnology Inc . is an IT Consulting and solution provider
              company. It is based in Regina, Canada and has specialized in
              Software Development Projects, Telecom Solutions Integrator (CRM &
              Billing) and Data Warehousing.
            </p>
            <div className='hidden md:flex mt-[30px] gap-x-4'>
              {socialLinks.map(({ href, Icon }, i) => (
                <a target='_blank' href={href} rel='noreferrer'>
                  <Icon className='text-xl ' />
                </a>
              ))}
            </div>
          </div>
          <div className='flex flex-col gap-y-6 md:mt-0  my-10'>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://goo.gl/maps/rTC46Vw6Bjybasof6'
              className='flex flex-col gap-x-2 gap-y-2 md:flex-row items-center  md:items-start'
            >
              {" "}
              <MdLocationOn className='md:mt-[5px]' />
              <p className='text-[14px] hover:underline '>
                3403 Middleton Place,
                <br /> Regina, SK, S4N 7C2,
                <br />
                Canada
              </p>
            </a>

            <Link
              to='#'
              onClick={(e) => {
                window.location.href = "mailto:info@castechnology.ca";
                e.preventDefault();
              }}
              target='_blank'
              className='flex flex-col gap-x-2 gap-y-2 md:flex-row items-center '
            >
              {" "}
              <MdEmail />
              <p className='text-[14px] hover:underline'>
                info@castechnology.ca
              </p>
            </Link>
            <div className='flex flex-col gap-x-2 gap-y-2 md:flex-row  items-center '>
              {" "}
              <FaPhoneAlt className='mb-[10px] md:mb-[0px]  ' />
              <p className='text-[14px]'>+13065914999</p>
            </div>
          </div>
          <div className='flex justify-center md:hidden mt-[30px]  gap-x-4'>
            {socialLinks.map(({ href, Icon }, i) => (
              <a target='_blank' href={href} rel='noreferrer'>
                <Icon className='text-xl ' />
              </a>
            ))}
          </div>
        </div>

        <hr className='bg-#606F7B my-[47px]  mx-[40px]' />
        <div className='flex flex-col md:flex-row justify-between gap-y-4 max-w-6xl mx-auto text-center md:text-left'>
          <Link
            to='/privacy-policy'
            className='hover:underline  order-last md:order-none'
          >
            Privacy Policy
          </Link>
          <div>Copyright © CASTechnology Inc. 2022</div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
