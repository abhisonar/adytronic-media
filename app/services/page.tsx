"use client";
import { IServiceData, SERVICES_DATA } from "@shared/data/services.data";
import React, { useEffect, useState } from "react";
import ServiceCard from "@shared/components/feature/ServiceCard/service-card.component";
import { groupBy } from "lodash";
import UiHeaderChip from "@ui/ui-header-chip/ui-header-chip.component";
SERVICES_DATA;
const ServicesPage = () => {
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
    <div>
      <div className="flex flex-col justify-center items-center pt-4 md:p-4">
        {groupedServiceData.map((item, index) => (
          <div key={item.category} className="flex flex-col justify-center items-center">
            <UiHeaderChip bulletsColor="primary" bulletSize="medium">
              <span className="text-xl  lg:text-2xl font-bold">{item.category}</span>
            </UiHeaderChip>
            <div className="grid grid-cols-1 md:grid-cols-2  lg:gap-x-5 md:gap-x-3 p-4 gap-y-5 place-items-center">
              {item.services.map((item, index) => (
                <ServiceCard
                  color={item.color as string}
                  description={item.desciption}
                  img={item.img}
                  index={index}
                  title={item.title}
                  key={index}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
