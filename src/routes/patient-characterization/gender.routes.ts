import { Router } from "express";
import { getGenders, getGenderById } from "../../controllers/patient-characterization/gender.controller";
const router = Router();

router.get('/', getGenders);
router.get('/id/:id', getGenderById);

export default router;