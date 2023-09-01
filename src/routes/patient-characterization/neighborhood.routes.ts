import { Router } from "express";
import { getNeighborhoods, getNeighborhoodById, getNeighborhoodByFilters } from "../../controllers/patient-characterization/neighborhood.controller";

const router = Router();

router.get('/', getNeighborhoods);
router.get('/id/:id', getNeighborhoodById);
router.get('/country/:tipo_pais_id/state/:tipo_dpto_id/city/:tipo_mpio_id/commune/:tipo_comuna_id', getNeighborhoodByFilters);

export default router;