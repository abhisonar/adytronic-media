import React from "react";
import HeaderNav from "./header-nav/header-nav.component";
import PageLayout from "./page-layout/page-layout.component";
import { Outlet, redirect } from "react-router-dom";

const LayoutComponent = () => {
  return (
    <div className="app-layout">
      <HeaderNav />
      <PageLayout>
        <Outlet />
      </PageLayout>
    </div>
  );
};

export default LayoutComponent;
