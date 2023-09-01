import { Request, Response } from "express";
import Variables from './variables.model';

export const getVariables = async (req: Request, res: Response, next) => {
    try {
        const variables = await Variables.findAll({
        });
        return res.status(200).json(variables).end();
    } catch (error) {
        next(error);
    }
}

export const getVariablesByModule = async(req: Request, res: Response, next) => {
    try {
        const { modulo, modulo_tipo, variable} = req.params;
        if (!variable) {
            return res.status(400).json({
                        message: "variable ID is required"
            }).end();
        }
        const variables:Variables | null = await Variables.findOne({
            where: {
                modulo,
                modulo_tipo,
                variable
            }
        });
        return res.status(200).json(variables).end();
    } catch (error) {
        next(error);
    }
}

export const getVariablesByVariable = async(req: Request, res: Response, next) => {
    try {
        const { variable } = req.params;
        if (!variable) {
            return res.status(400).json({
                        message: "variable ID is required"
            }).end();
        }
        const variables:Variables | null = await Variables.findOne({
            where: {
                variable
            }
        });
        return res.status(200).json(variables).end();
    } catch (error) {
        next(error);
    }
}