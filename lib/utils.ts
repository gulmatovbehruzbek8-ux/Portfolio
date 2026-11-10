import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Calculates current academic grade dynamically based on the current date.
 * Academic year starts September 1st.
 * Baseline: 2026-2027 academic year = 10th Grade.
 */
export function getAcademicGrade(date: Date = new Date()): {
  gradeNumber: number;
  gradeString: string;
  shortGrade: string;
  academicYear: string;
  isAlumnus: boolean;
} {
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth(); // 0 = Jan, 8 = Sept

  // School year starts in September (month index 8)
  const schoolStartYear = currentMonth >= 8 ? currentYear : currentYear - 1;
  const schoolEndYear = schoolStartYear + 1;

  // Baseline: 2026-2027 school year is 10th Grade
  const gradeNumber = 10 + (schoolStartYear - 2026);

  if (gradeNumber <= 11) {
    return {
      gradeNumber,
      gradeString: `${gradeNumber}th Grade`,
      shortGrade: `Grade ${gradeNumber}`,
      academicYear: `${schoolStartYear}–${schoolEndYear}`,
      isAlumnus: false,
    };
  } else {
    return {
      gradeNumber,
      gradeString: "Class of 2028 (Alumnus)",
      shortGrade: "Alumnus",
      academicYear: `${schoolStartYear}–${schoolEndYear}`,
      isAlumnus: true,
    };
  }
}

