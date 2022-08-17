import { Routes, Route } from "react-router-dom";
import Home from "./components/Views/Home";
import Contact from "./components/Views/Contact";
import Navbar from "./Layout/Navbar";
import Footer from "./Layout/Footer";
const App = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
