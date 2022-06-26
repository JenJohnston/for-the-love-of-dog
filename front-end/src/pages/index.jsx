import React from "react";
import Seo from "../components/SEO";

import HeroSection from "../components/landingPage/HeroSection";
import LandAcknowledgement from "../components/landingPage/LandAcknowledgement";
import AboutSection from "../components/landingPage/AboutSection";
import ServicesSection from "../components/landingPage/ServicesSection";
import FeaturedBlogs from "../components/landingPage/FeaturedBlogs";
import TopCategories from "../components/landingPage/TopCategories";




const IndexPage = () => (
    <>
      <Seo title="Home"/>
      <HeroSection/>
      <LandAcknowledgement/>
      <AboutSection/>
      <ServicesSection/>
      <FeaturedBlogs/>
      <TopCategories/>
    </>
);

export default IndexPage
