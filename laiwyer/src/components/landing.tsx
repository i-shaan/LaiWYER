import React from "react";
import Info from "./info";
import Navbar from "./Navbar";
import Services from "./Services/Services";
import LandingInput from "./landingInput";
const Landing = () => {
  return (
    <>
      <Navbar />
      {/* <Info /> */}
      <LandingInput/>
      <Services/>

    </>
  );
};

export default Landing;
