"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../../database/database"));
const affiliate_type_id_model_1 = __importDefault(require("./affiliate_type_id.model"));
const affiliate_detail_model_1 = __importDefault(require("./affiliate_detail.model"));
const entity_model_1 = __importDefault(require("./entity.model"));
class Affiliate extends sequelize_1.Model {
}
Affiliate.init({
    eps_afiliacion_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    afiliado_tipo_id: {
        type: sequelize_1.DataTypes.CHAR(2),
        allowNull: false,
        unique: 'affiliate'
    },
    afiliado_id: {
        type: sequelize_1.DataTypes.STRING(34),
        allowNull: false,
        unique: 'affiliate'
    },
    eps_tipo_afiliado_id: {
        type: sequelize_1.DataTypes.CHAR(1),
        allowNull: false
    },
    fecha_afiliacion: {
        type: sequelize_1.DataTypes.DATEONLY,
        allowNull: false
    },
    eps_anterior: {
        type: sequelize_1.DataTypes.STRING(6),
        allowNull: true
    },
    semanas_cotizadas_eps_anterior: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    semanas_cotizadas: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    estado_afiliado_id: {
        type: sequelize_1.DataTypes.CHAR(2),
        allowNull: false
    },
    subestado_afiliado_id: {
        type: sequelize_1.DataTypes.CHAR(3),
        allowNull: false
    },
    observaciones: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false
    },
    usuario_registro: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    fecha_registro: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    usuario_ultima_actualizacion: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true
    },
    accion_ultima_actualizacion: {
        type: sequelize_1.DataTypes.STRING(80),
        allowNull: false
    },
    fecha_ultima_actualizacion: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true
    },
    plan_atencion: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true
    },
    tipo_afiliado_atencion: {
        type: sequelize_1.DataTypes.CHAR(2),
        allowNull: true
    },
    rango_afiliado_atencion: {
        type: sequelize_1.DataTypes.STRING(40),
        allowNull: true
    },
    eps_punto_atencion_id: {
        type: sequelize_1.DataTypes.CHAR(5),
        allowNull: true
    },
    fecha_vencimiento: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true
    },
    fecha_afiliacion_eps_anterior: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true
    }
}, {
    timestamps: false,
    sequelize: database_1.default,
    tableName: 'eps_afiliados',
    paranoid: true
});
Affiliate.hasMany(affiliate_type_id_model_1.default, {
    foreignKey: 'afiliado_tipo_id',
    as: 'eps_afiliados_tipos_id'
});
Affiliate.hasOne(affiliate_detail_model_1.default, {
    foreignKey: 'afiliado_id',
    sourceKey: 'afiliado_id'
});
Affiliate.hasOne(affiliate_detail_model_1.default, {
    foreignKey: 'afiliado_tipo_id',
    sourceKey: 'afiliado_tipo_id'
});
Affiliate.hasOne(entity_model_1.default, {
    foreignKey: 'plan_id',
    sourceKey: 'plan_atencion'
});
exports.default = Affiliate;
