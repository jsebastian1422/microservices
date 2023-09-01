import { Router } from "express";
import { getSocialClasses, getSocialClassById } from "../../controllers/patient-characterization/social_class.controller";
const router = Router();

router.get('/', getSocialClasses);
router.get('/id/:id', getSocialClassById);

export default router;