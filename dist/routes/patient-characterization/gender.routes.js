"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gender_controller_1 = require("../../controllers/patient-characterization/gender.controller");
const router = (0, express_1.Router)();
router.get('/', gender_controller_1.getGenders);
router.get('/id/:id', gender_controller_1.getGenderById);
exports.default = router;
