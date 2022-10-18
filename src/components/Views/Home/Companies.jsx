import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { COMPANIES } from "constants/content.constant";
import { Container } from "components/Modules";

const Companies = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",
    appendDots: (dots) => <div>{dots}</div>,
  };
  return (
    <Container className='my-28 sm:my-0 sm:py-20'>
      <div className='flex flex-col text-center max-w-[1360px] mx-auto'>
        <p className='text-text-primary font-semibold mb-10'>
          Trusted by top-tier companies
        </p>
        {/* Slider for < 768px screen */}
        <div className='md:hidden block'>
          <Slider {...settings}>
            {COMPANIES.map(({ alt, logo }, i) => (
              <div
                className='!flex justify-center mt-[32px] items-center'
                key={i}
              >
                <img src={logo} alt={alt} height={41} width={160} />
              </div>
            ))}
          </Slider>
        </div>

        {/* Static view for laptop screens */}
        <div className='md:grid grid-cols-3 gap-y-8 justify-center  items-center  lg:grid-cols-5 hidden  '>
          {COMPANIES.map(({ alt, logo }, i) => (
            <div className='justify-self-center w-full' key={i}>
              <img
                src={logo}
                alt={alt}
                height={41}
                width={160}
                className='mx-auto object-contain'
              />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Companies;
