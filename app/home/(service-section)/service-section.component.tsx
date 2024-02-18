"use client";

import React, { useEffect, useState } from "react";
import UiHeaderChip from "@ui/ui-header-chip/ui-header-chip.component";
import UiButton from "@ui/ui-button/ui-button.component";
import { IServiceData, SERVICES_DATA } from "@shared/data/services.data";
import Link from "next/link";
import { RouteLinkEnum } from "@shared/constants/menu-list";
import ServiceCard from "@shared/components/feature/ServiceCard/service-card.component";
import { groupBy } from "lodash";

const ServicesSection = () => {
  const [serviceData, setserviceData] = useState<IServiceData[]>(SERVICES_DATA);
  const [groupedServiceData, setGroupedServiceData] = useState<
    { category: string; services: IServiceData[] }[]
  >([]);

  useEffect(() => {
    getGroupedData();
  }, [serviceData]);

  function getGroupedData() {
    setGroupedServiceData([]);
    const data = groupBy(serviceData, "category");

    Object.keys(data).forEach((key, index) => {
      setGroupedServiceData((prev) => [...prev, { category: key, services: data[key] }]);
    });
  }
  return (
    <div
      className="flex flex-col pb-10 px-5 pt-[10px] bg-white lg:pt-[200px]:px-[80px] lg:flex-row gap-2 lg:px-[80px] lg:justify-between"
      id="services">
      <div className="flex flex-col justify-between basis-1/2">
        <div className="flex flex-col">
          <UiHeaderChip bulletsColor="warning">
            <span className="font-medium text-sm">What we can do for you?</span>
          </UiHeaderChip>
          <h1 className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-semibold mt-7 max-w-100px">
            Service we can help you with
          </h1>
        </div>
        <div className="flex flex-col">
          <p className="text-md mt-2 lg:text-1xl">
            We specialize in providing superior digital services, tailored to meet your unique
            needs. From web development to online marketing, our commitment is to ensure you
            consistently receive the best digital solutions for your business success.
          </p>
          <Link href={RouteLinkEnum.SERVICES}>
            <UiButton
              variant="contained"
              clicked={() => {}}
              color="primary"
              size="large"
              className="!rounded-2xl !mt-4 !px-10 !py-3 !drop-shadow-lg w-fit">
              <span className="text-md">See All Services</span>
            </UiButton>
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-3 mt-5 w-full lg:items-end basis-1/2 lg:mt-0">
        {groupedServiceData.map((item, index) => (
          <ServiceCard
            color={item.services[0].color as string}
            description={item.services[0].desciption}
            img={item.services[0].img}
            index={index + 1}
            title={item.services[0].title}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
