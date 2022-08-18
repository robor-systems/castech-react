import React from "react";
import { useNavigate } from "react-router-dom";
const BookConsultation = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-[300px] md:h-[241px] bg-[#EEF2F6] mt-[140px] flex flex-col items-center px-[30px] md:px-[40px]">
      <p className="text-[20px] mt-[56px] text-center">
        Quisque eget erat ornare, tempor dui eu, maximus leo.
        <br /> Donec sagittis urna sodales tincidunt.
      </p>
      <div className="mt-[26px] md:mb-[60px]">
        <button
          onClick={() => navigate("/contact")}
          className="bg-[#EE2737] hover:bg-[#DF1D2D] text-white  py-[14px] rounded w-[269px] text-[20px]"
        >
          Book Free Consultation
        </button>
      </div>
    </div>
  );
};

export default BookConsultation;
