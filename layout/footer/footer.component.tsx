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
      <div className="bg-black text-white p-4 md:px-20 md:pt-14 lg:px-24  min-h-[250px] flex flex-col justify-between">
        <div className="flex flex-col lg:flex-row h-fit w-full">
          <div className="basis-1/2">
            {FOOTER_LINKS_DATA.map((item) => (
              <div className="flex flex-col gap-y-2" key={item.category}>
                <h1 className="font-bold uppercase">{item.category}</h1>
                <div className="flex flex-col gap-y-2">
                  {item?.subCategories?.length &&
                    item.subCategories.map((subCat) => (
                      <div key={subCat.title} className="text-sm flex gap-2">
                        {subCat?.icon && subCat.icon}
                        {subCat?.isLink ? (
                          <a href={subCat.link}>{subCat.title}</a>
                        ) : (
                          <span>{subCat.title}</span>
                        )}
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-x-4 gap-y-3 justify-center basis-1/2 mt-3 lg:mt-0">
            <Link href="/privacy-policy" className="hover:text-success-default">
              Privacy Policy
            </Link>
            <Link href="/terms-of-use" className="hover:text-success-default">
              Terms of Use
            </Link>
            <Link href="/sales-and-refunds" className="hover:text-success-default">
              Sales and Refunds
            </Link>
          </div>
        </div>
        <p className="text-center mt-3">
          ©Copy Right @{currYear} All Rights Reserved - Adytronic Media
        </p>
      </div>
    </div>
  );
};

export default FooterComponent;
