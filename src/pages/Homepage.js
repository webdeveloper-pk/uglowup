import React, { useEffect } from "react";
import AOS from "aos";
import Hero from "../components/Hero";
import NavbarHomepage from "../components/NavbarHomepage";
import FooterHomepage from "../components/FooterHomepage";
import VideoSection from "../components/VideoSection";
import ClientSection from "../components/ClientSection";
import Contact from "../components/Contact";
import Portfolio from "../components/Portfolio";
import Services from "../components/Services";

const Homepage = () => {
  useEffect(() => {
    AOS.init({
      duration: 2500,
    });
  }, []);

  return (
    <>
      <div className="overflow-body">
        <div className="hero-bg">
          <NavbarHomepage />
          <Hero />
        </div>
        <VideoSection />
        <Services />
        <Portfolio />
        <ClientSection />
        <Contact />
        <FooterHomepage />
      </div>
    </>
  );
};

export default Homepage;
