import PortfolioCardComponent from "@shared/components/feature/PortfolioCard/portfolio-card.component";
import ProfileCardComponent from "@shared/components/feature/PortfolioCard/portfolio-card.component";
import { PORTFOLIO_DATA } from "@shared/data/portfolio.data";
import UiHeaderChip from "@ui/ui-header-chip/ui-header-chip.component";
import React from "react";

const PortfolioSection = () => {
  return (
    <div className="bg-portfolio-pattern bg-center bg-no-repeat bg-cover min-h-[100px] flex flex-col items-center pt-5 gap-3">
      <UiHeaderChip bulletsColor="success">
        <span className="text-sm">Check our Work</span>
      </UiHeaderChip>
      <h1 className="text-2xl font-semibold text-center">Some of our recent works</h1>
      <div className="grid grid-cols-1 gap-y-2 px-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-5 md:gap-x-3">
        {PORTFOLIO_DATA.map((data) => (
          <PortfolioCardComponent cardData={data} key={data.slug} />
        ))}
      </div>
    </div>
  );
};

export default PortfolioSection;
