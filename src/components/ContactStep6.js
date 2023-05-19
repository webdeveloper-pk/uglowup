import React, { useState } from "react";

const ContactStep6 = ({ onNextStep, onBackStep, email, onPhoneChange }) => {
  const [phone, setPhone] = useState("");

  const handleChange = (event) => {
    const newPhone = event.target.value;
    setPhone(newPhone);
    onPhoneChange(newPhone); // Call the prop function with the new value
  };

  const handleNextStep = (event) => {
    onNextStep(event);
  };

  return (
    <div>
      <div
        className="text-light-white px-6 md:px-12 lg:px-16 pt-12 md:pt-4 lg:pt-12 xl:pt-20 pb-12 md:pb-24 homepage-container mx-auto text-center"
        id="contact"
      >
        <div className="flex flex-row justify-center text-center text-light-green text-3xl md:text-4xl lg:text-[40px] uppercase mb-12 md:mb-16">
          <h1 classNmae="uppercase">contact us</h1>
        </div>
        <div class="mb-6 h-1 w-full bg-lighter-white">
          <div class="h-1 bg-light-green w-[50%]"></div>
          <p className="text-left uppercase mt-2 text-lighter-white">
            progress
          </p>
        </div>
        <div className="text-center mt-12">
          <p className="w-[100%] mx-auto text-base md:text-[20px] text-light-white">
            <span className="pr-6">2.</span>Enter your contact no.{" "}
            <span className="pl-2">*</span>
          </p>
        </div>
        <form className="mt-10">
          <input
            placeholder="Contact no here"
            className="w-[100%] md:w-[350px] md:w-[400px] custom-input"
            value={phone}
            onChange={handleChange}
          />
          <div className="mt-8 md:mt-12 flex flex-col md:flex-row justify-center items-center gap-x-6 gap-y-6 ">
            <button
              onClick={(event) => onBackStep(event)}
              className="text-base md:text-[24px] text-light-green bg-transparent hover:bg-light-green hover:text-light-black border border-light-green uppercase rounded-full px-10 md:px-12 py-2.5 md:py-3"
            >
              back
            </button>
            <button
              onClick={(event) => handleNextStep(event)}
              className="text-base md:text-[24px] text-light-green bg-transparent hover:bg-light-green hover:text-light-black border border-light-green uppercase rounded-full px-10 md:px-12 py-2.5 md:py-3"
            >
              next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactStep6;
