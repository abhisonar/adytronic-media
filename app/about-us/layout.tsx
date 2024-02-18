import InfoLayoutComponent from "@layout/info-layout/info-layout.component";
import React from "react";

const AboutUsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <InfoLayoutComponent
      title={"About Us"}
      posterSrc="/assets/about-section/about-us.png"
      breadcrumbs={[
        { label: "Home", link: "/" },
        { label: "About Us", link: "/about-us" },
      ]}>
      {children}
    </InfoLayoutComponent>
  );
};

export default AboutUsLayout;
