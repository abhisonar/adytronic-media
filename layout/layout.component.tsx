"use client";
import React, { useEffect, useState } from "react";
import HeaderNav from "./header-nav/header-nav.component";
import PageLayout from "./page-layout/page-layout.component";
import UiLoader from "@ui/ui-loader/ui-loader";
import FooterComponent from "@layout/footer/footer.component";
interface ILayout {
  children?: React.ReactNode;
}

const LayoutComponent: React.FC<ILayout> = ({ children }) => {
  const [layoutLoading, setLayoutLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLayoutLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {layoutLoading ? (
        <UiLoader />
      ) : (
        <div className="app-layout bg-redishWhite min-h-screen relative">
          <HeaderNav />
          <PageLayout>{children}</PageLayout>
          <FooterComponent />
          <a
            href="https://wa.link/taujgs"
            target="_blank"
            className="fixed bottom-4 left-4 w-[50px] h-[50px] z-10">
            <img src="/assets/whatsapp_icon.webp"></img>
          </a>
        </div>
      )}
    </>
  );
};
export default LayoutComponent;
