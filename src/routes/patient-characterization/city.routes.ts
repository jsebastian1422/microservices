import { Router } from "express";
import { getCities, getCityById, getCityByState } from '../../controllers/patient-characterization/city.controller';

const router = Router();

router.get('/', getCities);
router.get('/id/:id', getCityById);
router.get('/state/:tipo_dpto_id', getCityByState);

export default router;