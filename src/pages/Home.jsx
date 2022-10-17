import React, { useEffect } from "react";
import {
  Hero,
  Companies,
  Services,
  AboutUs,
  Career,
  BookConsultation,
} from "components/Views";
import { useLocation } from "react-router-dom";

const Home = () => {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const ele = document.getElementById(hash.split("#")[1]);
      ele.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [hash]);
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
