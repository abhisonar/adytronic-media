import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";

export interface IFooterLinks {
  category: string;
  subCategories: ISubFooterLinks[];
}

export interface ISubFooterLinks {
  icon?: React.ReactElement;
  link?: string;
  title: string;
  isLink?: boolean;
}

export const FOOTER_LINKS_DATA: Array<IFooterLinks> = [
  {
    category: "Contact Us",
    subCategories: [
      {
        icon: <FmdGoodOutlinedIcon fontSize="small" />,
        title: "Ashok Nagar, Satpur, Nashik - 422012",
      },
      {
        icon: <EmailOutlinedIcon fontSize="small" />,
        title: "info@adytronic.com",
      },
      {
        icon: <LocalPhoneOutlinedIcon fontSize="small" />,
        title: "+91 8208148344",
      },
    ],
  },
  {
    category: "Pages",
    subCategories: [
      {
        title: "Services",
        link: "/services",
      },
      {
        title: "About Us",
        link: "/about-us",
      },
      {
        title: "Contact Us",
        link: "/contact-us",
      },
    ],
  },
  {
    category: "Legal Links",
    subCategories: [
      {
        title: "Privacy Policy",
        link: "/privacy-policy",
      },
      {
        title: "Terms of Use",
        link: "/terms-of-use",
      },
      {
        title: "Sales and Refunds",
        link: "/sales-and-refunds",
      },
    ],
  },
];
