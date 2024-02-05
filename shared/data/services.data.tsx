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
    img: "https://res.cloudinary.com/marathiudyojak/image/upload/v1706553982/adytronic_media/services/website-development_e9q75e.png",
  },
  {
    slug: "social-media-management",
    title: "Social Media Management",
    icon: <ConnectWithoutContactOutlinedIcon />,
    desciption:
      "Enhance your brand's online presence with our strategic Social Media Management. We curate engaging content, fostering community interaction to amplify your digital identity.",
    category: ServiceCategoryEnums.DIGITAL_IDENTITY,
    color: "warn",
    img: "https://res.cloudinary.com/marathiudyojak/image/upload/v1706530740/adytronic_media/services/social-media-management_bufiiq.png",
  },
  {
    slug: "content-creation",
    title: "Content Creation",
    icon: <ConnectWithoutContactOutlinedIcon />,
    desciption:
      "Craft compelling narratives and visually stunning content that resonates with your audience. Our Content Creation services ensure your brand message is both impactful and memorable.",
    category: ServiceCategoryEnums.DIGITAL_IDENTITY,
    color: "success",
    img: "https://res.cloudinary.com/marathiudyojak/image/upload/v1706553983/adytronic_media/services/content-creation_k43xlk.png",
  },
  {
    slug: "website-design-and-developement",
    title: "Website Design & Development",
    icon: <CodeIcon />,
    desciption:
      "Immerse your audience in a seamless online experience. Our Website Design & Development services create responsive, user-friendly platforms tailored to your unique digital identity.",
    category: ServiceCategoryEnums.DIGITAL_IDENTITY,
    color: "primary",
    img: "https://res.cloudinary.com/marathiudyojak/image/upload/v1706553982/adytronic_media/services/website-development_e9q75e.png",
  },
  {
    slug: "website-design-and-developement",
    title: "Website Design & Development",
    icon: <CodeIcon />,
    desciption:
      "Immerse your audience in a seamless online experience. Our Website Design & Development services create responsive, user-friendly platforms tailored to your unique digital identity.",
    category: ServiceCategoryEnums.DIGITAL_IDENTITY,
    color: "primary",
    img: "https://res.cloudinary.com/marathiudyojak/image/upload/v1706553982/adytronic_media/services/website-development_e9q75e.png",
  },
  {
    slug: "e-commerce-developement",
    title: "E-Commerce Website",
    icon: <CodeIcon />,
    desciption:
      "Unlock the full potential of online retail with our expert E-commerce Website Development services. We specialize in crafting user-friendly, visually appealing, and secure e-commerce platforms that make an impactful online presence for your business. From seamless navigation to secure payment gateways, our solutions empower businesses to thrive in the digital marketplace. Elevate your online store with our tailored e-commerce development expertise.",
    category: ServiceCategoryEnums.DIGITAL_IDENTITY,

    color: "warn",
    img: "https://res.cloudinary.com/marathiudyojak/image/upload/v1706555452/adytronic_media/services/e-commerce_xkrj0j.png",
  },
  {
    slug: "app-developement",
    title: "App Development",
    icon: <CodeIcon />,
    desciption:
      "Stay ahead with cutting-edge apps. From concept to deployment, our App Development services bring your ideas to life, ensuring seamless user experiences for a strong digital identity.",
    category: ServiceCategoryEnums.DIGITAL_IDENTITY,
    color: "success",
    img: "https://res.cloudinary.com/marathiudyojak/image/upload/v1706555624/adytronic_media/services/app-development_w5597i.png",
  },
  {
    slug: "graphics-designing",
    title: "Graphics Designing",
    icon: <VideoSettingsRoundedIcon />,
    desciption:
      "Transform ideas into captivating visuals with our Graphics design services. Our skilled designers ensure your brand graphics stand out in the competitive digital landscape.",
    category: ServiceCategoryEnums.BRANDING_DESIGNING,

    color: "primary",
    img: "https://res.cloudinary.com/marathiudyojak/image/upload/v1706555623/adytronic_media/services/graphic-design_xbk243.png",
  },
  {
    slug: "creating-graphics-and-poster-designing",
    title: "Creating Graphics and Poster Designing",
    icon: <VideoSettingsRoundedIcon />,
    desciption:
      "Captivate your audience with visually striking graphics and poster designs. Our Creative Graphics & Poster Design services turn concepts into compelling visual stories.",
    category: ServiceCategoryEnums.BRANDING_DESIGNING,

    color: "warn",
    img: "https://res.cloudinary.com/marathiudyojak/image/upload/v1706530740/adytronic_media/services/social-media-management_bufiiq.png",
  },
  {
    slug: "product-packaging-and-labels",
    title: "Product Packaging and Labels",
    icon: <VideoSettingsRoundedIcon />,
    desciption:
      "Make a lasting shelf impact with our bespoke Product Packaging & Labels. We blend aesthetics with functionality, enhancing your product's visual appeal and brand recognition.",
    category: ServiceCategoryEnums.BRANDING_DESIGNING,

    color: "success",
    img: "https://res.cloudinary.com/marathiudyojak/image/upload/v1706556185/adytronic_media/services/product-packaging-labels_sksxr7.png",
  },
  {
    slug: "video-editing",
    title: "Video Editing",
    icon: <VideoSettingsRoundedIcon />,
    desciption:
      "Tell your brand story through expertly crafted videos. Our Video Editing services ensure your content is polished, engaging, and leaves a lasting impression on your audience.",
    category: ServiceCategoryEnums.BRANDING_DESIGNING,
    color: "primary",
    img: "https://res.cloudinary.com/marathiudyojak/image/upload/v1706556185/adytronic_media/services/video-editing_amks2d.png",
  },
  {
    slug: "ad-films",
    title: "Ad-Film",
    icon: <VideoSettingsRoundedIcon />,
    desciption:
      "Bring your brand to life with professionally produced Ad-Films. From concept to execution, our team creates compelling visual narratives that resonate with your target audience.",
    category: ServiceCategoryEnums.BRANDING_DESIGNING,
    color: "warn",
    img: "https://res.cloudinary.com/marathiudyojak/image/upload/v1706556185/adytronic_media/services/ad-films_lmhmld.png",
  },
  {
    slug: "product-shoot",
    title: "Product Shoot",
    icon: <VideoSettingsRoundedIcon />,
    desciption:
      "Highlight your products in the best light with our professional Product Shoot services. We capture the essence of your offerings, creating visuals that speak volumes.",
    category: ServiceCategoryEnums.BRANDING_DESIGNING,
    color: "success",
    img: "https://res.cloudinary.com/marathiudyojak/image/upload/v1706556185/adytronic_media/services/product-shooting_wdefla.png",
  },
  {
    slug: "voice-over",
    title: "Voice Over",
    icon: <VideoSettingsRoundedIcon />,
    desciption:
      "Enhance your brand's audio identity with our Voice Over services. Our versatile talents bring scripts to life, adding a distinctive and memorable touch to your brand content.",
    category: ServiceCategoryEnums.BRANDING_DESIGNING,
    color: "primary",
    img: "https://res.cloudinary.com/marathiudyojak/image/upload/v1706556184/adytronic_media/services/voice-over_enmypi.png",
  },
  {
    slug: "facebook-instagram-ads",
    title: "Facebook & Instagram Ads",
    icon: <TrendingUpRoundedIcon />,
    desciption:
      "Maximize your social media presence with expertly crafted Facebook and Instagram Ad campaigns. We optimize for conversions and brand visibility in the digital sphere.",
    category: ServiceCategoryEnums.SOCIAL_MEDIA_ADVERTISING,
    color: "warn",
    img: "https://res.cloudinary.com/marathiudyojak/image/upload/v1706556548/adytronic_media/services/facebook-insta-ads_wjuzrw.png",
  },
  {
    slug: "lead-generation",
    title: "Lead Generation",
    icon: <TrendingUpRoundedIcon />,
    desciption:
      "Boost customer acquisition with targeted lead-generation strategies. Our data-driven approach connects your brand with potential customers for maximum impact.",
    category: ServiceCategoryEnums.SOCIAL_MEDIA_ADVERTISING,
    color: "success",
    img: "https://res.cloudinary.com/marathiudyojak/image/upload/v1706556549/adytronic_media/services/lead-generation_tv77ar.png",
  },
  {
    slug: "ivr-call-and-bulk-sms",
    title: "IVR Call & Bulk SMS",
    icon: <TrendingUpRoundedIcon />,
    desciption:
      "Streamline communication with our IVR Call & Bulk SMS services. Enhance customer interactions and convey important messages efficiently for a seamless brand experience.",
    category: ServiceCategoryEnums.SOCIAL_MEDIA_ADVERTISING,
    color: "primary",
    img: "https://res.cloudinary.com/marathiudyojak/image/upload/v1706556548/adytronic_media/services/ivr-bulk-sms_ngd5wq.png",
  },
  {
    slug: "whatsapp-api-and-facebook-business-verification",
    title: "Whatsapp API & Facebook Business Verification (Green Tick)",
    icon: <TrendingUpRoundedIcon />,
    desciption:
      "Establish trust and credibility with WhatsApp API integration and Facebook Business Verification. Secure the coveted green tick, signifying authenticity and reliability in the digital realm.",
    category: ServiceCategoryEnums.SOCIAL_MEDIA_ADVERTISING,
    color: "primary",
    img: "https://res.cloudinary.com/marathiudyojak/image/upload/v1706556548/adytronic_media/services/facebook-insta-verification_w8dyj3.png",
  },
];
