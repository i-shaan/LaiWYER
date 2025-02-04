import React from "react";
import Info from "./info";
// import Navbar from "./navbar";
import Services from "./Services";
import News from "./News";
import Customers from "./customers";
const Landing = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Info />
      <Services/>
      <News/>
      <Customers />
    </>
  );
};

export default Landing;
