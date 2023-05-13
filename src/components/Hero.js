import React from "react";
import plus from "../../src/assets/images/hero-plus.png";

const Hero = () => {
  return (
    <div className="px-6 pt-[20%] homepage-container mx-auto">
      <div className="mx-auto flex flex-row justify-center">
        <div className="flex flex-col text-center text-light-white">
          {/* <div className="bg-red-100 ml-[50px] lg:-ml-[50px] mx-auto md:mx-0">
            <img src={plus} alt="plus" width="40px" />
          </div> */}
          <h1 className="text-3xl md:text-[38px] lg:text-[50px] uppercase">
            <div className="flex justify-center md:justify-start md:-ml-[10px] lg:-ml-[40px] md:-mt-[10px] mb-4 md:mb-0">
              <img src={plus} alt="plus" width="30px" />
            </div>
            Reach everyone, <span className="text-light-green">everywhere</span>
          </h1>
          <p className="text-light-white mt-2 text-base lg:text-lg md:w-[70%] xl:w-[100%] mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            mollis turpis at euismod molestie.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
