import { Container } from "components/Modules";
import { SERVICES } from "constants/content.constant";
import React from "react";
import TechBox from "./TechBox";

const Services = () => {
  return (
    <section
      name="service"
      id="services"
      className="my-20 sm:my-0 sm:py-20 scroll-mt-24 sm:scroll-mt-10"
    >
      <Container>
        <div className="flex flex-col items-center max-w-[1360px] mx-auto">
          <h2 className="text-text-secondary text-[14px] text-center font-semibold">
            WHAT WE DO
          </h2>
          <h1 className="text-center text-[24px] sm:text-[32px] font-semibold px-[30px]">
            We're an IT consulting and solution provider company.
          </h1>
          <p className="text-center text-[16px] text-text-primary my-3">
            We have more than 35 years of accumulated experience in delivering
            flexible IT solutions
          </p>

          {/* Scrollable Container */}
          <div className="w-full max-w-[1400px] overflow-x-auto scrollbar-hide">
            <div className="flex gap-8 pt-14 pb-10 min-w-[800px] sm:min-w-full">
              {SERVICES.map(({ heading, details }, i) => (
                <TechBox key={i} heading={heading} para={details} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Services;
