"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.affiliateSchema = exports.createAffiliate = exports.getAffiliateByIdentification = exports.getAffiliateById = exports.getAffiliates = void 0;
const affiliate_model_1 = __importDefault(require("../../models/patient-characterization/affiliate.model"));
const affiliate_detail_model_1 = __importDefault(require("../../models/patient-characterization/affiliate_detail.model"));
const gender_model_1 = __importDefault(require("../../models/patient-characterization/gender.model"));
const gender_identity_model_1 = __importDefault(require("../../models/patient-characterization/gender_identity.model"));
const commune_controller_1 = __importDefault(require("../../controllers/patient-characterization/commune.controller"));
const Joi = __importStar(require("joi"));
const patient_model_1 = __importDefault(require("../../models/patient-characterization/patient.model"));
const neighborhood_controller_1 = __importDefault(require("./neighborhood.controller"));
const characterization_model_1 = __importDefault(require("../../models/patient-characterization/characterization.model"));
const getAffiliates = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const affiliate = yield affiliate_model_1.default.findAll();
        return res.status(200).json(affiliate).end();
    }
    catch (error) {
        next(error);
    }
});
exports.getAffiliates = getAffiliates;
const getAffiliateById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const affiliate = yield affiliate_model_1.default.findByPk(id);
        return res.status(200).json(affiliate).end();
    }
    catch (error) {
        next(error);
    }
});
exports.getAffiliateById = getAffiliateById;
const getAffiliateByIdentification = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { afiliado_tipo_id, afiliado_id } = req.params;
    try {
        if (!afiliado_tipo_id) {
            return res.status(400).json({
                message: "Afiliado Tipo ID is required"
            }).end();
        }
        if (!afiliado_id) {
            return res.status(400).json({
                message: "Afiliado ID is required"
            }).end();
        }
        const affiliate = yield affiliate_model_1.default.findOne({
            include: {
                model: affiliate_detail_model_1.default,
                where: {
                    afiliado_tipo_id,
                    afiliado_id
                },
                include: [
                    {
                        model: gender_model_1.default
                    },
                    {
                        model: gender_identity_model_1.default
                    }
                ]
            },
            where: {
                afiliado_tipo_id,
                afiliado_id,
                estado_afiliado_id: 'AC'
            }
        });
        return res.status(200).json(affiliate).end();
    }
    catch (error) {
        next(error);
    }
});
exports.getAffiliateByIdentification = getAffiliateByIdentification;
const createAffiliate = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const result = exports.affiliateSchema.validate(body);
    const { value, error } = result;
    const valid = error == null;
    if (!valid) {
        res.status(422).json({
            message: 'Invalid request',
            data: error
        });
    }
    else {
        try {
            const afiliado_tipo_id = body.affiliate_type_id;
            const afiliado_id = body.affiliate_id;
            const is_affiliate = yield affiliate_model_1.default.findOne({
                where: {
                    afiliado_tipo_id,
                    afiliado_id
                }
            });
            const is_patient = yield patient_model_1.default.findOne({
                where: {
                    afiliado_tipo_id,
                    afiliado_id
                }
            });
            let affiliateController = new AffiliateController(body);
            yield affiliateController.getCommuneData();
            yield affiliateController.getNeighborhood();
            if (is_affiliate) {
                let param = affiliateController.setDataAffiliate();
                const detail = yield affiliate_detail_model_1.default.findOne({
                    where: {
                        afiliado_tipo_id,
                        afiliado_id
                    }
                });
                yield detail.update(param);
            }
            if (is_patient) {
                let param = affiliateController.setDataPatient();
                yield is_patient.update(param);
            }
            if (is_affiliate || is_patient) {
                let param = affiliateController.setDataCharacterization();
                yield characterization_model_1.default.create(param);
            }
            return res.json({
                status: 200, message: 'Data save successful'
            });
        }
        catch (error) {
            return res.json({
                status: 400, message: next(error)
            });
        }
    }
    return false;
});
exports.createAffiliate = createAffiliate;
exports.affiliateSchema = Joi.object().keys({
    affiliate_type_id: Joi.string().required().min(2).max(3),
    affiliate_id: Joi.string().required().min(1).max(34),
    first_name: Joi.string().required().max(20),
    middle_name: Joi.string().optional().allow(null).allow(''),
    firt_surname: Joi.string().required().max(20),
    second_surname: Joi.string().optional().allow(null).allow('').max(30),
    date_birth: Joi.date(),
    age: Joi.number().allow(null).allow('').optional(),
    gender: Joi.string().required().max(1),
    sexual_orientation: Joi.string().required().max(1),
    gender_identity: Joi.string().required().max(1),
    entity: Joi.number().allow(null).allow(''),
    race: Joi.string().allow(null).allow('').max(1),
    ethnicity: Joi.string().allow(null).allow('').max(1),
    marital_status: Joi.string().required().max(1),
    phone: Joi.string().allow(null).allow('').max(30),
    cell_phone: Joi.string().allow(null).allow('').max(30),
    email: Joi.string().required().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    education_level: Joi.string().allow(null).allow(''),
    occupation: Joi.string().allow(null).allow('').max(4),
    type_house: Joi.string().allow(null).allow(''),
    zone_residence: Joi.string().allow(null).allow('').max(1),
    state_residence: Joi.string().allow(null).allow('').max(4),
    city_residence: Joi.string().allow(null).allow('').max(4),
    social_class: Joi.string().allow(null).allow('').max(2),
    commune: Joi.string().allow(null).allow(''),
    neighborhood: Joi.string().allow(null).allow(''),
    textDireccion: Joi.string().allow(null).allow(''),
    zona_residencia: Joi.string().allow(null).allow('').max(1),
    tipo_comuna_id: Joi.string().allow(null).allow(''),
    tipo_pais_id: Joi.string().allow(null).allow(''),
    tipo_dpto_id: Joi.string().allow(null).allow(''),
    tipo_mpio_id: Joi.string().allow(null).allow(''),
});
class AffiliateController {
    constructor(data) {
        this.data = data;
    }
    setDataAffiliate() {
        return {
            afiliado_tipo_id: this.data.affiliate_type_id,
            afiliado_id: this.data.affiliate_id,
            primer_apellido: this.data.firt_surname,
            segundo_apellido: this.data.second_surname,
            primer_nombre: this.data.first_name,
            segundo_nombre: this.data.middle_name,
            fecha_nacimiento: this.data.date_birth,
            tipo_sexo_id: this.data.gender,
            tipo_pais_id: this.data.tipo_pais_id,
            tipo_dpto_id: this.data.tipo_dpto_id,
            tipo_mpio_id: this.data.tipo_mpio_id,
            zona_residencia: this.data.zona_residencia,
            direccion_residencia: this.data.textDireccion,
            telefono_residencia: this.data.phone,
            telefono_movil: this.data.cell_phone,
            email: this.data.email,
            tipo_comuna_id: this.data.communeDetail.tipo_comuna_id,
            identidad_genero_id: this.data.gender_identity,
            pert_etnica_id: this.data.ethnicity,
            tipo_raza_id: this.data.race,
            tipo_estado_civil_id: this.data.marital_status,
            ocupacion_id: this.data.occupation,
            plan_atencion: this.data.entity
        };
    }
    getCommuneData() {
        return __awaiter(this, void 0, void 0, function* () {
            let splitCommune = this.data.commune.split('-');
            let communeController = new commune_controller_1.default();
            let detail = yield communeController.getCommune(splitCommune[0], splitCommune[1], splitCommune[2], splitCommune[3]);
            this.data.communeDetail = detail;
        });
    }
    getNeighborhood() {
        return __awaiter(this, void 0, void 0, function* () {
            let splitNeighborhood = this.data.neighborhood.split('-');
            let neigborhoodController = new neighborhood_controller_1.default();
            let detail = yield neigborhoodController.getNeighBorHood(splitNeighborhood[0], splitNeighborhood[1], splitNeighborhood[2], splitNeighborhood[3], splitNeighborhood[4]);
            this.data.neighborhoodDetail = detail;
        });
    }
    setDataPatient() {
        return {
            afiliado_tipo_id: this.data.affiliate_type_id,
            afiliado_id: this.data.affiliate_id,
            primer_apellido: this.data.firt_surname,
            segundo_apellido: this.data.second_surname,
            primer_nombre: this.data.first_name,
            segundo_nombre: this.data.middle_name,
            fecha_nacimiento: this.data.date_birth,
            tipo_sexo_id: this.data.gender,
            tipo_pais_id: this.data.tipo_pais_id,
            tipo_dpto_id: this.data.tipo_dpto_id,
            tipo_mpio_id: this.data.tipo_mpio_id,
            zona_residencia: this.data.zona_residencia,
            direccion_residencia: this.data.textDireccion,
            telefono_residencia: this.data.phone,
            telefono_movil: this.data.cell_phone,
            email: this.data.email,
            tipo_comuna_id: this.data.communeDetail.tipo_comuna_id,
            tipo_barrio_id: this.data.neighborhoodDetail.tipo_barrio_id,
            tipo_estrato_id: this.data.social_class,
            identidad_genero_id: this.data.gender_identity,
            pert_etnica_id: this.data.ethnicity,
            tipo_estado_civil_id: this.data.marital_status,
            ocupacion_id: this.data.occupation
        };
    }
    setDataCharacterization() {
        return {
            afiliado_tipo_id: this.data.affiliate_type_id,
            date: Date.now(),
            afiliado_id: this.data.affiliate_id,
            plan_id: this.data.entity,
            tipo_sexo_id: this.data.gender,
            orientacion_sexual_id: this.data.sexual_orientation,
            identidad_genero_id: this.data.gender_identity,
            tipo_raza_id: this.data.race,
            pert_etnica_id: this.data.ethnicity,
            tipo_estado_civil_id: this.data.marital_status,
            nivel_id: this.data.education_level,
            ocupacion_id: this.data.occupation,
            tipo_vivienda_id: this.data.type_house,
        };
    }
}
