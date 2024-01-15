"use client";
import ServiceLoading from "@/app/services/loading";
import { SERVICES_DATA } from "@/shared/data/services.data";
import { IBreadcrumbs } from "@/ui/shared-resources/interfaces/IBreadcrumbs";
import UiBreadcrumbs from "@/ui/ui-breadcrumbs/ui-breadcrumbs.component";
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
    <div className="grid grid-cols-1">
      <div className="flex justify-center items-center py-7 px-10 md:justify-between">
        <div className="flex flex-col gap-y-3 items-center md:items-start">
          <h1 className="text-2xl font-bold text-center bg-white px-5 py-2 rounded-full shadow-md shadow-primary-lighter">
            {serviceTitle}
          </h1>
          <UiBreadcrumbs data={breadcrumbsData} />
        </div>
        <div className="w-[250px] hidden md:block overflow-hidden">
          <img
            src="/assets/services/service-header.svg"
            alt=""
            className="w-full h-full object-contain mix-blend-darken"
          />
        </div>
      </div>
      <div className="px-2 md:p-[30px] mt-2 rounded-t-3xl shadow-t-md bg-white">{children}</div>
    </div>
  );
};

export default ServiceLayout;
