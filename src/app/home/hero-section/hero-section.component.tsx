import React from "react";
import "./hero-section.component.scss";
import UiHeaderChip from "../../../ui/ui-header-chip/ui-header-chip.component";
import UiButton from "../../../ui/ui-button/ui-button.component";
import AlternateEmailRoundedIcon from "@mui/icons-material/AlternateEmailRounded";
import HeroImg1 from "../../../assets/hero-section/hero-1.png";
import HeroStartShape from "../../../assets/common/hero-star-shape.png";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { NavLink } from "react-router-dom";

const HeroSection = () => {
  const theme = useTheme();
  const matches_lg = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <div
      className={`bg-hero-pattern  flex flex-col pb-10 px-4 pt-[150px] h-full mt-[-100px] lg:pt-[200px]:px-[100px] lg:flex-row items-center justify-center lg:px-[80px] lg:justify-evenly`}>
      <div className="hero-left basis-2/4">
        <UiHeaderChip>
          <span className="font-medium">Best Solution we offer you</span>
        </UiHeaderChip>
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mt-7 max-w-100px">
          Make a good plan & grow your business
        </h1>
        <p className="text-md mt-7 lg:text-1xl">
          We have almost 12+ years of experience for helping consulting services and business
          solutions.
        </p>
        <div className="flex mt-5 gap-3">
          <UiButton
            variant="contained"
            clicked={() => {}}
            color="primary"
            size="large"
            className="rounded-full !px-3 !py-2 !drop-shadow-lg">
            <span className="text-sm">Download Brochure</span>
          </UiButton>
          <div className="flex items-center gap-3 p-1 cursor-pointer">
            <div className="p-3 shadow-md cursor-pointer bg-warn-default rounded-full flex justify-center items-center">
              <AlternateEmailRoundedIcon fontSize="medium" className="text-white" />
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
          <img src={HeroImg1} alt="hero-img-1" className="max-h-[500px]"></img>
          <img
            src={HeroStartShape}
            alt="hero-star-shape"
            className="absolute top-5 right-0 animation-bounce-smooth w-[90px]"></img>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
