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
exports.getMaritalStatusById = exports.getMaritalStatus = void 0;
const marital_status_model_1 = __importDefault(require("../../models/patient-characterization/marital_status.model"));
const getMaritalStatus = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const maritalStatus = yield marital_status_model_1.default.findAll({
            order: [
                ["indice_de_orden", "ASC"]
            ]
        });
        return res.status(200).json(maritalStatus).end();
    }
    catch (error) {
        next(error);
    }
});
exports.getMaritalStatus = getMaritalStatus;
const getMaritalStatusById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const maritalStatus = yield marital_status_model_1.default.findByPk(id);
        return res.status(200).json(maritalStatus).end();
    }
    catch (error) {
        next(error);
    }
});
exports.getMaritalStatusById = getMaritalStatusById;
