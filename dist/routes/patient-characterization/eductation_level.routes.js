"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const education_level_controller_1 = require("../../controllers/patient-characterization/education_level.controller");
const router = (0, express_1.Router)();
router.get('/', education_level_controller_1.getEductationLevels);
router.get('/id/:id', education_level_controller_1.getEducationLevlById);
exports.default = router;
