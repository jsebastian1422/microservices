import { Router } from "express";
import { getCountries, getCountryById } from "../../controllers/patient-characterization/country.controller";
const router = Router();

router.get('/', getCountries);
router.get('/id/:id', getCountryById);

export default router;