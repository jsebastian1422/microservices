import { Router } from "express";
import { getTypeResidenceZones, getTypeResidenceZonesById } from "../../controllers/patient-characterization/type_residence_zone.controller";
const router = Router();

router.get('/', getTypeResidenceZones);
router.get('/id/:id', getTypeResidenceZonesById);

export default router;