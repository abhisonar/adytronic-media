import CodeIcon from "@mui/icons-material/Code";
import VideoSettingsRoundedIcon from "@mui/icons-material/VideoSettingsRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import ConnectWithoutContactOutlinedIcon from "@mui/icons-material/ConnectWithoutContactOutlined";
import { ServiceCategoryEnums } from "@shared/enums/service-category.enums";

export interface IServiceData {
  slug: string;
  title: string;
  icon: React.ReactElement;
  desciption: string;
  category: ServiceCategoryEnums;
  readMoreLink?: string;
  color?: string;
  img: string;
}

export const SERVICES_DATA: IServiceData[] = [
  {
    slug: "website-design-and-developement",
    title: "Website Design & Development",
    icon: <CodeIcon />,
    desciption:
      "Immerse your audience in a seamless online experience. Our Website Design & Development services create responsive, user-friendly platforms tailored to your unique digital identity.",
    category: ServiceCategoryEnums.DIGITAL_IDENTITY,
    color: "primary",
    img: "https://res.cloudinary.com/marathiudyojak/image/upload/v1708873629/adytronic_media/services/Website_Design_Development_wzbn4s.png",
  },
  {
    slug: "social-media-management",
    title: "Social Media Management",
    icon: <ConnectWithoutContactOutlinedIcon />,
    desciption:
      "Enhance your brand's online presence with our strategic Social Media Management. We curate engaging content, fostering community interaction to amplify your digital identity.",
    category: ServiceCategoryEnums.DIGITAL_IDENTITY,
    color: "warn",
    img: "https://res.cloudinary.com/marathiudyojak/image/upload/v1708873628/adytronic_media/services/Social_Media_Management_dwj8ro.png",
  },
  {
    slug: "graphics-designing",
    title: "Graphics Designing",
    icon: <VideoSettingsRoundedIcon />,
    desciption:
      "Transform ideas into captivating visuals with our Graphics design services. Our skilled designers ensure your brand graphics stand out in the competitive digital landscape.",
    category: ServiceCategoryEnums.BRANDING_DESIGNING,

    color: "primary",
    img: "https://res.cloudinary.com/marathiudyojak/image/upload/v1708873622/adytronic_media/services/Graphics_Designing_iqn4b4.png",
  },
  {
    slug: "facebook-instagram-ads",
    title: "Facebook & Instagram Ads",
    icon: <TrendingUpRoundedIcon />,
    desciption:
      "Maximize your social media presence with expertly crafted Facebook and Instagram Ad campaigns. We optimize for conversions and brand visibility in the digital sphere.",
    category: ServiceCategoryEnums.SOCIAL_MEDIA_ADVERTISING,
    color: "warn",
    img: "https://res.cloudinary.com/marathiudyojak/image/upload/v1708873622/adytronic_media/services/Facebook_Instagram_Ads_snqddb.png",
  },
  {
    slug: "content-creation",
    title: "Content Creation",
    icon: <ConnectWithoutContactOutlinedIcon />,
    desciption:
      "Craft compelling narratives and visually stunning content that resonates with your audience. Our Content Creation services ensure your brand message is both impactful and memorable.",
    category: ServiceCategoryEnums.DIGITAL_IDENTITY,
    color: "success",
    img: "https://res.cloudinary.com/marathiudyojak/image/upload/v1708873627/adytronic_media/services/Content_Creation_kvczll.png",
  },
  {
    slug: "e-commerce-developement",
    title: "E-Commerce Website",
    icon: <CodeIcon />,
    desciption:
      "Maximize online retail potential with our expert E-commerce Website Development services. Crafted for impact: user-friendly, secure, visually appealing platforms. Elevate your online store today!",
    category: ServiceCategoryEnums.DIGITAL_IDENTITY,

    color: "primary",
    img: "https://res.cloudinary.com/marathiudyojak/image/upload/v1708873633/adytronic_media/services/E-Commerce_Website_p63fb5.png",
  },
  {
    slug: "app-developement",
    title: "App Development",
    icon: <CodeIcon />,
    desciption:
      "Stay ahead with cutting-edge apps. From concept to deployment, our App Development services bring your ideas to life, ensuring seamless user experiences for a strong digital identity.",
    category: ServiceCategoryEnums.DIGITAL_IDENTITY,
    color: "warn",
    img: "https://res.cloudinary.com/marathiudyojak/image/upload/v1708873629/adytronic_media/services/App_Development_dv2jwx.png",
  },
  {
    slug: "creating-graphics-and-poster-designing",
    title: "Creating Graphics and Poster Designing",
    icon: <VideoSettingsRoundedIcon />,
    desciption:
      "Captivate your audience with visually striking graphics and poster designs. Our Creative Graphics & Poster Design services turn concepts into compelling visual stories.",
    category: ServiceCategoryEnums.BRANDING_DESIGNING,

    color: "warn",
    img: "https://res.cloudinary.com/marathiudyojak/image/upload/v1708873631/adytronic_media/services/Creating_Graphics_and_Poster_Designing_lr19sm.png",
  },
  {
    slug: "product-packaging-and-labels",
    title: "Product Packaging and Labels",
    icon: <VideoSettingsRoundedIcon />,
    desciption:
      "Make a lasting shelf impact with our bespoke Product Packaging & Labels. We blend aesthetics with functionality, enhancing your product's visual appeal and brand recognition.",
    category: ServiceCategoryEnums.BRANDING_DESIGNING,

    color: "success",
    img: "https://res.cloudinary.com/marathiudyojak/image/upload/v1708873620/adytronic_media/services/Product_Packaging_and_Labels_ksi2ty.png",
  },
  {
    slug: "video-editing",
    title: "Video Editing",
    icon: <VideoSettingsRoundedIcon />,
    desciption:
      "Tell your brand story through expertly crafted videos. Our Video Editing services ensure your content is polished, engaging, and leaves a lasting impression on your audience.",
    category: ServiceCategoryEnums.BRANDING_DESIGNING,
    color: "primary",
    img: "https://res.cloudinary.com/marathiudyojak/image/upload/v1708873624/adytronic_media/services/Video_Editing_ba06fh.png",
  },
  {
    slug: "ad-films",
    title: "Ad-Film",
    icon: <VideoSettingsRoundedIcon />,
    desciption:
      "Bring your brand to life with professionally produced Ad-Films. From concept to execution, our team creates compelling visual narratives that resonate with your target audience.",
    category: ServiceCategoryEnums.BRANDING_DESIGNING,
    color: "warn",
    img: "https://res.cloudinary.com/marathiudyojak/image/upload/v1708873619/adytronic_media/services/Ad-Film_k9gcij.png",
  },
  {
    slug: "product-shoot",
    title: "Product Shoot",
    icon: <VideoSettingsRoundedIcon />,
    desciption:
      "Highlight your products in the best light with our professional Product Shoot services. We capture the essence of your offerings, creating visuals that speak volumes.",
    category: ServiceCategoryEnums.BRANDING_DESIGNING,
    color: "success",
    img: "https://res.cloudinary.com/marathiudyojak/image/upload/v1708873622/adytronic_media/services/Product_Shoot_gtmtjd.png",
  },
  {
    slug: "voice-over",
    title: "Voice Over",
    icon: <VideoSettingsRoundedIcon />,
    desciption:
      "Enhance your brand's audio identity with our Voice Over services. Our versatile talents bring scripts to life, adding a distinctive and memorable touch to your brand content.",
    category: ServiceCategoryEnums.BRANDING_DESIGNING,
    color: "primary",
    img: "https://res.cloudinary.com/marathiudyojak/image/upload/v1708873624/adytronic_media/services/Voice_Over_hy0xc0.png",
  },
  {
    slug: "lead-generation",
    title: "Lead Generation",
    icon: <TrendingUpRoundedIcon />,
    desciption:
      "Boost customer acquisition with targeted lead-generation strategies. Our data-driven approach connects your brand with potential customers for maximum impact.",
    category: ServiceCategoryEnums.SOCIAL_MEDIA_ADVERTISING,
    color: "success",
    img: "https://res.cloudinary.com/marathiudyojak/image/upload/v1708873627/adytronic_media/services/Lead_Generation_rcck1s.png",
  },
  {
    slug: "ivr-call-and-bulk-sms",
    title: "IVR Call & Bulk SMS",
    icon: <TrendingUpRoundedIcon />,
    desciption:
      "Streamline communication with our IVR Call & Bulk SMS services. Enhance customer interactions and convey important messages efficiently for a seamless brand experience.",
    category: ServiceCategoryEnums.SOCIAL_MEDIA_ADVERTISING,
    color: "primary",
    img: "https://res.cloudinary.com/marathiudyojak/image/upload/v1708873618/adytronic_media/services/IVR_Call_Bulk_SMS_qfhfrk.png",
  },
  {
    slug: "whatsapp-api-and-facebook-business-verification",
    title: "Whatsapp API & Facebook Business Verification (Green Tick)",
    icon: <TrendingUpRoundedIcon />,
    desciption:
      "Establish trust and credibility with WhatsApp API integration and Facebook Business Verification. Secure the coveted green tick, signifying authenticity and reliability in the digital realm.",
    category: ServiceCategoryEnums.SOCIAL_MEDIA_ADVERTISING,
    color: "primary",
    img: "https://res.cloudinary.com/marathiudyojak/image/upload/v1708873617/adytronic_media/services/Whatsapp_API_Facebook_Business_Verification_Green_Tick_fdrwsr.png",
  },
];
