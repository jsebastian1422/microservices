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
exports.getStateByCountry = exports.getStateById = exports.getStates = void 0;
const state_model_1 = __importDefault(require("../../models/patient-characterization/state.model"));
const getStates = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const state = yield state_model_1.default.findAll({
            order: [
                ["departamento", "ASC"]
            ]
        });
        return res.status(200).json(state).end();
    }
    catch (error) {
        next(error);
    }
});
exports.getStates = getStates;
const getStateById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const state = yield state_model_1.default.findByPk(id);
        return res.status(200).json(state).end();
    }
    catch (error) {
        next(error);
    }
});
exports.getStateById = getStateById;
const getStateByCountry = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { tipo_pais_id } = req.params;
        if (!tipo_pais_id) {
            return res.status(400).json({
                message: "tipo_pais_id is required"
            }).end();
        }
        const state = yield state_model_1.default.findAll({
            order: [
                ["departamento", "ASC"]
            ],
            where: {
                tipo_pais_id
            }
        });
        return res.status(200).json(state).end();
    }
    catch (error) {
        next(error);
    }
});
exports.getStateByCountry = getStateByCountry;
