import { Request, Response } from "express";
import EducationLevel from "../../models/patient-characterization/education_level.model";

export const getEductationLevels = async (req: Request, res: Response, next) => {
    try {
        const educationLevel = await EducationLevel.findAll({
            order: [
                ["descripcion", "ASC"]
            ]
        });
        return res.status(200).json(educationLevel).end();
    } catch (error) {
        next(error);
    }
}

export const getEducationLevlById = async (req: Request, res: Response, next) => {
    try {
        const { id } = req.params;
        const educationLevel:EducationLevel | null = await EducationLevel.findByPk(id);
        return res.status(200).json(educationLevel).end();
    } catch (error) {
        next(error);
    }
}