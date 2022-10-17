import { Container } from "components/Modules";
import Anchor from "components/Modules/Anchor/Anchor";
import React from "react";

const BookConsultation = () => {
  return (
    <div className='w-full bg-[#EEF2F6] text-center py-12  '>
      <Container>
        <p className='text-[20px] font-medium text-text-dark'>
          Quisque eget erat ornare, tempor dui eu, maximus leo.
          <br /> Donec sagittis urna sodales tincidunt.
        </p>
        <div className='mt-[26px]'>
          <Anchor
            href='/contact'
            title='Book Free Consultation'
            filled
            classNames={
              "w-full sm:w-[269px]  sm:text-[20px] text-[16px]  py-[14px]"
            }
          />
        </div>
      </Container>
    </div>
  );
};

export default BookConsultation;
