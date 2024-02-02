import React from "react";
import HeroSection from "./(hero-section)/hero-section.component";
import AboutUsSection from "./(about-us-section)/about-us-section.component";
import ServicesSection from "./(service-section)/service-section.component";
import PortfolioSection from "./(portfolio)/portfolio.component";
import TestimonialSection from "./(testimonial)/testimonial-section.component";
import ClientComponent from "@app/home/(clients)/clients.component";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutUsSection />
      <ServicesSection />
      {/* <PortfolioSection /> */}
      <ClientComponent />
      <TestimonialSection />
    </>
  );
};

export default HomePage;
