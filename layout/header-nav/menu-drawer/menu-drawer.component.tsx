import React, { useState } from "react";
import UiDrawer from "../../../ui/ui-drawer/ui-drawer.component";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { MAIN_MENUS } from "../../../shared/constants/menu-list";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import MenuContactDetails from "./menu-contact-detail.component";
import Link from "next/link";

interface IMenuDrawer {
  isMenuDrawerOpen: boolean;
  menuClicked: () => void;
}

const MenuDrawer: React.FC<IMenuDrawer> = ({ isMenuDrawerOpen, menuClicked }) => {
  const [expandedMenuIndex, setExpandedMenuIndex] = useState<number | null>(null);

  const updateExpansion = (index: number) => {
    setExpandedMenuIndex(expandedMenuIndex === index ? null : index);
  };

  const isCurrentIndex = (index: number) => {
    return expandedMenuIndex === index;
  };
  return (
    <UiDrawer isOpen={isMenuDrawerOpen} onClose={menuClicked} className="">
      <div className="p-3 text-white">
        {/* Menu  */}
        <div className="flex justify-between items-center h-[50px] mb-9">
          <img
            className="w-[142px]"
            src="https://data.themeim.com/html/sixart/assets/img/logo/logo.png"
            alt=""
          />
          <CloseRoundedIcon
            fontSize="large"
            className="text-gray-400 !transition !duration-200 !ease-linear hover:text-white  cursor-pointer"
            onClick={menuClicked}
          />
        </div>
        <div className="flex flex-col">
          {MAIN_MENUS.map((item, index) => (
            <div className="flex flex-col" key={index}>
              <div
                className="flex justify-between items-center py-3 border-b border-b-gray-600 bg-black"
                key={item.label}>
                <Link
                  href={item?.link}
                  className="text-white font-semibold text-sm"
                  onClick={menuClicked}>
                  {item.label}
                </Link>
                {item.hasSubMenu && (
                  <span
                    className={`p-1 border-gray-700 border transition duration-100 ease-in cursor-pointer z-10 rounded ${
                      isCurrentIndex(index) && "bg-white"
                    }`}
                    onClick={() => updateExpansion(index)}>
                    <AddRoundedIcon
                      className={`!transition !duration-100 !ease-linear ${
                        isCurrentIndex(index) ? "rotate-45 text-black" : "text-white"
                      }`}
                    />
                  </span>
                )}
              </div>
              {item.hasSubMenu && item.subMenus?.length && (
                <div
                  className={`flex flex-col transition-all ease-in ${
                    isCurrentIndex(index) ? "h-[100px] opacity-100 duration-200" : "h-0 opacity-0"
                  }`}>
                  {item.subMenus?.map((subItem, subItemIndex) => (
                    <div className="py-3 border-b border-b-gray-600" key={subItem.label}>
                      <Link href={subItem.link} className="text-white font-semibold ml-5 text-sm">
                        {subItem.label}
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        {/* Menu */}
        {/* <MenuContactDetails /> */}
      </div>
    </UiDrawer>
  );
};

export default MenuDrawer;
