import { Container } from "components/Modules";
import { DOT_DECOR } from "constants/content.constant";
import React from "react";
import { Link } from "react-router-dom";

const Career = () => {
  return (
    <section
      id='career'
      className='my-20 sm:my-0 sm:py-20 pb-12 sm:pb-32 scroll-mt-24 sm:scroll-mt-10'
    >
      <Container className={"overflow-visible"}>
        <div className='flex gap-x-20 max-w-[1360px] items-stretch mx-auto md:flex-row flex-col-reverse gap-y-14'>
          <div className='h-full w-full flex-[1] relative '>
            <img
              height={350}
              src='https://firebasestorage.googleapis.com/v0/b/ass-2-c90ee.appspot.com/o/career.jpg?alt=media&token=f0952f09-b4a3-45d8-8b3d-800b0f81f615'
              srcSet='https://firebasestorage.googleapis.com/v0/b/ass-2-c90ee.appspot.com/o/career-small.jpg?alt=media&token=f6860dd2-a81b-4d9d-8c13-0385acbfcf48 650w, https://firebasestorage.googleapis.com/v0/b/ass-2-c90ee.appspot.com/o/career-medium.jpg?alt=media&token=c6fa6a40-65c7-4d7c-ae4e-045b2fe18086 768w, https://firebasestorage.googleapis.com/v0/b/ass-2-c90ee.appspot.com/o/career-large.jpg?alt=media&token=3c17c7dc-381c-4858-a04c-85ae19db4e0c 1440w'
              alt='Career'
              className='rounded-[40px] md:rounded-[80px] w-[100%] md:min-h-[350px] object-cover'
            />
            <img
              src={DOT_DECOR}
              height={92}
              width={194}
              alt='decor'
              className='absolute  bottom-[-55px] left-[-55px] -z-10'
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
              {/* <span className='text-text-secondary text-[14px] hover:underline cursor-pointer  font-semibold'> */}
              <Link
                to='#'
                className='text-text-secondary text-[14px] hover:underline cursor-pointer  font-semibold'
                onClick={(e) => {
                  window.location.href = "mailto:info@castechnology.ca";
                  e.preventDefault();
                }}
                target='_blank'
              >
                {" "}
                admin_hr@CASTechnology.ca
              </Link>
              {/* </span> */}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Career;
