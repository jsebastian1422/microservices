"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const affiliate_controller_1 = require("../../controllers/patient-characterization/affiliate.controller");
const router = (0, express_1.Router)();
router.get('/', affiliate_controller_1.getAffiliates);
router.get('/id/:id', affiliate_controller_1.getAffiliateById);
router.get('/type/:afiliado_tipo_id/doc/:afiliado_id', affiliate_controller_1.getAffiliateByIdentification); //
router.post('/', affiliate_controller_1.createAffiliate);
exports.default = router;
// router.get('/:id', getAffiliateById);
