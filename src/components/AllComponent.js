import React from "react";
import VideoSection from "./VideoSection";
import Services from "./Services";
import ClientSection from "./ClientSection";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import FooterHomepage from "./FooterHomepage";
import Portfolio from "./Portfolio";

const AllComponent = ({ selectedLanguage }) => {
  return (
    <div>
      <VideoSection selectedLanguage={selectedLanguage} />
      <Services selectedLanguage={selectedLanguage} />
      <Portfolio selectedLanguage={selectedLanguage} />
      <ClientSection selectedLanguage={selectedLanguage} />
      <Testimonials selectedLanguage={selectedLanguage} />
      <Contact selectedLanguage={selectedLanguage} />
      <FooterHomepage selectedLanguage={selectedLanguage} />
    </div>
  );
};

export default AllComponent;
