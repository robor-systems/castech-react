import { Container } from "components/Modules";
import Anchor from "components/Modules/Anchor/Anchor";
import { DOT_DECOR, HERO_IMAGE } from "constants/content.constant";
import React from "react";

const Hero = () => {
  return (
    <Container className='sm:px-0  px-0 overflow-visible'>
      <div
        id=''
        className='md:flex flex-col sm:flex-row justify-between min-h-[500px]'
      >
        <div className='text-center md:text-left flex flex-col justify-center px-10 sm:px-[88px] md:py-0 py-16'>
          <div className='max-w-2xl'>
            <h1 className='text-[32px]  sm:text-[54px] font-bold leading-[2.5rem] sm:leading-[4.5rem] '>
              Lorem Ipsum Dolor <br /> Sit Amet
            </h1>
            <p className='text-[16px] md:text-[20px] text-text-primary mt-[12px] '>
              Quisque eget erat ornare, tempor dui eu, maximus leo. sagittis
              urna sodales tincidunt.
            </p>
          </div>
          <div className='mt-[26px] '>
            <Anchor
              href='/contact'
              title='Book Free Consultation'
              filled
              classNames={
                "w-[240px] sm:w-[269px] text-[16px] sm:text-[20px]  py-[14px]"
              }
            />
          </div>
        </div>
        <div className='h-fit relative'>
          <img
            alt='hero_image'
            src={HERO_IMAGE}
            className='md:rounded-bl-[80px] w-full md:w-[600px] md:h-[400px] object-cover'
          />
          <div className='absolute right-0  bottom-[-65px]'>
            <img src={DOT_DECOR} alt='dots' />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
