import React, { useEffect, useState } from "react";
import logo from "../assets/images/header-logo.png";
import flag from "../assets/images/flag.png";
import french from "../assets/images/french.png";

const NavbarHomepage = () => {
  const [navbar, setNavbar] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("eng");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    closeDropdown();
  };

  useEffect(() => {
    const handleScroll = () => {
      if (document.documentElement.scrollTop > 100) {
        document.querySelector("header").classList.add("shrink");
      } else {
        document.querySelector("header").classList.remove("shrink");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <header className="hidden lg:block w-full z-[999] text-white px-6 md:px-12 lg:px-16 mx-auto">
        <div className="mx-auto lg:flex justify-between ">
          <div>
            <div className="flex flex-row justify-between items-center w-full">
              <div
                className="flex items-center uppercase text-white text-base xl:text-[22px] font-bold"
                style={{ fontWeight: "700" }}
                data-aos="fade-down"
              >
                <a href="/">
                  <div className="mr-4">
                    <img
                      src={logo}
                      alt="logo"
                      className="w-[100px] lg:w-[130px] xl:w-[140px] h-auto"
                    />
                  </div>
                </a>
              </div>
              <div className="lg:hidden">
                <button
                  className="pt-2 rounded-md outline-none focus:none"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-7"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      style={{ color: "#00ffb0" }}
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-7"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      style={{ color: "#00ffb0" }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex justify-center items-center pb-6 lg:pb-0 lg:block ${
                navbar ? "block" : "hidden"
              }`}
            >
              <div className="flex flex-col justify-center items-center h-[80vh] lg:h-[100%]">
                <ul
                  className="flex justify-center items-center gap-x-0 uppercase text-[14px]"
                  data-aos="fade-down"
                >
                  <li>
                    <a href="#/">
                      <div className="btn-test from-bottom">About</div>
                    </a>
                  </li>
                  <li>
                    <a href="#services">
                      <div className="btn-test from-bottom">service</div>
                    </a>
                  </li>
                  <li>
                    <a href="#contact">
                      <div className="btn-test from-bottom">contact</div>
                    </a>
                  </li>
                  <li className="border-r border-white h-[14px] pl-4"></li>
                  <li className="flex items-center justify-center gap-x-4 ml-8">
                    <div className="relative inline-block text-left">
                      <div>
                        <button
                          type="button"
                          className="flex justify-center items-center uppercase text-[14px]"
                          id="menu-button"
                          aria-expanded={isOpen ? "true" : "false"}
                          aria-haspopup="true"
                          onClick={toggleDropdown}
                        >
                          {selectedOption === "eng" ? (
                            <div className="flex justify-center items-center gap-x-4">
                              Eng <img src={flag} alt="flag" width="25px" />
                            </div>
                          ) : (
                            <div className="flex items-center gap-x-7">
                              FR
                              <img
                                src={french}
                                alt="flag"
                                width="25px"
                                className="rounded-full"
                              />
                            </div>
                          )}
                          <svg
                            className={`-mr-1 ml-2 h-5 w-5 ${
                              isOpen ? "transform rotate-180" : ""
                            }`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path fillRule="evenodd" d="M10 14l6-6H4z" />
                          </svg>
                        </button>
                      </div>
                      {isOpen && (
                        <div
                          className="origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100"
                          role="menu"
                          aria-orientation="vertical"
                          aria-labelledby="menu-button"
                          tabIndex="-1"
                        >
                          <div className="py-1" role="none">
                            <div
                              href="#"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                              role="menuitem"
                              tabIndex="-1"
                              id="menu-item-0"
                              onClick={() => handleOptionSelect("eng")}
                            >
                              <div className="flex items-center gap-x-4">
                                Eng <img src={flag} alt="flag" width="25px" />
                              </div>
                            </div>
                            <div
                              href="#"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                              role="menuitem"
                              tabIndex="-1"
                              id="menu-item-1"
                              onClick={() => handleOptionSelect("fr")}
                            >
                              <div className="flex items-center gap-x-7">
                                FR
                                <img
                                  src={french}
                                  alt="flag"
                                  width="25px"
                                  className="rounded-full"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* mobile nav */}

      <div className="">
        <nav className="block lg:hidden text-white px-6 md:px-12 lg:px-12 homepage-container mx-auto">
          <div className="mx-auto lg:flex justify-between lg:items-start pt-8 md:pt-8 pb-6">
            <div>
              <div className="flex flex-row justify-between items-center w-full">
                <div
                  className="flex items-center uppercase text-white text-base xl:text-[22px] font-bold"
                  style={{ fontWeight: "700" }}
                >
                  <a href="/">
                    <div className="mr-4">
                      <img
                        src={logo}
                        alt="logo"
                        className="w-[100px]  h-auto"
                      />
                    </div>
                  </a>
                </div>
                <div className="lg:hidden">
                  <button
                    className="pt-2 rounded-md outline-none focus:none"
                    onClick={() => setNavbar(!navbar)}
                  >
                    {navbar ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-8 h-7"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        style={{ color: "#00ffb0" }}
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-8 h-7"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        style={{ color: "#00ffb0" }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div
                className={`flex justify-center items-center lg:pb-0 lg:block ${
                  navbar ? "block" : "hidden"
                }`}
              >
                <div className="flex flex-col justify-center items-center h-[50vh] lg:h-[100%]">
                  <ul className="flex flex-col justify-center items-center gap-y-6 uppercase">
                    <li>
                      <a href="#/" onClick={() => setNavbar(!navbar)}>
                        About
                      </a>
                    </li>
                    <li>
                      <a href="#services" onClick={() => setNavbar(!navbar)}>
                        service
                      </a>
                    </li>
                    <li>
                      <a href="#contact" onClick={() => setNavbar(!navbar)}>
                        contact
                      </a>
                    </li>
                    <li className="border-b border-white w-[20px]"></li>
                    <li className="flex items-center justify-center gap-x-4">
                      <div className="relative inline-block text-left">
                        <div>
                          <button
                            type="button"
                            className="flex justify-center items-center uppercase text-[14px]"
                            id="menu-button"
                            aria-expanded={isOpen ? "true" : "false"}
                            aria-haspopup="true"
                            onClick={toggleDropdown}
                          >
                            {selectedOption === "eng" ? (
                              <div className="flex justify-center items-center gap-x-4">
                                Eng <img src={flag} alt="flag" width="25px" />
                              </div>
                            ) : (
                              <div className="flex items-center gap-x-7">
                                FR
                                <img
                                  src={french}
                                  alt="flag"
                                  width="25px"
                                  className="rounded-full"
                                />
                              </div>
                            )}
                            <svg
                              className={`-mr-1 ml-2 h-5 w-5 ${
                                isOpen ? "transform rotate-180" : ""
                              }`}
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path fillRule="evenodd" d="M10 14l6-6H4z" />
                            </svg>
                          </button>
                        </div>
                        {isOpen && (
                          <div
                            className="origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="menu-button"
                            tabIndex="-1"
                          >
                            <div className="py-1" role="none">
                              <div
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                role="menuitem"
                                tabIndex="-1"
                                id="menu-item-0"
                                onClick={() => handleOptionSelect("eng")}
                              >
                                <div className="flex items-center gap-x-4">
                                  Eng <img src={flag} alt="flag" width="25px" />
                                </div>
                              </div>
                              <div
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                role="menuitem"
                                tabIndex="-1"
                                id="menu-item-1"
                                onClick={() => handleOptionSelect("fr")}
                              >
                                <div className="flex items-center gap-x-7">
                                  FR
                                  <img
                                    src={french}
                                    alt="flag"
                                    width="25px"
                                    className="rounded-full"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavbarHomepage;
