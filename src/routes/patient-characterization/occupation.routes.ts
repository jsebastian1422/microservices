import { Router } from "express";
import { getOccupations, getOccupationById } from "../../controllers/patient-characterization/occupation.controller";
const router = Router();

router.get('/', getOccupations);
router.get('/id/:id', getOccupationById);

export default router;