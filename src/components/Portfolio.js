import React from "react";
import portfolio1 from "../assets/images/portfolio1.png";
import portfolio2 from "../assets/images/portfolio2.png";
import portfolio3 from "../assets/images/portfolio3.png";
import portfolio4 from "../assets/images/portfolio4.png";
import portfolio5 from "../assets/images/portfolio5.png";
import portfolio6 from "../assets/images/portfolio6.png";

const Portfolio = () => {
  return (
    <div className="bg-black">
      <div className="text-light-black pt-12 md:pt-24 homepage-container mx-auto">
        <div className="flex flex-row justify-center text-center text-3xl md:text-4xl lg:text-[40px] uppercase text-light-green">
          <h1 classNmae="uppercase">portfolio</h1>
        </div>
        <div className="pt-12 md:pt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="image-container">
            <img src={portfolio1} alt="portfolio1" className="image" />
            <div className="overlay">
              <p className="project-name text-[16px] md:text-[24px] font-bold">
                Project Name
              </p>
              <p className="text-[12px] md:text-[16px] font-light">
                Proin dui quam, volutpat at diam ut.
              </p>
            </div>
          </div>
          <div className="image-container">
            <img src={portfolio2} alt="portfolio2" className="image" />
            <div className="overlay">
              <p className="project-name text-[16px] md:text-[24px] font-bold">
                Project Name
              </p>
              <p className="text-[12px] md:text-[16px] font-light">
                Proin dui quam, volutpat at diam ut.
              </p>
            </div>
          </div>
          <div className="image-container">
            <img src={portfolio3} alt="portfolio3" className="image" />
            <div className="overlay">
              <p className="project-name text-[16px] md:text-[24px] font-bold">
                Project Name
              </p>
              <p className="text-[12px] md:text-[16px] font-light">
                Proin dui quam, volutpat at diam ut.
              </p>
            </div>
          </div>
          <div className="image-container">
            <img src={portfolio4} alt="portfolio4" className="image" />
            <div className="overlay">
              <p className="project-name text-[16px] md:text-[24px] font-bold">
                Project Name
              </p>
              <p className="text-[12px] md:text-[16px] font-light">
                Proin dui quam, volutpat at diam ut.
              </p>
            </div>
          </div>
          <div className="image-container">
            <img src={portfolio5} alt="portfolio5" className="image" />
            <div className="overlay">
              <p className="project-name text-[16px] md:text-[24px] font-bold">
                Project Name
              </p>
              <p className="text-[12px] md:text-[16px] font-light">
                Proin dui quam, volutpat at diam ut.
              </p>
            </div>
          </div>
          <div className="image-container">
            <img src={portfolio6} alt="portfolio6" className="image" />
            <div className="overlay">
              <p className="project-name text-[16px] md:text-[24px] font-bold">
                Project Name
              </p>
              <p className="text-[12px] md:text-[16px] font-light">
                Proin dui quam, volutpat at diam ut.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
