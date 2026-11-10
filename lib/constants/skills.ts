export interface SkillGroup {
  category: string;
  icon: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Robotics & Hardware",
    icon: "🤖",
    skills: ["Sensor Integration", "Robot Building", "Circuit Design", "Arduino & C++"],
  },
  {
    category: "Physics & Science",
    icon: "⚛️",
    skills: ["Applied Mechanics", "Electronics", "Experimental Physics", "IGCSE Physics (9)"],
  },
  {
    category: "AI & ML Tools",
    icon: "🧠",
    skills: ["AI-Assisted Development", "Prompt Engineering", "Hackathon Prototyping", "ML Workflows"],
  },
  {
    category: "Software & Algorithms",
    icon: "💻",
    skills: ["Python", "Algorithms", "Data Structures", "Git & GitHub", "IGCSE CS (9)"],
  },
];
