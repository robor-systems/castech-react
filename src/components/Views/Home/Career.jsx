import { Container } from "components/Modules";
import { CAREER_IMAGE, DOT_DECOR } from "constants/content.constant";
import React from "react";

const Career = () => {
  return (
    <section id='career' className='my-20'>
      <Container>
        <div className='flex gap-x-20 max-w-6xl items-stretch mx-auto md:flex-row flex-col-reverse gap-y-14'>
          <div className='h-full w-full flex-[1] relative '>
            <img
              src={CAREER_IMAGE}
              alt='Career'
              className='rounded-[40px] md:rounded-[80px] md:min-h-[350px]'
            />
            <img
              src={DOT_DECOR}
              alt='decor'
              className='absolute -bottom-14 -z-10'
            />
          </div>
          <div className='flex-[1] lg:pr-16 '>
            <div className='text-text-secondary text-[14px] font-semibold'>
              WHY JOIN US
            </div>
            <div className='text-[24px] md:text-[32px] leading-[2rem] md:leading-[2.5rem] font-semibold my-3'>
              We value or people and their cultures lorem ipsum.
            </div>
            <div className='text-text-primary text-[14px] leading-[1.5rem]'>
              We in CASTechnology Inc. believe those employees are asset of
              organization. We care them and do whatever is possible to train
              and retain them. We maintain a policy of non-discrimination
              towards all employees and applicants for employment. All aspects
              of employment with CASTechnology Inc. are governed by merit,
              competence, suitability and qualifications, and will not be
              influenced in any manner by gender, age, race, color, religion,
              national origin or disability. <br />
              Want to be a part of our team? Send your resumé for future opening
              at{" "}
              <span className='text-text-secondary text-[14px] hover:underline cursor-pointer  font-semibold'>
                admin_hr@CASTechnology.ca
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Career;
