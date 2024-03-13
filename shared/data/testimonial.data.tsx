import { IImageView } from "@shared/interfaces/base/IImageView";

export const CLIENTS_LOGO: IImageView[] = [
  {
    title: "Marathi Udyojak",
    src: "https://res.cloudinary.com/marathiudyojak/image/upload/v1710353023/adytronic_media/clients/3_q34pyl_xublqi.webp",
  },
  {
    title: "Growth Institute",
    src: "https://res.cloudinary.com/marathiudyojak/image/upload/v1710353019/adytronic_media/clients/1_pv47be_fnhxol.webp",
  },
  {
    title: "Daily Mahiti",
    src: "https://res.cloudinary.com/marathiudyojak/image/upload/v1710353018/adytronic_media/clients/2_ylca2r_wxuoag.webp",
  },
  {
    title: "Space Interiors",
    src: "https://res.cloudinary.com/marathiudyojak/image/upload/v1710353027/adytronic_media/clients/space_9_logo_v6l1be_e6myfr.webp",
  },
  {
    title: "Tulsi",
    src: "https://res.cloudinary.com/marathiudyojak/image/upload/v1710353031/adytronic_media/clients/tulsi_logo_marathi_blur_wfiull_x1zajr.webp",
  },
  {
    title: "Science Acadeamy",
    src: "https://res.cloudinary.com/marathiudyojak/image/upload/v1710353021/adytronic_media/clients/epper_sir_logo_zhgwvu_okbn49.webp",
  },
  {
    title: "M2JC",
    src: "https://res.cloudinary.com/marathiudyojak/image/upload/v1710353025/adytronic_media/clients/m2jc_logo_p7kwan_iawaca.webp",
  },
  {
    title: "Omkar GFX",
    src: "https://res.cloudinary.com/marathiudyojak/image/upload/v1710353029/adytronic_media/clients/omkar_gfx_vdmyu3_gd9hi4.webp",
  },
];

export interface ITestimonial {
  img: string;
  name: string;
  comment: string;
}

export const TESTIMONIAL_DATA: ITestimonial[] = [
  {
    name: "Marathi Growth Institute",
    img: "https://res.cloudinary.com/marathiudyojak/image/upload/v1710353019/adytronic_media/clients/1_pv47be_fnhxol.webp",
    comment:
      "Adytronic played a crucial role in our social media success. With their expertise, our Instagram presence experienced exponential growth, reaching a wider audience and generating significant engagement. Additionally, their strategic management of Facebook ads resulted in a noticeable boost in sales and conversions. We greatly appreciate Adytronic's dedication to understanding our brand and delivering effective digital marketing solutions that drive tangible results.",
  },
  {
    name: "Daily Mahiti",
    img: "https://res.cloudinary.com/marathiudyojak/image/upload/v1710353018/adytronic_media/clients/2_ylca2r_wxuoag.webp",
    comment:
      "Adytronic's impact on our social media presence has been remarkable. Their video editing skills have transformed our content, making it more attractive and engaging to our audience. This, coupled with their adept management of our social media platforms, has led to significant growth in followers and overall engagement. We are consistently impressed by Adytronic's ability to capture our brand's essence and deliver content that resonates with our audience.",
  },
  {
    name: "Space 9 Interiors",
    img: "https://res.cloudinary.com/marathiudyojak/image/upload/v1710353027/adytronic_media/clients/space_9_logo_v6l1be_e6myfr.webp",
    comment:
      "We can't speak highly enough of Adytronic's graphic design and video editing capabilities. Their designs are not only visually stunning but also perfectly tailored to our brand identity. With their help, our social media channels have become more vibrant and appealing, attracting increased attention from our target audience. Adytronic's attention to detail and commitment to delivering the best designs for our social media platforms have been instrumental in enhancing our online presence.",
  },
  {
    name: "Marathi Udyojak",
    img: "https://res.cloudinary.com/marathiudyojak/image/upload/v1710353023/adytronic_media/clients/3_q34pyl_xublqi.webp",
    comment:
      "Adytronic consistently delivers exceptional quality in their social media designs. Their attention to detail and creativity shine through in every project they undertake. We've come to rely on Adytronic as our go-to agency for all our social media design needs because of their unwavering commitment to excellence. Their designs not only look great but also effectively communicate our brand's message, helping us stand out in a crowded digital landscape. Working with Adytronic has been a game-changer for our social media marketing efforts.",
  },
];
