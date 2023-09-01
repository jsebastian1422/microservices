import { Request, Response } from "express";
import MaritalStatus from "../../models/patient-characterization/marital_status.model";

export const getMaritalStatus = async (req: Request, res: Response, next) => {
    try {
        const maritalStatus = await MaritalStatus.findAll({
            order: [
                ["indice_de_orden", "ASC"]
            ]
        });
        return res.status(200).json(maritalStatus).end();
    } catch (error) {
        next(error);
    }
}

export const getMaritalStatusById = async (req: Request, res: Response, next) => {
    try {
        const { id } = req.params;
        const maritalStatus:MaritalStatus | null = await MaritalStatus.findByPk(id);
        return res.status(200).json(maritalStatus).end();
    } catch (error) {
        next(error);
    }
}