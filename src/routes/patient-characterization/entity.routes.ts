import { Router } from "express";
import { getEntities, getEntitiesList, getEntityById } from "../../controllers/patient-characterization/entity.controller";
const router = Router();

router.get('/', getEntities);
router.get('/id/:id', getEntityById);
router.get('/list/status/:status', getEntitiesList);

export default router;