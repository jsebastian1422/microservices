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
exports.getEthnicityById = exports.getEthicities = void 0;
const ethnicity_model_1 = __importDefault(require("../../models/patient-characterization/ethnicity.model"));
const getEthicities = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ethnicity = yield ethnicity_model_1.default.findAll({
            order: [
                ["descripcion", "ASC"]
            ]
        });
        return res.status(200).json(ethnicity).end();
    }
    catch (error) {
        next(error);
    }
});
exports.getEthicities = getEthicities;
const getEthnicityById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const ethnicity = yield ethnicity_model_1.default.findByPk(id);
        return res.status(200).json(ethnicity).end();
    }
    catch (error) {
        next(error);
    }
});
exports.getEthnicityById = getEthnicityById;
