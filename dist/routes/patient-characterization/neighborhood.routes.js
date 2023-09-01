"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const neighborhood_controller_1 = require("../../controllers/patient-characterization/neighborhood.controller");
const router = (0, express_1.Router)();
router.get('/', neighborhood_controller_1.getNeighborhoods);
router.get('/id/:id', neighborhood_controller_1.getNeighborhoodById);
router.get('/country/:tipo_pais_id/state/:tipo_dpto_id/city/:tipo_mpio_id/commune/:tipo_comuna_id', neighborhood_controller_1.getNeighborhoodByFilters);
exports.default = router;
