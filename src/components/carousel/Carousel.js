import React from "react";
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";
import testimonial1 from "../../assets/images/testimonial1.png";
// import testimonial2 from "../../assets/images/testimonial2.png";

const SimpleSlider = ({ selectedLanguage }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        <div className="md:px-4">
          <div
            className="md:pl-48 xl:pl-60 lg:pr-4 xl:pr-6 flex justify-end items-center"
            data-aos="zoom-in"
          >
            <img
              src={testimonial1}
              alt="testimonial"
              className="w-[100%] lg:w-[90%] h-[100%] md:max-h-[530px] lg:max-h-[370px] xl:max-h-[530px] 2xl:max-h-[700px] object-cover"
            />
          </div>
          <div
            className="w-[100%] md:w-[70%]  lg:w-[60%] xl:w-[40%] text-light-white lg:ml-8"
            data-aos="fade-right"
          >
            <p className="text-base md:text-[22px] -mt-[100px] md:-mt-[130px] mb-[20px] md:mb-[60px]">
              <p className="text-[50px] md:text-[70px]">“</p>
              {selectedLanguage === "eng"
                ? "This team has exceeded expectations, transforming our marketing strategy and delivering remarkable results. Their understanding of our audience is exceptional."
                : "Cette équipe a dépassé les attentes, transformant notre stratégie marketing et livrant des résultats remarquables. Leur compréhension de notre public est exceptionnelle."}
            </p>
          </div>
          <p className="text-lg md:text-[24px] text-light-white lg:ml-8">
            <span className="text-light-green uppercase">Snickers</span>
          </p>
        </div>
        <div className="md:px-4">
          <div
            className="md:pl-48 xl:pl-60 lg:pr-4 xl:pr-6 flex justify-end items-center"
            data-aos="zoom-in"
          >
            <img
              src={testimonial1}
              alt="testimonial"
              className="w-[100%] lg:w-[90%] h-[100%] md:max-h-[530px] lg:max-h-[370px] xl:max-h-[530px] 2xl:max-h-[700px] object-cover"
            />
          </div>
          <div
            className="w-[100%] md:w-[70%]  lg:w-[60%] xl:w-[40%] text-light-white lg:ml-8"
            data-aos="fade-right"
          >
            <p className="text-base md:text-[22px] -mt-[100px] md:-mt-[130px] mb-[20px] md:mb-[60px]">
              <p className="text-[50px] md:text-[70px]">“</p>
              {selectedLanguage === "eng"
                ? "This team has exceeded expectations, transforming our marketing strategy and delivering remarkable results. Their understanding of our audience is exceptional."
                : "Cette équipe a dépassé les attentes, transformant notre stratégie marketing et livrant des résultats remarquables. Leur compréhension de notre public est exceptionnelle."}
            </p>
          </div>
          <p className="text-lg md:text-[24px] text-light-white lg:ml-8">
            <span className="text-light-green uppercase">Snickers</span>
          </p>
        </div>
        <div className="md:px-4">
          <div
            className="md:pl-48 xl:pl-60 lg:pr-4 xl:pr-6 flex justify-end items-center"
            data-aos="zoom-in"
          >
            <img
              src={testimonial1}
              alt="testimonial"
              className="w-[100%] lg:w-[90%] h-[100%] md:max-h-[530px] lg:max-h-[370px] xl:max-h-[530px] 2xl:max-h-[700px] object-cover"
            />
          </div>
          <div
            className="w-[100%] md:w-[70%]  lg:w-[60%] xl:w-[40%] text-light-white lg:ml-8"
            data-aos="fade-right"
          >
            <p className="text-base md:text-[22px] -mt-[100px] md:-mt-[130px] mb-[20px] md:mb-[60px]">
              <p className="text-[50px] md:text-[70px]">“</p>
              {selectedLanguage === "eng"
                ? "This team has exceeded expectations, transforming our marketing strategy and delivering remarkable results. Their understanding of our audience is exceptional."
                : "Cette équipe a dépassé les attentes, transformant notre stratégie marketing et livrant des résultats remarquables. Leur compréhension de notre public est exceptionnelle."}
            </p>
          </div>
          <p className="text-lg md:text-[24px] text-light-white lg:ml-8">
            <span className="text-light-green uppercase">Snickers</span>
          </p>
        </div>
        <div className="md:px-4">
          <div
            className="md:pl-48 xl:pl-60 lg:pr-4 xl:pr-6 flex justify-end items-center"
            data-aos="zoom-in"
          >
            <img
              src={testimonial1}
              alt="testimonial"
              className="w-[100%] lg:w-[90%] h-[100%] md:max-h-[530px] lg:max-h-[370px] xl:max-h-[530px] 2xl:max-h-[700px] object-cover"
            />
          </div>
          <div
            className="w-[100%] md:w-[70%]  lg:w-[60%] xl:w-[40%] text-light-white lg:ml-8"
            data-aos="fade-right"
          >
            <p className="text-base md:text-[22px] -mt-[100px] md:-mt-[130px] mb-[20px] md:mb-[60px]">
              <p className="text-[50px] md:text-[70px]">“</p>
              {selectedLanguage === "eng"
                ? "This team has exceeded expectations, transforming our marketing strategy and delivering remarkable results. Their understanding of our audience is exceptional."
                : "Cette équipe a dépassé les attentes, transformant notre stratégie marketing et livrant des résultats remarquables. Leur compréhension de notre public est exceptionnelle."}
            </p>
          </div>
          <p className="text-lg md:text-[24px] text-light-white lg:ml-8">
            <span className="text-light-green uppercase">Snickers</span>
          </p>
        </div>
        <div className="md:px-4">
          <div
            className="md:pl-48 xl:pl-60 lg:pr-4 xl:pr-6 flex justify-end items-center"
            data-aos="zoom-in"
          >
            <img
              src={testimonial1}
              alt="testimonial"
              className="w-[100%] lg:w-[90%] h-[100%] md:max-h-[530px] lg:max-h-[370px] xl:max-h-[530px] 2xl:max-h-[700px] object-cover"
            />
          </div>
          <div
            className="w-[100%] md:w-[70%]  lg:w-[60%] xl:w-[40%] text-light-white lg:ml-8"
            data-aos="fade-right"
          >
            <p className="text-base md:text-[22px] -mt-[100px] md:-mt-[130px] mb-[20px] md:mb-[60px]">
              <p className="text-[50px] md:text-[70px]">“</p>
              {selectedLanguage === "eng"
                ? "This team has exceeded expectations, transforming our marketing strategy and delivering remarkable results. Their understanding of our audience is exceptional."
                : "Cette équipe a dépassé les attentes, transformant notre stratégie marketing et livrant des résultats remarquables. Leur compréhension de notre public est exceptionnelle."}
            </p>
          </div>
          <p className="text-lg md:text-[24px] text-light-white lg:ml-8">
            <span className="text-light-green uppercase">Snickers</span>
          </p>
        </div>
      </Slider>
    </div>
  );
};

export default SimpleSlider;
