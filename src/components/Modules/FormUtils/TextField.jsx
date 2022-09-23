import React from "react";
import { ErrorMessage, useField } from "formik";
const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div>
      <div className='flex flex-col'>
        <label
          htmlFor={field.name}
          className='uppercase text-[14px] text-text-primary mt-[32px]'
        >
          {label}
        </label>
        <input
          autoComplete='off'
          className={` px-5 focus-visible:outline-none transition-all ease-in-out duration-[.15s]     focus:border-[#80bdff] focus:shadow-[0px_0px_0px_0.2rem_rgb(0,123,255,0.25)] border-2 border-solid boder-[#EEF2F6] h-[56px] rounded-[6px] ${
            meta.touched && meta.error && "border-[#EE2737] bg-[#F8E9E9]"
          }`}
          {...field}
          {...props}
        />
        <ErrorMessage
          name={field.name}
          component='div'
          className='text-[14px] text-text-secondary'
        />
      </div>
    </div>
  );
};

export default TextField;
