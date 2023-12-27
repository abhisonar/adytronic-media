import React, { useState } from "react";
import UiButton from "../../ui/ui-button/ui-button.component";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import UiDrawer from "../../ui/ui-drawer/ui-drawer.component";
import MenuDrawer from "./menu-drawer/menu-drawer.component";
import { MAIN_MENUS } from "../../shared/constants/menu-list";
const HeaderNav = () => {
  const [isMenuDrawerOpen, setIsMenuDrawerOpen] = useState(false);
  const menuClicked = () => {
    setIsMenuDrawerOpen(!isMenuDrawerOpen);
  };
  return (
    <div className="header flex justify-between items-center shadow-sm h-[100px] w-full">
      <div className="brand px-10 h-full flex items-center lg:border-r">
        <img
          className="w-[142px]"
          src="https://data.themeim.com/html/sixart/assets/img/logo/logo.png"
          alt=""
        />
      </div>
      {/* Mobile Navigation */}
      <div className="block mr-5 lg:hidden">
        <div className="p-3 shadow-md cursor-pointer" onClick={menuClicked}>
          <MenuRoundedIcon fontSize="medium" />
        </div>
        <MenuDrawer isMenuDrawerOpen={isMenuDrawerOpen} menuClicked={menuClicked} />
      </div>
      {/* Mobile Navigation */}
      {/* Desktop Navigation */}
      <div className="hidden lg:flex gap-2 mr-5 h-[100px] items-center border-l px-10 md:px-6">
        {MAIN_MENUS.map((item, index) => (
          <a
            href={item.link}
            className="py-3 px-4 font-semibold transition-all rounded-sm duration-300 ease-in hover:text-primary-default hover:bg-primary-lighter tracking-widest xl:px-7"
            key={index}>
            {item.label}
          </a>
        ))}
      </div>
      {/* Desktop Navigation */}
    </div>
  );
};

export default HeaderNav;
