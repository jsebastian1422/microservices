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
exports.getNeighborhoodByFilters = exports.getNeighborhoodById = exports.getNeighborhoods = void 0;
const neighborhood_1 = __importDefault(require("../../models/patient-characterization/neighborhood"));
const getNeighborhoods = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const neighborhood = yield neighborhood_1.default.findAll();
        return res.status(200).json(neighborhood).end();
    }
    catch (error) {
        next(error);
    }
});
exports.getNeighborhoods = getNeighborhoods;
const getNeighborhoodById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const neighborhood = yield neighborhood_1.default.findByPk(id);
        return res.status(200).json(neighborhood).end();
    }
    catch (error) {
        next(error);
    }
});
exports.getNeighborhoodById = getNeighborhoodById;
const getNeighborhoodByFilters = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
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
        const neighborhood = yield neighborhood_1.default.findAll({
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
    }
    catch (error) {
        next(error);
    }
});
exports.getNeighborhoodByFilters = getNeighborhoodByFilters;
class NeighborHoodController {
    constructor() {
    }
    getNeighBorHood(tipo_pais_id, tipo_dpto_id, tipo_mpio_id, tipo_comuna_id, tipo_barrio_id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const neighborhood = yield neighborhood_1.default.findOne({
                    where: {
                        tipo_pais_id,
                        tipo_dpto_id,
                        tipo_mpio_id,
                        tipo_comuna_id,
                        tipo_barrio_id
                    }
                });
                return neighborhood === null || neighborhood === void 0 ? void 0 : neighborhood.dataValues;
            }
            catch (error) {
                return error;
            }
        });
    }
}
exports.default = NeighborHoodController;
