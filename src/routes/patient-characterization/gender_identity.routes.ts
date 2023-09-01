import { Router } from "express";
import { getGenderIdentities, getGenderIdentityById } from "../../controllers/patient-characterization/gender_identity.controller";
const router = Router();
router.get('/', getGenderIdentities);
router.get('/id/:id', getGenderIdentityById);

export default router;
