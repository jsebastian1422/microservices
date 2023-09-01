import { Router } from "express";
import { getRaces, getRaceById } from "../../controllers/patient-characterization/race.controller";
const router = Router();
router.get('/', getRaces);
router.get('/id/:id', getRaceById);

export default router;