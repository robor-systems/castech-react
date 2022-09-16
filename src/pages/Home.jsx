import React from "react";
import {
  Hero,
  Companies,
  Services,
  AboutUs,
  BookConsultation,
  Career,
} from "@/views";

const Home = () => {
  return (
    <div>
      <Hero />
      <Companies />
      <Services />
      <AboutUs />
      <Career />
      <BookConsultation />
    </div>
  );
};

export default Home;
