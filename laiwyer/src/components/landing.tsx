import React from "react";
// import Info from "./info";
import Navbar from "./Navbar";
import Services from "./Services/Services";
import News from "./News";
import LandingInput from "./landingInput";
import Customers from "./customers";
const Landing = () => {
  return (
    <>
      <Navbar />
      {/* <Info /> */}
      <LandingInput/>
      <Services/>
      <Customers/>
      <News/>
    </>
  );
};

export default Landing;
