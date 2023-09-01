import { Request, Response } from "express";
import Gender from '../../models/patient-characterization/gender.model';

export const getGenders = async (req: Request, res: Response, next) => {
    try {
        const genders = await Gender.findAll({
            order: [
                ["descripcion", "ASC"]
            ]
        });
        return res.status(200).json(genders).end();
    } catch (error) {
        next(error);
    }
}

export const getGenderById = async (req: Request, res: Response, next) => {
    try {
        const { id } = req.params;
        const gender:Gender | null = await Gender.findByPk(id);
        return res.status(200).json(gender).end();
    } catch (error) {
        next(error);
    }
}