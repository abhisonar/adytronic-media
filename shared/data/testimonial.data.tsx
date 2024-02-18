import { IImageView } from "@shared/interfaces/base/IImageView";

export const CLIENTS_LOGO: IImageView[] = [
  {
    title: "Marathi Udyojak",
    src: "https://res.cloudinary.com/marathiudyojak/image/upload/v1706726325/adytronic_media/clients/3_q34pyl.png",
  },
  {
    title: "Growth Institute",
    src: "https://res.cloudinary.com/marathiudyojak/image/upload/v1706726325/adytronic_media/clients/1_pv47be.png",
  },
  {
    title: "Daily Mahiti",
    src: "https://res.cloudinary.com/marathiudyojak/image/upload/v1706726325/adytronic_media/clients/2_ylca2r.png",
  },
  {
    title: "Space Interiors",
    src: "https://res.cloudinary.com/marathiudyojak/image/upload/v1706726324/adytronic_media/clients/space_9_logo_v6l1be.png",
  },
  {
    title: "Tulsi",
    src: "https://res.cloudinary.com/marathiudyojak/image/upload/v1706726324/adytronic_media/clients/tulsi_logo_marathi_blur_wfiull.png",
  },
  {
    title: "Science Acadeamy",
    src: "https://res.cloudinary.com/marathiudyojak/image/upload/v1706726325/adytronic_media/clients/epper_sir_logo_zhgwvu.png",
  },
  {
    title: "M2JC",
    src: "https://res.cloudinary.com/marathiudyojak/image/upload/v1706726324/adytronic_media/clients/m2jc_logo_p7kwan.png",
  },
  {
    title: "Omkar GFX",
    src: "https://res.cloudinary.com/marathiudyojak/image/upload/v1706726324/adytronic_media/clients/omkar_gfx_vdmyu3.png",
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
    img: "https://res.cloudinary.com/marathiudyojak/image/upload/v1706726325/adytronic_media/clients/1_pv47be.png",
    comment:
      "Adytronic played a crucial role in our social media success. With their expertise, our Instagram presence experienced exponential growth, reaching a wider audience and generating significant engagement. Additionally, their strategic management of Facebook ads resulted in a noticeable boost in sales and conversions. We greatly appreciate Adytronic's dedication to understanding our brand and delivering effective digital marketing solutions that drive tangible results.",
  },
  {
    name: "Daily Mahiti",
    img: "https://res.cloudinary.com/marathiudyojak/image/upload/v1706726325/adytronic_media/clients/2_ylca2r.png",
    comment:
      "Adytronic's impact on our social media presence has been remarkable. Their video editing skills have transformed our content, making it more attractive and engaging to our audience. This, coupled with their adept management of our social media platforms, has led to significant growth in followers and overall engagement. We are consistently impressed by Adytronic's ability to capture our brand's essence and deliver content that resonates with our audience.",
  },
  {
    name: "Space 9 Interiors",
    img: "https://res.cloudinary.com/marathiudyojak/image/upload/v1706726324/adytronic_media/clients/space_9_logo_v6l1be.png",
    comment:
      "We can't speak highly enough of Adytronic's graphic design and video editing capabilities. Their designs are not only visually stunning but also perfectly tailored to our brand identity. With their help, our social media channels have become more vibrant and appealing, attracting increased attention from our target audience. Adytronic's attention to detail and commitment to delivering the best designs for our social media platforms have been instrumental in enhancing our online presence.",
  },
  {
    name: "Marathi Udyojak",
    img: "https://res.cloudinary.com/marathiudyojak/image/upload/v1706726325/adytronic_media/clients/3_q34pyl.png",
    comment:
      "Adytronic consistently delivers exceptional quality in their social media designs. Their attention to detail and creativity shine through in every project they undertake. We've come to rely on Adytronic as our go-to agency for all our social media design needs because of their unwavering commitment to excellence. Their designs not only look great but also effectively communicate our brand's message, helping us stand out in a crowded digital landscape. Working with Adytronic has been a game-changer for our social media marketing efforts.",
  },
];
