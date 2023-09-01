import { Router } from "express";
import { getCellCodeById, getCellCodes } from "../../controllers/patient-characterization/cell_codes.controller";
const router = Router();

router.get('/', getCellCodes);
router.get('/id/:id', getCellCodeById);

export default router;