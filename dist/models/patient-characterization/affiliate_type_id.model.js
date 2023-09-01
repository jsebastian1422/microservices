"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../../database/database"));
class AffiliateTypeId extends sequelize_1.Model {
}
AffiliateTypeId.init({
    afiliado_tipo_id: {
        type: sequelize_1.DataTypes.CHAR(2),
        allowNull: false,
        primaryKey: true
    },
    descripcion_tipo_id: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    tipo_id_tercero: {
        type: sequelize_1.DataTypes.CHAR(3)
    }
}, {
    timestamps: false,
    sequelize: database_1.default,
    tableName: 'eps_afiliados_tipos_id',
    paranoid: true
});
exports.default = AffiliateTypeId;
