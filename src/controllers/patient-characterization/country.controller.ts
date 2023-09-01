import { Request, Response } from "express";
import Country from "../../models/patient-characterization/country.model";

export const getCountries = async (req: Request, res: Response, next) => {
    try {
        const contry = await Country.findAll({
            order: [
                ["valor", "ASC"]
            ]
        });
        return res.status(200).json(contry).end();
    } catch (error) {
        next(error);
    }
}

export const getCountryById = async (req: Request, res: Response, next) => {
    try {
        const { id } = req.params;
        const contry:Country | null = await Country.findByPk(id);
        return res.status(200).json(contry).end();
    } catch (error) {
        next(error);
    }
}