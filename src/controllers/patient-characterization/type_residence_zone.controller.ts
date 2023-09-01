import { Request, Response } from "express";
import TypeResidenceZone from "../../models/patient-characterization/type_residence_zone.model";

export const getTypeResidenceZones = async (req: Request, res: Response, next) => {
    try {
        const typeResidenceZone = await TypeResidenceZone.findAll({
            order: [
                ["descripcion", "ASC"]
            ]
        });
        return res.status(200).json(typeResidenceZone).end();
    } catch (error) {
        next(error);
    }
}

export const getTypeResidenceZonesById = async (req: Request, res: Response, next) => {
    try {
        const { id } = req.params;
        const typeResidenceZone:TypeResidenceZone | null = await TypeResidenceZone.findByPk(id);
        return res.status(200).json(typeResidenceZone).end();
    } catch (error) {
        next(error);
    }
}