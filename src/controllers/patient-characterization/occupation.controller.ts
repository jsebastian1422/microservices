import { Request, Response } from "express";
import Occupation from "../../models/patient-characterization/occupation.model";

export const getOccupations = async (req: Request, res: Response, next) => {
    try {
        const occupation = await Occupation.findAll({
            order: [
                ["indice_de_orden", "ASC"]
            ]
        });
        return res.status(200).json(occupation).end();
    } catch (error) {
        next(error);
    }
}

export const getOccupationById = async (req: Request, res: Response, next) => {
    try {
        const { id } = req.params;
        const occupation:Occupation | null = await Occupation.findByPk(id);
        return res.status(200).json(occupation).end();
    } catch (error) {
        next(error);
    }
}