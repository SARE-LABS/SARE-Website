import type { StaticImageData } from "next/image";
import {
  exploreHero,
  CTRLLABS2,
  CTRLLABS20,
  Excos,
  GroupPictureWithLoveBin,
  HomeBg,
  Member,
  Mentorship,
} from "../../../../public/images/images";

export type EventKind = "upcoming" | "past";

export type EventCard = {
  id: number;
  title: string;
  excerpt: string;
  image: StaticImageData;
  date: string;
  time: string;
  format: "Physical" | "Virtual";
  price: "Free" | "Paid";
  track: string;
  kind: EventKind;
  categories: string[];
};

export const heroGallery: StaticImageData[] = [
  CTRLLABS2,
  Excos,
  GroupPictureWithLoveBin,
  Member,
];
export const featuredIcons = ["googleMeet", "Clock", "eyeIcon"] as const;
export type FeaturedIconKey = (typeof featuredIcons)[number];

export const featuredEvent = {
  title: "CTRL LABS Ice-Breaker Session 2.0",
  image: exploreHero,
  countdown: {
    days: "07",
    hours: "59",
    minutes: "12",
    seconds: "59",
  },
  location: "Google meet",
  startTime: "8:00 PM",
  date: "16th August",
  infoItems: [
    { label: "Google meet", icon: "googleMeet" as FeaturedIconKey },
    { label: "8:00 PM", icon: "Clock" as FeaturedIconKey },
    { label: "16th August", icon: "eyeIcon" as FeaturedIconKey },
  ],
};

export const eventCategories = [
  "Webinar+",
  "CTRL LABS",
  "Conferences",
  "Outreaches",
  "Product Launches",
  "Fundraisers",
  "Reporting",
];

export const events: EventCard[] = [
  {
    id: 1,
    title: "CTRL LABS Ice Breaker Session 2.0",
    excerpt:
      "At SARE, we built a proven process that transforms agricultural challenges into cutting-edge robotic solutions, ensuring innovation is not just an idea but a reality in the field.",
    image: exploreHero,
    date: "12th Dec, 2026",
    time: "10:00 AM - 02:30 PM",
    format: "Physical",
    price: "Free",
    track: "CTRL LABS",
    kind: "upcoming",
    categories: ["CTRL LABS", "Conferences"],
  },
   {
    id: 2,
    title: "CTRL LABS Ice Breaker Session 2.0",
    excerpt:
      "At SARE, we built a proven process that transforms agricultural challenges into cutting-edge robotic solutions, ensuring innovation is not just an idea but a reality in the field.",
    image: exploreHero,
    date: "12th Dec, 2026",
    time: "10:00 AM - 02:30 PM",
    format: "Physical",
    price: "Free",
    track: "CTRL LABS",
    kind: "upcoming",
    categories: ["CTRL LABS", "Conferences"],
  },
   {
    id: 3,
    title: "CTRL LABS Ice Breaker Session 2.0",
    excerpt:
      "At SARE, we built a proven process that transforms agricultural challenges into cutting-edge robotic solutions, ensuring innovation is not just an idea but a reality in the field.",
    image: exploreHero,
    date: "12th Dec, 2026",
    time: "10:00 AM - 02:30 PM",
    format: "Physical",
    price: "Free",
    track: "CTRL LABS",
    kind: "upcoming",
    categories: ["CTRL LABS", "Conferences"],
  },
  {
    id: 4,
    title: "CTRL LABS Ice Breaker Session 2.0",
    excerpt:
      "At SARE, we built a proven process that transforms agricultural challenges into cutting-edge robotic solutions, ensuring innovation is not just an idea but a reality in the field.",
    image: exploreHero,
    date: "12th Dec, 2026",
    time: "10:00 AM - 02:30 PM",
    format: "Physical",
    price: "Free",
    track: "CTRL LABS",
    kind: "upcoming",
    categories: ["CTRL LABS", "Webinar+"],
  },
  {
    id: 5,
    title: "CTRL LABS Ice Breaker Session 2.0",
    excerpt:
      "At SARE, we built a proven process that transforms agricultural challenges into cutting-edge robotic solutions, ensuring innovation is not just an idea but a reality in the field.",
    image: exploreHero,
    date: "12th Dec, 2026",
    time: "10:00 AM - 02:30 PM",
    format: "Physical",
    price: "Free",
    track: "CTRL LABS",
    kind: "past",
    categories: ["Outreaches", "CTRL LABS"],
  },
  {
    id: 6,
    title: "CTRL LABS Ice Breaker Session 2.0",
    excerpt:
      "At SARE, we built a proven process that transforms agricultural challenges into cutting-edge robotic solutions, ensuring innovation is not just an idea but a reality in the field.",
    image: exploreHero,
    date: "12th Dec, 2026",
    time: "10:00 AM - 02:30 PM",
    format: "Physical",
    price: "Free",
    track: "CTRL LABS",
    kind: "past",
    categories: ["Fundraisers", "Reporting"],
  },
    {
    id: 7,
    title: "CTRL LABS Ice Breaker Session 2.0",
    excerpt:
      "At SARE, we built a proven process that transforms agricultural challenges into cutting-edge robotic solutions, ensuring innovation is not just an idea but a reality in the field.",
    image: exploreHero,
    date: "12th Dec, 2026",
    time: "10:00 AM - 02:30 PM",
    format: "Physical",
    price: "Free",
    track: "CTRL LABS",
    kind: "past",
    categories: ["Fundraisers", "Reporting"],
  },
    {
    id: 8,
    title: "CTRL LABS Ice Breaker Session 2.0",
    excerpt:
      "At SARE, we built a proven process that transforms agricultural challenges into cutting-edge robotic solutions, ensuring innovation is not just an idea but a reality in the field.",
    image: exploreHero,
    date: "12th Dec, 2026",
    time: "10:00 AM - 02:30 PM",
    format: "Physical",
    price: "Free",
    track: "CTRL LABS",
    kind: "past",
    categories: ["Fundraisers", "Reporting"],
  },
];

export const exploreCards = [
  {
    id: 1,
    title: "Our Projects",
    image: GroupPictureWithLoveBin,
    href: "/projects",
  },
  { id: 2, title: "SARE Blog", image: GroupPictureWithLoveBin, href: "/about" },
  {
    id: 3,
    title: "Partnerships",
    image: GroupPictureWithLoveBin,
    href: "/contact",
  },
  {
    id: 4,
    title: "SARE Closet",
    image: GroupPictureWithLoveBin,
    href: "/application",
  },
];

export const faqCategories = ["General", "About", "Projects"] as const;

export const faqData: Record<
  (typeof faqCategories)[number],
  { question: string; answer: string }[]
> = {
  General: [
    {
      question: "How can I stay updated on SARE events?",
      answer:
        "SARE is a community-driven initiative focused on empowering individuals through sustainable projects, events, and collaborations. We work on community development, education, sustainability, and tech-driven projects.",
    },
    {
      question: "How can I stay updated on SARE events?",
      answer:
        "Follow our social channels and subscribe to the SARE newsletter for event drops.",
    },
    {
      question: "How can I stay updated on SARE events?",
      answer:
        "You can also check this Events page weekly for upcoming and past sessions.",
    },
  ],
  About: [
    {
      question: "Who can attend SARE events?",
      answer:
        "Most events are open to students, early professionals, and collaborators in tech and agriculture.",
    },
  ],
  Projects: [
    {
      question: "Do events connect to active projects?",
      answer:
        "Yes. Many workshops and meetups feed directly into ongoing project teams and build cycles.",
    },
  ],
};
