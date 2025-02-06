import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
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
        <div className='flex flex-col md:flex-row justify-between  text-center md:text-left max-w-[1360px] mx-auto'>
          <div>
            <h1 className='text-[20px] font-bold mb-[10px] text-[#DDEAF5]'>
              Waazes
            </h1>
            <p className='text-[14px] md:w-[340px] lg:w-[431px]'>
              Waazes is an IT Consulting and solution provider
              company. It is based in Regina, Canada and has specialized in
              Software Development Projects, Telecom Solutions Integrator (CRM &
              Billing) and Data Warehousing.
            </p>
            {/* <div className='hidden md:flex mt-[30px] gap-x-4'>
              {socialLinks.map(({ href, Icon }, i) => (
                <a target='_blank' key={i} href={href} rel='noreferrer'>
                  <Icon className='text-xl ' />
                </a>
              ))}
            </div> */}
          </div>
          <div className='flex flex-col gap-y-6 md:mt-0  my-10'>

            <Link
              to='#'
              onClick={(e) => {
                window.location.href = "mailto:support@waazes.ca";
                e.preventDefault();
              }}
              target='_blank'
              className='flex flex-col gap-x-2 gap-y-2 md:flex-row items-center '
            >
              {" "}
              <MdEmail />
              <p className='text-[14px] hover:underline'>
              support@waazes.ca
              </p>
            </Link>
            {/* <div className='flex flex-col gap-x-2 gap-y-2 md:flex-row  items-center '>
              {" "}
              <FaPhoneAlt className='mb-[10px] md:mb-[0px]  ' />
              <p className='text-[14px]'>+13065914999</p>
            </div> */}
          </div>
          <div className='flex justify-center md:hidden mt-[30px]  gap-x-4'>
            {socialLinks.map(({ href, Icon }, i) => (
              <a target='_blank' key={i} href={href} rel='noreferrer'>
                <Icon className='text-xl ' />
              </a>
            ))}
          </div>
        </div>

        <hr className='bg-#606F7B my-[47px] ' />
        <div className='flex flex-col md:flex-row justify-between gap-y-4 max-w-[1360px]  mx-auto text-center md:text-left'>
          <div>Copyright © Waazes 2025</div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
