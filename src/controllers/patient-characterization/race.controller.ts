import { Request, Response } from "express";
import Race from "../../models/patient-characterization/race.model";

export const getRaces = async (req: Request, res: Response, next) => {
    try {
        const races = await Race.findAll({
            order: [
                ["descripcion", "ASC"]
            ]
        });
        return res.status(200).json(races).end();
    } catch (error) {
        next(error);
    }
}

export const getRaceById = async (req: Request, res: Response, next) => {
    try {
        const { id } = req.params;
        const race:Race | null = await Race.findByPk(id);
        return res.status(200).json(race).end();
    } catch (error) {
        next(error);
    }
}