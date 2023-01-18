import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import {Layout, ScrollToTop} from "components/Modules";
import JobDetails from "./components/JobDetails";

const App = () => {
    return (
        <>
            <ScrollToTop/>
            <Layout>
                <Routes>
                    <Route path='/' element={<Home/>}></Route>
                    <Route path='/contact' element={<Contact/>}></Route>
                    <Route path='/privacy-policy' element={<PrivacyPolicy/>}></Route>
                    <Route path='/jobs/:slug' element={<JobDetails/>}></Route>
                </Routes>
            </Layout>
        </>
    );
};

export default App;
