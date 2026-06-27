import { Router, type IRouter } from "express";
import { classes } from "../data/dummy";

const router: IRouter = Router();

router.get("/classes", (_req, res) => {
  res.json(classes);
});

export default router;
