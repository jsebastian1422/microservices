import { Router } from "express";
import { validate, Join } from "express-validation";
import { getPatients, getPatientById, getPatientByIdentification } from "../../controllers/patient-characterization/patient.controller";

const router = Router();
const validation = {}

router.get('/', getPatients);
router.get('/id/:id', getPatientById);
router.get('/type/:tipo_id_paciente/doc/:paciente_id', getPatientByIdentification); //

export default router;