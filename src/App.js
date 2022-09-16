import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ScrollToTop from "./components/ScrollToTop";
import { Layout } from "@/modules";
const App = () => {
  return (
    <div className='flex flex-col min-h-[100vh]'>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/privacy-policy' element={<PrivacyPolicy />}></Route>
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
