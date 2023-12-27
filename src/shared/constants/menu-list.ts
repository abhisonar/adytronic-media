import { IMainMenu } from "../interfaces/base/IMainMenu";

export const MAIN_MENUS: IMainMenu[] = [
  {
    label: "HOME",
    link: `/home`,
    hasSubMenu: false,
  },
  {
    label: "OUR PROJECT",
    link: `#out-project`,
    hasSubMenu: true,
    subMenus: [
      { label: "Our Clients", link: "/out-clients" },
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
