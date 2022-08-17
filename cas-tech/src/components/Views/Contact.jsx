import React, { useState } from "react";
import { Formik, Form } from "formik";
import { TextField, TextArea } from "../TextField";
import * as Yup from "yup";
const successIcon =
  "https://robor-team.s3.eu-central-1.amazonaws.com/cas-tech/icons/success-icon.svg";
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
    <div className="pt-[170px]  bg-[#EEF2F6] flex flex-col items-center ">
      <p className="text-[14px] text-text-secondary font-semibold">
        {" "}
        HOW CAN WE HELP?
      </p>
      <h1 className="text-[32px] font-semibold">Book Free Consultation</h1>
      <p className="text-[14px] text-text-primary pb-[48px] text-center">
        Whether you have questions about features, demos or trials, we are here
        <br />
        to help you meet your business needs.
      </p>
      <div className="px-[40px]  w-[547px] h-[681px] bg-[#FFFFFF] rounded-[8px] border-[#EEF2F6] mb-[99px]">
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
                <TextField name="name" label={"Name"} text="text" />
                <TextField name="email" label={"Email"} text="email" />
                <TextField name="subject" label={"Subject"} text="text" />
                <TextArea name="message" label={"Message"} text="text" />

                <button
                  type="submit"
                  className="mt-[32px] bg-[#EE2737] hover:bg-[#DF1D2D] text-white  py-[10px] rounded w-[183px] text-[18px]"
                >
                  Send Message
                </button>
                <div className="flex mt-[16px] ">
                  {success && (
                    <>
                      <img src={successIcon} />
                      <p className="ml-[8px] ">
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
    </div>
  );
};

export default Contact;
