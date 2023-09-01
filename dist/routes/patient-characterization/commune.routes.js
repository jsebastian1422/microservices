"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const commune_controller_1 = require("../../controllers/patient-characterization/commune.controller");
const router = (0, express_1.Router)();
router.get('/', commune_controller_1.getCommunes);
router.get('/id/:id', commune_controller_1.getCommuneById);
router.get('/country/:tipo_pais_id/state/:tipo_dpto_id/city/:tipo_mpio_id', commune_controller_1.getCommuneByFilters);
exports.default = router;
