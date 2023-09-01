import { Request, Response } from "express";
import SexualOrientation from "../../models/patient-characterization/sexual_orientation.model";

export const getSexualOrientations = async (req: Request, res: Response, next) => { 
    try {
        const sexualOrientation = await SexualOrientation.findAll({
            order: [
                ["descripcion", "ASC"]
            ]
        });
        return res.status(200).json(sexualOrientation).end();
    } catch (error) {
        next(error);
    }
}

export const getSexualOrientationById = async (req: Request, res: Response, next) => {
    try {
        const { id } = req.params;
        const sexualOrientation:SexualOrientation | null = await SexualOrientation.findByPk(id);
        return res.status(200).json(sexualOrientation).end();
    } catch (error) {
        next(error);
    }
}