"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPatientByIdentification = exports.getPatientById = exports.getPatients = void 0;
const patient_model_1 = __importDefault(require("../../models/patient-characterization/patient.model"));
const gender_identity_model_1 = __importDefault(require("../../models/patient-characterization/gender_identity.model"));
const gender_model_1 = __importDefault(require("../../models/patient-characterization/gender.model"));
const patien_detail_model_1 = __importDefault(require("../../models/patient-characterization/patien_detail.model"));
const getPatients = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const patient = yield patient_model_1.default.findAll();
        return res.status(200).json(patient).end();
    }
    catch (error) {
        next(error);
    }
});
exports.getPatients = getPatients;
const getPatientById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const patient = yield patient_model_1.default.findByPk(id);
        return res.status(200).json(patient).end();
    }
    catch (error) {
        next(error);
    }
});
exports.getPatientById = getPatientById;
const getPatientByIdentification = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { tipo_id_paciente, paciente_id } = req.params;
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
        const patient = yield patient_model_1.default.findOne({
            include: [
                {
                    model: patien_detail_model_1.default,
                    where: {
                        tipo_id_paciente,
                        paciente_id
                    }
                },
                {
                    model: gender_model_1.default
                },
                {
                    model: gender_identity_model_1.default
                }
            ],
            where: {
                tipo_id_paciente,
                paciente_id
            }
        });
        return res.status(200).json(patient).end();
    }
    catch (error) {
        next(error);
    }
});
exports.getPatientByIdentification = getPatientByIdentification;
