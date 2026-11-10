export interface Project {
  title: string;
  description: string;
  status: "Completed" | "In Progress";
  role: string;
  tags: string[];
  github: string;
  liveUrl?: string;
  image: string;
}

export const projects: Project[] = [
  {
    title: "KhanateMUN Official Web Platform",
    description: "The official web platform engineered for KhanateMUN (Model United Nations) regional conference. Architected with modern responsive design, delegate registration pathways, and committee resource hubs.",
    status: "Completed",
    role: "Lead Web Developer & Media Lead",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "MUN"],
    github: "https://github.com/gulmatovbehruzbek8-ux",
    liveUrl: "https://khanate-mun-website.vercel.app/",
    image: "/images/KhanteMUN.jpg",
  },
  {
    title: "Line Tracking Robot",
    description: "A high-speed autonomous navigation vehicle engineered with 7 precision sensors for rapid, accurate path detection. Responsible for hardware design, sensor wiring, and circuit integration. Competed at regional level and won gold three consecutive times.",
    status: "Completed",
    role: "Co-Developer (Hardware)",
    tags: ["Arduino", "Sensors", "Hardware", "Robotics", "Circuit Design"],
    github: "https://github.com/gulmatovbehruzbek8-ux",
    image: "/images/engineering club.jpg",
  },
  {
    title: "Python Olympiad & AI Toolkit",
    description: "A growing collection of Python algorithms, search optimizations, and data structures built for competitive programming olympiads and AI hackathons (including AI Alliance Hackathon).",
    status: "In Progress",
    role: "Solo Developer",
    tags: ["Python", "Algorithms", "AI", "Competitive Programming"],
    github: "https://github.com/gulmatovbehruzbek8-ux",
    image: "/images/School.jpg",
  },
];
