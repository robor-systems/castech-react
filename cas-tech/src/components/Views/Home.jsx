import React from "react";
import Companies from "./Companies";
import Hero from "./Hero";
import Services from "./Services";
import AboutUs from "./AboutUs";
import Career from "./Career";
const Home = () => {
  return (
    <div>
      <Hero />
      <Companies />
      <Services />
      <AboutUs />
      <Career />
    </div>
  );
};

export default Home;
