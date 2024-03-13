"use client";
import { FOOTER_LINKS_DATA } from "@shared/data/footer.data";
import { SOCIAL_MEDIA_LINKS } from "@shared/data/social-media-link.data";
import Link from "next/link";
import React, { useState } from "react";

const FooterComponent = () => {
  const [currYear, setCurrYear] = useState<number | null>(new Date().getFullYear());
  return (
    <div className="flex flex-col w-full rounded-t-lg overflow-hidden">
      <div className="flex">
        {SOCIAL_MEDIA_LINKS.map((item) => (
          <a
            href={item.link}
            className={` bg-white ${item.textColor} border-y-4 ${item.borderColor} p-10 flex justify-center items-center gap-3  ${item.hoverClass} transition-all duration-300 w-full `}
            key={item.title}>
            <i className={`${item.icon} text-xl`}></i>
            <span className="hidden md:block">{item.title}</span>
          </a>
        ))}
      </div>
      <div className="bg-black text-white p-4 md:px-16 md:pt-14 lg:px-24  min-h-[250px] flex flex-col justify-between">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          {FOOTER_LINKS_DATA.map((item) => (
            <div className="flex flex-col gap-y-2 w-full md:w-[20rem]" key={item.category}>
              <h1 className="font-bold uppercase text-center md:text-left">{item.category}</h1>
              <div className="flex flex-col gap-y-2">
                {item?.subCategories?.length &&
                  item.subCategories.map((subCat) => (
                    <div
                      key={subCat.title}
                      className="text-sm flex gap-2 justify-center md:justify-start hover:text-success-default">
                      {subCat?.icon && <span>{subCat.icon}</span>}
                      {subCat?.link ? (
                        <a href={subCat.link}>{subCat.title}</a>
                      ) : (
                        <span className="text-center md:text-left">{subCat.title}</span>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-sm mt-3">
          ©Copyright @{currYear} All Rights Reserved -{" "}
          <a href="https://adytronic.com" className="text-warn-default">
            Adytronic Media
          </a>
        </p>
      </div>
    </div>
  );
};

export default FooterComponent;
