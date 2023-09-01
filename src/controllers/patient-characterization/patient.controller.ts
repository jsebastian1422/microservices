import { Request, Response } from "express";
import Patient from "../../models/patient-characterization/patient.model";
import GenderIdentity from "../../models/patient-characterization/gender_identity.model";
import Gender from "../../models/patient-characterization/gender.model";
import PatientDetail from "../../models/patient-characterization/patien_detail.model";

export const getPatients = async (req: Request, res: Response, next) => {
    try {
        const patient = await Patient.findAll();
        return res.status(200).json(patient).end();
    } catch (error) {
        next(error);
    }
}

export const getPatientById = async (req: Request, res: Response, next) => {
    try {
        const { id } = req.params;
        const patient:Patient | null = await Patient.findByPk(id);
        return res.status(200).json(patient).end();
    } catch (error) {
        next(error);
    }
}

export const getPatientByIdentification = async (req: Request, res: Response, next) => {
    const { tipo_id_paciente, paciente_id} = req.params;
    try {
        if (!tipo_id_paciente) {
            return res.status(400).json({
                        message: "Paciente Tipo ID is required"
            }).end();
        }
    
        if (!paciente_id) {
            return res.status(400).json({
                        message: "Paciente ID is required"
            }).end();
        }
        const patient:Patient | null = await Patient.findOne({
            include: [
                {
                    model: PatientDetail,
                    where: {
                        tipo_id_paciente,
                        paciente_id
                    }
                },
                {
                    model: Gender
                },
                {
                    model: GenderIdentity
                }
            ],
            where: {
                tipo_id_paciente,
                paciente_id
            }
        });
        return res.status(200).json(patient).end();
    } catch (error) {
        next(error);        
    }
}