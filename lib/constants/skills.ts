export interface SkillGroup {
  category: string;
  icon: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Robotics & Hardware",
    icon: "🤖",
    skills: ["Sensor Integration", "Robot Building", "Circuit Design", "Arduino"],
  },
  {
    category: "Physics & Science",
    icon: "⚛️",
    skills: ["Applied Mechanics", "Electronics", "Experimental Physics"],
  },
  {
    category: "AI & ML Tools",
    icon: "🧠",
    skills: ["AI-Assisted Development", "Prompt Engineering", "ML Concepts"],
  },
  {
    category: "Frontend Development",
    icon: "🌐",
    skills: ["HTML", "CSS", "JavaScript"],
  },
];
