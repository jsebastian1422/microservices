import { Request, Response } from "express";
import AffiliateTypeId from "../../models/patient-characterization/affiliate_type_id.model";

export const getAffiliateTypeById = async (req: Request, res: Response, next) => {
    try {
        const { id } = req.params;
        const affiliateTypeId:AffiliateTypeId | null = await AffiliateTypeId.findByPk(id);
        return res.status(200).json(affiliateTypeId).end();
    } catch (error) {
        next(error);
    }
}

export const getAffiliateTypes = async (req: Request, res: Response, next) => {
    try {
        const affiliateTypes = await AffiliateTypeId.findAll({
            order: [
                ["descripcion_tipo_id", "ASC"]
            ]
        });
        return res.status(200).json(affiliateTypes).end();
    } catch (error) {
        next(error); 
    }
}