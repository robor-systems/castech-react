import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import { Layout, ScrollToTop } from "components/Modules";
import Careers from './pages/Careers';
import JobDetails from './pages/JobDetails';
import Apply from './pages/Apply';

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/privacy-policy' element={<PrivacyPolicy />}></Route>
          <Route path="/careers" element={<Careers />} />
        <Route path="/careers/:slug" element={<JobDetails />} />
        <Route path="/careers/:slug/apply" element={<Apply />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
