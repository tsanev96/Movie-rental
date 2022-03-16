import { Router } from "express";
import moviesRouter from "./movies";
import genresRouter from "./genres";
import nav from "./nav";

const router = Router();

router.use(moviesRouter);
router.use(genresRouter);
router.use(nav);

export default router;
