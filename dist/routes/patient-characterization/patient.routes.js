"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const patient_controller_1 = require("../../controllers/patient-characterization/patient.controller");
const router = (0, express_1.Router)();
const validation = {};
router.get('/', patient_controller_1.getPatients);
router.get('/id/:id', patient_controller_1.getPatientById);
router.get('/type/:tipo_id_paciente/doc/:paciente_id', patient_controller_1.getPatientByIdentification); //
exports.default = router;
