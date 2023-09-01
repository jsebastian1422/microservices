import { Router } from "express";
import { getEthicities, getEthnicityById } from "../../controllers/patient-characterization/ethnicity.controller";
const router = Router();

router.get('/', getEthicities);
router.get('/id/:id', getEthnicityById);

export default router;