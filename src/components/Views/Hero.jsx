import React from "react";
import { useNavigate } from "react-router-dom";
const Hero_image =
  "https://robor-team.s3.eu-central-1.amazonaws.com/cas-tech/hero-image.jpg";
const dot_Square =
  "https://robor-team.s3.eu-central-1.amazonaws.com/cas-tech/dots-square.svg";
const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col sm:flex-row justify-around 3xl:px-[500px]">
      <div className="text-center sm:text-left mt-[130px]  mx-[15px] lg:mt-[85px] xl:mt-[204px] 2xl:mr-[198px] xl:mr-[150px] lg:mr-[100px] md:mx-[30px] lg:ml-[85px] xl:ml-[188px] ">
        <div className="flex flex-col items-center">
          <div className="w-[20rem] md:w-[34rem]">
            <h1 className="text-[32px]  sm:text-[54px] font-bold leading-[2.5rem] sm:leading-[4.5rem] ">
              Lorem Ipsum Dolor <br /> Sit Amet
            </h1>
            <p className="text-[16px] md:text-[20px] text-text-primary mt-[12px] ">
              Quisque eget erat ornare, tempor dui eu, maximus leo. sagittis
              urna sodales tincidunt.
            </p>
          </div>
        </div>
        <div className="mt-[26px] mb-[60px]">
          <button
            onClick={() => navigate("/contact")}
            className="bg-[#EE2737] hover:bg-[#DF1D2D] text-white  py-[14px] rounded w-[240px] sm:w-[269px] text-[16px] sm:text-[20px]"
          >
            Book Free Consultation
          </button>
        </div>
      </div>
      <div className="relative">
        <img
          alt="hero_image"
          src={Hero_image}
          className=" h-[282px] lg:w-[38.5rem]  lg:h-[483px] sm:rounded-bl-[80px] lg:mt-[35px]"
        />
        <div className="absolute right-0 w-[110px] sm:w-[194px]  bottom-[-16%] md:bottom-[2%]">
          <img src={dot_Square} alt="dots" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
