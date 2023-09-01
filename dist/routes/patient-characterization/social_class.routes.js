"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const social_class_controller_1 = require("../../controllers/patient-characterization/social_class.controller");
const router = (0, express_1.Router)();
router.get('/', social_class_controller_1.getSocialClasses);
router.get('/id/:id', social_class_controller_1.getSocialClassById);
exports.default = router;
