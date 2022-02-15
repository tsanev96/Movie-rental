import {Router} from 'express'
import moviesRouter from './movies';

const router = Router();

router.use(moviesRouter);

export default router;