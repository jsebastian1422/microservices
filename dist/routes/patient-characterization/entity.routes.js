"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const entity_controller_1 = require("../../controllers/patient-characterization/entity.controller");
const router = (0, express_1.Router)();
router.get('/', entity_controller_1.getEntities);
router.get('/id/:id', entity_controller_1.getEntityById);
router.get('/list/status/:status', entity_controller_1.getEntitiesList);
exports.default = router;
