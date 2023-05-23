import React, { useEffect } from "react";
import AOS from "aos";
import NavbarHomepage from "../components/NavbarHomepage";

const Homepage = () => {
  useEffect(() => {
    AOS.init({
      duration: 2500,
    });
  }, []);

  return (
    <>
      <div className="overflow-body">
        <NavbarHomepage />
      </div>
    </>
  );
};

export default Homepage;
