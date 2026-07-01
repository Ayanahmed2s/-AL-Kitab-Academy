import { Router, type IRouter } from "express";

const router: IRouter = Router();

const MOCK_USERS = [
  { id: "u-1", name: "Admin User", email: "admin@madrasa.edu", password: "admin123", role: "Admin" },
  { id: "u-2", name: "Maulana Abdul Rahman", email: "teacher@madrasa.edu", password: "teacher123", role: "Teacher" },
  { id: "u-3", name: "Ali Malik", email: "guardian@madrasa.edu", password: "guardian123", role: "Guardian" },
];

router.post("/auth/login", (req, res) => {
  const { email, password } = req.body as { email: string; password: string };

  const user = MOCK_USERS.find((u) => u.email === email && u.password === password);

  if (!user) {
    res.status(401).json({ error: "Invalid email or password" });
    return;
  }

  res.json({
    token: `mock-token-${user.id}-${Date.now()}`,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
  });
});

export default router;
