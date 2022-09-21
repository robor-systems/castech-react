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
      <div className='flex flex-col text-center max-w-6xl mx-auto'>
        <p className='text-text-primary font-semibold mb-10'>
          Trusted by top-tier companies
        </p>
        {/* Slider for <768px screen */}
        <div className='md:hidden block'>
          <Slider {...settings}>
            {COMPANIES.map(({ alt, logo }, i) => (
              <div className='!flex justify-center mt-[32px]  '>
                <img src={logo} alt={alt} />
              </div>
            ))}
          </Slider>
        </div>

        {/* Static view for laptop screens */}
        <div className='md:grid grid-cols-3 gap-y-8 justify-center   lg:grid-cols-5 hidden  '>
          {COMPANIES.map(({ alt, logo }, i) => (
            <div className='justify-self-center'>
              <img src={logo} alt={alt} />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Companies;
