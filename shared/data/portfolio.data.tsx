import { IImageView } from "@shared/interfaces/base/IImageView";

export interface IPortfolio {
  slug: string;
  title: string;
  documents: IImageView[];
}

export const PORTFOLIO_DATA: IPortfolio[] = [
  {
    slug: "wedding-card",
    title: "Wedding Card",
    documents: [
      {
        title: "Wedding Card 1",
        src: "https://res.cloudinary.com/marathiudyojak/image/upload/v1705832114/adytronic_media/portfolio/wedding_card_post2_krgel1.jpg",
      },
      {
        title: "Wedding Card 2",
        src: "https://res.cloudinary.com/marathiudyojak/image/upload/v1705832113/adytronic_media/portfolio/wedding_card_post3_agn43l.jpg",
      },
    ],
  },
  {
    slug: "suruvat-masale",
    title: "Suruvat Masale",
    documents: [
      {
        title: "Suruvat Masale Video",
        src: "https://res.cloudinary.com/marathiudyojak/video/upload/v1705832162/adytronic_media/portfolio/logo_rbmxss.mp4",
        isVideo: true,
        posterSrc:
          "https://res.cloudinary.com/marathiudyojak/image/upload/v1705832145/adytronic_media/portfolio/m2_nak0l5.jpg",
      },
    ],
  },
  {
    slug: "standing-banner",
    title: "Standing Banner",
    documents: [
      {
        title: "Standing Banner 1",
        src: "https://res.cloudinary.com/marathiudyojak/image/upload/v1705832122/adytronic_media/portfolio/table_royal_d_q2row3.jpg",
      },
      {
        title: "Standing Banner 2",
        src: "https://res.cloudinary.com/marathiudyojak/image/upload/v1705832121/adytronic_media/portfolio/table_royal_d3_aebicq.jpg",
      },
      {
        title: "Standing Banner 3",
        src: "https://res.cloudinary.com/marathiudyojak/image/upload/v1705832119/adytronic_media/portfolio/table_royal_d4_zkn42d.jpg",
      },
      {
        title: "Standing Banner 4",
        src: "https://res.cloudinary.com/marathiudyojak/image/upload/v1705832124/adytronic_media/portfolio/table_royal_d2_a0zaqq.jpg",
      },
    ],
  },
];
