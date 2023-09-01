import { Router } from "express";
import { getAffiliates, getAffiliateById, getAffiliateByIdentification, createAffiliate } from "../../controllers/patient-characterization/affiliate.controller";
const router = Router();
router.get('/', getAffiliates);
router.get('/id/:id', getAffiliateById);
router.get('/type/:afiliado_tipo_id/doc/:afiliado_id', getAffiliateByIdentification); //
router.post('/', createAffiliate);

export default router;
// router.get('/:id', getAffiliateById);