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
    question: "What is SARE?",
    answer:
      "SARE (Society of Agricultural Robotics Engineers) is a student-led innovation community focused on building engineering and technology solutions for agriculture, the environment, sustainability, and real-world problems.",
  },
  {
    id: 2,
    question: "Who can join SARE?",
    answer:
      "SARE is open to students and young innovators from all backgrounds — engineering, agriculture, design, programming, content creation, and even beginners who are eager to learn and grow.",
  },
  {
    id: 3,
    question: "Do I need prior technical experience to join?",
    answer:
      "No. SARE is structured to support both beginners and experienced members. We provide learning pathways, mentorship, and hands-on projects that help members grow at their own pace.",
  },
  {
    id: 4,
    question: "What makes SARE different from other tech clubs?",
    answer:
      "SARE focuses on building real, functional solutions with measurable impact, especially in agriculture and the environment. Members don’t just learn — they design, prototype, test, and deploy.",
  },
];


export const FAQDataProjects = [
  {
    id: 1,
    question: "What kind of projects does SARE work on?",
    answer:
      "SARE works on practical engineering and technology projects including agricultural robotics, automation systems, environmental solutions, IoT devices, and AI-driven tools for real-world problems.",
  },
  {
    id: 2,
    question: "Can members contribute to ongoing projects?",
    answer:
      "Yes. Members are encouraged to join active project teams where they can contribute based on their skills — from software and electronics to design, research, and documentation.",
  },
  {
    id: 3,
    question: "Are projects built from scratch?",
    answer:
      "Most SARE projects start from problem identification and are built from the ground up. Members are involved in ideation, design, prototyping, testing, and iteration.",
  },
  {
    id: 4,
    question: "Do projects lead to competitions or exhibitions?",
    answer:
      "Yes. Many SARE projects are developed for competitions, showcases, research presentations, and innovation exhibitions, giving members exposure and practical experience.",
  },
];


export const FAQDataCTRL = [
  {
    id: 1,
    question: "What is CTRL LABS?",
    answer:
      "CTRL LABS is SARE’s structured training and mentorship program designed to teach practical engineering, robotics, and technology skills through guided sessions and hands-on learning.",
  },
  {
    id: 2,
    question: "What skills are taught in CTRL LABS?",
    answer:
      "CTRL LABS covers areas such as robotics fundamentals, embedded systems, AI/ML basics, 3D CAD design, frontend and backend development, and problem-solving through engineering.",
  },
  {
    id: 3,
    question: "How often do CTRL LABS sessions hold?",
    answer:
      "CTRL LABS training sessions are held bi-weekly, with each session focused on building practical skills and applying them to real engineering challenges.",
  },
  {
    id: 4,
    question: "Is CTRL LABS beginner-friendly?",
    answer:
      "Yes. CTRL LABS is designed to accommodate beginners while still challenging advanced members. Learning paths are progressive and supported by mentors and project leads.",
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
