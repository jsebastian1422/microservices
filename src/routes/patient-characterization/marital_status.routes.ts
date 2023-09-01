import { Router } from "express";
import { getMaritalStatusById, getMaritalStatus } from "../../controllers/patient-characterization/marital_status.controller";
const router = Router();

router.get('/', getMaritalStatus);
router.get('/id/:id', getMaritalStatusById);

export default router;