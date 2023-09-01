import { Request, Response } from "express";
import SocialClass from "../../models/patient-characterization/social_class.model";

export const getSocialClasses = async (req: Request, res: Response, next) => {
    try {
        const socialClass = await SocialClass.findAll({
            order: [
                ["descripcion", "ASC"]
            ]
        });
        return res.status(200).json(socialClass).end();
    } catch (error) {
        next(error);
    }
}

export const getSocialClassById = async (req: Request, res: Response, next) => {
    try {
        const { id } = req.params;
        const socialClass:SocialClass | null = await SocialClass.findByPk(id);
        return res.status(200).json(socialClass).end();
    } catch (error) {
        next(error);
    }
}