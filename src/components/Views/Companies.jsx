import React from "react";
import Marquee from "react-fast-marquee";
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
  const isSm = useMediaQuery({ query: "(max-width: 1024px)" });
  return (
    <div className="flex flex-col text-center mt-[150px]">
      <p className="text-text-primary ">Trusted by top-tier companies</p>
      <div className="flex justify-between px-[10px] md:px-[50px] lg:px-[100px] xl:px-[110px]">
        <Marquee play={isSm ? true : false} gradient={false}>
          <div className="mx-[38px] my-[38px]">
            <img src={siemens_healthineers} alt="siemens" />
          </div>
          <div className="mx-[38px] my-[38px]">
            <img src={spotify} alt="logo" />
          </div>
          <div className="mx-[38px] my-[28px]">
            <img src={premium_league} alt="premium" />
          </div>
          <div className="mx-[38px] my-[38px]">
            <img src={vortex} alt="vortex" />
          </div>
          <div className="mx-[38px] my-[38px]">
            <img src={amplitude} alt="amplitude" />
          </div>
          <div className="mx-[38px] my-[38px]">
            <img src={premium_league} alt="premium" />
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Companies;
