import { Request, Response } from "express";
import Commune from "../../models/patient-characterization/commune.model";

export const getCommunes = async (req: Request, res: Response, next) => {
    try {
        const commune = await Commune.findAll({
            order: [
                ["comuna", "ASC"]
            ]
        });
        return res.status(200).json(commune).end();
    } catch (error) {
        next(error);
    }
}

export const getCommuneById = async (req: Request, res: Response, next) => {
    try {
        const { id } = req.params;
        const commune:Commune | null = await Commune.findByPk(id);
        return res.status(200).json(commune).end();
    } catch (error) {
        next(error);
    }
}

export const getCommuneByFilters = async (req: Request, res: Response, next) => {
    try {
        const { tipo_pais_id, tipo_dpto_id, tipo_mpio_id } = req.params;
        if (!tipo_pais_id) {
            return res.status(400).json({
                        message: "Country ID is Required"
            }).end();
        }
        if (!tipo_dpto_id) {
            return res.status(400).json({
                        message: "State ID is required"
            }).end();
        }
        if (!tipo_mpio_id) {
            return res.status(400).json({
                        message: "City ID is required"
            }).end();
        }
        const commune = await Commune.findAll({
            where: {
                tipo_pais_id,
                tipo_dpto_id,
                tipo_mpio_id,
            }
        });
        return res.status(200).json(commune).end();
    } catch (error) {
        next(error);
    }
}

export default class CommuneController {
    
    constructor(){
    }

    public async  getCommune(tipo_pais_id: string, tipo_dpto_id: string, tipo_mpio_id: string, tipo_comuna_id: string)
    {
        try {
            const commune = await Commune.findOne({
                where: {
                    tipo_pais_id,
                    tipo_dpto_id,
                    tipo_mpio_id,
                    tipo_comuna_id
                }
            });
            return commune?.dataValues;
        } catch (error) {
            return error;
        }
        
    }
}
