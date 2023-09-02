import React, { useEffect } from "react";
import HomeSection from "./components/Home/HomeSection";
import NavBar from "./components/Navbar/NavBar";
import IntroSection from "./components/Intro/IntroSection";
import AdsSection from "./components/Ads/AdsSection";
import ProjectSection from "./components/Project/ProjectSection";

import Aos from "aos";
import "aos/dist/aos.css";
import AdsCategorySection from "./components/AdsCategory/AdsCategorySection";
import UniqueSection from "./components/UniqueViewer/UniqueSection";
import InnovationSection from "./components/InnovationSlider/InnovationSection";
import Footer from "./components/Footer/Footer";
import InnovationData from "./components/InnovationSlider/InnovationData";
import TwoColumnSection from "./components/TwoColumn/TwoColumnSection";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 700,
      delay: 100,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <BrowserRouter>
      <NavBar />
      <HomeSection />
      <IntroSection />
      <AdsSection />
      <ProjectSection />
      <AdsCategorySection />
      <UniqueSection />
      <InnovationSection slides={InnovationData}/>
      <TwoColumnSection/>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
