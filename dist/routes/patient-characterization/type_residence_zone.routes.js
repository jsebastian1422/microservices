"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const type_residence_zone_controller_1 = require("../../controllers/patient-characterization/type_residence_zone.controller");
const router = (0, express_1.Router)();
router.get('/', type_residence_zone_controller_1.getTypeResidenceZones);
router.get('/id/:id', type_residence_zone_controller_1.getTypeResidenceZonesById);
exports.default = router;
