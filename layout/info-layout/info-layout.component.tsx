import { IBreadcrumbs } from "@ui/shared-resources/interfaces/IBreadcrumbs";
import UiBreadcrumbs from "@ui/ui-breadcrumbs/ui-breadcrumbs.component";
import React from "react";

interface IInfoLayout {
  breadcrumbs: IBreadcrumbs[];
  title: string | null;
  children: React.ReactNode;
  posterSrc?: string;
}

const InfoLayoutComponent: React.FC<IInfoLayout> = ({
  breadcrumbs,
  title,
  children,
  posterSrc,
}) => {
  return (
    <div className="grid grid-cols-1">
      <div className="flex justify-center items-center py-7 px-10 md:justify-between">
        <div className="flex flex-col gap-y-3 items-center md:items-start">
          <h1 className="text-2xl font-bold text-center bg-white px-5 py-2 rounded-full shadow-md shadow-primary-lighter">
            {title}
          </h1>
          <UiBreadcrumbs data={breadcrumbs} />
        </div>
        <div className="w-[250px] hidden md:block overflow-hidden">
          <img
            src={posterSrc || `/assets/services/service-header.svg`}
            alt=""
            className="w-full h-full object-contain mix-blend-darken"
          />
        </div>
      </div>
      <div className="px-2 md:p-[30px] mt-2 rounded-t-3xl shadow-t-md bg-white">{children}</div>
    </div>
  );
};

export default InfoLayoutComponent;
