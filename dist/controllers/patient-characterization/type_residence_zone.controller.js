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
exports.getTypeResidenceZonesById = exports.getTypeResidenceZones = void 0;
const type_residence_zone_model_1 = __importDefault(require("../../models/patient-characterization/type_residence_zone.model"));
const getTypeResidenceZones = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const typeResidenceZone = yield type_residence_zone_model_1.default.findAll({
            order: [
                ["descripcion", "ASC"]
            ]
        });
        return res.status(200).json(typeResidenceZone).end();
    }
    catch (error) {
        next(error);
    }
});
exports.getTypeResidenceZones = getTypeResidenceZones;
const getTypeResidenceZonesById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const typeResidenceZone = yield type_residence_zone_model_1.default.findByPk(id);
        return res.status(200).json(typeResidenceZone).end();
    }
    catch (error) {
        next(error);
    }
});
exports.getTypeResidenceZonesById = getTypeResidenceZonesById;
