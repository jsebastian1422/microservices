"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const type_house_controller_1 = require("../../controllers/patient-characterization/type_house.controller");
const router = (0, express_1.Router)();
router.get('/', type_house_controller_1.getTypeHouses);
router.get('/id/:id', type_house_controller_1.getTypeHouseById);
exports.default = router;
