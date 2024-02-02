"use client";
import React, { useState } from "react";
import CustomizeSwiper from "@shared/components/CustomizeSwiper/customize-swiper";
import { CLIENTS_LOGO } from "@shared/data/testimonial.data";
import UiHeaderChip from "@ui/ui-header-chip/ui-header-chip.component";
import { IImageView } from "@shared/interfaces/base/IImageView";

const ClientComponent = () => {
  const [clientLogoData, setClientLogoData] = useState(CLIENTS_LOGO);

  const clientLogoTemplate = (data: IImageView) => {
    return (
      <img
        src={data?.src}
        alt={data?.title}
        className="w-full h-full object-contain aspect-[3/2] mix-blend-color-burn"
      />
    );
  };

  return (
    <div className="w-full h-full flex flex-col gap-3 py-3 bg-white">
      <UiHeaderChip bulletsColor="success" bulletSize="small" clasName="!self-center">
        <span className="text-sm font-semibold">Business Work with Us</span>
      </UiHeaderChip>
      <div className="h-full md:h-[80px] lg:h-[110px]">
        <CustomizeSwiper data={clientLogoData} templateFun={clientLogoTemplate} />
      </div>
    </div>
  );
};

export default ClientComponent;
