import React from "react";
import UiHeaderChip from "../../../ui/ui-header-chip/ui-header-chip.component";
import UiButton from "../../../ui/ui-button/ui-button.component";
import { SERVICES_DATA } from "../../../shared/data/services.data";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const ServicesSection = () => {
  return (
    <div
      className="flex flex-col mt-12 pb-10 px-5 pt-[10px] lg:pt-[200px]:px-[80px] lg:flex-row gap-2 lg:px-[80px] lg:justify-between"
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
            We'll ensure you always get the best Digital Service
          </p>
          <UiButton
            variant="contained"
            clicked={() => {}}
            color="primary"
            size="large"
            className="!rounded-2xl !mt-4 !px-10 !py-3 !drop-shadow-lg w-fit">
            <span className="text-md">See All Services</span>
          </UiButton>
        </div>
      </div>
      <div className="flex flex-col gap-3 mt-5 w-full lg:items-end basis-1/2 lg:mt-0">
        {SERVICES_DATA.map((item, index) => (
          <div
            className={`flex flex-col gap-2 p-3 justify-center w-full  ${item.bgColor} rounded-xl max-w-[700px] lg:h-[180px] lg:p-8 lg:justify-center `}
            key={index}>
            <div className="flex justify-between">
              <span className="font-semibold text-md lg:text-lg">{item.title}</span>
              <div className={` ${item.iconBgColor} p-3 rounded-full text-white text-md`}>
                {item.icon}
              </div>
            </div>
            <div className="flex gap-2 items-center bg-white w-fit px-4 py-1 rounded-full cursor-pointer">
              <div className={` ${item.iconBgColor} text-white rounded-full`}>
                <ArrowForwardIcon />
              </div>
              <span
                className={`text-sm font-medium transition-all duration-300 hover:${item.textColor}`}>
                READ MORE
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
