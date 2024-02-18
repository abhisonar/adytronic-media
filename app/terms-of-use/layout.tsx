import InfoLayoutComponent from "@layout/info-layout/info-layout.component";
import React from "react";

const TermsOfUseLayoutComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <InfoLayoutComponent
      title={"Terms of Use"}
      posterSrc="/assets/about-section/about-us.png"
      breadcrumbs={[
        { label: "Home", link: "/" },
        { label: "Terms of Use", link: "/terms-of-use" },
      ]}>
      {children}
    </InfoLayoutComponent>
  );
};

export default TermsOfUseLayoutComponent;
