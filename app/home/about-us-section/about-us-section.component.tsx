"use client";

import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import UiHeaderChip from "@ui/ui-header-chip/ui-header-chip.component";
import UiButton from "@ui/ui-button/ui-button.component";
import Image from "next/image";

const AboutUsSection = () => {
  const theme = useTheme();
  const matches_lg = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <div
      className="flex  flex-col pb-10 px-4 pt-[10px] h-full bg-white lg:pt-[200px]:px-[100px] lg:flex-row-reverse items-center justify-center lg:px-[80px] lg:justify-between"
      id="about-us">
      <div className="hero-left basis-2/4">
        <UiHeaderChip bulletsColor="success">
          <span className="font-medium">Who we are?</span>
        </UiHeaderChip>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mt-7 max-w-100px">
          We are dynamic team of creative design and development
        </h1>
        <p className="text-md mt-7 lg:text-1xl">
          We have almost 12+ years of experience for helping consulting services and business
          solutions and best protect.
        </p>
        <div className="flex mt-5 gap-3">
          <UiButton
            variant="contained"
            clicked={() => {}}
            color="primary"
            size="large"
            className="rounded-full !px-10 !py-3 !drop-shadow-lg">
            <span className="text-md">About Us</span>
          </UiButton>
        </div>
      </div>
      <div
        className="hero-right mt-10"
        data-aos={matches_lg ? "fade-right" : "zoom-in-up"}
        data-aos-duration="2000">
        <div className="relative">
          <img
            src={"/assets/about-section/about-img.jpg"}
            alt="hero-img-1"
            className="max-h-[450px]"
          />
          <img
            src={"/assets/about-section/about-shape-1.png"}
            alt="about-star-shape"
            className="absolute top-5 left-0 animation-bounce-smooth w-[90px]"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
