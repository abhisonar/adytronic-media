import { IMainMenu } from "../interfaces/base/IMainMenu";

export const MAIN_MENUS: IMainMenu[] = [
  {
    label: "HOME",
    link: `/`,
    hasSubMenu: false,
  },
  {
    label: "OUR PROJECT",
    link: `#our-project`,
    hasSubMenu: true,
    subMenus: [
      { label: "Our Clients", link: "/our-clients" },
      { label: "Client Testimonials", link: "/testimonials" },
    ],
  },
  {
    label: "SERVICES",
    link: `#services`,
    hasSubMenu: true,
  },
  {
    label: "ABOUT US",
    link: `#about-us`,
    hasSubMenu: true,
  },
  {
    label: "CONTACT",
    link: `#contact`,
    hasSubMenu: true,
  },
];
