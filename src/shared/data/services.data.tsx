import CodeIcon from "@mui/icons-material/Code";

interface IServiceData {
  slug: string;
  title: string;
  icon: React.ReactElement;
  readMoreLink?: string;
  statusColor?: string;
}

export const SERVICES_DATA: IServiceData[] = [
  {
    slug: "web-development",
    title: "Web Development",
    icon: <CodeIcon />,
    statusColor: "warn",
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    icon: <CodeIcon />,
    statusColor: "success",
  },
];
