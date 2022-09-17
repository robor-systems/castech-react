import { ErrorMessage, useField } from "formik";

const TextArea = ({ label, ...props }) => {
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
        <textarea
          autoComplete='off'
          className={`pt-[20px] pl-[20px] border-2 border-solid boder-[#EEF2F6] h-[136px] rounded-[6px] ${
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

export default TextArea;