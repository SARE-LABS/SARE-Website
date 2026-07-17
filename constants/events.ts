import { EventsImg, HeroImg } from "../public/images/pngs/png";
import {
  CTRLLABS2,
  CTRLLABS20,
  BuildSession,
  Mentorship,
  CTRLLed,
  DesignSession,
} from "../public/images/images";

export interface EventData {
  id: number;
  title: string;
  description: string;
  image: any;
  date: string;
  time: string;
  tags: { label: string }[];
  category: string;
  status: "upcoming" | "past";
}

export const EVENTS: EventData[] = [
  {
    id: 1,
    title: "CTRL LABS Ice Breaker Session 2.0",
    description:
      "At SARE, we've built a proven process that transforms agricultural challenges into cutting-edge robotic solutions, ensuring innovation is not just an idea but a reality in the field. Through this framework, we tackle in...",
    image: HeroImg,
    date: "12th Dec - 2026",
    time: "10:00 AM - 02:30 PM",
    tags: [{ label: "Physical" }, { label: "Free" }, { label: "CTRL LABS" }],
    category: "CTRL LABS",
    status: "upcoming",
  },
  {
    id: 2,
    title: "Agricultural Robotics Webinar Series",
    description:
      "Join industry experts as they discuss the future of robotics in agriculture. This webinar covers automation trends, sensor technologies, and how emerging tech is reshaping sustainable farming practices across the globe...",
    image: CTRLLABS2,
    date: "5th Jan - 2027",
    time: "06:00 PM - 08:00 PM",
    tags: [{ label: "Virtual" }, { label: "Free" }, { label: "Webinars" }],
    category: "Webinars",
    status: "upcoming",
  },
  {
    id: 3,
    title: "SARE Annual Conference 2027",
    description:
      "Our flagship annual event bringing together students, faculty, and industry leaders to showcase research, prototypes, and innovations in agricultural and environmental engineering. Featuring keynotes, demos, and more...",
    image: BuildSession,
    date: "18th Mar - 2027",
    time: "09:00 AM - 05:00 PM",
    tags: [{ label: "Physical" }, { label: "Paid" }, { label: "Conferences" }],
    category: "Conferences",
    status: "upcoming",
  },
  {
    id: 4,
    title: "Community Outreach: Farm Tech Demo Day",
    description:
      "SARE takes innovation to the field! Join us for a hands-on demonstration of our prototypes in real farm environments. Local farmers and students will collaborate to test and provide feedback on cutting-edge solutions...",
    image: Mentorship,
    date: "22nd Apr - 2027",
    time: "08:00 AM - 01:00 PM",
    tags: [{ label: "Physical" }, { label: "Free" }, { label: "Outreaches" }],
    category: "Outreaches",
    status: "past",
  },
  {
    id: 5,
    title: "IoT & Embedded Systems Workshop",
    description:
      "Learn the fundamentals of IoT development and embedded systems design. This hands-on workshop walks through sensor interfacing, microcontroller programming with Arduino/ESP32, and data logging basics...",
    image: CTRLLABS20,
    date: "14th May - 2027",
    time: "10:00 AM - 04:00 PM",
    tags: [{ label: "Physical" }, { label: "Free" }, { label: "CTRL LABS" }],
    category: "CTRL LABS",
    status: "upcoming",
  },
  {
    id: 6,
    title: "Smart Irrigation & AgTech Panel",
    description:
      "A virtual panel discussion on how smart irrigation technologies are optimizing water use and crop health in sustainable agriculture. Featuring researchers, developers, and local growers sharing real-world insights...",
    image: DesignSession,
    date: "12th Jun - 2027",
    time: "04:00 PM - 06:00 PM",
    tags: [{ label: "Virtual" }, { label: "Free" }, { label: "Webinars" }],
    category: "Webinars",
    status: "upcoming",
  },
  {
    id: 7,
    title: "SARE Hackathon: Agritech Edition",
    description:
      "Our inaugural 48-hour agritech hackathon where students and developers built software and hardware prototypes solving agricultural challenges. Check out the submissions, winning prototypes, and feedback...",
    image: CTRLLed,
    date: "15th Nov - 2026",
    time: "09:00 AM - 06:00 PM",
    tags: [{ label: "Physical" }, { label: "Free" }, { label: "Conferences" }],
    category: "Conferences",
    status: "past",
  },
];
