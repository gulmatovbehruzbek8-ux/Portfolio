export interface Achievement {
  title: string;
  icon: string;
  description: string;
  image?: string;
  badge?: string;
}

export const achievements: Achievement[] = [
  {
    title: "IELTS Band 8.0 (Academic)",
    icon: "📜",
    badge: "Language C1/C2",
    description: "Overall 8.0 — Reading 9.0, Listening 8.5, Writing 7.0, Speaking 6.5. Top-tier academic English qualification.",
    image: "/images/ielts-result.jpg",
  },
  {
    title: "Edexcel IGCSE Triple 9",
    icon: "🎓",
    badge: "Academics",
    description: "Computer Science (9), Physics (9), Mathematics (9) — Highest achievable grade distinction internationally.",
    image: "/images/edexcel-igcse.png",
  },
  {
    title: "3× Regional Olympiad Gold",
    icon: "🥇",
    badge: "Hardware & Robotics",
    description: "Line Tracking Robot — 1st place in regional competitions with custom 7-sensor hardware.",
    image: "/images/line-tracking-robot.jpg",
  },
  {
    title: "StartupFest 1M UZS Winner",
    icon: "🏆",
    badge: "Innovation",
    description: "Awarded 1,000,000 UZS prize at StartupFest for tech innovation and hardware presentation.",
    image: "/images/startupfest.jpg",
  },
  {
    title: "AI Alliance Hackathon",
    icon: "🤖",
    badge: "AI & Coding",
    description: "Competed in 2 hackathons including the regional AI Alliance hackathon, engineering intelligent solutions.",
    image: "/images/ai-alliance.jpg",
  },
  {
    title: "KhanateMUN Web Platform",
    icon: "🌐",
    badge: "Web & Media",
    description: "Built the official web platform and led digital media for the regional Model United Nations conference.",
    image: "/images/KhanteMUN.jpg",
  },
  {
    title: "School Media Photographer",
    icon: "📸",
    badge: "Leadership & Creative",
    description: "Official photographer on the Presidential School Media Team, documenting ceremonies and delegations.",
    image: "/images/IMG_0395.JPG",
  },
  {
    title: "Silk Road University Fair",
    icon: "🏛️",
    badge: "Global Network",
    description: "Tashkent delegate for KhivaPS; engaged admissions from University of Toronto, Miami, and South Florida.",
    image: "/images/silk-road-fair.jpg",
  },
];

