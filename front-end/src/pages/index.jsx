import React from "react";
import Seo from "../components/SEO";

import HeroSection from "../components/landingPage/HeroSection";
import LandAcknowledgement from "../components/landingPage/LandAcknowledgement";
import AboutSection from "../components/landingPage/AboutSection";
import ServicesSection from "../components/landingPage/ServicesSection";




const IndexPage = () => (
    <>
      <Seo title="Home"/>
      <HeroSection/>
      <LandAcknowledgement/>
      <AboutSection/>
      <ServicesSection/>
    </>
);

export default IndexPage
