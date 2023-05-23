import React from "react";
import SimpleSlider from "./carousel/Carousel";

const Testimonials = ({ selectedLanguage }) => {
  return (
    <div className="">
      <div className="px-6 md:px-12 lg:px-16 py-12 md:py-24 homepage-container mx-auto">
        <div className="flex flex-row justify-center text-center text-3xl md:text-4xl lg:text-[40px] uppercase text-light-green mb-16 md:mb-24">
          <h1 classNmae="uppercase">
            {selectedLanguage === "eng"
              ? "what people say about us"
              : "Que disent les gens à notre propos"}
          </h1>
        </div>
        <div>
          <SimpleSlider selectedLanguage={selectedLanguage} />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
