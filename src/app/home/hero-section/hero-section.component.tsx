import React from "react";
import "./hero-section.component.scss";
import UiHeaderChip from "../../../ui/ui-header-chip/ui-header-chip.component";
import UiButton from "../../../ui/ui-button/ui-button.component";
import AlternateEmailRoundedIcon from "@mui/icons-material/AlternateEmailRounded";

const HeroSection = () => {
  return (
    <div
      className={`bg-hero-pattern  flex flex-col px-4 pt-[150px] h-[100vh] mt-[-100px] lg:pt-[200px]:px-[100px]`}>
      <div className="hero-left">
        <UiHeaderChip>
          <span className="font-medium">Best Solution we offer you</span>
        </UiHeaderChip>
        <h1 className="text-3xl lg:text-4xl font-semibold mt-7">
          Make a good plan & grow your business
        </h1>
        <p className="text-md mt-7">
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
      <div className="hero-right"></div>
    </div>
  );
};

export default HeroSection;
