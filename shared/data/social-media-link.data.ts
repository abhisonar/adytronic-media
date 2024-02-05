interface ISocialMediaLinks {
  link: string;
  title: string;
  bgColor: string;
  textColor: string;
  borderColor: string;
  hoverClass: string;
  icon: string;
}

export const SOCIAL_MEDIA_LINKS: ISocialMediaLinks[] = [
  {
    link: "http://www.facebook.com/adytronic",
    title: "Facebook",
    bgColor: "bg-facebook",
    textColor: "text-facebookBlue",
    borderColor: "border-facebookBlue",
    hoverClass: "hover:bg-facebook hover:text-white",
    icon: "fa-brands fa-facebook-f",
  },
  {
    link: "http://www.instagram.com/adytronic.media",
    title: "Instagram",
    bgColor: "bg-instgramGradient",
    textColor: "text-instagramPink",
    borderColor: "border-instagramPink",
    hoverClass: "hover:bg-instgramGradient hover:text-white",
    icon: "fa-brands fa-instagram",
  },
  {
    link: "http://www.linkedin.com/company/adytronicmedia",
    title: "Linkedin",
    bgColor: "bg-linkedin",
    textColor: "text-linkedinBlue",
    borderColor: "border-linkedinBlue",
    hoverClass: "hover:bg-linkedin hover:text-white",
    icon: "fa-brands fa-linkedin",
  },
];
