"use client";
import { IServiceData, SERVICES_DATA } from "@shared/data/services.data";
import React, { useEffect, useState } from "react";
import ServiceCard from "@shared/components/feature/ServiceCard/service-card.component";
import { ServiceCategoryEnums } from "@shared/enums/service-category.enums";
import { divide, groupBy } from "lodash";
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
                // <div
                //   key={item.slug}
                //   className="p-5 border rounded-md flex flex-col items-center gap-y-5 max-w-[28rem] h-full transition-all duration-200 hover:shadow-xl">
                //   <img src={item.img} alt={item.slug} className="w-[150px] mt-8" />
                //   <h1 className="text-[1.3rem] font-semibold text-center w-[70%]">{item.title}</h1>
                //   <span className="text-center text-[.8rem] w-[80%]">{item.desciption}</span>
                //   <Link
                //     href={`${RouteLinkEnum.SERVICES}/${item.slug}`}
                //     className="group flex gap-2 items-center mb-8 mt-auto bg-white w-fit px-4 py-1 rounded-full cursor-pointer shadow-sm justify-self-end">
                //     <div
                //       className={`bg-warn-default group-hover:bg-success-default transition-all duration-300 text-white rounded-full`}>
                //       <ArrowForwardIcon />
                //     </div>
                //     <span
                //       className={`text-sm font-medium transition-all duration-300 group-hover:text-success-default`}>
                //       READ MORE
                //     </span>
                //   </Link>
                // </div>
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
