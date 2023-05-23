import React from "react";
import adidas from "../assets/images/adidas.png";
import allsops from "../assets/images/allsops.png";
import burger from "../assets/images/burger.png";
import axa from "../assets/images/axa.png";
import carrefour from "../assets/images/carrefour.png";
import castrol from "../assets/images/castrol.png";
import emirates from "../assets/images/emirates.png";
import chrysler from "../assets/images/chrysler.png";
import du from "../assets/images/du.png";
import garnier from "../assets/images/garnier.png";
import hsbc from "../assets/images/hsbc.png";
import lacoste from "../assets/images/lacoste.png";
import hugo from "../assets/images/hugo.png";
import jeep from "../assets/images/jeep.png";
import lg from "../assets/images/lg.png";
import lux from "../assets/images/lux.png";
import siemens from "../assets/images/siemens.png";
import nestle from "../assets/images/nestle.png";
import power from "../assets/images/power.png";
import snickers from "../assets/images/snickers.png";

const ClientSection = ({ selectedLanguage }) => {
  return (
    <div className="bg-light-white">
      <div className="text-light-black px-6 md:px-12 lg:px-16 py-12 md:py-24 homepage-container mx-auto">
        <div className="flex flex-row justify-center text-center text-3xl md:text-4xl lg:text-[40px] uppercase">
          <h1 classNmae="uppercase">
            {selectedLanguage === "eng"
              ? "We’re grateful to work with"
              : "Nous sommes reconnaissants de travailler avec"}
            <br />
            <div className="mt-0 md:mt-2">
              <em className="animated">
                {selectedLanguage === "eng"
                  ? "incredible clients."
                  : "clients incroyables."}
              </em>
            </div>
          </h1>
        </div>
        <div
          className="py-12 md:py-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-8 lg:gap-x-12 gap-y-12 lg:gap-y-16"
          data-aos="zoom-out"
        >
          <div className="power-card-wrapper flex justify-center items-center">
            <img src={adidas} alt="adidas" className="w-[90px] h-auto" />
          </div>
          <div className="power-card-wrapper flex justify-center items-center">
            <img src={allsops} alt="allsops" className="w-[90px] h-auto" />
          </div>
          <div className="power-card-wrapper flex justify-center items-center">
            <img src={burger} alt="burger" className="w-[85px] h-auto" />
          </div>
          <div className="power-card-wrapper flex justify-center items-center">
            <img src={axa} alt="axa" className="w-[85px] h-auto" />
          </div>
          <div className="power-card-wrapper flex justify-center items-center">
            <img src={carrefour} alt="carrefour" className="w-[100px] h-auto" />
          </div>
          {/*  */}
          <div className="power-card-wrapper flex justify-center items-center">
            <img src={castrol} alt="castrol" className="w-[100px] h-auto" />
          </div>
          <div className="power-card-wrapper flex justify-center items-center">
            <img src={emirates} alt="emirates" className="w-[100px] h-auto" />
          </div>
          <div className="power-card-wrapper flex justify-center items-center">
            <img src={chrysler} alt="chrysler" className="w-[100px] h-auto" />
          </div>
          <div className="power-card-wrapper flex justify-center items-center">
            <img src={du} alt="du" className="w-[80px] h-auto" />
          </div>
          <div className="power-card-wrapper flex justify-center items-center">
            <img src={garnier} alt="garnier" className="w-[100px] h-auto" />
          </div>
          {/*  */}
          <div className="power-card-wrapper flex justify-center items-center">
            <img src={hsbc} alt="hsbc" className="w-[90px] h-auto" />
          </div>
          <div className="power-card-wrapper flex justify-center items-center">
            <img src={lacoste} alt="lacoste" className="w-[90px] h-auto" />
          </div>
          <div className="power-card-wrapper flex justify-center items-center">
            <img src={hugo} alt="hugo" className="w-[90px] h-auto" />
          </div>
          <div className="power-card-wrapper flex justify-center items-center">
            <img src={jeep} alt="jeep" className="w-[90px] h-auto" />
          </div>
          <div className="power-card-wrapper flex justify-center items-center">
            <img src={lg} alt="lg" className="w-[90px] h-auto" />
          </div>
          {/*  */}
          <div className="power-card-wrapper flex justify-center items-center">
            <img src={lux} alt="lux" className="w-[90px] h-auto" />
          </div>
          <div className="power-card-wrapper flex justify-center items-center">
            <img src={siemens} alt="siemens" className="w-[90px] h-auto" />
          </div>
          <div className="power-card-wrapper flex justify-center items-center">
            <img src={nestle} alt="nestle" className="w-[90px] h-auto" />
          </div>
          <div className="power-card-wrapper flex justify-center items-center">
            <img src={power} alt="power" className="w-[70px] h-auto" />
          </div>
          <div className="power-card-wrapper flex justify-center items-center">
            <img src={snickers} alt="snickers" className="w-[100px] h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientSection;
