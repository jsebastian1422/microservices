import { Router } from "express";
import { getTypeHouses, getTypeHouseById } from "../../controllers/patient-characterization/type_house.controller";
const router = Router();

router.get('/', getTypeHouses);
router.get('/id/:id', getTypeHouseById);

export default router;