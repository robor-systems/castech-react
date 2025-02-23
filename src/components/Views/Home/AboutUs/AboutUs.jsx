import { Container } from "components/Modules";
import { DOT_DECOR } from "constants/content.constant";
import React from "react";

const AboutUs = () => {
  return (
    <section
      name="about"
      id="about-us"
      className="my-20 sm:my-0 sm:py-20 scroll-mt-24 sm:scroll-mt-10"
    >
      <Container>
        <div className="max-w-[1360px] mx-auto">
          <div className="flex flex-col md:flex-row  gap-x-20 gap-y-14">
            <div className="flex-[1] ">
              <div className="text-text-secondary text-[14px] font-semibold ">
                WHO WE ARE
              </div>
              <h1 className="text-[24px] md:text-[32px] leading-[2rem] md:leading-[2.5rem] font-semibold my-3">
                We are technology-oriented solution provider & consultants
              </h1>
              <div className="">
                <p className="text-text-primary text-[14px] leading-[1.5rem] ">
                  An IT Consulting and solution provider company. It is based in
                  Regina, Canada and has specialized in Software Development
                  Projects, Telecom Solutions Integrator (CRM & Billing) and
                  Data Warehousing. Waazes is fully committed to provide
                  first class IT and consultancy services around the globe.
                </p>
                <p className="text-text-primary mt-[8px] text-[14px] leading-[1.5rem]">
                  {" "}
                  We have an experienced team of consultants dedicated to
                  matching your requirements with the best available technical
                  solutions. We specialize in Telecommunication IT solutions,
                  Data Warehousing, Databases and software development and can
                  advise and conduct feasibility, analysis and design.{" "}
                </p>
                <p className="text-text-primary mt-[8px] text-[14px] leading-[1.5rem]">
                  {" "}
                  We have an immense focus on documentation and business
                  processes involve in automations and have the capacity to
                  follow multiple software development methodologies BUT remain
                  consistent in one project.
                </p>
              </div>
            </div>
            <div className="relative h-fit flex-[1] w-full">
              <img
                height={350}
                src="https://robor-team.s3.eu-central-1.amazonaws.com/cas-tech/home/team.jpg"
                srcSet="https://robor-team.s3.eu-central-1.amazonaws.com/cas-tech/home/team-small.jpg 650w, https://robor-team.s3.eu-central-1.amazonaws.com/cas-tech/home/team-large.jpg 1440w"
                alt="groupimage"
                className="rounded-[40px] w-[100%] md:rounded-[80px] md:min-h-[350px] object-cover"
              />
              <div className="absolute right-[-55px] bottom-[-55px] -z-10">
                <img src={DOT_DECOR} alt="dots" height={92} width={194} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutUs;
