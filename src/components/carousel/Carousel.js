import React from "react";
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";
import testimonial1 from "../../assets/images/testimonial1.png";
// import testimonial2 from "../../assets/images/testimonial2.png";

const SimpleSlider = () => {
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
    <div className="">
      <Slider {...settings}>
        <div className="px-4">
          <div className="md:pl-44 flex justify-end" data-aos="zoom-in">
            <img
              src={testimonial1}
              alt=""
              className="w-[100%] lg:w-[90%] h-[100%] object-cover"
            />
          </div>
          <div
            className="w-[100%] md:w-[70%]  lg:w-[60%] xl:w-[40%] text-light-white"
            data-aos="fade-right"
          >
            <p className="text-base md:text-[22px] -mt-[100px] md:-mt-[130px] mb-[20px] md:mb-[60px]">
              <p className="text-[50px] md:text-[70px]">“</p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              mollis turpis at euismod mole stienu particularus.{" "}
            </p>
          </div>
          <p
            className="text-lg md:text-[24px] text-light-white"
            data-aos="fade-right"
          >
            JOE BLOGGS |
            <span className="pl-2 text-light-green">CEO PUBLICIS</span>
          </p>
        </div>
        <div className="px-4">
          <div className="md:pl-44 flex justify-end" data-aos="zoom-in">
            <img
              src={testimonial1}
              alt=""
              className="w-[100%] lg:w-[90%] h-[100%]"
            />
          </div>
          <div
            className="w-[100%] md:w-[70%]  lg:w-[60%] xl:w-[40%] text-light-white"
            data-aos="fade-right"
          >
            <p className="text-base md:text-[22px] -mt-[100px] md:-mt-[130px] mb-[20px] md:mb-[60px]">
              <p className="text-[50px] md:text-[70px]">“</p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              mollis turpis at euismod mole stienu particularus.{" "}
            </p>
          </div>
          <p
            className="text-lg md:text-[24px] text-light-white"
            data-aos="fade-right"
          >
            JOE BLOGGS |
            <span className="pl-2 text-light-green">CEO PUBLICIS</span>
          </p>
        </div>
        <div className="px-4">
          <div className="md:pl-44 flex justify-end" data-aos="zoom-in">
            <img
              src={testimonial1}
              alt=""
              className="w-[100%] lg:w-[90%] h-[100%]"
            />
          </div>
          <div
            className="w-[100%] md:w-[70%]  lg:w-[60%] xl:w-[40%] text-light-white"
            data-aos="fade-right"
          >
            <p className="text-base md:text-[22px] -mt-[100px] md:-mt-[130px] mb-[20px] md:mb-[60px]">
              <p className="text-[50px] md:text-[70px]">“</p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              mollis turpis at euismod mole stienu particularus.{" "}
            </p>
          </div>
          <p
            className="text-lg md:text-[24px] text-light-white"
            data-aos="fade-right"
          >
            JOE BLOGGS |
            <span className="pl-2 text-light-green">CEO PUBLICIS</span>
          </p>
        </div>
        <div className="px-4">
          <div className="md:pl-44 flex justify-end" data-aos="zoom-in">
            <img
              src={testimonial1}
              alt=""
              className="w-[100%] lg:w-[90%] h-[100%]"
            />
          </div>
          <div
            className="w-[100%] md:w-[70%]  lg:w-[60%] xl:w-[40%] text-light-white"
            data-aos="fade-right"
          >
            <p className="text-base md:text-[22px] -mt-[100px] md:-mt-[130px] mb-[20px] md:mb-[60px]">
              <p className="text-[50px] md:text-[70px]">“</p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              mollis turpis at euismod mole stienu particularus.{" "}
            </p>
          </div>
          <p
            className="text-lg md:text-[24px] text-light-white"
            data-aos="fade-right"
          >
            JOE BLOGGS |
            <span className="pl-2 text-light-green">CEO PUBLICIS</span>
          </p>
        </div>
        <div className="px-4">
          <div className="md:pl-44 flex justify-end" data-aos="zoom-in">
            <img
              src={testimonial1}
              alt=""
              className="w-[100%] lg:w-[90%] h-[100%]"
            />
          </div>
          <div
            className="w-[100%] md:w-[70%]  lg:w-[60%] xl:w-[40%] text-light-white"
            data-aos="fade-right"
          >
            <p className="text-base md:text-[22px] -mt-[100px] md:-mt-[130px] mb-[20px] md:mb-[60px]">
              <p className="text-[50px] md:text-[70px]">“</p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              mollis turpis at euismod mole stienu particularus.{" "}
            </p>
          </div>
          <p
            className="text-lg md:text-[24px] text-light-white"
            data-aos="fade-right"
          >
            JOE BLOGGS |
            <span className="pl-2 text-light-green">CEO PUBLICIS</span>
          </p>
        </div>
      </Slider>
    </div>
  );
};

export default SimpleSlider;
