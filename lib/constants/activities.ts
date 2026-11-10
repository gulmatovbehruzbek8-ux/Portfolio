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
    title: "KhanateMUN & Web Platform",
    role: "Media Manager & Web Developer",
    scale: "Regional Conference (Khorezm Region)",
    status: "Active",
    achievement: "Official Web Platform Creator & Media Lead",
    description: "Regional Model United Nations conference uniting ambitious student delegates. Engineered the official web platform (khanate-mun-website.vercel.app) and lead the visual communications, media branding, and digital strategy.",
    tags: ["Web Platform", "Media", "Design", "Communications", "Leadership"],
    image: "/images/KhanteMUN.jpg",
  },
  {
    title: "Presidential School Media Team",
    role: "Official School Photographer",
    status: "Active",
    achievement: "Lead Visual Storyteller",
    description: "Selected photographer on the official Presidential School in Khiva Media Team. Capturing high-level international delegations, academic ceremonies, and student life. Balances compositional aesthetics with visual storytelling.",
    tags: ["Photography", "Media Production", "Visual Storytelling", "Composition"],
    image: [
      "/images/bird.jpg",
      "/images/IMG_0395.JPG",
      "/images/IMG_0458.JPG",
      "/images/_MG_9135.JPG",
      "/images/entrance.jpg"
    ],
  },
  {
    title: "StartupFest & AI Hackathons",
    role: "Tech Innovator & Competitor",
    status: "Completed",
    achievement: "🥇 1,000,000 UZS Prize Winner",
    description: "Competed in multiple hackathons, including the regional AI Alliance hackathon, and took part in StartupFest where our team was awarded a 1,000,000 UZS cash prize for technical project innovation and live execution.",
    tags: ["Hackathon", "StartupFest", "AI Alliance", "Robotics", "Innovation"],
    image: "/images/startupfest.jpg",
  },
  {
    title: "Silk Road University Fair Delegation",
    role: "School Representative & Delegate",
    status: "Completed",
    scale: "Tashkent (PIIMA-organized Global Fair)",
    achievement: "International Higher Education Delegate",
    description: "Represented Presidential School in Khiva at the Silk Road International Higher Education Fair in Tashkent. Engaged directly with international admissions delegations from institutions including University of Toronto, University of Miami, and University of South Florida.",
    tags: ["Higher Education", "International Relations", "Academic Leadership"],
    image: "/images/silk-road-fair.jpg",
  },
  {
    title: "Engineering Club, KhivaPS",
    role: "Member & Instructor",
    foundedBy: "Dilmurod (schoolmate)",
    status: "Active",
    description: "A school-based engineering club dedicated to teaching core engineering principles, circuit wiring, and sensor logic to younger students. Bridging theory and hands-on practice — one project at a time.",
    tags: ["Teaching", "Engineering", "Mentorship", "Hardware"],
    image: "/images/engineering club.jpg",
  },
];
