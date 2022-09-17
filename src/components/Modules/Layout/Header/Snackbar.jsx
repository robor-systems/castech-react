import clsx from "clsx";
import Anchor from "components/Modules/Anchor/Anchor";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FiX, FiMenu } from "react-icons/fi";
import { useLocation } from "react-router-dom";

const Snackbar = ({ links }) => {
  const [open, setOpen] = useState(false);
  const { pathname, hash } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname, hash]);
  const toggleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className='lg:hidden block'>
      <div className='cursor-pointer text-text-primary text-2xl hover:text-text-dark transition-all duration-300'>
        {open ? <FiX onClick={toggleOpen} /> : <FiMenu onClick={toggleOpen} />}
      </div>
      <div
        className={clsx(
          "absolute top-[59px] right-0 bg-white  left-0 px-6 text-center",
          open ? "block" : "hidden"
        )}
      >
        {links.map(({ title, href }) => (
          <div className='text-text-primary  py-5 border-b-[#EEF2F6] border-b-[2px] font-semibold'>
            <a
              href={href}
              className='transition-all duration-300s hover:text-text-dark'
            >
              {title}
            </a>
          </div>
        ))}
        <div className='py-5 w-full '>
          <Anchor classNames={"py-3"} title='Contact us' href={"/contact"} />
        </div>
      </div>
    </div>
  );
};

export default Snackbar;
