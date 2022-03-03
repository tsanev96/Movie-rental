import { Router } from "express";
import moviesRouter from "./movies";
import genresRouter from "./genres";

const router = Router();

router.use(moviesRouter);
router.use(genresRouter);

export default router;
