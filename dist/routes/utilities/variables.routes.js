"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const variables_controller_1 = require("../../models/utilities/variables.controller");
const router = (0, express_1.Router)();
router.get('/', variables_controller_1.getVariables);
router.get('/modulo/:modulo/modulo_tipo/:modulo_tipo/variable/:variable', variables_controller_1.getVariablesByModule); //
router.get('/variable/:variable', variables_controller_1.getVariablesByVariable); //
exports.default = router;
