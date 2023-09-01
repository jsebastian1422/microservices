import { Request, Response } from "express";
import City from "../../models/patient-characterization/city.model"; 

export const getCities = async (req: Request, res: Response, next) => {
    try {
        const city = await City.findAll({
            order: [
                ["municipio", "ASC"]
            ]
        });
        return res.status(200).json(city).end();
    } catch (error) {
        next(error);
    }
}

export const getCityById = async (req: Request, res: Response, next) => {
    try {
        const { id } = req.params;
        const city:City | null = await City.findByPk(id);
        return res.status(200).json(city).end();
    } catch (error) {
        next(error);
    }
}

export const getCityByState = async (req: Request, res: Response, next) => {
    try {
        const { tipo_dpto_id } = req.params;
        if (!tipo_dpto_id) {
            return res.status(400).json({
                        message: "tipo_dpto_id is required"
            }).end();
        }
        const city = await City.findAll({
            order: [
                ["municipio", "ASC"]
            ],
            where: {
                tipo_dpto_id
            }
        });
        return res.status(200).json(city).end();
    } catch (error) {
        next(error);
    }
}