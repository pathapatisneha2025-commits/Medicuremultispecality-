import React from "react";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import WhyChooseUs from "./components/WhyChooseUs";
import Specialties from "./components/Spezalization";
import AboutSection from "./components/AboutSection";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import ServicesPage from "./pages/ServicesPage";
import ObstetricsPage from "./pages/ObstarticCare";
import GynecologyPage from "./pages/Gynacologyst";
import FertilityPage from "./pages/FertilityPage";
import LaparoscopicPage from "./pages/LaproscopicPage";
import SonologyPage from "./pages/SonologyPage";

function App() {
  
 return (
    <Router>
      {/* COMMON NAVBAR */}
      <Navbar />

      <Routes>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
            <HeroSection/>
      <WhyChooseUs/>
      <Specialties/>
      <AboutSection/>
      <CtaSection/>
            </>
          }
        />

        OTHER PAGES
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/blog" element={<BlogPage/>} />
        <Route path="/services" element={<ServicesPage />} />
                <Route path="/contact" element={<ContactPage/>} />
                <Route path="/obstetrics" element={<ObstetricsPage/>} />
                <Route path="/gynecology" element={<GynecologyPage/>} />
                <Route path="/fertility" element={<FertilityPage/>} />
                <Route path="/laparoscopic" element={<LaparoscopicPage/>} />
                <Route path="/sonology" element={<SonologyPage/>} />

        

      </Routes>
<Footer/>
      {/* COMMON FOOTER */}
    </Router>
  );
}


export default App;
