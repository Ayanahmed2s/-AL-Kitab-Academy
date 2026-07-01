import { Router, type IRouter } from "express";
import { lessons as lessonsData, classes, teachers } from "../data/dummy";
import type { Lesson } from "../data/dummy";

const router: IRouter = Router();

let lessons: Lesson[] = [...lessonsData];
let nextId = lessons.length + 1;

router.get("/lessons", (req, res) => {
  const { search, status, classId } = req.query as Record<string, string>;

  let filtered = [...lessons];

  if (search) {
    const q = search.toLowerCase();
    filtered = filtered.filter(
      (l) =>
        l.title.toLowerCase().includes(q) ||
        l.teacherName.toLowerCase().includes(q) ||
        l.className.toLowerCase().includes(q) ||
        (l.subject?.toLowerCase().includes(q) ?? false),
    );
  }

  if (status) {
    filtered = filtered.filter((l) => l.status === status);
  }

  if (classId) {
    filtered = filtered.filter((l) => l.classId === classId);
  }

  res.json(filtered);
});

router.post("/lessons", (req, res) => {
  const body = req.body as Omit<Lesson, "id" | "className" | "teacherName">;
  const cls = classes.find((c) => c.id === body.classId);
  const teacher = teachers.find((t) => t.id === body.teacherId);
  const newLesson: Lesson = {
    ...body,
    id: `l-${++nextId}`,
    className: cls?.name ?? body.classId,
    teacherName: teacher?.name ?? body.teacherId,
    students: body.students ?? [],
  };
  lessons.push(newLesson);
  res.status(201).json(newLesson);
});

router.get("/lessons/:id", (req, res) => {
  const lesson = lessons.find((l) => l.id === req.params["id"]);
  if (!lesson) {
    res.status(404).json({ error: "Lesson not found" });
    return;
  }
  res.json(lesson);
});

router.patch("/lessons/:id", (req, res) => {
  const idx = lessons.findIndex((l) => l.id === req.params["id"]);
  if (idx === -1) {
    res.status(404).json({ error: "Lesson not found" });
    return;
  }
  const updates = req.body as Partial<Lesson>;
  if (updates.classId) {
    const cls = classes.find((c) => c.id === updates.classId);
    if (cls) updates.className = cls.name;
  }
  if (updates.teacherId) {
    const teacher = teachers.find((t) => t.id === updates.teacherId);
    if (teacher) updates.teacherName = teacher.name;
  }
  lessons[idx] = { ...lessons[idx]!, ...updates };
  res.json(lessons[idx]);
});

router.delete("/lessons/:id", (req, res) => {
  const idx = lessons.findIndex((l) => l.id === req.params["id"]);
  if (idx === -1) {
    res.status(404).json({ error: "Lesson not found" });
    return;
  }
  lessons.splice(idx, 1);
  res.status(204).send();
});

export default router;
