import React from "react";
import line from "../assets/images/line.png";
import logo from "../assets/images/header-logo.png";

const Footer = () => {
  return (
    <>
      <div className="">
        <div className="px-6 md:px-12 lg:px-16 homepage-container mx-auto">
          <div>
            <img src={line} alt="line" />
          </div>
          <div className="pt-12 pb-12 md:pb-20 flex items-center md:items-start flex-col md:flex-row justify-between gap-y-12 text-light-white text-xs">
            <div className="flex flex-col gap-y-8 text-center md:text-left">
              <div>
                <img src={logo} alt="logo" className="w-[180px] h-auto" />
              </div>
              <div>
                <p>Email: support@uglowup.com</p>
                <p>WhatsApp: +44 0123456789</p>
              </div>
              <ul>
                <li className="hover:text-light-green hover:cursor-pointer">
                  Contact Options
                </li>
                <li className="hover:text-light-green hover:cursor-pointer">
                  Privacy Policy
                </li>
                <li className="hover:text-light-green hover:cursor-pointer">
                  Cookies
                </li>
              </ul>
            </div>
            <div className="flex justify-center gap-x-8 md:gap-x-12 xl:gap-x-16 items-center md:mt-2">
              <a href="/">
                <i className="fa-brands fa-facebook-f text-[18px] md:text-[20px] xl:text-[24px] custom-hover"></i>
              </a>
              <a href="/">
                <i className="fa-brands fa-instagram text-[18px] md:text-[20px] xl:text-[24px] custom-hover"></i>
              </a>
              <a href="/">
                <i className="fa-brands fa-twitter text-[18px] md:text-[20px] xl:text-[24px] custom-hover"></i>
              </a>
              <a href="/">
                <i className="fa-brands fa-tiktok text-[18px] md:text-[20px] xl:text-[24px] custom-hover"></i>
              </a>
              <a href="/">
                <i className="fa-brands fa-youtube text-[18px] md:text-[20px] xl:text-[24px] custom-hover"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
