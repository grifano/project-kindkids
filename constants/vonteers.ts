import { IconType } from "react-icons";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaExternalLinkAlt,
} from "react-icons/fa";

interface SocialLink {
  name: string;
  href: string;
  icon: IconType;
}

interface Volonteer {
  name: string;
  title: string;
  photoSrc: string;
  bio: string;
  social?: SocialLink[];
}

const volonteers: Volonteer[] = [
  {
    name: "Maryna Platonova",
    title: "Founder",
    photoSrc: "/images/section-volonteers/maryna-platonova.jpg",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    social: [
      { name: "facebook", href: "https://facebook.com", icon: FaFacebook },
      { name: "linkedIn", href: "https://linkedin.com", icon: FaLinkedin },
      { name: "Instagram", href: "https://instagram.com", icon: FaInstagram },
      { name: "X", href: "https://x.com", icon: FaTwitter },
    ],
  },
  {
    name: "Hlib Platonov",
    title: "Hospitality Experts",
    photoSrc: "/images/section-volonteers/empty-avatar.jpg",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
  {
    name: "Christian Brown",
    title: "Hospitality Experts",
    photoSrc: "/images/section-volonteers/empty-avatar.jpg",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
  {
    name: "Miles Kane",
    title: "Expert Sommelier",
    photoSrc: "/images/section-volonteers/miles-kane.jpg",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
  {
    name: "Jenia Riashchenko",
    title: "Event Photographer",
    photoSrc: "/images/section-volonteers/jenia-riashchenko.jpg",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    social: [
      { name: "facebook", href: "https://facebook.com", icon: FaFacebook },
      { name: "Instagram", href: "https://instagram.com", icon: FaInstagram },
      {
        name: "Website",
        href: "https://google.com",
        icon: FaExternalLinkAlt,
      },
    ],
  },
  {
    name: "Tatiana Platonova",
    title: "Educator and TRIS Pedagogy Specialist",
    photoSrc: "/images/section-volonteers/empty-avatar.jpg",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
];

export default volonteers;
