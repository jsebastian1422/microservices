import { Request, Response } from "express";
import Ethnicity from "../../models/patient-characterization/ethnicity.model";

export const getEthicities = async (req: Request, res: Response, next) => {
    try {
        const ethnicity = await Ethnicity.findAll({
            order: [
                ["descripcion", "ASC"]
            ]
        });
        return res.status(200).json(ethnicity).end();
    } catch (error) {
        next(error);
    }
}

export const getEthnicityById = async (req: Request, res: Response, next) => {
    try {
        const { id } = req.params;
        const ethnicity:Ethnicity | null = await Ethnicity.findByPk(id);
        return res.status(200).json(ethnicity).end();
    } catch (error) {
        next(error);
    }
}