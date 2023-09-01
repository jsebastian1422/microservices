import { Router } from "express";
import { getEductationLevels, getEducationLevlById } from "../../controllers/patient-characterization/education_level.controller";
const router = Router();

router.get('/', getEductationLevels);
router.get('/id/:id', getEducationLevlById);

export default router;