"use client";

import React from "react";
import "./hero-section.component.scss";
import UiHeaderChip from "@ui/ui-header-chip/ui-header-chip.component";
import UiButton from "@ui/ui-button/ui-button.component";
import AlternateEmailRoundedIcon from "@mui/icons-material/AlternateEmailRounded";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";

const HeroSection = () => {
  const theme = useTheme();
  const matches_lg = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <div
      className={`bg-hero-pattern  flex flex-col pb-10 px-4 pt-[150px] h-full mt-[-100px] lg:pt-[200px]:px-[100px] lg:flex-row items-center justify-center lg:px-[80px] lg:justify-evenly`}>
      <div className="hero-left basis-2/4">
        <UiHeaderChip>
          <span className="text-sm">Best Solution we offer you</span>
        </UiHeaderChip>
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold mt-7 max-w-100px">
          Transforming Visions into Digital Victories!
        </h1>
        <p className="text-md mt-7 lg:text-1xl">
          We help you achieve digital success by crafting customized strategies and leveraging our
          expertise to elevate your brand&apos;s online presence, drive traffic, and boost
          conversions.
        </p>
        <div className="flex flex-col items-center mt-5 gap-3 sm:flex-row">
          <UiButton
            variant="contained"
            clicked={() => {}}
            color="primary"
            size="large"
            className="rounded-full !px-3 !py-3 !drop-shadow-lg !w-fit">
            <span className="text-sm">Download Brochure</span>
          </UiButton>
          <div className="flex items-center gap-3 p-1 cursor-pointer">
            <div className="p-3 shadow-md cursor-pointer bg-warn-default rounded-full flex justify-center items-center">
              <AlternateEmailRoundedIcon fontSize="small" className="text-white" />
            </div>
            <p className="font-medium">Contact Us</p>
          </div>
        </div>
      </div>
      <div
        className="hero-right mt-12"
        data-aos={matches_lg ? "fade-left" : "zoom-in-up"}
        data-aos-duration="2000">
        <div className="relative">
          <img
            src={"/assets/hero-section/hero-1.png"}
            alt="hero-img-1"
            className="max-h-[500px]"></img>
          <img
            src={"/assets/common/hero-star-shape.png"}
            alt="hero-star-shape"
            className="absolute top-5 right-0 animation-bounce-smooth w-[90px]"></img>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
