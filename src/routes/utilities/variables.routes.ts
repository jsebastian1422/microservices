import { Router } from "express";
import { getVariables, getVariablesByModule, getVariablesByVariable } from "../../models/utilities/variables.controller";

const router = Router();
router.get('/', getVariables);
router.get('/modulo/:modulo/modulo_tipo/:modulo_tipo/variable/:variable', getVariablesByModule); //
router.get('/variable/:variable', getVariablesByVariable); //
export default router;