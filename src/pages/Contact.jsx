import React, { useState } from "react";
import { Formik, Form } from "formik";
import { Container, TextArea, TextField } from "components/Modules";
import { FiCheckCircle } from "react-icons/fi";
import * as Yup from "yup";

const Contact = () => {
  const validate = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string()
      .required("Required")
      .email("Email must be formatted correctly."),
    subject: Yup.string().required("Required"),
    message: Yup.string().required("Required"),
  });

  const [success, setSuccess] = useState();
  return (
    <div className='bg-[#EEF2F6] flex flex-col  md:items-center py-20'>
      <Container className='px-[20px]'>
        <div className='text-center  pb-[48px] '>
          <p className='text-[14px] text-text-secondary font-semibold'>
            {" "}
            HOW CAN WE HELP?
          </p>
          <h1 className='text-[24px] md:text-[32px] font-semibold'>
            Book Free Consultation
          </h1>
          <p className='text-[14px] text-text-primary'>
            Whether you have questions about features, demos or trials, we are
            here
            <br />
            to help you meet your business needs.
          </p>
        </div>

        <div className='px-[20px] md:px-[40px]  pb-[30px]  md:w-[547px]  bg-[#FFFFFF] rounded-[8px] border-[#EEF2F6] '>
          <Formik
            initialValues={{
              name: "",
              email: "",
              subject: "",
              message: "",
            }}
            validationSchema={validate}
            onSubmit={(values) => {
              console.log(values);
              if (values) {
                setSuccess(true);
              } else {
                setSuccess(false);
              }
            }}
          >
            {(formik) => (
              <div>
                <Form>
                  <TextField
                    name='name'
                    label={"Name"}
                    text='text'
                    placeholder='John Doe'
                  />
                  <TextField
                    name='email'
                    label={"Email"}
                    text='email'
                    placeholder='john.doe@gmail.com'
                  />
                  <TextField
                    name='subject'
                    label={"Subject"}
                    text='text'
                    placeholder='How can we help you?'
                  />
                  <TextArea
                    name='message'
                    label={"Message"}
                    text='text'
                    placeholder='Hey! I need help with....'
                  />

                  <button
                    type='submit'
                    className='mt-[32px] bg-[#EE2737] hover:bg-[#DF1D2D] text-white  py-[14px] rounded sm:w-[183px] text-[18px]  w-full'
                  >
                    Send Message
                  </button>
                  <div className='flex mt-[16px] items-center'>
                    {success && (
                      <>
                        <FiCheckCircle className='text-base w-6 flex-none' />
                        <p className='ml-[8px]  sm:text-base text-sm'>
                          Message Sent! Thank you, we will get back to you.
                        </p>
                      </>
                    )}{" "}
                  </div>
                </Form>
              </div>
            )}
          </Formik>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
