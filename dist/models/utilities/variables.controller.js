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
exports.getVariablesByVariable = exports.getVariablesByModule = exports.getVariables = void 0;
const variables_model_1 = __importDefault(require("./variables.model"));
const getVariables = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const variables = yield variables_model_1.default.findAll({});
        return res.status(200).json(variables).end();
    }
    catch (error) {
        next(error);
    }
});
exports.getVariables = getVariables;
const getVariablesByModule = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { modulo, modulo_tipo, variable } = req.params;
        if (!variable) {
            return res.status(400).json({
                message: "variable ID is required"
            }).end();
        }
        const variables = yield variables_model_1.default.findOne({
            where: {
                modulo,
                modulo_tipo,
                variable
            }
        });
        return res.status(200).json(variables).end();
    }
    catch (error) {
        next(error);
    }
});
exports.getVariablesByModule = getVariablesByModule;
const getVariablesByVariable = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { variable } = req.params;
        if (!variable) {
            return res.status(400).json({
                message: "variable ID is required"
            }).end();
        }
        const variables = yield variables_model_1.default.findOne({
            where: {
                variable
            }
        });
        return res.status(200).json(variables).end();
    }
    catch (error) {
        next(error);
    }
});
exports.getVariablesByVariable = getVariablesByVariable;
