import { Router } from "express";
import { getCommuneByFilters, getCommuneById, getCommunes } from "../../controllers/patient-characterization/commune.controller";

const router = Router();

router.get('/', getCommunes);
router.get('/id/:id', getCommuneById);
router.get('/country/:tipo_pais_id/state/:tipo_dpto_id/city/:tipo_mpio_id', getCommuneByFilters);

export default router;