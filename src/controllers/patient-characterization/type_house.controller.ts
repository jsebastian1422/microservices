import { Request, Response } from "express";
import TypeHouse from "../../models/patient-characterization/type_house.model";

export const getTypeHouses = async (req: Request, res: Response, next) => {
    try {
        const typeHouse = await TypeHouse.findAll({
            order: [
                ["descripcion", "ASC"]
            ]
        });
        return res.status(200).json(typeHouse).end();
    } catch (error) {
        next(error);
    }
}

export const getTypeHouseById = async (req: Request, res: Response, next) => {
    try {
        const { id } = req.params;
        const typeHouse:TypeHouse | null = await TypeHouse.findByPk(id);
        return res.status(200).json(typeHouse).end();
    } catch (error) {
        next(error);
    }
}