import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="text-light-white px-6 md:px-12 lg:px-16 py-12 md:py-24 homepage-container mx-auto text-center">
        <div className="flex flex-row justify-center text-center text-light-green text-3xl md:text-4xl lg:text-[40px] uppercase mb-12 md:mb-16">
          <h1 classNmae="uppercase">contact us</h1>
        </div>
        <p className="w-[100%] md:w-[90%] xl:w-[60%] mx-auto text-sm md:text-base md:text-[18px] text-light-white">
          We’d love to chat to you and see how we can help so we've built this
          from the help make sure we're putting you in contact with the right
          team.Don't worry - it will only ake around 4 minutes of your time.
          (We'ev timed it).
        </p>
        <div className="mt-8 md:mt-12">
          <button className="text-lg md:text-[24px] text-light-green bg-transparent hover:bg-light-green hover:text-light-black border border-light-green uppercase rounded-full px-10 md:px-12 py-2.5 md:py-3">
            start
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
