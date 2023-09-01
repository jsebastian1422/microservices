"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const affiliate_type_id_controller_1 = require("../../controllers/patient-characterization/affiliate_type_id.controller");
const express_validation_1 = require("express-validation");
const router = (0, express_1.Router)();
const validation = {
    body: express_validation_1.Joi.object({
        afiliado_tipo_id: express_validation_1.Joi.string()
            .max(2)
            .required(),
        descripcion_tipo_id: express_validation_1.Joi.string()
            .max(40)
            .required(),
        tipo_id_tercero: express_validation_1.Joi.string()
            .max(3),
    })
};
router.get('/', affiliate_type_id_controller_1.getAffiliateTypes);
router.get('/:id', affiliate_type_id_controller_1.getAffiliateTypeById);
exports.default = router;
