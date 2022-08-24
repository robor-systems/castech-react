import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useMediaQuery } from "react-responsive";

const siemens_healthineers =
  "https://robor-team.s3.eu-central-1.amazonaws.com/cas-tech/siemens-healthineers-seeklogo.com.png";
const spotify =
  "https://robor-team.s3.eu-central-1.amazonaws.com/cas-tech/spotify-seeklogo.com.png";
const premium_league =
  "https://robor-team.s3.eu-central-1.amazonaws.com/cas-tech/premium-league.png";
const vortex =
  "https://robor-team.s3.eu-central-1.amazonaws.com/cas-tech/vortex.png";
const amplitude =
  "https://robor-team.s3.eu-central-1.amazonaws.com/cas-tech/amplitude-seeklogo.com.png";

const Companies = () => {
  const isSm = useMediaQuery({ query: "(max-width: 620px)" });
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    // autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="flex flex-col text-center mt-[150px]">
      <p className="text-text-primary ">Trusted by top-tier companies</p>
      {isSm ? (
        <Slider {...settings}>
          <div className="!flex justify-center mt-[32px]  ">
            <img src={siemens_healthineers} alt="siemens" />
          </div>
          <div className="!flex justify-center mt-[32px] ">
            <img src={spotify} alt="logo" />
          </div>
          <div className="!flex justify-center mt-[32px]">
            <img src={premium_league} alt="premium" />
          </div>
          <div className="!flex justify-center mt-[32px] ">
            <img src={vortex} alt="vortex" />
          </div>
          <div className="!flex justify-center mt-[32px] ">
            <img src={amplitude} alt="amplitude" />
          </div>
        </Slider>
      ) : (
        <div className="md:flex md:justify-center">
          <div className="mx-[38px] my-[38px]">
            <img src={siemens_healthineers} alt="siemens" />
          </div>
          <div className="mx-[38px] my-[38px]">
            <img src={spotify} alt="logo" />
          </div>
          <div className="mx-[38px] my-[38px]">
            <img src={premium_league} alt="premium" />
          </div>
          <div className="mx-[38px] my-[38px]">
            <img src={vortex} alt="vortex" />
          </div>
          <div className="mx-[38px] my-[38px]">
            <img src={amplitude} alt="amplitude" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Companies;
