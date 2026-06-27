import { Router, type IRouter } from "express";
import { students as studentsData, classes } from "../data/dummy";
import type { Student } from "../data/dummy";

const router: IRouter = Router();

let students: Student[] = [...studentsData];
let nextId = students.length + 1;

router.get("/students", (req, res) => {
  const { search, status, classId, page = "1", limit = "20" } = req.query as Record<string, string>;

  let filtered = [...students];

  if (search) {
    const q = search.toLowerCase();
    filtered = filtered.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.email.toLowerCase().includes(q) ||
        s.guardianName.toLowerCase().includes(q) ||
        s.className.toLowerCase().includes(q),
    );
  }

  if (status) {
    filtered = filtered.filter((s) => s.status === status);
  }

  if (classId) {
    filtered = filtered.filter((s) => s.classId === classId);
  }

  const total = filtered.length;
  const pageNum = parseInt(page, 10);
  const limitNum = parseInt(limit, 10);
  const start = (pageNum - 1) * limitNum;
  const data = filtered.slice(start, start + limitNum);

  res.json({ data, total, page: pageNum, limit: limitNum });
});

router.post("/students", (req, res) => {
  const body = req.body as Omit<Student, "id">;
  const cls = classes.find((c) => c.id === body.classId);
  const newStudent: Student = {
    ...body,
    id: `s-${++nextId}`,
    className: cls?.name ?? body.classId,
    attendance: 100,
  };
  students.push(newStudent);
  res.status(201).json(newStudent);
});

router.get("/students/:id", (req, res) => {
  const student = students.find((s) => s.id === req.params["id"]);
  if (!student) {
    res.status(404).json({ error: "Student not found" });
    return;
  }
  res.json(student);
});

router.patch("/students/:id", (req, res) => {
  const idx = students.findIndex((s) => s.id === req.params["id"]);
  if (idx === -1) {
    res.status(404).json({ error: "Student not found" });
    return;
  }
  const updates = req.body as Partial<Student>;
  if (updates.classId) {
    const cls = classes.find((c) => c.id === updates.classId);
    if (cls) updates.className = cls.name;
  }
  students[idx] = { ...students[idx]!, ...updates };
  res.json(students[idx]);
});

router.delete("/students/:id", (req, res) => {
  const idx = students.findIndex((s) => s.id === req.params["id"]);
  if (idx === -1) {
    res.status(404).json({ error: "Student not found" });
    return;
  }
  students.splice(idx, 1);
  res.status(204).send();
});

export default router;
