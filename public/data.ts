import { figure } from "framer-motion/client";
import {
  Adruino,
  ARIghtBlue,
  Ballon,
  BuildSession,
  Excos,
  ExcosFrame,
  HomeBg,
  Kennedy,
  Member,
  Mentorship,
  bot,
  CTRLLABS2,
  CTRLLABS20,
  NACOS_2022,
  Check,
  Partners,
  MembersTrained,
  GreenFolder,
} from "./images/images";
import { title } from "process";
import { link } from "fs";

export const Why = [
  {
    id: 1,
    description: "Visionaries who thrive on tackling real-world challenges.",
    link: "/",
    img: NACOS_2022,
  },
  {
    id: 2,
    description: "Believers that robotics can revolutionize food production.",
    link: "/",
    img: bot,
  },
  {
    id: 3,
    description: "Visionaries who thrive on tackling real-world challenges.",
    link: "/",
    img: CTRLLABS2,
  },
];

export const Benefit = [
  {
    id: 1,
    description: "Training and mentorship.",
    img: Ballon,
  },
  {
    id: 2,
    description: "Project funding support",
    img: Ballon,
  },
  {
    id: 3,
    description: "Access to exclusive resources and tools.",
    img: Ballon,
  },
  {
    id: 4,
    description: "Networking opportunities with industry leaders.",
    img: Ballon,
  },
];

export const FAQDataGeneral = [
  {
    id: 1,
    question: "How can I stay updated on SARE events?",
    answer:
      "SARE is a community-driven initiative focused on empowering individuals through sustainable projects, events, and collaborations. We work on community development, education, sustainability, and tech-driven projects.",
  },
  {
    id: 2,
    question: "How can I get involved with SARE?",
    answer:
      "To get involved with SARE, you can visit our website and fill out the contact form. We welcome individuals who are passionate about sustainability and community development.",
  },
  {
    id: 3,
    question: "How can I stay updated on SARE events?",
    answer:
      "SARE is a community-driven initiative focused on empowering individuals through sustainable projects, events, and collaborations. We work on community development, education, sustainability, and tech-driven projects.",
  },
];

export const FAQDataProjects = [
  {
    id: 1,
    question: "How can I know about the ongoing projects?",
    answer:
      "SARE is a community-driven initiative focused on empowering individuals through sustainable projects, events, and collaborations. We work on community development, education, sustainability, and tech-driven projects.",
  },
  {
    id: 2,
    question: "How can I get involved with SARE?",
    answer:
      "To get involved with SARE, you can visit our website and fill out the contact form. We welcome individuals who are passionate about sustainability and community development.",
  },
  {
    id: 3,
    question: "How can I stay updated on SARE events?",
    answer:
      "SARE is a community-driven initiative focused on empowering individuals through sustainable projects, events, and collaborations. We work on community development, education, sustainability, and tech-driven projects.",
  },
];

export const FAQDataCTRL = [
  {
    id: 1,
    question: "What is CTRL Labs all about?",
    answer:
      "SARE is a community-driven initiative focused on empowering individuals through sustainable projects, events, and collaborations. We work on community development, education, sustainability, and tech-driven projects.",
  },
  {
    id: 2,
    question: "How can I get involved with SARE?",
    answer:
      "To get involved with SARE, you can visit our website and fill out the contact form. We welcome individuals who are passionate about sustainability and community development.",
  },
  {
    id: 3,
    question: "How can I stay updated on SARE events?",
    answer:
      "SARE is a community-driven initiative focused on empowering individuals through sustainable projects, events, and collaborations. We work on community development, education, sustainability, and tech-driven projects.",
  },
];

export const Navigations = [
  { id: 1, name: "Home", link: "/", icon: ARIghtBlue },
  { id: 2, name: "About Us", link: "/about", icon: ARIghtBlue },
  { id: 3, name: "Projects", link: "/projects", icon: ARIghtBlue },
  { id: 4, name: "CTRL LABS", link: "/ctrl-labs", icon: ARIghtBlue },
  { id: 5, name: "Explore", link: "/explore", icon: ARIghtBlue },
];

export const ProblemDiscovery = [
  {
    id: 1,
    description: "Farm Scouting.",
    img: Ballon,
  },
  {
    id: 2,
    description: "Surveys & Interviews.",
    img: Ballon,
  },
  {
    id: 3,
    description: "Data Analysis.",
    img: Ballon,
  },
  {
    id: 4,
    description: "Trend Monitoring",
    img: Ballon,
  },
];

export const ApplicationKeyPoints = [
  {
    id: 1,
    figure: "30+",
    description: "Active Members.",
    img: Mentorship,
  },
  {
    id: 2,
    figure: "10+",
    description: "Successful Training Sessions.",
    img: Kennedy,
  },
  {
    id: 3,
    figure: "3+",
    description: "Project Built.",
    img: BuildSession,
  },
];

export const BenefitsKeyPoints = [
  {
    id: 1,
    figure: "30+",
    description: "Active Members.",
    img: Adruino,
  },
  {
    id: 2,
    figure: "10+",
    description: "Successful Training Sessions.",
    img: Member,
  },
  {
    id: 3,
    figure: "3+",
    description: "Project Built.",
    img: Member,
  },
];

export const Imagess = [
  {
    id: 1,
    img: HomeBg,
  },
  {
    id: 2,
    img: Excos,
  },
];

export const Mission = [
  {
    id: 1,
    description: "Innovation in Agriculture",
    img: Check,
  },
  {
    id: 2,
    description: "Sustainability for the Future",
    img: Check,
  },
  {
    id: 3,
    description: "Empowering Farmers",
    img: Check,
  },
  {
    id: 4,
    description: " Global Food Security",
    img: Check,
  },
];

export const Vision = [
  {
    id: 1,
    description: "The Futuristic vision",
    img: Check,
  },
  {
    id: 2,
    description: "Empowering Farmers",
    img: Check,
  },
  {
    id: 3,
    description: "Feeding Tomorrow",
    img: Check,
  },
  {
    id: 4,
    description: "Global Impact",
    img: Check,
  },
];

export const FutureOrientedStat = [
  {
    id: 1,
    icon: Partners,
    figure: "15+",
    description:
      "Strategic Partners – collaborating with research institutes, farms, and technology providers.",
  },
  {
    id: 2,
    icon: MembersTrained,
    figure: "Over 40+",
    description:
      "Members Trained – empowering farmers and agri-tech enthusiasts with modern skills.",
  },
  {
    id: 2,
    icon: GreenFolder,
    figure: "20+",
    description:
      "Projects Completed – delivering innovative agro-robotics solutions.",
  },
];

export const Founders = [
  {
    id: 1,
    image: Kennedy,
    alias: "JFK",
    name: "Ifeadi Kennedy Chukuwike",
    role: "Frontend | UIUX(Interaction design)",
    title: "Chief Innovator",
    instagram: "https://www.instagram.com/",
    email: "mailto:",
    linkedin: "https://www.linkedin.com/",
  },
  {
    id: 2,
    image: Kennedy,
    alias: "Xantha",
    name: "Sheriffdeen Adesokan Adedamola",
    role: "Robotics(IOT) | UIUX(Interaction design)",
    title: "Co-Chief Innovator",
    instagram: "https://www.instagram.com/",
    email: "mailto:",
    linkedin: "https://www.linkedin.com/",
  },
  {
    id: 3,
    image: Kennedy,
    alias: "PythonMat",
    name: "Olagunju Matthew Oluwanifemi",
    role: "Backend | AI/ML",
    title: "Co-Chief Innovator",
    instagram: "https://www.instagram.com/",
    email: "mailto:",
    linkedin: "https://www.linkedin.com/",
  },
];

export const Executives = [
  {
    id: 1,
    image: Kennedy,
    alias: "The_Lateefah",
    name: "Ogunlan Lateefat",
    title: "General Secretary",
    instagram: "https://www.instagram.com/",
    email: "mailto:",
    linkedin: "https://www.linkedin.com/",
  },
  {
    id: 2,
    image: Kennedy,
    alias: "Elvera",
    name: "Olajide Elvera",
    title: "Publicity Lead",
    instagram: "https://www.instagram.com/",
    email: "mailto:",
    linkedin: "https://www.linkedin.com/",
  },
  {
    id: 3,
    image: Kennedy,
    alias: "Cysco",
    name: "Arabi Cyprian",
    title: "3D Artist Lead",
    instagram: "https://www.instagram.com/",
    email: "mailto:",
    linkedin: "https://www.linkedin.com/",
  },
  {
    id: 4,
    image: Kennedy,
    alias: "Nurain",
    name: "Nurain Bamidele G.",
    title: "Frontend Lead",
    instagram: "https://www.instagram.com/",
    email: "mailto:",
    linkedin: "https://www.linkedin.com/",
  },
];

export const WebExperienceTeam = [
  {
    id: 1,
    image: Kennedy,
    name: "Oladele Victory",
    title: "UIUX Designer",
    link: "https://www.instagram.com/",
  },
  {
    id: 1,
    image: Kennedy,
    name: "Oladele Victory",
    title: "UIUX Designer",
    link: "https://www.instagram.com/",
  },
  {
    id: 1,
    image: Kennedy,
    name: "Oladele Victory",
    title: "UIUX Designer",
    link: "https://www.instagram.com/",
  },
  {
    id: 1,
    image: Kennedy,
    name: "Oladele Victory",
    title: "UIUX Designer",
    link: "https://www.instagram.com/",
  },
];
