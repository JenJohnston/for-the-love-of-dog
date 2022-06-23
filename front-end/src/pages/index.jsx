import React from "react";
import Seo from "../components/SEO";

import HeroSection from "../components/landingPage/HeroSection";
import LandAcknowledgement from "../components/landingPage/LandAcknowledgement";




const IndexPage = () => (
    <>
      <Seo title="Home"/>
      <HeroSection/>
      <LandAcknowledgement/>
      
    </>
);

export default IndexPage
