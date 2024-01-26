import { RouteLinkEnum } from "@shared/constants/menu-list";
import { SERVICES_DATA } from "@shared/data/services.data";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";
import React from "react";
SERVICES_DATA;
const ServicesPage = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-5 md:gap-x-3 p-4 gap-y-5 place-items-center">
        {SERVICES_DATA.map((item) => (
          <div
            key={item.slug}
            className="p-5 border rounded-md flex flex-col items-center gap-y-5 max-w-[28rem] h-full transition-all duration-200 hover:shadow-xl">
            <img src={item.img} alt={item.slug} className="w-[150px] mt-8" />
            <h1 className="text-[1.3rem] font-semibold text-center w-[70%]">{item.title}</h1>
            <span className="text-center text-[.8rem] w-[80%]">{item.desciption}</span>
            <Link
              href={`${RouteLinkEnum.SERVICES}/${item.slug}`}
              className="group flex gap-2 items-center mb-8 mt-auto bg-white w-fit px-4 py-1 rounded-full cursor-pointer shadow-sm justify-self-end">
              <div
                className={`bg-warn-default group-hover:bg-success-default transition-all duration-300 text-white rounded-full`}>
                <ArrowForwardIcon />
              </div>
              <span
                className={`text-sm font-medium transition-all duration-300 group-hover:text-success-default`}>
                READ MORE
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
