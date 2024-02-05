"use client";

import CustomizeSwiper from "@shared/components/CustomizeSwiper/customize-swiper";
import { ITestimonial, TESTIMONIAL_DATA } from "@shared/data/testimonial.data";
import UiHeaderChip from "@ui/ui-header-chip/ui-header-chip.component";
import React, { useState } from "react";
import { FreeMode, Pagination } from "swiper/modules";
import { SwiperOptions } from "swiper/types";
import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded";

const TestimonialSection = () => {
  const [testimonialData, setTestimonialData] = useState<ITestimonial[]>(TESTIMONIAL_DATA);

  const [swiperConfig, setSwiperConfig] = useState<SwiperOptions>({
    grabCursor: true,
    slidesPerView: 1,
    freeMode: true,
    pagination: true,
    centeredSlides: true,
    spaceBetween: "5px",
    modules: [Pagination, FreeMode],
    breakpoints: {
      550: {
        slidesPerView: 2,
        spaceBetween: 10,
        centeredSlides: false,
      },
      750: {
        slidesPerView: 3,
        centeredSlides: false,
      },
      950: {
        slidesPerView: 3,
        centeredSlides: false,
      },
      1250: {
        slidesPerView: 4,
        centeredSlides: false,
      },
    },
  });

  const testimonialTemplate = (data: ITestimonial) => {
    return (
      <div className="flex flex-col h-[26rem] max-w-[20rem] w-full items-center">
        <div className="bg-white  basis-[80%] p-3 pt-5 rounded-lg flex flex-col justify-start items-center gap-y-6">
          <div className="p-3 bg-primary-lighter rounded-full">
            <FormatQuoteRoundedIcon fontSize="medium" className="text-primary-default" />
          </div>
          <span className="text-sm text-center px-5">{data.comment}</span>
        </div>
        <div className="w-[100px] -mt-[35px]">
          <img
            src={data.img}
            alt={data.name}
            className=" rounded-full aspect-[3/2] object-contain "
          />
        </div>
        <h3 className="font-semibold text-sm mt-2">{data.name}</h3>
      </div>
    );
  };

  return (
    <div className="w-full h-full flex flex-col mt-5 p-4 gap-y-3  items-center">
      <UiHeaderChip>
        <span className="text-sm font-semibold">Testimonial</span>
      </UiHeaderChip>
      <h1 className="text-2xl font-semibold">Trusted By Clients</h1>
      <div className="w-full h-full">
        <CustomizeSwiper
          data={testimonialData}
          templateFun={testimonialTemplate}
          config={swiperConfig}
        />
      </div>
    </div>
  );
};

export default TestimonialSection;
