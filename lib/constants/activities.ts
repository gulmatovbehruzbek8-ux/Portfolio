export interface Activity {
  title: string;
  role: string;
  status: "Completed" | "Ongoing" | "Active";
  achievement?: string;
  description: string;
  tags: string[];
  image: string | string[];
  team?: string;
  scale?: string;
  foundedBy?: string;
  stats?: {
    label: string;
    value: number;
    suffix: string;
  };
}

export const activities: Activity[] = [
  {
    title: "KhanateMUN",
    role: "Media Manager",
    scale: "Region-wide — participants from across Khorezm",
    status: "Ongoing",
    description: "Regional Model United Nations conference bringing together students across Khorezm. As Media Manager, responsible for the visual identity, content, and communications of the event.",
    tags: ["Media", "Design", "Communications", "Leadership"],
    image: "/images/KhanteMUN.jpg",
  },
  {
    title: "Engineering Club, KhivaPS",
    role: "Member & Instructor",
    foundedBy: "Dilmurod (schoolmate)",
    status: "Active",
    description: "A school-based engineering club dedicated to teaching core engineering principles to younger students. Bridging theory and hands-on practice — one project at a time.",
    tags: ["Teaching", "Engineering", "Mentorship", "Hardware"],
    image: "/images/engineering club.jpg",
  },
  {
    title: "Digital Photography",
    role: "Creative Hobbyist",
    status: "Active",
    description: "Exploring the world through a digital lens. This hobby allows me to capture the geometric beauty of architecture in Khiva and the precise mechanics of my engineering projects. It’s my way of balancing technical logic with creative visual storytelling.",
    tags: ["Composition", "Color Theory", "Post-Processing", "Creative"],
    image: [
      "/images/bird.jpg",
      "/images/IMG_0395.JPG",
      "/images/IMG_0458.JPG",
      "/images/_MG_9135.JPG",
      "/images/entrance.jpg"
    ],
  },
];
