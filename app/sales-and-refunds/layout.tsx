import InfoLayoutComponent from "@layout/info-layout/info-layout.component";
import React from "react";

const SalesAndRefundsLayoutComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <InfoLayoutComponent
      title={"Sales and Refunds"}
      posterSrc="/assets/about-section/about-us.png"
      breadcrumbs={[
        { label: "Home", link: "/" },
        { label: "Sales and Refunds", link: "/terms-of-use" },
      ]}>
      {children}
    </InfoLayoutComponent>
  );
};

export default SalesAndRefundsLayoutComponent;
