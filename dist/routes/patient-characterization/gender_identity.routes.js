"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gender_identity_controller_1 = require("../../controllers/patient-characterization/gender_identity.controller");
const router = (0, express_1.Router)();
router.get('/', gender_identity_controller_1.getGenderIdentities);
router.get('/id/:id', gender_identity_controller_1.getGenderIdentityById);
exports.default = router;
