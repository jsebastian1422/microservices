import { Request, Response } from "express";
import State from "../../models/patient-characterization/state.model";
import Country from "../../models/patient-characterization/country.model";

export const getStates = async (req: Request, res: Response, next) => {
    try {
        const state = await State.findAll({
            order: [
                ["departamento", "ASC"]
            ]
        });
        return res.status(200).json(state).end();
    } catch (error) {
        next(error);
    }
}

export const getStateById = async (req: Request, res: Response, next) => {
    try {
        const { id } = req.params;
        const state:State | null = await State.findByPk(id);
        return res.status(200).json(state).end();
    } catch (error) {
        next(error);
    }
}

export const getStateByCountry = async (req: Request, res: Response, next) => {
    try {
        const { tipo_pais_id } = req.params;
        if (!tipo_pais_id) {
            return res.status(400).json({
                        message: "tipo_pais_id is required"
            }).end();
        }
        const state = await State.findAll({
            order: [
                ["departamento", "ASC"]
            ],
            where: {
                tipo_pais_id
            }
        });
        return res.status(200).json(state).end();
    } catch (error) {
        next(error);
    }
}