import React, { useState } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import MenuDrawer from "./menu-drawer/menu-drawer.component";
import { MAIN_MENUS } from "../../shared/constants/menu-list";
import { NavLink } from "react-router-dom";
const HeaderNav = () => {
  const [isMenuDrawerOpen, setIsMenuDrawerOpen] = useState(false);
  const menuClicked = () => {
    setIsMenuDrawerOpen(!isMenuDrawerOpen);
  };
  return (
    <div className="header flex justify-between items-center shadow-sm h-[100px] w-full bg-transparent sticky">
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
          <NavLink
            to={item.link}
            className="py-3 px-4 font-semibold transition-all rounded-md duration-200 ease-in hover:text-white hover:bg-primary-default tracking-widest xl:px-7"
            key={index}>
            {item.label}
          </NavLink>
        ))}
      </div>
      {/* Desktop Navigation */}
    </div>
  );
};

export default HeaderNav;
