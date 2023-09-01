import { Router } from "express";
import { getSexualOrientations, getSexualOrientationById } from "../../controllers/patient-characterization/sexual_orientation.controller";
const router = Router();

router.get('/', getSexualOrientations);
router.get('/id/:id', getSexualOrientationById);

export default router;