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
exports.getCommuneByFilters = exports.getCommuneById = exports.getCommunes = void 0;
const commune_model_1 = __importDefault(require("../../models/patient-characterization/commune.model"));
const getCommunes = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const commune = yield commune_model_1.default.findAll({
            order: [
                ["comuna", "ASC"]
            ]
        });
        return res.status(200).json(commune).end();
    }
    catch (error) {
        next(error);
    }
});
exports.getCommunes = getCommunes;
const getCommuneById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const commune = yield commune_model_1.default.findByPk(id);
        return res.status(200).json(commune).end();
    }
    catch (error) {
        next(error);
    }
});
exports.getCommuneById = getCommuneById;
const getCommuneByFilters = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
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
        const commune = yield commune_model_1.default.findAll({
            where: {
                tipo_pais_id,
                tipo_dpto_id,
                tipo_mpio_id,
            }
        });
        return res.status(200).json(commune).end();
    }
    catch (error) {
        next(error);
    }
});
exports.getCommuneByFilters = getCommuneByFilters;
class CommuneController {
    constructor() {
    }
    getCommune(tipo_pais_id, tipo_dpto_id, tipo_mpio_id, tipo_comuna_id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const commune = yield commune_model_1.default.findOne({
                    where: {
                        tipo_pais_id,
                        tipo_dpto_id,
                        tipo_mpio_id,
                        tipo_comuna_id
                    }
                });
                return commune === null || commune === void 0 ? void 0 : commune.dataValues;
            }
            catch (error) {
                return error;
            }
        });
    }
}
exports.default = CommuneController;
