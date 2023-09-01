"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const city_controller_1 = require("../../controllers/patient-characterization/city.controller");
const router = (0, express_1.Router)();
router.get('/', city_controller_1.getCities);
router.get('/id/:id', city_controller_1.getCityById);
router.get('/state/:tipo_dpto_id', city_controller_1.getCityByState);
exports.default = router;
