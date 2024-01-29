"use client";

import React from "react";
import UiHeaderChip from "@ui/ui-header-chip/ui-header-chip.component";
import UiButton from "@ui/ui-button/ui-button.component";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { SERVICES_DATA } from "@shared/data/services.data";
import Link from "next/link";
import { RouteLinkEnum } from "@shared/constants/menu-list";
import { warn } from "console";
import ServiceCard from "@shared/components/feature/ServiceCard/service-card.component";

const ServicesSection = () => {
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
            We&apos;ll ensure you always get the best Digital Service
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
        {SERVICES_DATA.slice(0, 2).map((item, index) => (
          <ServiceCard
            color={item.color as string}
            description={item.desciption}
            img={item.img}
            index={index + 1}
            title={item.title}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
