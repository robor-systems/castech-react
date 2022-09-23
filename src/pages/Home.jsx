import React from "react";
import {
  Hero,
  Companies,
  Services,
  AboutUs,
  Career,
  BookConsultation,
} from "components/Views";

const Home = () => {
  return (
    <>
      <Hero />
      <Companies />
      <Services />
      <AboutUs />
      <Career />
      <BookConsultation />
    </>
  );
};

export default Home;
