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
exports.getEntitiesList = exports.getEntityById = exports.getEntities = void 0;
const entity_model_1 = __importDefault(require("../../models/patient-characterization/entity.model"));
const getEntities = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const entity = yield entity_model_1.default.findAll({
            order: [
                ["plan_id", "ASC"]
            ]
        });
        return res.status(200).json(entity).end();
    }
    catch (error) {
        next(error);
    }
});
exports.getEntities = getEntities;
const getEntityById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const entity = yield entity_model_1.default.findByPk(id);
        return res.status(200).json(entity).end();
    }
    catch (error) {
        next(error);
    }
});
exports.getEntityById = getEntityById;
const getEntitiesList = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { status } = req.params;
        const entity = yield entity_model_1.default.findAll({
            attributes: ['plan_id', 'plan_descripcion'],
            order: [
                ["plan_id", "ASC"]
            ],
            where: {
                estado: status
            }
        });
        return res.status(200).json(entity).end();
    }
    catch (error) {
        next(error);
    }
});
exports.getEntitiesList = getEntitiesList;
