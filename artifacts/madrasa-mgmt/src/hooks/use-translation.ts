import { useState, useEffect } from "react";

export const translations = {
  en: {
    dashboard: "Dashboard",
    students: "Students",
    teachers: "Teachers",
    assignments: "Assignments",
    lessons: "Lessons",
    classes: "Classes",
    settings: "Settings",
    login: "Login",
    logout: "Logout",
    search: "Search...",
    addStudent: "Add Student",
    addTeacher: "Add Teacher",
    addAssignment: "Add Assignment",
    addLesson: "Add Lesson",
    theme: "Theme",
    language: "Language",
    totalStudents: "Total Students",
    totalTeachers: "Total Teachers",
    activeStudents: "Active Students",
    ongoingLessons: "Ongoing Lessons",
    attendanceRate: "Attendance Rate",
    completionRate: "Completion Rate",
    recentActivity: "Recent Activity",
    pleaseWait: "Please wait…",
    changingLanguage: "Changing language",
  },
  ur: {
    dashboard: "ڈیش بورڈ",
    students: "طلباء",
    teachers: "اساتذہ",
    assignments: "تفویض",
    lessons: "سبق",
    classes: "جماعت",
    settings: "ترتیبات",
    login: "لاگ ان کریں",
    logout: "لاگ آؤٹ",
    search: "تلاش کریں...",
    addStudent: "طالب علم شامل کریں",
    addTeacher: "استاد شامل کریں",
    addAssignment: "تفویض شامل کریں",
    addLesson: "سبق شامل کریں",
    theme: "تھیم",
    language: "زبان",
    totalStudents: "کل طلباء",
    totalTeachers: "کل اساتذہ",
    activeStudents: "فعال طلباء",
    ongoingLessons: "جاری اسباق",
    attendanceRate: "حاضری کی شرح",
    completionRate: "تکمیل کی شرح",
    recentActivity: "حالیہ سرگرمی",
    pleaseWait: "براہ کرم انتظار کریں…",
    changingLanguage: "زبان تبدیل ہو رہی ہے",
  },
};

export type Language = "en" | "ur";

export function useTranslation() {
  const [lang] = useState<Language>(() => {
    const saved = localStorage.getItem("madrasa_lang") as Language;
    return saved || "en";
  });

  useEffect(() => {
    document.documentElement.dir = lang === "ur" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [lang]);

  const t = (key: keyof typeof translations.en): string =>
    translations[lang][key] ?? key;

  return { lang, t };
}
