"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const marital_status_controller_1 = require("../../controllers/patient-characterization/marital_status.controller");
const router = (0, express_1.Router)();
router.get('/', marital_status_controller_1.getMaritalStatus);
router.get('/id/:id', marital_status_controller_1.getMaritalStatusById);
exports.default = router;
