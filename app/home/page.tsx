import React from "react";
import HeroSection from "./(hero-section)/hero-section.component";
import AboutUsSection from "./(about-us-section)/about-us-section.component";
import ServicesSection from "./(service-section)/service-section.component";
import PortfolioSection from "./(portfolio)/portfolio.component";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutUsSection />
      <ServicesSection />
      <PortfolioSection />
    </>
  );
};

export default HomePage;