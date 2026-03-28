// constants/projects.ts
export type ProjectStatus = "Ongoing" | "Completed";

export interface Project {
  id: number;
  status: ProjectStatus;
  title: string;
  description: string;
  stages: string[];
  currentStageIndex: number; // 0-based index to track progress
  images: string[];
  categories: string[];
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    status: "Ongoing",
    title: "Development of a fully automated poultry farm",
    description:
      "At SARE, we've built a proven process that transforms agricultural challenges into cutting-edge robotic solutions, ensuring innovation is not just an idea but a reality in the field. Through this framework, we tackle inefficiencies, reduce labor intensity, and pave the way for smarter, more sustainable farming.",
    stages: ["Planning", "3D Design", "Dashboard", "Building", "Testing"],
    currentStageIndex: 1, // Planning and 3D Design are done
    images: Array(8).fill("/images/projectexcos.png"),
    categories: ["Environmental", "Technological"],
  },
  {
    id: 2,
    status: "Completed",
    title: "Building of an Automated Irrigation Robot",
    description:
      "At SARE, we've built a proven process that transforms agricultural challenges into cutting-edge robotic solutions, ensuring innovation is not just an idea but a reality in the field.",
    stages: ["Planning", "3D Design", "Dashboard", "Building", "Testing"],
    currentStageIndex: 4, // All stages done
    images: Array(8).fill("/images/projectexcos.png"),
    categories: ["Technological", "Social"],
  },
  {
    id: 2,
    status: "Completed",
    title: "Building of an Automated Irrigation Robot",
    description:
      "At SARE, we've built a proven process that transforms agricultural challenges into cutting-edge robotic solutions, ensuring innovation is not just an idea but a reality in the field.",
    stages: ["Planning", "3D Design",  "Testing"],
    currentStageIndex: 4, // All stages done
    images: Array(8).fill("/images/projectexcos.png"),
    categories: ["Technological", "Social"],
  },
  {
    id: 2,
    status: "Completed",
    title: "Building of an Automated Irrigation Robot",
    description:
      "At SARE, we've built a proven process that transforms agricultural challenges into cutting-edge robotic solutions, ensuring innovation is not just an idea but a reality in the field.",
    stages: ["Planning", "3D Design", "Dashboard", "Building"],
    currentStageIndex: 4, // All stages done
    images: Array(8).fill("/images/projectexcos.png"),
    categories: ["Technological", "Social"],
  },

  // Add more duplicates here to match your screenshot...
];