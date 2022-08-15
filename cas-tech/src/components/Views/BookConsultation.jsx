import React from "react";

const BookConsultation = () => {
  return (
    <div className="w-full h-[260px] md:h-[241px] bg-[#EEF2F6] mt-[140px] flex flex-col items-center px-[40px]">
      <p className="text-[20px] mt-[56px] text-center">
        Quisque eget erat ornare, tempor dui eu, maximus leo.
        <br /> Donec sagittis urna sodales tincidunt.
      </p>
      <div className="mt-[26px] mb-[60px]">
        <button class="bg-[#EE2737] hover:bg-[#DF1D2D] text-white  py-[14px] rounded w-[269px] text-[20px]">
          Book Free Consultation
        </button>
      </div>
    </div>
  );
};

export default BookConsultation;
