
import { Routes, Route } from "react-router-dom";
import Home from "./components/Views/Home";
import Contact from "./components/Views/Contact";
import Navbar from "./Layout/Navbar";
import Footer from "./Layout/Footer";
import PrivacyPolicy from "./components/Views/PrivacyPolicy";
import ScrollToTop from "./components/ScrollToTop";
const App = () => {
  return (
    <div className="flex flex-col min-h-[100vh]">
      <ScrollToTop />
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );

};

export default App;
