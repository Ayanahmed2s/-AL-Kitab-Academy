import { Router, type IRouter } from "express";
import { students, teachers, assignments, lessons, classes, recentActivities } from "../data/dummy";

const router: IRouter = Router();

router.get("/dashboard/summary", (_req, res) => {
  const totalStudents = students.length;
  const totalTeachers = teachers.length;
  const totalAssignments = assignments.length;
  const totalLessons = lessons.length;
  const totalClasses = classes.length;

  const activeStudents = students.filter((s) => s.status === "active").length;
  const pendingAssignments = assignments.filter((a) => a.status === "pending").length;
  const ongoingLessons = lessons.filter((l) => l.status === "ongoing").length;

  const avgAttendance = students.reduce((sum, s) => sum + s.attendance, 0) / totalStudents;
  const completedAssignments = assignments.filter((a) => a.status === "completed").length;
  const completionRate = (completedAssignments / totalAssignments) * 100;

  res.json({
    totalStudents,
    totalTeachers,
    totalAssignments,
    totalLessons,
    totalClasses,
    activeStudents,
    pendingAssignments,
    ongoingLessons,
    attendanceRate: Math.round(avgAttendance * 10) / 10,
    completionRate: Math.round(completionRate * 10) / 10,
  });
});

router.get("/dashboard/recent-activity", (_req, res) => {
  res.json(recentActivities);
});

export default router;
