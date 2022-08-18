import React from "react";
import { useNavigate } from "react-router-dom";
const Hero_image =
  "https://robor-team.s3.eu-central-1.amazonaws.com/cas-tech/hero-image.jpg";
const dot_Square =
  "https://robor-team.s3.eu-central-1.amazonaws.com/cas-tech/dots-square.svg";
const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col sm:flex-row">
      <div className="text-center sm:text-left mt-[91px]  mx-[15px] lg:mt-[85px] xl:mt-[182px] 2xl:mr-[198px] xl:mr-[150px] lg:mr-[100px] md:mx-[30px] xl:ml-[210px] lg:ml-[85px]">
        <h1 className="text-[36px]  sm:text-[54px] font-bold leading-[3.5rem] sm:leading-[4.5rem]">
          Lorem Ipsum Dolor <br /> Sit Amet
        </h1>
        <p className="text-[16px] md:text-[20px] text-text-primary mt-[12px]">
          Quisque eget erat ornare, tempor dui eu, maximus leo.
          <br />
          sagittis urna sodales tincidunt.
        </p>
        <div className="mt-[26px] mb-[60px]">
          <button
            onClick={() => navigate("/contact")}
            className="bg-[#EE2737] hover:bg-[#DF1D2D] text-white  py-[14px] rounded w-[269px] text-[20px]"
          >
            Book Free Consultation
          </button>
        </div>
      </div>
      <div className="relative">
        <img
          alt="hero_image"
          src={Hero_image}
          className=" lg:w-[38.5rem]  lg:h-[483px] sm:rounded-bl-[80px] "
        />
        <div className="absolute right-0  bottom-[-16%] md:bottom-[2%]">
          <img src={dot_Square} alt="dots" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
