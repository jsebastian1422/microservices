import { Router } from "express";
import { getStates, getStateById, getStateByCountry } from "../../controllers/patient-characterization/state.controller";
const router = Router();

router.get('/', getStates);
router.get('/id/:id', getStateById);
router.get('/country/:tipo_pais_id', getStateByCountry);

export default router;