import { Request, Response } from "express";
import NeighborHood from '../../models/patient-characterization/neighborhood';

export const getNeighborhoods = async (req: Request, res: Response, next) => {
    try {
        const neighborhood = await NeighborHood.findAll();
        return res.status(200).json(neighborhood).end();
    } catch (error) {
        next(error);
    }
}

export const getNeighborhoodById = async (req: Request, res: Response, next) => {
    try {
        const { id } = req.params;
        const neighborhood:NeighborHood | null = await NeighborHood.findByPk(id);
        return res.status(200).json(neighborhood).end();
    } catch (error) {
        next(error);
    }
}

export const getNeighborhoodByFilters = async (req: Request, res: Response, next) => {
    try {
        const { tipo_pais_id, tipo_dpto_id, tipo_mpio_id, tipo_comuna_id } = req.params;
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
        if (!tipo_comuna_id) {
            return res.status(400).json({
                        message: "Commune ID is required"
            }).end();
        }
        const neighborhood = await NeighborHood.findAll({
            order: [
                ["barrio", "ASC"]
            ],
            where: {
                tipo_pais_id,
                tipo_dpto_id,
                tipo_mpio_id,
                tipo_comuna_id,
            }
        });
        return res.status(200).json(neighborhood).end();
    } catch (error) {
        next(error);
    }
}

export default class NeighborHoodController {

    constructor(){
    }

    public async getNeighBorHood(
        tipo_pais_id: string,
        tipo_dpto_id: string,
        tipo_mpio_id: string,
        tipo_comuna_id: string,
        tipo_barrio_id: string,
    ) {
        try {
            const neighborhood = await NeighborHood.findOne({
                where: {
                    tipo_pais_id,
                    tipo_dpto_id,
                    tipo_mpio_id,
                    tipo_comuna_id,
                    tipo_barrio_id
                }
            });
            return neighborhood?.dataValues;
        } catch (error) {
            return error;
        }
        
    }
}