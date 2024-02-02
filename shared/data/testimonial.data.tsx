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
    name: "Marathi Udyojak",
    img: "https://res.cloudinary.com/marathiudyojak/image/upload/v1706726325/adytronic_media/clients/3_q34pyl.png",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
  },
  {
    name: "Daily Mahiti",
    img: "https://res.cloudinary.com/marathiudyojak/image/upload/v1706726325/adytronic_media/clients/2_ylca2r.png",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
  },
  {
    name: "Science Acadeamy",
    img: "https://res.cloudinary.com/marathiudyojak/image/upload/v1706726325/adytronic_media/clients/epper_sir_logo_zhgwvu.png",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
  },
];
