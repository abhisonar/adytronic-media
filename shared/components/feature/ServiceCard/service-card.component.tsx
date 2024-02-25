import {
  BackgroundDefaultColorVarient,
  BackgroundLightColorVarient,
  BorderColorVarient,
} from "@ui/shared-resources/class/ColorVarients";
import React from "react";
import "./service-card.component.scss";

interface IServiceCard {
  title: string;
  color: string;
  description: string;
  img: string;
  index: number;
  className?: string;
}

const ServiceCard: React.FC<IServiceCard> = ({
  title,
  color,
  description,
  img,
  index = 1,
  className,
}) => {
  return (
    <div
      className={`service-card relative ${BackgroundLightColorVarient[color]} ${BorderColorVarient[color]} border overflow-hidden flex flex-col gap-2 justify-center h-[140px] w-full rounded-xl max-w-[28rem] max-h-[20rem] lg:h-full ${className}`}
      // data-aos="fade-up"
      // data-aos-duration={1000 * (index + 1)}
    >
      <div className={`service-card-img bg-white text-md  h-[150px] overflow-hidden rounded-lg`}>
        <img src={img} alt="" className=" h-full w-full object-contain" />
      </div>
      <div className="service-card-content flex flex-col justify-center lg:justify-between gap-2 p-0 basis-[40%] mb-3">
        <span className={`font-semibold text-md lg:text-xl text-${color}-default text-center`}>
          {title}
        </span>
        <span
          className={`hidden lg:block text-[.8rem] selection:${BackgroundDefaultColorVarient[color]} text-center px-3`}>
          {description}
        </span>
      </div>
    </div>
  );
};

export default ServiceCard;
