import { Router, type IRouter } from "express";
import { teachers as teachersData } from "../data/dummy";
import type { Teacher } from "../data/dummy";

const router: IRouter = Router();

let teachers: Teacher[] = [...teachersData];
let nextId = teachers.length + 1;

router.get("/teachers", (req, res) => {
  const { search, page = "1", limit = "20" } = req.query as Record<string, string>;

  let filtered = [...teachers];

  if (search) {
    const q = search.toLowerCase();
    filtered = filtered.filter(
      (t) =>
        t.name.toLowerCase().includes(q) ||
        t.email.toLowerCase().includes(q) ||
        t.qualification.toLowerCase().includes(q) ||
        t.subjects.some((s) => s.toLowerCase().includes(q)),
    );
  }

  const total = filtered.length;
  const pageNum = parseInt(page, 10);
  const limitNum = parseInt(limit, 10);
  const start = (pageNum - 1) * limitNum;
  const data = filtered.slice(start, start + limitNum);

  res.json({ data, total, page: pageNum, limit: limitNum });
});

router.post("/teachers", (req, res) => {
  const body = req.body as Omit<Teacher, "id">;
  const newTeacher: Teacher = {
    ...body,
    id: `t-${++nextId}`,
  };
  teachers.push(newTeacher);
  res.status(201).json(newTeacher);
});

router.get("/teachers/:id", (req, res) => {
  const teacher = teachers.find((t) => t.id === req.params["id"]);
  if (!teacher) {
    res.status(404).json({ error: "Teacher not found" });
    return;
  }
  res.json(teacher);
});

router.patch("/teachers/:id", (req, res) => {
  const idx = teachers.findIndex((t) => t.id === req.params["id"]);
  if (idx === -1) {
    res.status(404).json({ error: "Teacher not found" });
    return;
  }
  teachers[idx] = { ...teachers[idx]!, ...(req.body as Partial<Teacher>) };
  res.json(teachers[idx]);
});

router.delete("/teachers/:id", (req, res) => {
  const idx = teachers.findIndex((t) => t.id === req.params["id"]);
  if (idx === -1) {
    res.status(404).json({ error: "Teacher not found" });
    return;
  }
  teachers.splice(idx, 1);
  res.status(204).send();
});

export default router;
