import {
  BackgroundDefaultColorVarient,
  BackgroundLightColorVarient,
  BorderColorVarient,
} from "@ui/shared-resources/class/ColorVarients";
import React from "react";

interface IServiceCard {
  title: string;
  color: string;
  description: string;
  img: string;
  index: number;
}

const ServiceCard: React.FC<IServiceCard> = ({ title, color, description, img, index = 1 }) => {
  return (
    <div
      className={`relative group ${BackgroundLightColorVarient[color]} ${
        BorderColorVarient[color]
      } border overflow-hidden flex ${
        index % 2 === 0 ? "flex-row-reverse" : "flex-row"
      } gap-2 justify-between h-[180px] w-full rounded-xl max-w-[700px] lg:h-full`}
      // data-aos="fade-up"
      // data-aos-duration={1000 * (index + 1)}
    >
      <div className=" flex flex-col gap-2 p-6 justify-between basis-[70%]">
        <span className={`font-semibold text-md lg:text-lg text-${color}-default`}>{title}</span>
        <span className={`text-[.8rem] selection:${BackgroundDefaultColorVarient[color]} `}>
          {description}
        </span>
      </div>
      <div className={` bg-white text-md h-full basis-[30%] overflow-hidden rounded-lg`}>
        <img
          src={img}
          alt=""
          className="group-hover:scale-110 transition-all duration-300 aspect-square h-full object-cover aspect-[3/2]"
        />
      </div>
    </div>
  );
};

export default ServiceCard;
