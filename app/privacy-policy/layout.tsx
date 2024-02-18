import InfoLayoutComponent from "@layout/info-layout/info-layout.component";
import React from "react";

const PrivacyPolicyLayoutComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <InfoLayoutComponent
      title={"Privacy Policy"}
      posterSrc="/assets/about-section/about-us.png"
      breadcrumbs={[
        { label: "Home", link: "/" },
        { label: "Privacy Policy", link: "/privacy-policy" },
      ]}>
      {children}
    </InfoLayoutComponent>
  );
};

export default PrivacyPolicyLayoutComponent;
