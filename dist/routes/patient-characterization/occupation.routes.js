"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const occupation_controller_1 = require("../../controllers/patient-characterization/occupation.controller");
const router = (0, express_1.Router)();
router.get('/', occupation_controller_1.getOccupations);
router.get('/id/:id', occupation_controller_1.getOccupationById);
exports.default = router;
