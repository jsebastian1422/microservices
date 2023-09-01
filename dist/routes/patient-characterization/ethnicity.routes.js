"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ethnicity_controller_1 = require("../../controllers/patient-characterization/ethnicity.controller");
const router = (0, express_1.Router)();
router.get('/', ethnicity_controller_1.getEthicities);
router.get('/id/:id', ethnicity_controller_1.getEthnicityById);
exports.default = router;
