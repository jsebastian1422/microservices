import { Request, Response } from "express";
import Entity from "../../models/patient-characterization/entity.model";


export const getEntities = async (req: Request, res: Response, next) => {
    try {
        const entity = await Entity.findAll({
            order: [
                ["plan_id", "ASC"]
            ]
        });
        return res.status(200).json(entity).end();
    } catch (error) {
        next(error);
    }
}

export const getEntityById = async (req: Request, res: Response, next) => {
    try {
        const { id } = req.params;
        const entity:Entity | null = await Entity.findByPk(id);
        return res.status(200).json(entity).end();
    } catch (error) {
        next(error);
    }
}

export const getEntitiesList = async (req: Request, res: Response, next) => {
    try {
        const { status } = req.params;
        const entity = await Entity.findAll({
            attributes: ['plan_id', 'plan_descripcion'],
            order: [
                ["plan_id", "ASC"]
            ],
            where: {
                estado: status
            }
        });
        return res.status(200).json(entity).end();
    } catch (error) {
        next(error);
    }
}