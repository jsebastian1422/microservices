"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const race_controller_1 = require("../../controllers/patient-characterization/race.controller");
const router = (0, express_1.Router)();
router.get('/', race_controller_1.getRaces);
router.get('/id/:id', race_controller_1.getRaceById);
exports.default = router;
