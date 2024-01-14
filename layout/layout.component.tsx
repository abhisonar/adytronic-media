import React from "react";
import HeaderNav from "./header-nav/header-nav.component";
import PageLayout from "./page-layout/page-layout.component";
interface ILayout {
  children?: React.ReactNode;
}

const LayoutComponent: React.FC<ILayout> = ({ children }) => {
  return (
    <div className="app-layout bg-redishWhite">
      <HeaderNav />
      <PageLayout>{children}</PageLayout>
    </div>
  );
};
export default LayoutComponent;
