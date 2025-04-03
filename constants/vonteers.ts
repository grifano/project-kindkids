import { IconType } from "react-icons";

import { GrGlobe, GrInstagram } from "react-icons/gr";

interface SocialLink {
  name: string;
  href: string;
  icon: IconType;
}

interface Volonteer {
  name: string;
  role: string;
  photoSrc: string;
  bio: string;
  social?: SocialLink[];
}

const volonteers: Volonteer[] = [
  //  👉 Start Template
  // {
  //   name: "First Name, Last Name",
  //   title: "Lorem ipsum dolor",
  //   photoSrc: "/images/section-volonteers/empty-avatar.jpg",
  //   bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  //   social: [
  //     { name: "facebook", href: "https://facebook.com", icon: FaFacebook },
  //     { name: "linkedIn", href: "https://linkedin.com", icon: FaLinkedin },
  //     { name: "Instagram", href: "https://instagram.com", icon: GrInstagram },
  //     { name: "X", href: "https://x.com", icon: FaTwitter },
  //     { name: "website", href: "https://google.com", icon: GrGlobe },
  //   ],
  // },
  // {
  //   name: "Maryna Platonova",
  //   role: "Founder",
  //   photoSrc: "/images/section-volonteers/maryna-platonova.jpg",
  //   bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  // },
  {
    name: "Hlib Platonov",
    role: "Hospitality Experts",
    photoSrc: "/images/section-volonteers/hlib-platonov.jpg",
    bio: "Halib supported both in the kitchen and on the floor, assisting with food prep and helping serve our guests with warmth and care. His flexible and helpful nature brought great energy to the evening.",
  },
  {
    name: "Christian Brown",
    role: "Hospitality Experts",
    photoSrc: "/images/section-volonteers/christian-brown.jpg",
    bio: "Christian was the heart of the operation—coordinating logistics, managing deliveries, and helping with setup and organization throughout the event. A true right hand, his tireless work was essential to making the evening a success.",
  },
  {
    name: "Miles Kane",
    role: "Expert Sommelier",
    photoSrc: "/images/section-volonteers/miles-kane.jpg",
    bio: "Miles served as our sommelier for the evening, guiding guests through a curated local wine experience with charm and expertise. His wine pairings and storytelling elevated the dinner and created a warm, memorable atmosphere.",
  },
  {
    name: "Eugenia Riashchenko",
    role: "Event Photographer",
    photoSrc: "/images/section-volonteers/jenia-riashchenko.jpg",
    bio: "Eugenia beautifully captured the spirit of the evening through her photography, preserving moments full of emotion and meaning. She also contributed to our art project, with her work later featured and sold during the charity auction.",
    social: [
      {
        name: "Instagram",
        href: "https://www.instagram.com/jeniaria_photography/profilecard/?igsh=MXMwYXpjaWtvY2s1eQ==",
        icon: GrInstagram,
      },
      {
        name: "Website",
        href: "http://www.jeniaria.com",
        icon: GrGlobe,
      },
    ],
  },
  {
    name: "Tatiana Platonova",
    role: "Educator and TRIS Pedagogy Specialist",
    photoSrc: "/images/section-volonteers/tatiana-platonova.jpg",
    bio: "Tatiana played a key role in the kitchen, assisting with the preparation and execution of the evening’s dishes. Her dedication and calm presence helped ensure everything ran smoothly behind the scenes.",
  },
  {
    name: "Maria Cherniy",
    role: "Artist",
    photoSrc: "/images/section-volonteers/maria.jpg",
    bio: "Masha brought our event to life through her live painting, creating a powerful visual centerpiece throughout the evening. Her artwork was later sold at auction, contributing directly to the cause.",
  },
];

export default volonteers;
