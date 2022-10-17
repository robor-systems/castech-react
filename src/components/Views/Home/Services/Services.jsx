import { Container } from "components/Modules";
import { SERVICES } from "constants/content.constant";
import React from "react";
import TechBox from "./TechBox";

const Services = () => {
  return (
    <section
      name='service'
      id='services'
      className='my-20 sm:my-0 sm:py-20 scroll-mt-24 sm:scroll-mt-10'
    >
      <Container>
        <div className='flex flex-col items-center max-w-[1360px] mx-auto'>
          <h2 className='text-text-secondary text-[14px] text-center font-semibold'>
            WHAT WE DO
          </h2>
          <h1 className='text-center text-[24px] sm-[32px] font-semibold px-[30px]'>
            Lorem ipsum dolor sit amet
          </h1>
          <p className='text-center text-[16px] text-text-primary my-3'>
            Our technology allows you to provide lorem ipsum dolor sit amet.
          </p>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-14'>
            {SERVICES.map(({ heading, details }, i) => (
              <TechBox key={i} heading={heading} para={details} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Services;
