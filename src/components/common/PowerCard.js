import React from "react";

const PowerCard = ({ src, width, title, dataAos }) => {
  return (
    <div
      className="w-full flex flex-col md:flex-row items-center z-50 gap-x-6 lg:gap-x-12 gap-y-4 power-wrapper px-3 py-5"
      data-aos={dataAos}
    >
      <div className="power-card w-[10%] rounded-xl w-[90px] md:w-[120px] lg:w-[120px] xl:w-[110px] h-[80px] flex justify-center items-center">
        <img src={src} alt="logo" width={width} height="auto" />
      </div>
      <div className="text-center md:text-left w-full">
        <p className="text-[18px] md:text-[18px] lg:text-[24px] font-bold font-black-ops">
          {title}
        </p>
      </div>
    </div>
  );
};

export default PowerCard;
