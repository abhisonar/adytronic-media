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
      className="flex flex-col items-center pb-10 px-5 pt-[10px] bg-white lg:pt-[200px]:px-[80px] gap-2 lg:px-[80px] lg:justify-between"
      id="services">
      <div className="flex flex-col items-center basis-1/2">
        <div className="flex flex-col items-center">
          <UiHeaderChip bulletsColor="warning">
            <span className="font-medium text-sm">What we can do for you?</span>
          </UiHeaderChip>
          <h1 className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-semibold mt-7 max-w-100px text-center">
            Service we can help you with
          </h1>
        </div>
        <div className="flex flex-col items-center mb-2">
          <p className="text-md mt-2 lg:text-1xl text-center">
            We specialize in providing superior digital services, tailored to meet your unique
            needs. From web development to online marketing, our commitment is to ensure you
            consistently receive the best digital solutions for your business success.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-3 mt-5 w-full lg:items-end basis-1/2 lg:mt-0">
        {serviceData.slice(0, 4).map((item, index) => (
          <ServiceCard
            color={item.color as string}
            description={item.desciption}
            img={item.img}
            index={index + 1}
            title={item.title}
            key={index}
            className="basis-[100%] md:basis-[47%]"
          />
        ))}
      </div>
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
  );
};

export default ServicesSection;
