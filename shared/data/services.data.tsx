import CodeIcon from "@mui/icons-material/Code";
import VideoSettingsRoundedIcon from "@mui/icons-material/VideoSettingsRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import ConnectWithoutContactOutlinedIcon from "@mui/icons-material/ConnectWithoutContactOutlined";

interface IServiceData {
  slug: string;
  title: string;
  icon: React.ReactElement;
  desciption: string;
  readMoreLink?: string;
  textColor?: string;
  bgColor?: string;
  iconBgColor?: string;
  img: string;
}

export const SERVICES_DATA: IServiceData[] = [
  {
    slug: "social-media-management",
    title: "Social Media Management",
    icon: <ConnectWithoutContactOutlinedIcon />,
    desciption:
      "Sixart have got quite a few already made templates for better project management that you can use now.",
    textColor: "text-warn-default",
    bgColor: "bg-warn-lighter",
    iconBgColor: "bg-warn-default",
    img: "/assets/services/social-media.png",
  },
  {
    slug: "website-developement",
    title: "Website Development",
    icon: <CodeIcon />,
    desciption:
      "Sixart have got quite a few already made templates for better project management that you can use now.",

    textColor: "text-success-default",
    bgColor: "bg-success-lighter",
    iconBgColor: "bg-success-default",
    img: "/assets/services/web-dev.png",
  },
  {
    slug: "app-developement",
    title: "App Development",
    icon: <CodeIcon />,
    desciption:
      "Sixart have got quite a few already made templates for better project management that you can use now.",

    textColor: "text-success-default",
    bgColor: "bg-success-lighter",
    iconBgColor: "bg-success-default",
    img: "/assets/services/app-dev.png",
  },
  {
    slug: "graphics-video-editing",
    title: "Graphics Design & Video Editing",
    icon: <VideoSettingsRoundedIcon />,
    desciption:
      "Sixart have got quite a few already made templates for better project management that you can use now.",

    textColor: "text-warn-default",
    bgColor: "bg-warn-lighter",
    iconBgColor: "bg-warn-default",
    img: "/assets/services/graphic-design-video-editing.png",
  },
  {
    slug: "digital-marketing-advertising",
    title: "Digital Marketing & Advertising",
    icon: <TrendingUpRoundedIcon />,
    desciption:
      "Sixart have got quite a few already made templates for better project management that you can use now.",
    textColor: "text-success-default",
    bgColor: "bg-success-lighter",
    iconBgColor: "bg-success-default",
    img: "/assets/services/digital-marketing.png",
  },
];
