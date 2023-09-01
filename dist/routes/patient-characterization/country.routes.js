"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const country_controller_1 = require("../../controllers/patient-characterization/country.controller");
const router = (0, express_1.Router)();
router.get('/', country_controller_1.getCountries);
router.get('/id/:id', country_controller_1.getCountryById);
exports.default = router;
