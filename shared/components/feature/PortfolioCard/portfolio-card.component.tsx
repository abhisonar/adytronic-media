"use client";
import ImageSwiperComponent from "@shared/components/ImageSwiper/image-swiper.component";
import { IPortfolio } from "@shared/data/portfolio.data";
import React, { useState } from "react";

import "./portfolio-card.component.scss";

interface IProfileCard {
  cardData: IPortfolio;
}

const PortfolioCardComponent: React.FC<IProfileCard> = ({ cardData }) => {
  const [openImageSwiperDialog, setOpenImageSwiperDialog] = useState<boolean>(false);

  const handleImageSwiperDialog = (isOpen: boolean) => {
    setOpenImageSwiperDialog(isOpen);
  };

  return (
    <div className="w-full max-w-[24rem] max-h-[24rem] flex justify-center items-center rounded-md bg-white p-1 overflow-hidden">
      <ImageSwiperComponent
        firstItemClassName="transition-all duration-500 hover:scale-110"
        swiperData={cardData?.documents}
        openImageSwiperDialog={openImageSwiperDialog}
        setOpenImageSwiperDialog={handleImageSwiperDialog}></ImageSwiperComponent>
    </div>
  );
};

export default PortfolioCardComponent;
