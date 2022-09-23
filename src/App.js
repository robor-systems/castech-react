import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import { Layout, ScrollToTop } from "components/Modules";
const App = () => {
  return (
    <>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/privacy-policy' element={<PrivacyPolicy />}></Route>
        </Routes>
      </Layout>
    </>
  );
};

export default App;
