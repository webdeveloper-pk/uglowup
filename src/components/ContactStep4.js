import React from "react";

const ContactStep4 = () => {
  return (
    <div>
      <div
        className="text-light-white px-6 md:px-12 lg:px-16 pt-12 md:pt-4 lg:pt-12 xl:pt-20 pb-12 md:pb-24 homepage-container mx-auto text-center"
        id="contact"
      >
        <div className="flex flex-row justify-center text-center text-light-green text-3xl md:text-4xl lg:text-[40px] uppercase mb-12 md:mb-16">
          <h1 classNmae="uppercase">contact us</h1>
        </div>
        <p className="w-[100%] md:w-[90%] xl:w-[60%] mx-auto text-base md:text-[18px] text-light-white">
          Thank you for getting in touch.
          <br />
          <div className="mt-2">
            We will review the form and get back to you shortly.
          </div>
        </p>
      </div>
    </div>
  );
};

export default ContactStep4;
