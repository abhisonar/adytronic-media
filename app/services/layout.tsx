"use client";
import InfoLayoutComponent from "@layout/info-layout/info-layout.component";
import { SERVICES_DATA } from "@shared/data/services.data";
import { IBreadcrumbs } from "@ui/shared-resources/interfaces/IBreadcrumbs";
import UiBreadcrumbs from "@ui/ui-breadcrumbs/ui-breadcrumbs.component";
import { useParams } from "next/navigation";
import React, { Suspense, useState, useEffect } from "react";

const ServiceLayout = ({ children }: { children: React.ReactNode }) => {
  const param = useParams<{ slug: string }>();
  const [serviceTitle, setServiceTitle] = useState<string | null>(null);
  const [breadcrumbsData, setBreadcrumbsData] = useState<Array<IBreadcrumbs>>([]);

  useEffect(() => {
    initServiceTitle();
  }, [param]);

  const initBreadcrumbsData = (title: string) => {
    setBreadcrumbsData(
      !param?.slug
        ? [
            { label: "Home", link: "/" },
            { label: "Services", link: "/services" },
          ]
        : [
            { label: "Home", link: "/" },
            { label: "Services", link: "/services" },
            { label: `${title.substring(0, 20)}...`, link: `/services/${param?.slug}` },
          ]
    );
  };

  const initServiceTitle = () => {
    const title =
      !!param && param?.slug
        ? (SERVICES_DATA.find((item) => item.slug === param?.slug)?.title as string)
        : "Adytronic Services";
    setServiceTitle(title);
    initBreadcrumbsData(title);
  };

  return (
    <InfoLayoutComponent title={serviceTitle} breadcrumbs={breadcrumbsData}>
      {children}
    </InfoLayoutComponent>
  );
};

export default ServiceLayout;
