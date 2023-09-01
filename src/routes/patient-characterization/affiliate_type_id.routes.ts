import { Router } from "express";
import {getAffiliateTypeById, getAffiliateTypes} from "../../controllers/patient-characterization/affiliate_type_id.controller";
import { validate, Joi } from "express-validation";
const router = Router();
const validation = {
    body: Joi.object({
        afiliado_tipo_id: Joi.string()
            .max(2)
            .required(),
        descripcion_tipo_id: Joi.string()
            .max(40)
            .required(),
        tipo_id_tercero: Joi.string()
            .max(3),
    })
}
router.get('/', getAffiliateTypes);
router.get('/:id', getAffiliateTypeById);
export default router; 