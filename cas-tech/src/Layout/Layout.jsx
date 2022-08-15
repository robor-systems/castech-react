import React from "react";
import Companies from "../components/Views/Companies";
import Hero from "../components/Views/Hero";
import Navbar from "./Navbar";
const Layout = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Companies />
    </div>
  );
};

export default Layout;
