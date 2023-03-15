// import {
//   agro,
//   air,
//   bgb,
//   itvs,
//   rg,
//   stc,
//   synctella,
//   usaid,
// } from "../assets/partners";
import agro from "../assets/partners/agro.png";
import air from "../assets/partners/air.png";
import bgb from "../assets/partners/bgb.png";
import itvs from "../assets/partners/itvs.png";
import rg from "../assets/partners/rg.png";
import stc from "../assets/partners/stc.png";
import synctella from "../assets/partners/synctella.png";
import usaid from "../assets/partners/usaid.jpg";

import femni2 from "../assets/femni.png";
import sadia2 from "../assets/sadia.png";
import helz from "../assets/helpz.png";
import travel2 from "../assets/travel2.png";
import erp from "../assets/erp.png";
import mirror from "../assets/mirror2.png";

export const technologies = [
  {
    name: "AGRO",
    icon: agro,
  },
  {
    name: "CSS 3",
    icon: air,
  },
  {
    name: "JavaScript",
    icon: bgb,
  },
  {
    name: "TypeScript",
    icon: itvs,
  },
  {
    name: "React JS",
    icon: rg,
  },
  {
    name: "Redux Toolkit",
    icon: stc,
  },
  {
    name: "Tailwind CSS",
    icon: synctella,
  },
  {
    name: "Node JS",
    icon: usaid,
  },
];

export const projects = [
  {
    name: "Therapy And Medition",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: femni2,
    source_code_link: "https://github.com/",
  },
  {
    name: "Paitent Appointment",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: sadia2,
    source_code_link: "https://github.com/",
  },
  {
    name: "Ecommerce Manager",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: helz,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: travel2,
    source_code_link: "https://github.com/",
  },
  {
    name: "ERP Software",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: erp,
    source_code_link: "https://github.com/",
  },
  {
    name: "Ecommerce website",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: mirror,
    source_code_link: "https://github.com/",
  },
];

export default { technologies, projects };
