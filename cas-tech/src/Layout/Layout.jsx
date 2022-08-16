import React from "react";
import Navbar from "./Navbar";
import Home from "../components/Views/Home";
import Footer from "./Footer";
const Layout = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};

export default Layout;
