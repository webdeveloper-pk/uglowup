import React from "react";

const ContactStep2 = ({ onNextStep }) => {
  return (
    <div>
      <div
        className="text-light-white px-6 md:px-12 lg:px-16 pt-12 md:pt-4 lg:pt-12 xl:pt-20 pb-12 md:pb-24 homepage-container mx-auto text-center"
        id="contact"
      >
        <div className="flex flex-row justify-center text-center text-light-green text-3xl md:text-4xl lg:text-[40px] uppercase mb-12 md:mb-16">
          <h1 classNmae="uppercase">contact us</h1>
        </div>
        <div className="text-center">
          <p className="w-[100%] mx-auto text-base md:text-[20px] text-light-white">
            <span className="pr-6">1.</span>Befor we get started, Let's give
            your message a subject line. <span className="pl-2">*</span>
          </p>
          <p className="text-lighter-white text-xs md:text-sm mt-3 mb-8">
            In 100 characters or less, how can we best help you?
          </p>
        </div>
        <form className="mt-3">
          <input
            placeholder="Start typing"
            className="w-[100%] md:w-[350px] md:w-[400px] custom-input"
          />
          <div className="mt-8 md:mt-12">
            <button
              onClick={onNextStep}
              className="text-base md:text-[24px] text-light-green bg-transparent hover:bg-light-green hover:text-light-black border border-light-green uppercase rounded-full px-10 md:px-12 py-2.5 md:py-3"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactStep2;
