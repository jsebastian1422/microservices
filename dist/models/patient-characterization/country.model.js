"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../../database/database"));
class Country extends sequelize_1.Model {
}
Country.init({
    tipo_pais_id: {
        type: sequelize_1.DataTypes.CHAR(4),
        primaryKey: true,
        allowNull: false
    },
    bloqueado_edicion: {
        type: sequelize_1.DataTypes.CHAR(1),
        allowNull: false
    },
    pais: {
        type: sequelize_1.DataTypes.STRING(60),
        allowNull: true,
    },
    valor: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: false,
    },
    cod_iso3: {
        type: sequelize_1.DataTypes.STRING(3),
        allowNull: false,
    }
}, {
    timestamps: false,
    sequelize: database_1.default,
    tableName: 'tipo_pais',
    paranoid: true
});
exports.default = Country;
