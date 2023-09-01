import { Request, Response } from "express";
import GenderIdentity from "../../models/patient-characterization/gender_identity.model";

export const getGenderIdentities = async (req: Request, res: Response, next) => {
    try {
        const genderIdentity = await GenderIdentity.findAll({
            order: [
                ["descripcion", "ASC"]
            ]
        });
        return res.status(200).json(genderIdentity).end();
    } catch (error) {
        next(error);
    }
}

export const getGenderIdentityById = async (req: Request, res: Response, next) => {
    try {
        const { id } = req.params;
        const genderIdentity:GenderIdentity | null = await GenderIdentity.findByPk(id);
        return res.status(200).json(genderIdentity).end();
    } catch (error) {
        next(error);
    }
}