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
        title: "Address",
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
];
