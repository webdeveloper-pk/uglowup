import React from "react";
import plus from "../assets/images/crossline.png";

const Services = () => {
  return (
    <div id="services">
      <div className="text-light-white px-6 md:px-12 lg:px-16 py-12 md:py-24 homepage-container mx-auto">
        <div className="flex items-start gap-x-8">
          <div className="hidden md:block" data-aos="fade-right">
            <img src={plus} alt="plus-icon" width="100px" />
          </div>
          {/* main div */}
          <div className="flex flex-col md:flex-row gap-y-12 justify-between items-start gap-x-8 md:gap-x-12 lg:gap-x-24">
            <div
              className="flex flex-col gap-y-4 uppercase text-[20px] lg:text-[30px]"
              data-aos="fade-right"
            >
              <a href="#innovations" className="sidebar-heading">
                innovations
              </a>
              <a href="#plateforms" className="sidebar-heading">
                plateforms
              </a>
              <a href="#stretgy" className="sidebar-heading">
                strategy
              </a>
              <a href="#guidance" className="sidebar-heading">
                guidance
              </a>
            </div>
            <div className="h-[500px] overflow-auto">
              <div id="innovations">
                <h1 className="uppercase text-[16px] lg:text-[22px] font-bold mb-6">
                  curiosity unleached
                </h1>
                <p className="font-light text-xs lg:text-base text-light-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam mollis turpis at euismod molestie. Etiam vitae euismod
                  nisi. Pellentesque a dolor diam. Nulla facilisi. Nullam neque
                  quam, tempor at nibh in, accumsan sollicitudin nisi.
                  Pellentesque nec sem at velit facilisis tristique. In hac
                  habitasse plated dictumst. Proin finibus tellus nulla, in
                  bibendum ex scelerisque sed. Etiam malesuada purus eget
                  commodo sagittis. Vestibulum semper fermentum tristique. Sed
                  malesuada ex eget fells eleifend rutrum. Integer augue elit,
                  consectetur a nisi vulputate, mattis ornare fells.
                </p>
                <p className="mt-6 ont-light text-xs lg:text-base text-light-white">
                  Maecenas porta id augue at cursus. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Etiam varius quam non ipsum
                  malesuada, eget mollis risus dapibus. Nullam ut malesuada dui,
                  ac aliquam nulla. Cras ultrices nisi at eros consectetur, in
                  rutrum metus interdum. Praesent aliquet ipsum ante, vitae
                  commodo arcu maximus ornare. Ut quis malesuada urna. Quisque
                  ac odio sed purus blandit fringilla. Etiam euismod tincidunt
                  libero sed laoreet. Praesent tempor ex nec ullamcorper
                  fringilla. Integer euismod tempus eleifend. Suspendisse
                  pulvinar pharetra metus, in condimentum sem. Nunc
                </p>
              </div>
              <div id="plateforms" className="mt-[80px] lg:mt-[150px]">
                <h1 className="uppercase text-[16px] lg:text-[22px] font-bold mb-6">
                  business outcomes, not potential react
                </h1>
                <p className="font-light text-xs lg:text-base text-light-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam mollis turpis at euismod molestie. Etiam vitae euismod
                  nisi. Pellentesque a dolor diam. Nulla facilisi. Nullam neque
                  quam, tempor at nibh in, accumsan sollicitudin nisi.
                  Pellentesque nec sem at velit facilisis tristique. In hac
                  habitasse plated dictumst. Proin finibus tellus nulla, in
                  bibendum ex scelerisque sed. Etiam malesuada purus eget
                  commodo sagittis. Vestibulum semper fermentum tristique. Sed
                  malesuada ex eget fells eleifend rutrum. Integer augue elit,
                  consectetur a nisi vulputate, mattis ornare fells.
                </p>
                <p className="mt-6 ont-light text-xs lg:text-base text-light-white">
                  Maecenas porta id augue at cursus. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Etiam varius quam non ipsum
                  malesuada, eget mollis risus dapibus. Nullam ut malesuada dui,
                  ac aliquam nulla. Cras ultrices nisi at eros consectetur, in
                  rutrum metus interdum. Praesent aliquet ipsum ante, vitae
                  commodo arcu maximus ornare. Ut quis malesuada urna. Quisque
                  ac odio sed purus blandit fringilla. Etiam euismod tincidunt
                  libero sed laoreet. Praesent tempor ex nec ullamcorper
                  fringilla. Integer euismod tempus eleifend. Suspendisse
                  pulvinar pharetra metus, in condimentum sem. Nunc
                </p>
              </div>
              <div id="stretgy" className="mt-[80px] lg:mt-[150px]">
                <h1 className="uppercase text-[16px] lg:text-[22px] font-bold mb-6">
                  curiosity unleached
                </h1>
                <p className="font-light text-xs lg:text-base text-light-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam mollis turpis at euismod molestie. Etiam vitae euismod
                  nisi. Pellentesque a dolor diam. Nulla facilisi. Nullam neque
                  quam, tempor at nibh in, accumsan sollicitudin nisi.
                  Pellentesque nec sem at velit facilisis tristique. In hac
                  habitasse plated dictumst. Proin finibus tellus nulla, in
                  bibendum ex scelerisque sed. Etiam malesuada purus eget
                  commodo sagittis. Vestibulum semper fermentum tristique. Sed
                  malesuada ex eget fells eleifend rutrum. Integer augue elit,
                  consectetur a nisi vulputate, mattis ornare fells.
                </p>
                <p className="mt-6 ont-light text-xs lg:text-base text-light-white">
                  Maecenas porta id augue at cursus. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Etiam varius quam non ipsum
                  malesuada, eget mollis risus dapibus. Nullam ut malesuada dui,
                  ac aliquam nulla. Cras ultrices nisi at eros consectetur, in
                  rutrum metus interdum. Praesent aliquet ipsum ante, vitae
                  commodo arcu maximus ornare. Ut quis malesuada urna. Quisque
                  ac odio sed purus blandit fringilla. Etiam euismod tincidunt
                  libero sed laoreet. Praesent tempor ex nec ullamcorper
                  fringilla. Integer euismod tempus eleifend. Suspendisse
                  pulvinar pharetra metus, in condimentum sem. Nunc
                </p>
              </div>
              <div id="guidance" className="mt-[80px] lg:mt-[150px]">
                <h1 className="uppercase text-[16px] lg:text-[22px] font-bold mb-6">
                  business outcomes, not potential react
                </h1>
                <p className="font-light text-xs lg:text-base text-light-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam mollis turpis at euismod molestie. Etiam vitae euismod
                  nisi. Pellentesque a dolor diam. Nulla facilisi. Nullam neque
                  quam, tempor at nibh in, accumsan sollicitudin nisi.
                  Pellentesque nec sem at velit facilisis tristique. In hac
                  habitasse plated dictumst. Proin finibus tellus nulla, in
                  bibendum ex scelerisque sed. Etiam malesuada purus eget
                  commodo sagittis. Vestibulum semper fermentum tristique. Sed
                  malesuada ex eget fells eleifend rutrum. Integer augue elit,
                  consectetur a nisi vulputate, mattis ornare fells.
                </p>
                <p className="mt-6 ont-light text-xs lg:text-base text-light-white">
                  Maecenas porta id augue at cursus. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Etiam varius quam non ipsum
                  malesuada, eget mollis risus dapibus. Nullam ut malesuada dui,
                  ac aliquam nulla. Cras ultrices nisi at eros consectetur, in
                  rutrum metus interdum. Praesent aliquet ipsum ante, vitae
                  commodo arcu maximus ornare. Ut quis malesuada urna. Quisque
                  ac odio sed purus blandit fringilla. Etiam euismod tincidunt
                  libero sed laoreet. Praesent tempor ex nec ullamcorper
                  fringilla. Integer euismod tempus eleifend. Suspendisse
                  pulvinar pharetra metus, in condimentum sem. Nunc
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
