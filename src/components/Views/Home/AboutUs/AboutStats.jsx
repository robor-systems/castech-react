import React from "react";

const AboutStats = () => {
  const stats = [
    {
      stat: "100+",
      title: "IT Professionals",
    },
    {
      stat: "12+",
      title: "Years of Experience",
    },
    {
      stat: "24+",
      title: "Projects Delivered",
    },
    {
      stat: "20+",
      title: "Global Clients",
    },
  ];
  return (
    <div className='py-10   rounded-[8px] bg-[#EE2737] mt-[100px] '>
      <div className='grid grid-cols-2 md:grid-cols-4 sm:text-start text-center justify-center items-center max-w-4xl mx-auto'>
        {stats.map(({ stat, title }, i) => (
          <div className=' justify-self-center' key={i}>
            <p className='text-[39px] text-[#FFFFFF]'>{stat}</p>
            <p className='text-[12px] sm:text-[14px] text-[#FFFFFF]'>{title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutStats;
