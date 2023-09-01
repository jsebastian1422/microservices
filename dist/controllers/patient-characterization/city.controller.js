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
exports.getCityByState = exports.getCityById = exports.getCities = void 0;
const city_model_1 = __importDefault(require("../../models/patient-characterization/city.model"));
const getCities = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const city = yield city_model_1.default.findAll({
            order: [
                ["municipio", "ASC"]
            ]
        });
        return res.status(200).json(city).end();
    }
    catch (error) {
        next(error);
    }
});
exports.getCities = getCities;
const getCityById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const city = yield city_model_1.default.findByPk(id);
        return res.status(200).json(city).end();
    }
    catch (error) {
        next(error);
    }
});
exports.getCityById = getCityById;
const getCityByState = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { tipo_dpto_id } = req.params;
        if (!tipo_dpto_id) {
            return res.status(400).json({
                message: "tipo_dpto_id is required"
            }).end();
        }
        const city = yield city_model_1.default.findAll({
            order: [
                ["municipio", "ASC"]
            ],
            where: {
                tipo_dpto_id
            }
        });
        return res.status(200).json(city).end();
    }
    catch (error) {
        next(error);
    }
});
exports.getCityByState = getCityByState;
