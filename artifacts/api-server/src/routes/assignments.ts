import { Router, type IRouter } from "express";
import { assignments as assignmentsData, classes } from "../data/dummy";
import type { Assignment } from "../data/dummy";

const router: IRouter = Router();

let assignments: Assignment[] = [...assignmentsData];
let nextId = assignments.length + 1;

router.get("/assignments", (req, res) => {
  const { search, status, classId, page = "1", limit = "20" } = req.query as Record<string, string>;

  let filtered = [...assignments];

  if (search) {
    const q = search.toLowerCase();
    filtered = filtered.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        a.description.toLowerCase().includes(q) ||
        a.assignedTo.toLowerCase().includes(q) ||
        (a.subject?.toLowerCase().includes(q) ?? false),
    );
  }

  if (status) {
    filtered = filtered.filter((a) => a.status === status);
  }

  if (classId) {
    filtered = filtered.filter((a) => a.classId === classId);
  }

  const total = filtered.length;
  const pageNum = parseInt(page, 10);
  const limitNum = parseInt(limit, 10);
  const start = (pageNum - 1) * limitNum;
  const data = filtered.slice(start, start + limitNum);

  res.json({ data, total, page: pageNum, limit: limitNum });
});

router.post("/assignments", (req, res) => {
  const body = req.body as Omit<Assignment, "id" | "createdAt" | "className">;
  const cls = classes.find((c) => c.id === body.classId);
  const newAssignment: Assignment = {
    ...body,
    id: `a-${++nextId}`,
    className: cls?.name ?? body.classId,
    createdAt: new Date().toISOString(),
  };
  assignments.push(newAssignment);
  res.status(201).json(newAssignment);
});

router.get("/assignments/:id", (req, res) => {
  const assignment = assignments.find((a) => a.id === req.params["id"]);
  if (!assignment) {
    res.status(404).json({ error: "Assignment not found" });
    return;
  }
  res.json(assignment);
});

router.patch("/assignments/:id", (req, res) => {
  const idx = assignments.findIndex((a) => a.id === req.params["id"]);
  if (idx === -1) {
    res.status(404).json({ error: "Assignment not found" });
    return;
  }
  const updates = req.body as Partial<Assignment>;
  if (updates.classId) {
    const cls = classes.find((c) => c.id === updates.classId);
    if (cls) updates.className = cls.name;
  }
  assignments[idx] = { ...assignments[idx]!, ...updates };
  res.json(assignments[idx]);
});

router.delete("/assignments/:id", (req, res) => {
  const idx = assignments.findIndex((a) => a.id === req.params["id"]);
  if (idx === -1) {
    res.status(404).json({ error: "Assignment not found" });
    return;
  }
  assignments.splice(idx, 1);
  res.status(204).send();
});

export default router;
