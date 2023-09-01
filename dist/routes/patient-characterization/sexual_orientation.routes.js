"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sexual_orientation_controller_1 = require("../../controllers/patient-characterization/sexual_orientation.controller");
const router = (0, express_1.Router)();
router.get('/', sexual_orientation_controller_1.getSexualOrientations);
router.get('/id/:id', sexual_orientation_controller_1.getSexualOrientationById);
exports.default = router;
