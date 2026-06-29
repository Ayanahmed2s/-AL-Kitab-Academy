import { useState, useEffect, useCallback } from "react";

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
    switchingLanguage: "Switching language…",
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
    switchingLanguage: "زبان تبدیل ہو رہی ہے…",
  },
};

export type Language = "en" | "ur";

export function useTranslation() {
  const [lang, setLangState] = useState<Language>(() => {
    const saved = localStorage.getItem("madrasa_lang") as Language;
    return saved || "en";
  });

  const [langLoading, setLangLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem("madrasa_lang", lang);
    document.documentElement.dir = lang === "ur" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Language) => {
    if (next === lang) return;
    setLangLoading(true);
    setTimeout(() => {
      setLangState(next);
      setTimeout(() => setLangLoading(false), 150);
    }, 600);
  }, [lang]);

  const t = (key: keyof typeof translations.en) =>
    translations[lang][key] ?? key;

  return { lang, setLang, langLoading, t };
}
