export interface Project {
  title: string;
  description: string;
  status: "Completed" | "In Progress";
  role: string;
  tags: string[];
  github: string;
  image: string;
}

export const projects: Project[] = [
  {
    title: "Line Tracking Robot",
    description: "A high-speed line-following robot engineered with 7 precision sensors for rapid, accurate path detection. Responsible for hardware design, sensor wiring, and circuit integration. Competed at regional level and won gold three consecutive times.",
    status: "Completed",
    role: "Co-Developer (Hardware)",
    tags: ["Arduino", "Sensors", "Hardware", "Robotics", "Circuit Design"],
    github: "https://github.com/gulmatovbehruzbek8-ux",
    image: "/images/placeholder-robot.jpg",
  },
  {
    title: "Python Olympiad Toolkit",
    description: "A growing collection of Python scripts built to prepare for programming olympiads. Covers core algorithms and problem-solving patterns.",
    status: "In Progress",
    role: "Solo Developer",
    tags: ["Python", "Algorithms", "Competitive Programming"],
    github: "https://github.com/gulmatovbehruzbek8-ux",
    image: "/images/placeholder-python.jpg",
  },
];
