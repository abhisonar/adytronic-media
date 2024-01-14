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
    slug: "social-media-management",
    title: "Social Media Management",
    icon: <CodeIcon />,
    textColor: "text-warn-default",
    bgColor: "bg-warn-lighter",
    iconBgColor: "bg-warn-default",
  },
  {
    slug: "website-app-developement",
    title: "Website and App Development",
    icon: <CodeIcon />,
    textColor: "text-success-default",
    bgColor: "bg-success-lighter",
    iconBgColor: "bg-success-default",
  },
  {
    slug: "graphics-video-editing",
    title: "Graphics Design & Video Editing",
    icon: <CodeIcon />,
    textColor: "text-warn-default",
    bgColor: "bg-warn-lighter",
    iconBgColor: "bg-warn-default",
  },
  {
    slug: "digital-marketing-advertising",
    title: "Digital Marketing & Advertising",
    icon: <CodeIcon />,
    textColor: "text-success-default",
    bgColor: "bg-success-lighter",
    iconBgColor: "bg-success-default",
  },
];
