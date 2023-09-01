"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const state_controller_1 = require("../../controllers/patient-characterization/state.controller");
const router = (0, express_1.Router)();
router.get('/', state_controller_1.getStates);
router.get('/id/:id', state_controller_1.getStateById);
router.get('/country/:tipo_pais_id', state_controller_1.getStateByCountry);
exports.default = router;
