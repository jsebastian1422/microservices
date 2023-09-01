import { Request, Response } from "express";
import CellCodes from "../../models/patient-characterization/cell_codes.model";

export const getCellCodes = async (req: Request, res: Response, next) => {
    try {
        const cellCodes = await CellCodes.findAll();
        return res.status(200).json(cellCodes).end();
    } catch (error) {
        next(error);
    }
}

export const getCellCodeById = async (req: Request, res: Response, next) => {
    try {
        const { id } = req.params;
        const cellCodes:CellCodes | null = await CellCodes.findByPk(id);
        return res.status(200).json(cellCodes).end();
    } catch (error) {
        next(error);
    }
}