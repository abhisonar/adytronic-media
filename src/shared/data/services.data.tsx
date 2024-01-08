import CodeIcon from "@mui/icons-material/Code";

interface IServiceData {
  slug: string;
  title: string;
  icon: React.ReactElement;
  readMoreLink?: string;
  textColor?: string;
  bgColor?: string;
  iconBgColor?: string;
}

export const SERVICES_DATA: IServiceData[] = [
  {
    slug: "web-development",
    title: "Web Development",
    icon: <CodeIcon />,
    textColor: "text-warn-default",
    bgColor: "bg-warn-lighter",
    iconBgColor: "bg-warn-default",
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    icon: <CodeIcon />,
    textColor: "text-success-default",
    bgColor: "bg-success-lighter",
    iconBgColor: "bg-success-default",
  },
];
