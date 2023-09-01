"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cell_codes_controller_1 = require("../../controllers/patient-characterization/cell_codes.controller");
const router = (0, express_1.Router)();
router.get('/', cell_codes_controller_1.getCellCodes);
router.get('/id/:id', cell_codes_controller_1.getCellCodeById);
exports.default = router;
