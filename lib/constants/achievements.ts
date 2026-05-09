export interface Achievement {
  title: string;
  icon: string;
  description: string;
  image?: string;
}

export const achievements: Achievement[] = [
  {
    title: "3× Regional Olympiad Gold",
    icon: "🥇",
    description: "Line Tracking Robot — 1st place in regional competitions.",
    image: "/images/achievement-gold.jpg",
  },
  {
    title: "Presidential School Student",
    icon: "🏫",
    description: "Khiva Branch — Academic excellence and leadership.",
    image: "/images/entrance.jpg",
  },
  {
    title: "Media Manager",
    icon: "📡",
    description: "KhanateMUN (Khorezm Region) — Communications lead.",
    image: "/images/achievement-mun.jpg",
  },
  {
    title: "Instructor",
    icon: "🔧",
    description: "Engineering Club, KhivaPS — Teaching younger students.",
    image: "/images/achievement-club.jpg",
  },
];
