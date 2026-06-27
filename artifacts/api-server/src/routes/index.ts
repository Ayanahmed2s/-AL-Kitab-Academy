import { Router, type IRouter } from "express";
import healthRouter from "./health";
import authRouter from "./auth";
import dashboardRouter from "./dashboard";
import studentsRouter from "./students";
import teachersRouter from "./teachers";
import assignmentsRouter from "./assignments";
import lessonsRouter from "./lessons";
import classesRouter from "./classes";

const router: IRouter = Router();

router.use(healthRouter);
router.use(authRouter);
router.use(dashboardRouter);
router.use(studentsRouter);
router.use(teachersRouter);
router.use(assignmentsRouter);
router.use(lessonsRouter);
router.use(classesRouter);

export default router;
