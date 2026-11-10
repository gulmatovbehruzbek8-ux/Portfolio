import { getAcademicGrade } from "@/lib/utils";

export const personal = {
  name: "Behruzbek Gulmatov",
  fullName: "Gulmatov Behruzbek, son of G'ulomjon",
  role: "Robotics Engineer · AI Builder · Photographer",
  school: "Presidential School in Khiva",
  get grade() {
    return getAcademicGrade().gradeString;
  },
  get shortGrade() {
    return getAcademicGrade().shortGrade;
  },
  location: "Khiva, Uzbekistan",
  headline: "The best way to predict the future is to engineer it.",
  tagline: "Building AI-powered tools and engineering the future.",
  get bio() {
    return `A ${getAcademicGrade().gradeString.toLowerCase()} student at the Presidential School in Khiva with a passion for robotics engineering, physics, and AI development. School media team photographer, Edexcel Triple 9 scholar, and IELTS 8.0 achiever.`;
  },
  email: "gulmatovbehruzbek8@gmail.com",
  telegram: "https://t.me/Behruzbek7090",
  github: "https://github.com/gulmatovbehruzbek8-ux",
  linkedin: "https://www.linkedin.com/in/behruzbek-gulmatov-a038a9375/",
  ielts: {
    overall: "8.0",
    reading: "9.0",
    listening: "8.5",
    writing: "7.0",
    speaking: "6.5",
    type: "Academic (Computer-delivered)",
    date: "October 2026",
  },
  igcse: {
    computerScience: "Grade 9",
    physics: "Grade 9",
    mathematics: "Grade 9",
    summary: "Triple 9 (Highest Possible Distinction)",
  },
};

